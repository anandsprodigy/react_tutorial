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


}