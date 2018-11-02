import React, { Component } from "react";

export default class Input extends Component {
	state= {
		value: ""
	};


	handleChange = e => {
		this.setState ({value: e.target.value});
	};


	handleKeyPress = e => {
		if (e.key !== "Enter") return;

		const { onSubmitEditing } = this.props;
		const { value } = this.state;

		if (!value) return; // don't submit if empty

		onSubmitEditing(value);
		this.setState({value: ""});
	};


	render() {
		const { placeholder } =this.props;
		const  { value } =this.state;

		return (
			<input
				style={styles.input}
				type={"text"}
				value={value}
				placeholder={placeholder}
				onChange={this.handleChange}
				onKeyPress={this.handleKeyPress}
			/>
		);
	}
}


const style = {
	input: {
		fontSize: "100%",
		padding:15,
		borderWith:0
	}
};