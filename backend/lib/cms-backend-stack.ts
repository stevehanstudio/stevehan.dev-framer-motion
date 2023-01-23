// import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs'
import { Stack, StackProps } from 'aws-cdk-lib'
// import * as sqs from 'aws-cdk-lib/aws-sqs';
// import { aws_lambda } from 'aws-cdk-lib'
// import { Code, Function, Runtime } from 'aws-cdk-lib/aws-lambda'
import { NodejsFunction } from 'aws-cdk-lib/aws-lambda-nodejs'
import { LambdaIntegration, RestApi } from 'aws-cdk-lib/aws-apigateway'
import { join } from 'path'
import { GenericTable } from '../infrastructure/GenericTable'

export class CmsBackendStack extends Stack {
	private projectsApi = new RestApi(this, 'ProjectsApi')
	// private api = new RestApi(this, 'ProjectsApi')
	private projectsTable = new GenericTable(this, {
		tableName: 'ProjectsTable',
		// primaryKey: 'id',
		primaryKey: 'id',
		batchWriteLambdaPath: 'BatchWrite',
		// createLambdaPath: 'Create',
		readLambdaPath: 'Read',
	})

	constructor(scope: Construct, id: string, props?: StackProps) {
		super(scope, id, props)

		// const projectsLambda = new Function(this, 'projectsLambda', {
		//   runtime: Runtime.NODEJS_18_X,
		//   code: Code.fromAsset(join(__dirname, '..', 'services', 'projects')),
		//   handler: 'projects.main'
		// })
		// The code that defines your stack goes here

		// const helloLambdaNodeJS = new NodejsFunction(this, 'helloLambdaNodeJs', {
		const projectsLambda = new NodejsFunction(this, 'projectsLambda', {
			// const projectsLambda = new NodejsFunction(this, 'helloLambdaNodeJs', {
			// entry: join(__dirname, '..', 'services', 'ProjectsTable', 'Create.ts'),
			entry: join(__dirname, '..', 'services', 'ProjectsTable', 'BatchWrite.ts'),
			handler: 'handler',
		})
		// const projectsLambdaIntegration = new LambdaIntegration(projectsLambda)
		// const projectsLambdaResource = this.api.root.addResource('projects')
		// projectsLambdaResource.addMethod('GET', projectsLambdaIntegration)

		// Projects API integrations
		// const projectResource = this.projectsApi.root.addResource('project')
		const projectsResource = this.projectsApi.root.addResource('projects')
		projectsResource.addMethod(
			'POST',
			this.projectsTable.batchWriteLambdaIntegration
		)
		// projectResource.addMethod(
		// 	'POST',
		// 	this.projectsTable.createLambdaIntegration
		// )
		projectsResource.addMethod(
			'GET',
			this.projectsTable.readLambdaIntegration
		)
	}
}
