import { useDispatch, useSelector } from 'react-redux';
import { removeTodo, handleEditTodo } from '../store/todo/todoSlice';

const Todos = () => {
	const todos = useSelector((state) => state.todo.todos);
	const dispatch = useDispatch();

	return (
		<div>
			{todos.map((todo) => {
				return (
					<div key={todo.id}>
						{todo.text}
						<button
							className='bg-gray-400 mx-4 px-5 py-1'
							onClick={() => dispatch(handleEditTodo(todo))}
						>
							{'()'}
						</button>
						<button
							className='bg-gray-400 px-5 py-1'
							onClick={() => dispatch(removeTodo(todo.id))}
						>
							X
						</button>
					</div>
				);
			})}
		</div>
	);
};

export default Todos;
