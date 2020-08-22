// Field with adding the selected option to an independent hidden input with visible label

import React from 'react'
import {Field} from "react-final-form"
import Form from "react-bootstrap/Form"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import {FieldArray} from "react-final-form-arrays"
import FieldHidden from "../FieldHidden/FieldHidden"
import Button from "react-bootstrap/Button"
import FormGroupContent from "../FormGroupContent/FormGroupContent"
import {FormComponentType} from "../../types/types"
import { useFormState } from 'react-final-form'


const FieldROChildren: React.FC<FormComponentType> = (props) => {

	// Destructuring and process props
	const {options, ...rest} = props
	const [newOptions, setNewOptions] = React.useState(options)

	// Import Form values from state
	const { values } = useFormState()

	// Getting values from FieldArray component and filtering an options to remove already selected ones
	const childrenValues = values ? values[props.input.name+'Additional'] as Array<string> : undefined
	React.useEffect(() => {
		if (childrenValues && childrenValues.length && options) {
			// Removing selected options to create a new list of options
			setNewOptions(options.filter(item => -1 === childrenValues.indexOf(item.value)))
		} else if (options) {
			setNewOptions(options)
		}
	}, [childrenValues, options])


	// Adding hidden field with label from selected option
	const addField = () => {
		props.push(`${props.input.name}Additional`, props.input.value)
		clearOption()
	}

	// Clearing selected option in the current field
	const clearOption = () => {
		props.form.mutators.clear(props.input.name)
	}

	return (
		<Col xs="12">

			<Form.Group controlId={props.input.name} as={Row}>

				<FormGroupContent options={newOptions} {...rest} />

				<Col sm="4" md="3">
					<Button variant="black" size="lg" block onClick={addField} disabled={props.meta.error}>Add more</Button>
				</Col>

				{/* Rendering dynamically generated fields */}
				<FieldArray
					name={`${props.input.name}Additional`}
				>
					{({fields}) => fields.map((name, index) => (
						<Field
							name={name}
							component={FieldHidden}
							key={index}
							options={options}
							fields={fields}
							index={index}
						/>
					))}
				</FieldArray>

			</Form.Group>

		</Col>
	)
}

export default FieldROChildren