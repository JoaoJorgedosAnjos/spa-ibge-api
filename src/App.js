import './App.css';
import { State2 } from "./components/input/input"
import { Provider } from 'react-redux';
//import store from './store/store';
import { store } from "./store/store"

function App() {

  return (
    <Provider store={store}>
      <div >
        Olá
        <State2 />
      </div>
    </Provider>
  );
}

export default App;