import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, updateTodo, handleEditTodo } from '../store/todo/todoSlice';

const AddTodo = () => {
	const [input, setInput] = React.useState('');
	const selected = useSelector((state) => state.selectedTodo);
	const dispatch = useDispatch();

	const addTodoHandler = (e) => {
		e.preventDefault();
		if (selected) {
			dispatch(updateTodo({id: selected.id, text:input}));
            dispatch(handleEditTodo(null));
		} else dispatch(addTodo(input));
		setInput('');
	};

	React.useEffect(() => {
		if (selected) setInput(selected.text);
	}, [selected]);

	return (
		<div>
			<form onSubmit={addTodoHandler}>
				<input
					type='text'
					placeholder='Enter Todo..'
					value={input}
					onChange={(e) => setInput(e.target.value)}
				/>
				<button type='submit'>{selected ? 'Edit todo' : 'Add Todo'}</button>
			</form>
		</div>
	);
};

export default AddTodo;
