// Form header with steps tabs

import React from 'react'

type PropsType = {
	currentStep: number
	formWizardLength: number

	previousStep: () => void
}

const FormHeader: React.FC<PropsType> = (props) => {

	let items = []

	for (let i = 0; i < props.formWizardLength; i++) {
		switch (true) {
			case (i === props.currentStep):
				items.push(<span className="form-nav-item active" key={i}>{i+1}</span>)
				break
			case (i + 1 === props.currentStep):
				items.push(<button type="button" key={i} onClick={props.previousStep} className="form-nav-item prev">{i+1}</button>)
				break
			case (i - 1 === props.currentStep):
				items.push(<button type="submit" key={i} className="form-nav-item next">{i+1}</button>)
				break
			default:
				items.push(<span className="form-nav-item" key={i}>{i+1}</span>)
		}
	}

	return (
		<div className="form-nav mb-45 d-flex justify-content-center">
			{items}
		</div>
	)
}

export default FormHeader