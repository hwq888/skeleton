<template>
  <div id="app">
    <div class="fs56">
      <a href="#/home" class="c_red">home</a>
      <a href="#/vuxui" class="c_red">vux-ui</a>
      <a href="#/museui" class="c_red">muse-ui</a>
    </div>
    <Loading :show="AppState.loadingShow"></Loading>
    <router-view></router-view>
    <toast v-model="AppState.toastShow" type="text" :time="2000" :width="AppState.toastWidth" is-show-mask
           :text="AppState.toastMsg" @on-hide="onHide"></toast>
  </div>
</template>

<script>
  import Loading from './components/Loading.vue'
  import {mapState} from 'vuex'
  import {Toast} from 'vux'
  export default {
    components: {
      Loading, Toast
    },
    data () {
      return {
        className: ''
      }
    },
    computed: {
      ...mapState({
        AppState: state => state
      })
    },
    watch: {
      // AppState: {
      //   handler (curVal, oldVal) {
      //     if (curVal.showHeader) {
      //       this.className = 'scroll_hide_header_box'
      //     } else {
      //       this.className = 'scroll_show_header_box'
      //     }
      //   },
      //   deep: true
      // }
    },
    created () {
      // let userLoginInfo = {
      //   'stockUser': false,
      //   'account': '13000000041',
      //   'userId': '19915129068068864',
      //   'token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0eXAiOiJKV1QiLCJleHAiOjE1NDMwNTA5OTg5MDIsInBheWxvYWQiOiJ7XCJ1c2VySWRcIjoxOTkxNTEyOTA2ODA2ODg2NCxcImFjY291bnRcIjpcIjEzMDAwMDAwMDQxXCIsXCJjbGllbnRcIjoxLFwiaXNMb2NrZWRcIjowLFwiaXNCYW5uZWRcIjowLFwiYmFubmVkU3RhcnREYXRlXCI6bnVsbCxcImJhbm5lZEVuZERhdGVcIjpudWxsLFwicmVtYXJrXCI6XCJcIixcImlzRGVsZXRlZFwiOm51bGwsXCJzeW5jU3RhdHVzXCI6MCxcInN0b2NrVXNlclwiOmZhbHNlfSIsImFsZyI6IkhTMjU2In0.K5hX6rTY3L3EkE5kS2GdTSRXjy8Tr8uLQIaW4Pn3Ayk'
      // }
      // this.$Utils.setCookie('userLoginInfo', JSON.stringify(userLoginInfo), 8)
    },
    mounted () {
      let _this = this
      _this.$router.beforeEach(function (to, from, next) {
        _this.$store.commit('UPDATE_LOADING', true)
        next()
      })
      _this.$router.afterEach(function (to) {
        _this.$store.commit('UPDATE_LOADING', false)
      })
    },
    methods: {
      onHide () {
        this.$store.commit('CLEARSHOWTOAST')
      }
    }
  }
</script>

<style lang="less">
  @import '~vux/src/styles/reset.less';
</style>
