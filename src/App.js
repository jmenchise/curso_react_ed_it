import Counter from './components/Counter/Counter';
import Products from './views/products';

function App() {

  return (
    <div className="App text-danger">
      <Counter initialName={'Estela'}/>
      <Counter initialNumber={5} initialName={'Jorge'}/>
      <Counter initialNumber={10} initialName={'Estela'}/>
      <Counter initialNumber={15} initialName={'Franchesca'}/>
      <Counter initialNumber={50}/>
      {/* <Products/> */}
    </div>
  );
}

export default App;
