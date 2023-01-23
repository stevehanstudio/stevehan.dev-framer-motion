// import * as cdk from 'aws-cdk-lib';
// import { Template } from 'aws-cdk-lib/assertions';
// import * as CmsBackend from '../lib/cms-backend-stack';

// import { handler } from '../Services/ProjectsTable/Create'
import { handler } from '../Services/ProjectsTable/Read'

// example test. To run these tests, uncomment this file along with the
// example resource in lib/cms-backend-stack.ts
// test('SQS Queue Created', () => {
//   const app = new cdk.App();
//     // WHEN
//   const stack = new CmsBackend.CmsBackendStack(app, 'MyTestStack');
//     // THEN
//   const template = Template.fromStack(stack);

//   template.hasResourceProperties('AWS::SQS::Queue', {
//     VisibilityTimeout: 300
//   });
// });

// const event = {
//   body: {
//     id: "100"
//   }
// }

// handler(event as any, {} as any)
const result = handler({} as any, {} as any).then((apiResult) => {
  const items = JSON.parse(apiResult.body)
  console.log(123)
})

