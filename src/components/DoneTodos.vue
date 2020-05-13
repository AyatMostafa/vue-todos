<template>
  <div class="continer" id="continer">
    <div class="row mb-3" style="margin:10% 10%">
        <div class="col-12 col-sm-10 col-lg-6">
        	<ul class="list-group">
            	<li class="d-flex align-items-center list-group-item" v-for="(done, index) in DoneList" :key="index"> {{ done }} </li>
        	</ul>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    DoneList(){
        return this.$store.state.doneTodoList
    }
  }
};
</script>

<style lang="scss" scoped></style>