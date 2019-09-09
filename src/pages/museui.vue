<template>
  <div>
    <div class="fs36 c_999 mt10 box-des mt15">
      museui：验证解决引：结合lib-flexible、px2rem实现移动端适配，完美解决第三方ui库样式变小问题
    </div>
    <div class="mt15">
      <div class="button-wrapper">
        <mu-button class="demo-button" color="primary" @click="alert()">Alert</mu-button>
        <mu-button class="demo-button" color="secondary" @click="confirm()">Confirm</mu-button>
        <mu-button class="demo-button" color="teal" @click="prompt()">Prompt</mu-button>
      </div>
      <div>
        <mu-alert color="success">
          this is success alert
        </mu-alert>
        <mu-alert color="warning">
          this is warning alert
        </mu-alert>
        <mu-alert color="info" >
          this is info alert
        </mu-alert>
        <mu-alert color="error" >
          this is error alert
        </mu-alert>
      </div>
    </div>
  </div>
</template>
<script>
  // import { Button, Select } from 'muse-ui'
  export default {
    components: {
    },
    data () {
      return {
      }
    },
    created () {
    },
    computed: {
    },
    watch: {
    },
    mounted () {
    },
    methods: {
      alert () {
        this.$alert('Hello World', '提示', {
          okLabel: '知道了'
        }).then(() => {
          this.$toast.message('提示信息')
        })
      },
      confirm () {
        this.$confirm('确定要删除？', '提示', {
          type: 'warning'
        }).then(({ result }) => {
          if (result) {
            this.$toast.message('点击了确定')
          } else {
            this.$toast.message('点击了取消')
          }
        })
      },
      prompt () {
        this.$prompt('请输入邮箱', '提示', {
          validator (value) {
            return {
              valid: /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/.test(value),
              message: '请输入正确邮箱格式'
            }
          }
        }).then(({ result, value }) => {
          if (result) {
            this.$toast.message('你输入的邮箱：' + value)
          } else {
            this.$toast.message('点击了取消')
          }
        })
      }
    }
  }
</script>

<style scoped>
</style>



