<template>
  <div>
    <div class="fs36 c_999 mt10 box-des mt15">
      首页：刷新可查看skeleton的效果
    </div>
    <div class="width10rem height10rem">
      <p>验证lib-flexible：</p>
    </div>
  </div>
</template>
<script>
  import {Group, XInput, XButton, Popup, TransferDom, PopupPicker} from 'vux'
  import DialogAlert from '../components/DialogAlert.vue'
  import DialogConfirm from '../components/DialogConfirm.vue'
  export default {
    directives: {
      TransferDom
    },
    components: {
      Group, XInput, XButton, Popup, PopupPicker, DialogAlert, DialogConfirm
    },
    data () {
      return {
      }
    },
    created () {
      // this.$store.commit('UPDATE_LOADING', true)
    },
    computed: {
    },
    watch: {
    },
    mounted () {
      // this.$store.commit('UPDATE_LOADING', true)
    },
    methods: {
      DialogConfirmCallBack () {}
    }
  }
</script>
<style lang="less" scoped>
  .width10rem{ width: 10rem; height: 10rem; background: #4C83FF;}
</style>



