import todoList from "./components/TodoList.vue";
import doneList from "./components/DoneTodos.vue";


export default
[
	{ path: '/', component:todoList},
	{ path: "/done", component:doneList}
]