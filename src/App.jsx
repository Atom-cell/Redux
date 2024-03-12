import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";
import Counter from "./components/Counter";

const App = () => {
	return (
		<div>
			<AddTodo/>			
			<Todos/>
			<Counter/>
		</div>
	);
};

export default App;
