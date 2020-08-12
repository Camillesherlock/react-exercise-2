import React, { Component } from 'react';
import './App.scss';
import WHeader from './component/WHeader';
import Commodit from './component/Commodit';

class App extends Component {
  state = {
    data: [],
    carNum: 0,
  };

  url = 'http://localhost:3000/products';

  async componentDidMount() {
    const resultPromise = await fetch(this.url);
    const data = await resultPromise.json();
    this.setState({
      data: data,
    });
  }

  // eslint-disable-next-line no-unused-vars
  async componentDidUpdate(prevProps, prevState, snapshot) {}

  render() {
    return (
      <main>
        <div id="header" className="bg-primary col-md-12">
          <div className="col-md-3">
            <h2>Store</h2>
          </div>
          <div id="car" className="col-md-9">
            <WHeader carNum={this.state.carNum}></WHeader>
          </div>
        </div>
        <div id="body" className="col-md-12">
          <Commodit
            mobiles={this.state.data}
            type="iPhone"
            method={this.AddToCar}
          ></Commodit>
          <Commodit
            mobiles={this.state.data}
            type="HUAWEI"
            method={this.AddToCar}
          ></Commodit>
        </div>
      </main>
    );
  }

  AddToCar = () => {
    this.setState({ carNum: this.state.carNum + 1 });
  };
}

export default App;
