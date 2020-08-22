import React from 'react'
import {Field} from "react-final-form"
import {FormComponentType, IFormField} from "../../types/types"
import Form from "react-bootstrap/Form"
import Row from "react-bootstrap/Row"
import FormGroupContent from "../FormGroupContent/FormGroupContent"
import Col from "react-bootstrap/Col"

type PropsType = {
	formField: IFormField
}

const Field2Inputs: React.FC<FormComponentType & PropsType> = ({ input, meta, ...props }) => {
	return (
		<Col xs="12">
			<Form.Group controlId={input.name} as={Row}>

				<FormGroupContent input={input} meta={meta} {...props} />

				<Col xs="8" md="6">
					<Field
						component={props.addOn}
						name={props.formField.name}
						label={props.formField.label}
						type={props.formField.type}
						options={props.formField.options}
					/>
				</Col>

			</Form.Group>

		</Col>
		)
}

export default Field2Inputs