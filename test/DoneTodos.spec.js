import { shallowMount,mount } from 'vue-test-utils'
import DonoList from '../src/components/DoneTodos.vue';
import expect from 'expect';
import stores from "../src/store.js";

import Vuex from "vuex";

import VueLocalStorage from 'vue-localstorage'
import Vue from 'vue'
Vue.use(VueLocalStorage);
Vue.use(Vuex);

const store = new Vuex.Store(stores);


describe ('DonoList' , () =>{
    let wrapper;

    beforeEach(() => { 
    	wrapper = mount(DonoList,{
    		store
    	})
    });

    it('Default state' , () =>{
       expect(wrapper.contains('#continer')).toBe(true);
    });


});