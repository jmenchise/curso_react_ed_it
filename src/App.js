import{ Provider } from 'react-redux'
import Counter from './components/Counter';
import store from './redux/store';
import UserData from './components/UserData';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Counter />
        <UserData />
      </div>
    </Provider>
  );
}

export default App;
