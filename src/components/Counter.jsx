import { useSelector , useDispatch} from 'react-redux'
import { counterReset, counterRest, counterSum, counterSumNum, setCounterNum } from '../redux/actions/counterActions';

const Counter = () => {

    const  { count, inputNum }  = useSelector(state => state.counter);
    const dispatch = useDispatch();
    const handleChange = e => dispatch(setCounterNum(Number(e.target.value)));
    const handleClick = (number) => {
        dispatch(counterSumNum(number));
        dispatch(setCounterNum(0));
    }
    
    return (
        <>
            <h1>Counter: {count}</h1>
            <div>
                <label htmlFor='countNumber'>Indique el número a sumar:</label>
                <input onChange={handleChange} type='number' name='countNumber'id='countNumber'/>
            </div>
            <div>
                <button onClick={() => dispatch(counterSum())}>Sumar</button>
                <button onClick={() => handleClick(inputNum)}>Sumar: {inputNum}</button>
                <button onClick={() => dispatch(counterSumNum(5))}>Sumar 5</button>
                <button onClick={() => dispatch(counterRest())}>Restar</button>
                <button onClick={() => dispatch(counterReset())}>Resetear</button> 
            </div>
        </>
    )
}

export default Counter