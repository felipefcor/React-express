import React, { Component } from 'react'
immport { react } from 'react-dom'

class CounterButton extends Component{

	state= {count: 0}

	handleClick = () => {
		const {count} = this.state

		this.setState({count: count + 1})
	}


	render() {
		const {count} = this.setState

		return (

			<button type='button' onClick={this.handleClick}>
			Click HERE to increment: {count}
			</button>
		)

	}
}

render(<CounterButton />, document.querySelector('#app'))