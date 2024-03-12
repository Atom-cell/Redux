import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../store/counter/counterSlice';
import { RootState } from '../store/store';


const Counter = () => {
	const value:number = useSelector((state: RootState) => state.counter.value);
	const dispatch = useDispatch();
	return (
		<div className='flex flex-col w-2/4 items-center'>
			Counter: {value}
			<div className='flex space-x-10'>
            <button onClick={() => dispatch(increment())} className='bg-slate-400 px-4 text-xl'>+</button>
			<button onClick={() => dispatch(decrement())} className='bg-slate-400 px-4 text-xl'> - </button>
            </div>
		</div>
	);
};

export default Counter;
