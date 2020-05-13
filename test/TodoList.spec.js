import { shallowMount,mount } from 'vue-test-utils'
import TodoList from '../src/components/TodoList.vue';
import expect from 'expect';
import stores from "../src/store.js";

import Vuex from "vuex";

import VueLocalStorage from 'vue-localstorage'
import Vue from 'vue'
Vue.use(VueLocalStorage);
Vue.use(Vuex);

const store = new Vuex.Store(stores);


describe ('TodoList' , () =>{
    let wrapper;

    beforeEach(() => { 
    	wrapper = mount(TodoList,{
    		store
    	})
    });

    it('Lifecycle method' , () =>{
       expect(wrapper.vm.todos).not.toBe([]);
    });


});