import { normalize, Schema, arrayOf} from 'normalizr'

let test = new Schema('test', {
	idAttribute: 'test'
})

export const testchema = test