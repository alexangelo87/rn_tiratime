import React, {Component} from 'react';
import HomeSorteioNome from '../components/HomeSorteioNome';

class HomeSorteioNomeView extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <HomeSorteioNome navigator={this.props.navigation} />;
  }
}

export default HomeSorteioNomeView;
