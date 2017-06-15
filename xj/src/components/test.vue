<template>
  <div class="test">
    <div class="test_header">
      <p>标题是：{{title}}</p>
    </div>

    <button class="btn" @click="changeTitle">
      <p>改变标题</p>
    </button>

  </div>
</template>

<script>
  import { mapState , mapGetters , mapActions } from 'vuex'
  export default {
    computed: {
      ...mapGetters([
//getters.js
          'title'
      ])
    },
    methods: {
      ...mapActions([
//actions.js
          'changeTitle'
      ])
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
@import '../assets/css/test.less';
.test_header{
  position: relative;
  height: 1rem;
  .bj(red);
  p{
    line-height: 1rem;
    text-align: center;
    .ztys;
  }
}

.btn{
  text-align: left;
  margin: .2rem;
  background: red;
  .bk(.04rem,yellow);
  p{
   .midlab(.3rem,@white);
    padding: .2rem;
  }
}

</style>
