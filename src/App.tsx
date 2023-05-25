import { useState } from 'react';
import './App.css';
import Counter from './components/counter/Counter';
import { IUser } from './components/counter/interface';

function App() {


  const saludar = () => console.log('Hola Joan');


  const sumar = (n1: number, n2: number) => n1 + n2

  const [counter, setCounter] = useState<number | string | IUser>({});

  const [users, setUsers] = useState<IUser[]>([]);


  const arr = [1, 2, 3];

  const jugadoresDeFutbol = [
    {
      nombre: 'Lionel',
      apellido: 'Messi'
    },
    {
      nombre: 'Enzo',
      apellido: 'Fernandez'
    }
  ]


  return (
    <div className="App">
      <Counter jugadoresDeFutbol={jugadoresDeFutbol} sumar={sumar} saludar={saludar} arr={arr} />
    </div>
  );
}

export default App;
