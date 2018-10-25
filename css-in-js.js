import React, { Component } from 'react'
import { render } from 'react-dom'
import styled from 'stye-components'

const randomColor = () => '#' + Math.random().toString(16).substr(-6)

const Card =styled.div`
	padding: 20px;
	text-align:center;
	color: white;
	background-colo: ${props => props.color};
` 

const Container = styled.div`
	padding: 20px;
`

class App extends Component {
	state = {
		color:'skyblue'
	}


randomizeColor = () => this.setState({color:randomColor()})

render() {
	const {color} =this.setState
	return(
		<Container>
			<Card color={color}>
				<input
				type={'button'}
				value={'Randomize Color'}
				onClick={this.randomizeColor}
				/>
			</Card>
		</Container>	

		)
	}
}

render(<App />, document.querySelector('#app'))