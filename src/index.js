import React from 'react'
import { render } from 'react-dom'
import { DataFlowManContainerDiv } from './components/DataFlowMainContainerDiv'

window.React = React

render(
	<DataFlowManContainerDiv />,
	document.getElementById('react-container')
)