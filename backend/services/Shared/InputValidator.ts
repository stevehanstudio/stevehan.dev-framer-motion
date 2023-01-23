import { ProjectType } from './Model'

export class MissingFieldError extends Error {}

export function validateAsProjectEntry(arg: any) {
	if (!(arg as ProjectType).title) {
		throw new MissingFieldError('Value for title required!')
	}
	if (!(arg as ProjectType).subtitle) {
		throw new MissingFieldError('Value for subtitle required!')
	}
	if (!(arg as ProjectType).image) {
		throw new MissingFieldError('Value for image required!')
	}
  	if (!(arg as ProjectType).skills) {
		throw new MissingFieldError('Value for skills required!')
	}
}

// export function validateAsSpaceEntry(arg: any) {
// 	if (!(arg as Space).name) {
// 		throw new MissingFieldError('Value for name required!')
// 	}
// 	if (!(arg as Space).location) {
// 		throw new MissingFieldError('Value for location required!')
// 	}
// 	if (!(arg as Space).spaceId) {
// 		throw new MissingFieldError('Value for spaceId required!')
// 	}
// }
