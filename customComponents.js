import React, { Component } from 'react'
import { render } from 'react-dom'

class Card extends Component {
	render() {
		const style = {
			margin: 20,
			padding: 20,
			color: 'white',
			backgroundColor: this.props.color,
		}
		
		return (
			<div style={style}>
				{this.props.children}
			</div>
			)		
	}
}


const node = document.querySelector('#app')
const element =(
	<div>
		<Card color={'skyblue'}>Card 1 </Card>
		<Card color={'steelblue'}>Card 2</Card>
	</div>

)

render(element, node)