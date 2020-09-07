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

class ReadyComponent extends Component {
  render() {
    return (
      <div>
        <div>This is my other component.</div>

        <div className="CenteringComponent">
        <table class="table">
		  <thead>
		    <tr>
		      <th colspan="2" className="Intel"><img src={IntelLogo} width="150px" alt="motherboard"/></th>
		    </tr>
		  </thead>
		  <tbody>
		    <tr>
		      <th><img src={CPULogo} width="60px" alt="CPU"/></th>
		      <td>Core i7-9700k upto 4.90 GHz</td>
		    </tr>
		    <tr>
		      <th><img src={MotherboardLogo} width="60px" alt="AMD"/></th>
		      <td>Gigabyte - Z390 Aorus Pro Wifi</td>
		    </tr>
		    <tr>
		      <th><img src={RAMLogo} width="60px" alt="RAM"/></th>
		      <td>8x2 - Trident Z RGB 16GB 3000 MHz</td>
		    </tr>
		    <tr>
		      <th><img src={GraphicsCardLogo} width="60px" alt="Graphics"/></th>
		      <td>RTX2080 Super - ZOTAC Amp 8GB</td>
		    </tr>
		    <tr>
		      <th><img src={PowerSupplyLogo} width="60px" alt="Power Supply"/></th>
		      <td>Corsair - CV 750</td>
		    </tr>
		    <tr>
		      <th><img src={CabinetLogo} width="60px" alt="Cabinet"/></th>
		      <td>CM - MB530 ARGB</td>
		    </tr>
		    <tr>
		      <th><img src={StorageHDDLogo} width="60px" alt="HDD"/></th>
		      <td>Seagate - Barracuda 1TB</td>
		    </tr>
		    <tr>
		      <th><img src={StorageSSDLogo} width="60px" alt="SSD"/></th>
		      <td>Samsung nNVMe 240 GB</td>
		    </tr>
		  </tbody>
		</table>
		</div>

		<br />

		<div className="CenteringComponent">
        <table class="table">
		  <thead>
		    <tr>
		      <th colspan="4" className="AMD"><img src={AMDLogo} width="200px" alt="motherboard"/></th>
		    </tr>
		  </thead>
		  <tbody>
		    <tr>
		      <th><img src={CPULogo} width="60px" alt="CPU"/></th>
		      <td>Threadripper - 3970X Upto 4.5Ghz</td>
			  <th><img src={MotherboardLogo} width="60px" alt="AMD"/></th>
		      <td>MSI - TRX40 Creator</td>
		    </tr>
		    <tr>
		      <th><img src={MotherboardLogo} width="60px" alt="AMD"/></th>
		      <td>MSI - TRX40 Creator</td>
		      <th><img src={RAMLogo} width="60px" alt="RAM"/></th>
		      <td>16x4 - Corsair Veng 64 GB 3000</td>
		    </tr>
		    <tr>
		      <th><img src={GraphicsCardLogo} width="60px" alt="Graphics"/></th>
		      <td>SLI - RTX Titan (2 nos.)</td>
		      <th><img src={PowerSupplyLogo} width="60px" alt="Power Supply"/></th>
		      <td>Corsair - AX1600i</td>
		    </tr>
		    <tr>
		      <th><img src={CabinetLogo} width="60px" alt="Cabinet"/></th>
		      <td>TT - View 71</td>
			  <th><img src={StorageHDDLogo} width="60px" alt="HDD"/></th>
		      <td>Seagate - Barracuda 4TB</td>
		    </tr>
		    <tr>
		      <th><img src={StorageSSDLogo} width="60px" alt="SSD"/></th>
		      <td>Gigabyte - 1 TB Gen4 M.2</td>
		      <th><img src={StorageSSDLogo} width="60px" alt="SSD"/></th>
		      <td>Gigabyte - 1 TB Gen4 M.2</td>
		    </tr>
		    <tr>
		      <th colspan="4">Description
		      <p>32 cores provide an astonishing 64 threads of simultaneous multi-processing power.</p>
		      <p>while 80MB of combined cache and vast I/O from the enthusiast-grade AMD X399 platform</p>
		      <p>work together to enable the world’s most powerful desktop processor.</p></th>
		    </tr>
		  </tbody>
		</table>
		</div>


        <div className="CenteringComponent">
        <table class="table">
		  <thead>
		    <tr>
		      <th colspan="4" className="Intel"><img src={IntelLogo} width="150px" alt="motherboard"/></th>
		    </tr>
		  </thead>
		  <tbody>
		    <tr>
		      <th><img src={CPULogo} width="60px" alt="CPU"/></th>
		      <td>Core i7-9700k upto 4.90 GHz</td>
		      <td>1</td>
		      <td>Rs. 13000</td>
		    </tr>
		    <tr>
		      <th><img src={MotherboardLogo} width="60px" alt="AMD"/></th>
		      <td>Gigabyte - Z390 Aorus Pro Wifi</td>
		      <td>1</td>
		      <td>Rs. 11000</td>
		    </tr>
		    <tr>
		      <th><img src={RAMLogo} width="60px" alt="RAM"/></th>
		      <td>8x2 - Trident Z RGB 16GB 3000 MHz</td>
		      <td>1</td>
		      <td>Rs. 5000</td>
		    </tr>
		    <tr>
		      <th><img src={GraphicsCardLogo} width="60px" alt="Graphics"/></th>
		      <td>RTX2080 Super - ZOTAC Amp 8GB</td>
		      <td>1</td>
		      <td>Rs. 15000</td>
		    </tr>
		    <tr>
		      <th><img src={PowerSupplyLogo} width="60px" alt="Power Supply"/></th>
		      <td>Corsair - CV 750</td>
		      <td>1</td>
		      <td>Rs. 3000</td>
		    </tr>
		    <tr>
		      <th><img src={CabinetLogo} width="60px" alt="Cabinet"/></th>
		      <td>CM - MB530 ARGB</td>
			  <td>1</td>
		      <td>Rs. 4000</td>
		    </tr>
		    <tr>
		      <th><img src={StorageHDDLogo} width="60px" alt="HDD"/></th>
		      <td>Seagate - Barracuda 1TB</td>
		      <td>1</td>
		      <td>Rs. 3000</td>
		    </tr>
		    <tr>
		      <th><img src={StorageSSDLogo} width="60px" alt="SSD"/></th>
		      <td>Samsung nNVMe 240 GB</td>
		      <td>1</td>
		      <td>Rs. 6000</td>
		    </tr>
		  </tbody>
		</table>
		</div>



      </div>
    );
  }
}

export default ReadyComponent;