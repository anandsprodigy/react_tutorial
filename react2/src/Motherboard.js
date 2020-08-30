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
				<tr>Type: {this.props.type}</tr>
				<tr>Slot: {this.props.slot}</tr>
				</table>
			</>
		);
	}
}

export default Motherboard;