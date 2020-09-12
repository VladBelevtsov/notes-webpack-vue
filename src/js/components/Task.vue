<template>
  <div class="task" >
    <div>
      <h3 class="task__title">{{data.title}}</h3>
      <p class="task__desc">{{data.desc}}</p>
    </div>
    <button @click="task_done()" class="task__done">X</button>
  </div>
</template>

<script>
export default {
  props: ['data'],
  methods: {
    task_done() {
      this.$emit('task_done')
    }
  }
}
</script>

<style lang="scss" scoped>
.task {
  width: 49%;
  border: 1px solid #EBEEF5;
  border-radius: 8px;
  padding: 14px 8px;
  position: relative;
  margin-bottom: 20px;

  .task__desc {
    font-size: 14px;
    color: #999;
    margin-top: .5rem;
  }

  .task__done {
    position: absolute;
    top: 14px;
    right: 8px;
    cursor: pointer;
    background-color: transparent;
    color: #444ce0;
  }
}

</style>
