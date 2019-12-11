import React, {Component} from 'react';
import Resultado from '../components/Resultado';

class ResultadoView extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <Resultado navigator={this.props.navigation} />;
  }
}

export default ResultadoView;
