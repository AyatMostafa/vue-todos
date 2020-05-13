import Vue from "vue";
import App from "./App.vue";
import VueRouter from 'vue-router';
import Routes from './routes';
import VueLocalStorage from 'vue-localstorage';
import {store} from "./store";



Vue.config.productionTip = false;

Vue.use(VueRouter);
Vue.use(VueLocalStorage);

new Vue({
  localStorage: {
    todosList:{
    	type:Object,
    	default:[
	        { description: "Do the dishes", completed: false },
	        { description: "Take out the trash", completed: false },
	        { description: "Finish doing laundry", completed: false },
	    ],
    },
  }

})


const router = new VueRouter({
  routes:Routes,
  mode:'history'
});

new Vue({	
  store: store,
  render: h => h(App),
  router:router,  
}).$mount("#app");
