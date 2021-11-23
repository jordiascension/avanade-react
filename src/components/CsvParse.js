import React, { Component } from 'react';
import Papa from 'papaparse';
import file from './BTC-USD.csv'

class CsvParse extends Component {

    constructor(props) {
    // Call super class
    super(props);
    
    this.state = {
      data: []
    };
    // Bind this to function updateData (This eliminates the error)
    this.updateData = this.updateData.bind(this);
  }

  componentWillMount() {

    // Your parse code, but not seperated in a function
    //var csvFilePath = new LocalFileData("./BTC-USD.csv");
    Papa.parse(file, {
      header: true,
      download: true,
      skipEmptyLines: true,
      // Here this is also available. So we can call our custom class method
      complete: this.updateData
    });
  }

  updateData(result) {
    const data = result.data;
    alert(JSON.stringify(data));
    // Here this is available and we can call this.setState (since it's binded in the constructor)
    this.setState({data: result.data});
  }

  render() {
    return (
      <div>
        <table style={{minWidth: 650, borderCollapse: 'separate',
                       borderSpacing: '0px 4px', border: '1px solid black'}}>
          <tr>
            <th>Date</th>
            <th>Open</th>
            <th>Low</th>
            <th>Close</th>
            <th>Volume</th>
          </tr>
          {this.state.data.map(item => (
            <tr>
              <td>{item.Date}</td>
              <td>{item.Open}</td>
              <td>{item.Low}</td>
              <td>{item.Close}</td>
              <td>{item.Volume}</td>
            </tr>
          ))}
        </table>
      </div>
    );
  }
}

export default CsvParse;