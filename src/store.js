import Vue from "vue";
import Vuex from "vuex";
 
Vue.use(Vuex);
 
export const store = new Vuex.Store({
 state: {
 	doneTodoList:[],
 	listName: "My to-dos"
 },
 getters: {},
 mutations: {
 	addDoneTodo(state, todo){
 		state.doneTodoList.push(todo);
 	}
 },
 actions: {}
});