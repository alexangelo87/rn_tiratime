import React, {Component} from 'react';
import Time from '../components/Time';

class TimeView extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <Time navigator={this.props.navigation} />;
  }
}

export default TimeView;
