import React from 'react'
import {Field, Form} from 'react-final-form'
import Button from 'react-bootstrap/Button'
import {formFields} from '../../formFields/formFields'
import {customValidator} from '../../common/validator'
import arrayMutators from 'final-form-arrays'
import {Mutator} from "final-form"
import FormHeader from "../FormHeader/FormHeader"
import FormState from '../FormState/FormState'

type PropsType = {}

const FormWizard: React.FC<PropsType> = () => {

	// Form wizard step
	const [currentStep, setCurrentStep] = React.useState(0)

	// Steps total
	const formWizardLength = formFields.length

	// Next step of the form wizard with steps length check
	const nextStep = () => {
		setCurrentStep(Math.min(currentStep + 1, formWizardLength - 1))
	}

	// Previous step of the form wizard with steps length check
	const previousStep = () => {
		setCurrentStep(Math.max(currentStep - 1, 0))
	}

	// Check, is this the last step?
	const isLastStep = currentStep === formWizardLength - 1

	// Form submit
	const onSubmit = (values: object) => {
		window.alert(JSON.stringify(values, null, 2))
	}

	const handleSubmit = (values: object) => {

		const isLastStep = (currentStep) === formWizardLength - 1
		if (isLastStep) {
			return onSubmit(values)
		} else {
			nextStep()
		}
	}

	// Cleaning function for selected value (see Form mutators)
	const clear: Mutator = ([name], state, {changeValue}) => {
		changeValue(state, name, () => undefined)
	}

	return (
		<>

			<Form
				onSubmit={handleSubmit}
				validate={values => customValidator(values, formFields[currentStep])}
				mutators={{
					...arrayMutators,
					clear
				}}
				subscription={{ submitting: true }}
			>

				{({handleSubmit, submitting, form: {mutators: {push}}, form}) => (
					<form onSubmit={handleSubmit} className="pb-45">

						<FormHeader
							currentStep={currentStep}
							formWizardLength={formWizardLength}
							previousStep={previousStep}
						/>

						<div className="row">
							{formFields[currentStep].map((formField, index) =>
								formField.component ?
									<Field
										component={formField.component}
										key={formField.name}
										name={formField.name}
										label={formField.label}
										labelInfo={formField.labelInfo}
										type={formField.type}
										options={formField.options}
										addOn={formField.addOn}
										push={push}
										form={form}
										index={index}
										currentStep={currentStep}
									/> : null
							)}
						</div>
						<div className="d-flex">
							{currentStep > 0 && (
								<Button type="button" variant="dark" size="lg" onClick={previousStep}>
									« Previous
								</Button>
							)}
							{!isLastStep &&
							<Button type="submit" variant="dark" className="ml-auto" size="lg">Next »</Button>}
							{isLastStep && (
								<Button type="submit" disabled={submitting} className="ml-auto" size="lg">
									Submit
								</Button>
							)}
						</div>

						<FormState />

					</form>
				)}

			</Form>

		</>
	)
}

export default FormWizard