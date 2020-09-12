// JS
import './js/'

// SCSS
import './assets/scss/main.scss'

// CSS (example)
// import './assets/css/main.css'

// Vue.js
window.Vue = require('vue')

// Vue components (for use in html)
Vue.component('Task', require('./js/components/Task.vue').default)

// Vue init
const app = new Vue({
  el: '#app',
  data: () => ({
    new_task: {
      title: '',
      desc: ''
    },
    tasks: [
     {
       title: 'First note',
       desc: 'Description for first note'
     },
     {
       title: 'Secont note',
       desc: 'Description for secont note'
     },
     {
       title: 'Third note',
       desc: 'Description for third note'
     },
   ]
  }),
  methods: {
    delete_task(id) {
      this.tasks.splice(id, 1)
    },
    add_task() {
      if (this.new_task.title != '') {
        this.tasks.push({
          title: this.new_task.title,
          desc: this.new_task.desc
        });
        this.new_task.title = '',
        this.new_task.desc = ''
      }
    }
  }
})
