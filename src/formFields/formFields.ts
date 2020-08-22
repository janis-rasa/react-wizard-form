import { IFormField } from '../types/types'
import * as yup from 'yup'
import FieldSimple from '../components/FieldSimple/FieldSimple'
import FieldROChildren from "../components/FieldROChildren/FieldROChildren"
import AddOnSelect from "../components/AddOnSelect/AddOnSelect";
import Field2InputsContainer from "../components/Field2Inputs/Field2InputsContainer";

export const formFields: Array<Array<IFormField>> = [
	[
		{
			label: 'First name',
			name: 'userFirstName',
			type: 'text',
			component: FieldSimple,
			yupObject: (yup.string().trim().required('First name is required')),
		},
		{
			label: 'Last name',
			name: 'userLastName',
			type: 'text',
			component: FieldSimple,
			yupObject: (yup.string().trim().required('Last name is required')),
		},
		{
			label: 'Languages you speak',
			name: 'userLanguages',
			type: 'select',
			component: FieldROChildren,
			options: [{ value: '', label: 'Please choose...' }, { value: 'EN', label: 'English' }, { value: 'DE', label: 'German' }, { value: 'FR', label: 'French' }],
			yupObject: (yup.string().trim().required('Please select language')),
		},
		{
			label: 'Hourly rate',
			labelInfo: {title: 'Popover title', message: 'This is an example of a label description'},
			name: 'userSalary',
			type: 'number',
			component: Field2InputsContainer,
			addOn: AddOnSelect,
			yupObject: (yup.number().required('Hourly rate is required').round('round').positive('Hourly rate must be greater than 0').typeError('Hourly rate must be a number')),
		},
		{
			label: 'Currency',
			name: 'userCurrency',
			type: 'select',
			options: [{ value: '', label: 'Please choose...' }, { value: 'USD', label: '$ \u2013 US dollar' }, { value: 'EUR', label: '\u20AC \u2013 Euro' }],
			component: null,
			yupObject: (yup.string().trim().required('Currency is required')),
		},
	],
	[
		{
			label: 'Email',
			name: 'userEmail',
			type: 'email',
			component: FieldSimple,
			yupObject: (yup.string().trim().required('Email is required').email('Enter a valid email')),
		},
	],
	[
		{
			label: 'I agree to the processing of personal data',
			name: 'gdpr',
			type: 'checkbox',
			component: FieldSimple,
			yupObject: (yup.boolean().required('Agreement is required').oneOf([true], 'Agreement is required')),
		}
	]
]
