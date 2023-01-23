import { CmsBackendStack } from '../lib/cms-backend-stack'
import { App } from 'aws-cdk-lib'

const app = new App()
new CmsBackendStack(app, 'Projects', {
  stackName: 'ProjectsStack'
})
