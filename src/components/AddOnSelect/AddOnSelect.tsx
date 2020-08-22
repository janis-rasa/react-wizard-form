import React from 'react'
import {FormComponentType} from "../../types/types"
import Form from "react-bootstrap/Form"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import FormControlHelper from "../FormControlHelper/FormControlHelper"


const AddOnSelect: React.FC<FormComponentType> = ({ input, meta, ...props }) => {
	return (
		<Col xs="12">
			<Form.Group controlId={input.name} as={Row}>

				<Form.Label className="sr-only">{props.label}</Form.Label>

				<FormControlHelper input={input} meta={meta} {...props} />

				<Form.Control.Feedback type="invalid">
					<span>{meta.error}</span>
				</Form.Control.Feedback>

			</Form.Group>

		</Col>
	)
}

export default AddOnSelect