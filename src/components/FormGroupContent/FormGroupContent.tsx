// Standard block for fields with label and input

import React from 'react'
import Form from "react-bootstrap/Form"
import Col from "react-bootstrap/Col"
import FormControlHelper from "../FormControlHelper/FormControlHelper"
import {FormComponentType} from "../../types/types"
import PopOverInfo from "../PopOverInfo/PopOverInfo"

const FormGroupContent: React.FC<FormComponentType> = (props) => {
	return (
		<>
			{props.input.type !== 'checkbox' && props.input.type !== 'radio' ?
				<Form.Label column xs="12" md="3" className="col-form-label-lg">
					{props.label}
					{props.labelInfo ? <PopOverInfo labelInfo={props.labelInfo}/> : null}
				</Form.Label>
				: <Col xs="12" md="3" />
			}

			<Col>
				<FormControlHelper {...props} />

				{props.input.type !== 'checkbox' && props.input.type !== 'radio' ?
					<Form.Control.Feedback type="invalid">
						<span>{props.meta.error}</span>
					</Form.Control.Feedback>
					: null
				}

			</Col>
		</>
	)
}

export default FormGroupContent