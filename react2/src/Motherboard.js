import React from 'react';


class Motherboard extends React.Component{

	constructor(props){
		super(props);
		this.state={
			manufacturer=props.manufacturer,
			core=props.core,
			RAM=props.RAM
		};
	}

	render(){
		return(
			<>
			<h1>{this.manufacturer}</h1>
			<h2>{this.core}</h2>
			<h2>{this.RAM}</h2>
			</>
		);
	}


}