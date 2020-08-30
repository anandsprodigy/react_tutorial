import React from 'react';


class Motherboard extends React.Component{

	constructor(props){
		super(props);
	}

	render(){
		return(
			<>
			<h1>Manufacturer: {this.props.manufacturer}</h1>
				<table border="1px">
				<tr>
					<td>Cores: {this.props.core}</td>
				</tr>
				<tr>
					<td>RAM: {this.props.RAM}</td>
				</tr>
				<tr>
					<td>Type: {this.props.type}</td>
				</tr>
				<tr>
					<td>Slot: {this.props.slot}</td>
				</tr>
				</table>
				<a href="https://create-react-app.dev/docs/getting-started/">React Tutorials</a>
			</>
		);
	}
}

export default Motherboard;