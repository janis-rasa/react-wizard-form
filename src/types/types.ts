import React from "react"
import { FieldRenderProps } from "react-final-form"
import { MixedSchema, StringSchema, NumberSchema, BooleanSchema } from "yup"
import {Mutators} from "final-form-arrays";
import {FormApi, FormState} from "final-form";

export type YupSchemaType = MixedSchema | StringSchema | NumberSchema | BooleanSchema

export type FormComponentType = FieldRenderProps<FormValuesType> & Mutators & FormState<FormValuesType> & IFormField & FieldPropsType

export type PopOverType = {
	title: string
	message: string
}

// Form fields
export type IFormField = {
	label: string
	labelInfo?: PopOverType
	name: string
	type: string
	options?: Array<SelectOptionsType>
	yupObject: YupSchemaType
	component: React.FC<FormComponentType>  | null
	addOn?: React.FC<FormComponentType>
}

export type FormValuesType = string | number

export type SelectOptionsType = {
	value: string
	label: string
}

export type FieldPropsType = {
	currentStep: number
	form: FormApi<FormValuesType, object>
}
