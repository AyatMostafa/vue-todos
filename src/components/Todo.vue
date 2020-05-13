<template>
  <li id="postslink" class="d-flex align-items-center list-group-item">
    <button 
      class="btn border-0 flex-grow-1 text-left shadow-none" id="completeButton"
      :class="{ completed }"
      @click="$emit('on-toggle')"
      v-if="!isEditing"
    >
      <span id="spanDescription">{{ description }}</span>
    </button>
    <form v-else class="flex-grow-1" @submit.prevent="finishEditing()">
      <input
        type="text"
        class="form-control"
        v-model="newTodoDescription"
        @blur="finishEditing()"
        ref="newTodo"
      />
    </form>
    <button
      @click="startEditing()" id="editButtons" class="btn btn-outline-primary border-0 ml-2">
      <span class="fa fa-edit"></span>
    </button>
    <button @click="$emit('on-delete')" class="btn btn-outline-danger border-0">
      <span class="fa fa-trash"></span>
    </button>
    <button @click="done()" class="btn btn-outline-success border-0">
      <span class="fa fa-check"></span>
    </button>
  </li>
</template>

<script>
export default {
  data() {
    return {
      isEditing: false,
      newTodoDescription: ""
    };
  },
  props: {
    description: String,
    completed: Boolean
  },
  methods: {
    startEditing() {
      if (this.isEditing) {
        this.finishEditing();
      } else {
        this.newTodoDescription = this.description;
        this.isEditing = true;
        this.$nextTick(() => this.$refs.newTodo.focus());
      }
    },
    finishEditing() {
      this.isEditing = false;
      this.$emit("on-edit", this.newTodoDescription);
    },
    done(){
      this.$store.commit("addDoneTodo",this.description);
      this.$emit('on-delete');
    }
  }
};
</script>

<style lang="scss" scoped>
.completed {
  text-decoration: line-through;
}
</style>
