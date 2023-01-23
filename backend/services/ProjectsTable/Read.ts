import { DynamoDB } from 'aws-sdk'
import {
	APIGatewayProxyEvent,
	APIGatewayProxyResult,
	Context,
} from 'aws-lambda'
// import { MissingFieldError, validateAsSpaceEntry } from '../Shared/InputValidator'
import { generateRandomId, getEventBody, addCorsHeader } from '../Shared/Utils'
// import { validateAsProjectEntry } from '../Shared/InputValidator'

const TABLE_NAME = process.env.TABLE_NAME
const dbClient = new DynamoDB.DocumentClient()

async function handler(
	event: APIGatewayProxyEvent,
	context: Context
): Promise<APIGatewayProxyResult> {
	const result: APIGatewayProxyResult = {
		statusCode: 200,
		body: 'Hello from DynamoDb',
	}
	addCorsHeader(result)
	// const item =
	// 	typeof event.body == 'object' ? event.body : JSON.parse(event.body)

	try {

		const queryResponse = await dbClient
			.scan({
				TableName: TABLE_NAME!,
				// TableName: 'ProjectsTable',
			})
			.promise()
		// result.body = JSON.stringify({
		// 	id: item.id,
		// })
  	result.body = JSON.stringify(queryResponse)
	} catch (error) {
		console.log('error:', error)
    result.body = JSON.stringify({error: error})
	}

	return result
}

export { handler }
