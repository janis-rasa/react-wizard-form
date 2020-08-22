import React from 'react'
import OverlayTrigger from "react-bootstrap/OverlayTrigger"
import Popover from "react-bootstrap/Popover"
import {PopOverType} from "../../types/types"

type PropsType = {
	labelInfo: PopOverType
}

const PopOverInfo: React.FC<PropsType> = (props) => {

	const popOverBlock = (
		<Popover id="popover-basic">
			<Popover.Title as="h3">{props.labelInfo.title}</Popover.Title>
			<Popover.Content>{props.labelInfo.message}</Popover.Content>
		</Popover>
	)

	return (
		<OverlayTrigger trigger="click" placement="right" overlay={popOverBlock}>
			<button type="button" className="popover-info">i</button>
		</OverlayTrigger>
	)
}

export default PopOverInfo