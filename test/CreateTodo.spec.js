import { shallowMount,mount } from 'vue-test-utils'
import Create from '../src/components/CreateTodo.vue';
import expect from 'expect';


describe ('Create Todo' , () =>{
    let wrapper;

    beforeEach(() => { 
    	wrapper = mount(Create)
    });

    it('default of new todo' , () =>{
       expect(wrapper.vm.newTodo).toBe('')
     });

    it('Add new Todo' , () =>{
      const input = wrapper.find('input');
      input.element.value = "New Todo";
      input.trigger('input');
      expect(wrapper.vm.newTodo).toBe("New Todo");

      //expect(wrapper.emitted().on-new-todo).toBeTruthy();
      //expect(wrapper.emitted().on-new-todo[0]).toEqual(["New Todo"]);
     });

});