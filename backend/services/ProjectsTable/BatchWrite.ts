import { DynamoDB } from 'aws-sdk'
import { APIGatewayProxyEvent, APIGatewayProxyResult,	Context } from 'aws-lambda'
import { generateRandomId, getEventBody, addCorsHeader } from '../Shared/Utils'
import { ProjectNotificationEvents } from 'aws-cdk-lib/aws-codebuild'
// import { ProjectType } from '../Shared/Model'
import projects from '../Shared/projects.json'

const TABLE_NAME = process.env.TABLE_NAME
const dbClient = new DynamoDB.DocumentClient()

async function handler(
	event: APIGatewayProxyEvent,
	context: Context
): Promise<APIGatewayProxyResult> {
	const result: APIGatewayProxyResult = {
		statusCode: 200,
		body: 'Successful batchWriting to DynamoDb',
	}
	addCorsHeader(result)
	try {
    // const items = [
    //   {id: "0"},
    //   {id: "1"}
    // ]
		// const items = getEventBody(event)
		// item.id = generateRandomId()
		// const item = generateRandomId()
		// const item = {
		// 	id: generateRandomId(),
		// }
		// validateAsSpaceEntry(item)
		// validateAsProjectEntry(item)

		const putRequests = projects.map((project, i) => {
			return {
				PutRequest: {
					Item: {
						id: i.toString(),
						...project
					}
				}
			}
		})

		console.log('putRequests', putRequests)

		const params = {

			RequestItems: {
				'ProjectsTable': putRequests
			}
		}

		console.log('params', params)

		// var params = {
		// 	RequestItems: {
		// 		'ProjectsTable': [
		// 			{
		// 				PutRequest: {
		// 					Item: {
		// 						KEY: { N: 'KEY_VALUE' },
		// 						ATTRIBUTE_1: { S: 'ATTRIBUTE_1_VALUE' },
		// 						ATTRIBUTE_2: { N: 'ATTRIBUTE_2_VALUE' },
		// 					},
		// 				},
		// 			},
		// 			{
		// 				PutRequest: {
		// 					Item: {
		// 						KEY: { N: 'KEY_VALUE' },
		// 						ATTRIBUTE_1: { S: 'ATTRIBUTE_1_VALUE' },
		// 						ATTRIBUTE_2: { N: 'ATTRIBUTE_2_VALUE' },
		// 					},
		// 				},
		// 			},
		// 		],
		// 	},
		// }

		await dbClient.batchWrite(params).promise()
		// result.body = JSON.stringify(data)

		// result.body = JSON.stringify(params)

		// await dbClient
		// 	.batchWrite({
		// 		// TableName: TABLE_NAME!,
		// 		TableName: 'ProjectsTable',
		// 		Items: items,
		// 	})
		// 	.promise()
		// result.body = JSON.stringify({
		// 	id: item.id,
		// })
	} catch (error) {
		console.log('error:', error)
		result.statusCode = 500
		result.body = JSON.stringify(error)
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

	return result
}

export { handler }
