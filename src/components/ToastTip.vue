<!--公共提示-->
<template>
  <div>
    <div v-bind:class="[Tip.showError ? showClass : hideClass, 'tip_box tip_error fs28']">{{Tip.msg}}</div>
    <div v-bind:class="[Tip.showSuc ? showClass : hideClass, 'tip_box tip_suc fs28']">{{Tip.msg}}</div>
    <div class="tip_mask" v-show="Tip.showError || Tip.showSuc"></div>
  </div>
</template>
<script>
  import { mapState } from 'vuex'
  export default {
    data () {
      return {
        showClass: 'showClass',
        hideClass: 'hideClass'
      }
    },
    computed: {
      ...mapState([
        'Tip'
      ])
    },
    mounted () {
    },
    methods: {
    }
  }
</script>
<style lang="less" scoped>
  .tip_box {width:90%; position: fixed; z-index: 1001;transition:all 0.2s ease-out 0s; height: 0.8rem; line-height: 0.8rem; text-align: center; padding: 0 5%;}
  .tip_error{ background: #FFF4EB; color: #FE8B29;}
  .tip_suc{ background: #f0f9eb; color: #67c23a}
  .showClass{transform: translateY(0)}
  .hideClass{transform: translateY(-0.8rem)}
  .tip_mask{ position: fixed; left:0; top:0; right:0; bottom: 0; z-index: 1000;}
</style>
