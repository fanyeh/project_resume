import React, { Component } from 'react';

class PersonInfoRow extends Component {
  render() {
    return (
      <React.Fragment>
        <tr className="bb b--gray personalInfoRow fw3">
          <th className="ttc pt3 w3 near-black f5">{this.props.header}</th>
          <td className="ttc pl4 gray pt3 w5 f5">{this.props.data}</td>
        </tr>
      </React.Fragment>
    );
  }
}

export default PersonInfoRow;
