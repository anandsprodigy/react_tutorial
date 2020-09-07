// Ready component is to diplay ready configurations of the PC
import React, { Component } from 'react';
import './ReadyComponent.css';
import IntelLogo from './images/logos/intel-header-logo.svg';
import AMDLogo from './images/logos/AMD.svg';
import MotherboardLogo from './images/logos/motherboard.png';
import CPULogo from './images/logos/cpu.png';
import GraphicsCardLogo from './images/logos/graphic-card.png';
import PowerSupplyLogo from './images/logos/power-supply.png';
import RAMLogo from './images/logos/ram.png';
import StorageSSDLogo from './images/logos/ssd.png';
import StorageHDDLogo from './images/logos/harddrive.png';
import CabinetLogo from './images/logos/hardware.png';
import axios from 'axios';

export default class ReadyComponentGET extends Component {
  state = {
    persons: []
  }

  componentDidMount() {
    axios.get(`http://localhost:3000/data.json`)
      .then(res => {
        const persons = res.data;
        this.setState({ persons });
      })
  }

  render() {
    return (
      <ul>
        { this.state.persons.map(person => <li>{person.SKU}</li>)}
      </ul>
    )
  }
}
