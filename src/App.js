import './App.css';
import EcommerceProvider from './context/EcommerceProvider';
import Routes from './routes'
function App() {
  return (
    <div className="App">
      <EcommerceProvider>
        <Routes/>
      </EcommerceProvider>
    </div>
  );
}

export default App;
