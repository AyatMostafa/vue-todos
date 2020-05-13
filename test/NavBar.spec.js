import { shallowMount,mount, RouterLinkStub, createLocalVue,RouterLink } from 'vue-test-utils'
import NavBar from '../src/components/NavBar.vue';
import expect from 'expect';
import VueRouter from 'vue-router'


const localVue = createLocalVue();
localVue.use(VueRouter);


describe ('NavBar' , () =>{
    let wrapper;

    const router = new VueRouter({
      routes: [
        {
          path: '/done'
        }
      ]
    });
    beforeEach(() => { 
    	wrapper = mount(NavBar)
    });


    it('Todo link and Done todo link exist in navBar' , () =>{
       expect(wrapper.contains('#done')).toBe(true)
       expect(wrapper.contains('#todo')).toBe(true)
    });
    
});