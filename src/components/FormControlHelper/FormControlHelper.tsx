// React Bootstrap FormControl render helper

import React from 'react'
import Form from 'react-bootstrap/Form'
import { FormCheckType } from 'react-bootstrap/FormCheck'
import {FormComponentType} from '../../types/types'

const FormControlHelper: React.FC<FormComponentType> = ({ input, meta, ...props }) => {

	switch (input.type) {
		case 'checkbox':
		case 'radio':
		case 'switch':
			return (
				<Form.Check
					custom
					label={props.label}
					id={input.name}
					isInvalid={!!(meta.touched && meta.error)}
					isValid={meta.touched && !meta.error}
					className="custom-control-lg"
					feedback={meta.error}
					{...input}
					type={input.type as FormCheckType}
				/>
			)
		case 'select':
			return (
				<Form.Control
					custom
					as="select"
					size="lg"
					isInvalid={!!(meta.touched && meta.error)}
					isValid={meta.touched && !meta.error}
					className="option-hidden"
					{...input}
				>
					{props.options ? props.options.map((option) => <option key={option.value} value={option.value}>{option.label}</option>) : <option>No options</option>}
				</Form.Control>
			)
		default:
			return (
				<Form.Control
					size="lg"
					isInvalid={!!(meta.touched && meta.error)}
					isValid={meta.touched && !meta.error}
					{...input}
				/>
			)
	}

}

export default FormControlHelper