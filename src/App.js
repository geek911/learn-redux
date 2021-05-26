import { useSelector, useDispatch } from 'react-redux';
import decrement from './redux/actions/decrement';
import increment from './redux/actions/increment';

export default function App() {

    const count = useSelector(state => state.counter)
    const dispatch = useDispatch();

    return (
        <div>
            <h1>count : {count}</h1>
            <button onClick={() => dispatch(increment())}>increment</button>
            <button onClick={() => dispatch(decrement())}>decrement</button>
        </div>
    );
}