import React, {Component} from 'react'
import {render} from 'react-dom'

class Card extends Component {
	state= {
		width:null,
		height: null,
	}


	saveRef= (ref) => this.containerNode =ref

	measure() {
		const {clientWidth, clientHeigth} = this.containerNode

		this.setState({
			width:clientWidth.
			height: clientHeigth,
		})
	}

	componentDidMount(){
		this.measure()
	}

	componentDidUpdate(){
		this.measure()
	}

	shouldComponentUpdate(nextProps, nextState){
		return (
			this.state.width !== nextState.width ||
			this.state.height !== nextState.height
		)

	}

	render (){
		const {width, height} = this.setState

		return(
			<div
			style={styles.card}
			ref={this.saveRef}
			>

				 <h2 style={styles.subtitle}>My dimensions are:</h2>
        		{width && height && (
          		<h1 style={styles.title}>{width} x {height}</h1>
        		)}
     	 </div>
     	)
	}

}

	const styles = {
	  card: {
	    padding: 20,
	    margin: 20,
	    textAlign: 'center',
	    color: 'white',
	    backgroundColor: 'skyblue',
	    border: '1px solid rgba(0,0,0,0.15)',
	  },
	  title: {
	    fontSize: 18,
	    lineHeight: '24px',
	  },
	  subtitle: {
	    fontSize: 14,
	    lineHeight: '18px',
	  },
	}


render(<Card />, document.querySelector('#app'))

