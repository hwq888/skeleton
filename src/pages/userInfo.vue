<template>
  <div>
    <div class="fs26 c_red">
      <a href="#/home">首页</a>
      <a href="#/userInfo">个人信息</a>
    </div>
    <div class="fs36 c_999 mt10 box-des mt15">
      个人信息：验证解决引：结合lib-flexible、px2rem实现移动端适配，完美解决第三方ui库样式变小问题
    </div>
    <div class="mt15">
      <group>
        <calendar :readonly="readonly" v-model="demo1" title="一般使用" disable-past placeholder="placeholder" @on-show="log('show')" @on-hide="log('hide')"></calendar>
      </group>

      <div style="padding:15px;">
        <x-button type="primary" @click.native="readonly = !readonly">切换readonly</x-button>
      </div>

      <group>
        <calendar v-model="demo2" title="设置时间为今天" disable-past></calendar>
      </group>

      <group>
        <calendar @on-change="onChange" v-model="demo3" title="禁止选中未来时间" disable-future></calendar>
      </group>

      <group>
        <calendar @on-change="onChange" v-model="demo4" title="显示popup头部" show-popup-header popup-header-title="请选择" disable-future></calendar>
      </group>

      <group>
        <calendar placeholder="placeholder" @on-change="onChange" v-model="demo5" title="多选" popup-header-title="请选择" disable-future></calendar>
      </group>

      <group>
        <calendar disable-weekend :display-format="displayFormat" placeholder="请选择日期" @on-change="onChange" v-model="demo6" title="格式化表单值" popup-header-title="请选择"></calendar>
        <cell-box align-items="flex-start">
          <span class="selected-days">value:</span>
          <div>
            <badge v-for="day in demo6" :text="day" :key="day" style="margin-right:10px;"></badge>
          </div>
        </cell-box>
      </group>
      <div style="padding:15px;">
        <x-button type="primary" @click.native="demo6 = []">清空值</x-button>
      </div>
    </div>
  </div>
</template>
<script>
  import { Group, Calendar, Cell, Badge, CellBox, XButton } from 'vux'
  export default {
    components: {
      Calendar,
      Group,
      Cell,
      Badge,
      CellBox,
      XButton
    },
    data () {
      return {
        readonly: false,
        demo1: '',
        demo2: 'TODAY',
        demo3: 'TODAY',
        demo4: 'TODAY',
        demo5: [],
        demo6: [],
        displayFormat (value, type) {
          if (type === 'string') {
            return value
          } else {
            return value.length ? (value.length + ' days') : ''
          }
        }
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
    },
    methods: {
      log (str) {
        console.log(str)
      },
      onChange (val) {
        console.log('on change', val)
      }
    }
  }
</script>

<style scoped>
  .selected-days {
    color: #999;
    width: 90px;
  }
</style>



