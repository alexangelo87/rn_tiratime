import React, {Component} from 'react';
import Home from '../components/Home';

class HomeView extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <Home navigator={this.props.navigation} />;
  }
}

export default HomeView;
