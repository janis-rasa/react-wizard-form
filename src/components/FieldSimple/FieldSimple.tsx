// Standard field with label and input | select | checkbox

import React from 'react'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {FormComponentType} from '../../types/types'
import FormGroupContent from "../FormGroupContent/FormGroupContent"

const FieldSimple: React.FC<FormComponentType> = (props) => {

	return (
		<Col xs="12">
			<Form.Group controlId={props.input.name} as={Row}>

				<FormGroupContent {...props} />

			</Form.Group>

		</Col>
	)

}

export default FieldSimple