import * as yup from "yup"
import { setIn } from 'final-form'
import {IFormField} from "../types/types"
import {ObjectSchema, ValidationError} from "yup";

export const customValidator = (values: object, formFields: Array<IFormField>) => {

    const validationSchema = yup.object().shape(Object.fromEntries(
        formFields.map(formField => [formField.name, formField.yupObject])
    ))

	const validateFormValues = (schema: ObjectSchema) => async (values: object) => {
		try {
			await schema.validate(values, { abortEarly: false })
		} catch (error) {

			return error.inner.reduce((formError: object, innerError: ValidationError) => {
				return setIn(formError, innerError.path, innerError.message)
			}, {})
		}
	}

    return validateFormValues(validationSchema)(values)
}