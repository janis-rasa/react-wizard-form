// Independent hidden input with visible label for field with add button (FieldROChildren.tsx)

import React from 'react'
import Col from 'react-bootstrap/Col'
import {SelectOptionsType} from '../../types/types'
import Row from "react-bootstrap/Row"
import Button from "react-bootstrap/Button"
import {FieldRenderProps} from "react-final-form"
import {FieldArrayRenderProps} from "react-final-form-arrays"

type PropsType = {
	options: Array<SelectOptionsType>
	index: number
}

const FieldHidden: React.FC<FieldRenderProps<string> & FieldArrayRenderProps<string, HTMLInputElement> & PropsType> = ({ input, meta, ...props }) => {

	// Remove field from form
	const handleRemove = () => {
		props.fields.remove(props.index)
	}

	// Filter an Array of options to get its label
	const option: Array<SelectOptionsType> = props.options.filter(item => item.value === input.value)

	return (
		<Col xs="12">
			<Row>
				<Col xs="12" md="3" />
				<Col className="col-form-label col-form-label-lg pl-md-45">
					<input type="hidden" {...input}/>
					{option[0].label}
				</Col>
				<Col sm="4" md="3">
					<Button variant="outline-danger" className="border-0" size="lg" block onClick={handleRemove}>Remove</Button>
				</Col>

			</Row>
		</Col>
	)
}

export default FieldHidden