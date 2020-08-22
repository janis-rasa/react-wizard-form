import React from 'react'
import Header from '../Header/Header'
import FormWizard from '../FormWizard/FormWizard'
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

const App = () => {

	return (
		<>
			<Header/>
			<main className="container">
				<Row className="justify-content-center">
					<Col sm="11" md="10" lg="9" xl="8">
						<FormWizard/>
					</Col>
				</Row>
			</main>
		</>
	)
}

export default App
