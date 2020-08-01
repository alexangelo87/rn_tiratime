import React, {Component} from 'react';
import HomeSorteioNumero from '../components/HomeSorteioNumero';

class HomeSorteioNumeroView extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <HomeSorteioNumero navigator={this.props.navigation} />;
  }
}

export default HomeSorteioNumeroView;
