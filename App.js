import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import HomeSorteioNomeView from './views/HomeSorteioNomeView';
import HomeSorteioNumeroView from './views/HomeSorteioNumeroView';
import ResultadoView from './views/ResultadoView';
import TimeView from './views/TimeView';
import HomeView from './views/HomeView';

const App = createStackNavigator(
  {
    Home: HomeView,
    HomeSorteioNome: HomeSorteioNomeView,
    HomeSorteioNumero: HomeSorteioNumeroView,
    Resultado: ResultadoView,
    Time: TimeView,
  },
  {
    headerMode: 'none',
  },
);

export default createAppContainer(App);
