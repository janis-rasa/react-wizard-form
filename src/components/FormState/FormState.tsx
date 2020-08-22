import React from 'react'
import Jumbotron from "react-bootstrap/Jumbotron"
import {useFormState} from "react-final-form";

type PropsType = {}

const FormState: React.FC<PropsType> = () => {

	// Import values from state
	const { values } = useFormState()

	return (
		<Jumbotron className="mt-5">
			<p>Form state:</p>
			<pre>{JSON.stringify(values, null, 2)}</pre>
		</Jumbotron>
	)
}

export default FormState