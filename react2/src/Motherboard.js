import React from 'react';


class Motherboard extends React.Component{

	constructor(props){
		super(props);
	}

	render(){
		return(
			<>
			<h1>Manufacturer: {this.props.manufacturer}</h1>
			<h2>Cores: {this.props.core}</h2>
			<h2>RAM: {this.props.RAM}</h2>
			</>
		);
	}
}

export default Motherboard;