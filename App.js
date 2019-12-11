import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import HomeView from './views/HomeView';
import ResultadoView from './views/ResultadoView';

const App = createStackNavigator(
  {
    Home: HomeView,
    Resultado: ResultadoView,
  },
  {
    headerMode: 'none',
  },
);

export default createAppContainer(App);
