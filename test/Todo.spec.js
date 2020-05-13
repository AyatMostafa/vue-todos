import { shallowMount,mount } from 'vue-test-utils'
import Todo from '../src/components/Todo.vue';
import expect from 'expect';


describe ('Todo' , () =>{
    let wrapper;

    beforeEach(() => { 
    	wrapper = mount(Todo)
    });

    it('default values in todo' , () =>{
       expect(wrapper.vm.isEditing).toBe(false);
       expect(wrapper.vm.newTodoDescription).toBe('');
    });

    it('Edit existing Todo' , () =>{
      const editButton = wrapper.find('#editButtons');
      editButton.trigger('click');
      const input = wrapper.find('input');
      input.element.value = "Edit Todo";
      input.trigger('input');
      expect(wrapper.vm.newTodoDescription).toBe("Edit Todo");
     });

    it('get props values in todo and apper in span tag' , () =>{
      wrapper = mount(Todo,{
        propsData:{
          description:"Todo description"
        }
      })
      expect(wrapper.props().description).toBe("Todo description");
      expect(wrapper.find('#spanDescription').text()).toBe("Todo description");
    });

    it('set completed(prop value), will apper class completed ' , () =>{
      wrapper = mount(Todo,{
        propsData:{
          completed: true
        }
      })
      expect(wrapper.props().completed).toBe(true);
      expect(wrapper.find('#completeButton').classes()).toContain("completed");
    });


});