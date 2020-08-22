// Row with two inputs: data and data type

import React from 'react'
import {formFields} from '../../formFields/formFields'
import {FormComponentType} from "../../types/types"
import Field2Inputs from "./Field2Inputs"

const Field2InputsContainer: React.FC<FormComponentType> = ({ input, meta, ...props }) => {

	const nextIndex: number = props.index + 1

	return (
		<Field2Inputs input={input} meta={meta} formField={formFields[props.currentStep][nextIndex]} {...props}/>
	)
}

export default Field2InputsContainer