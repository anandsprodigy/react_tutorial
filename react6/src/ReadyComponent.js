// Ready component is to diplay ready configurations of the PC
import React, { Component } from 'react';
import IntelLogo from './images/logos/intel-header-logo.svg';
import AMDLogo from './images/logos/AMD.svg';


class ReadyComponent extends Component {
  render() {
    return (
      <div>
        <div>This is my other component.</div>

        <table class="table">
		  <thead>
		    <tr>
		      <th scope="col"><img src={IntelLogo} width="140" alt="Intel" style="background-color:#0071c5;"></th>
		      <th scope="col">AMD</th>
		    </tr>
		  </thead>
		  <tbody>
		    <tr>
		      <th><img src={IntelLogo} width="140" alt="Intel"></th>
		      <td>Core i7-9700k upto 4.90 GHz</td>
		    </tr>
		    <tr>
		      <th></th>
		      <td>Gigabyte - Z390 Aorus Pro Wifi</td>
		    </tr>
		    <tr>
		      <th></th>
		      <td>8x2 - Trident Z RGB 16GB 3000 MHz</td>
		    </tr>
		    <tr>
		      <th></th>
		      <td>RTX2080 Super - ZOTAC Amp 8GB</td>
		    </tr>
		    <tr>
		      <th></th>
		      <td>Corsair - CV 750</td>
		    </tr>
		    <tr>
		      <th></th>
		      <td>CM - MB530 ARGB</td>
		    </tr>
		    <tr>
		      <th></th>
		      <td>Seagate - Barracuda 1TB</td>
		    </tr>
		    <tr>
		      <th></th>
		      <td>None - None</td>
		    </tr>
		  </tbody>
		</table>

      </div>
    );
  }
}

export default ReadyComponent;