import { DynamoDB } from 'aws-sdk'
import { APIGatewayProxyEvent, APIGatewayProxyResult, Context } from 'aws-lambda'
// import { MissingFieldError, validateAsSpaceEntry } from '../Shared/InputValidator'
import { generateRandomId, getEventBody, addCorsHeader } from '../Shared/Utils'
// import { validateAsProjectEntry } from '../Shared/InputValidator'
// import { ProjectType } from '../Shared/Model'
// import projects  from '../Shared/projects.json'

const TABLE_NAME = process.env.TABLE_NAME
const dbClient = new DynamoDB.DocumentClient()

async function handler(event: APIGatewayProxyEvent, context: Context): Promise<APIGatewayProxyResult> {
  const result: APIGatewayProxyResult = {
    statusCode: 200,
    body: 'Hello from DynamoDb'
  }
  addCorsHeader(result)
	const item =
		typeof event.body == 'object' ? event.body : JSON.parse(event.body)


  try {
		// const item = getEventBody(event)
		// item.id = generateRandomId()
		// const item = generateRandomId()
    // const item = {
		// 	id: generateRandomId(),
		// }
		// validateAsSpaceEntry(item)
		// validateAsProjectEntry(item)

 		/**
     * Puts or deletes multiple items in one or more tables by delegating to AWS.DynamoDB.batchWriteItem().
     */
    // batchWrite(params: DocumentClient.BatchWriteItemInput, callback?: (err: AWSError, data: DocumentClient.BatchWriteItemOutput) => void): Request<DocumentClient.BatchWriteItemOutput, AWSError>;
		//docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_BatchWriteItem.html

			https: await dbClient
				.put({
					// TableName: TABLE_NAME!,
					TableName: 'ProjectsTable',
					Item: item,
				})
				.promise()
		// result.body = JSON.stringify({
		// 	id: item.id,
		// })
  } catch (error) {
    console.log('error:', error)
    // if (error instanceof MissingFieldError) {
		// 	result.statusCode = 403
		// 	result.body = error.message
		// } else if (error instanceof Error) {
		// 	result.statusCode = 500
		// 	result.body = error.message
		// } else if (typeof error === 'string') {
		// 	result.body = error.toUpperCase()
		// }
  }
	result.body = JSON.stringify(`Created item with id: ${item.id}`)

  return result
}

export { handler }