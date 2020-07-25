import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import HomeSorteioNomeView from './views/HomeSorteioNomeView';
import ResultadoView from './views/ResultadoView';
import TimeView from './views/TimeView';

const App = createStackNavigator(
  {
    HomeSorteioNome: HomeSorteioNomeView,
    Resultado: ResultadoView,
    Time: TimeView,
  },
  {
    headerMode: 'none',
  },
);

export default createAppContainer(App);
