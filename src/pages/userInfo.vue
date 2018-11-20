<template>
  <div>
    <div class="abs mt15 content_box userInfo_box">
      <img src="../assets/images/suc.png">
    </div>
    <DialogAlert :content="Alert.content" :buttonText="Alert.buttonText"></DialogAlert>
    <DialogConfirm :content="Alert.content" :buttonText="Alert.buttonText" v-on:DialogConfirmCallBack="DialogConfirmCallBack"></DialogConfirm>
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
        token: '', // 用户标识
        style: '#9495ab',
        btnLoading: false,
        btnDisable: true,
        form: {
          otherPlatformLoan: '', // 其他平台借款
          companyName: '', // 工作单位
          email: '', // 电子邮箱
          salary: '', // 月工资收入
          loanReasonValue: [], // 借款理由
          educationTypeValue: [], // 教育程度
          professionValue: [], // 从事职业
          contactsRelationValue: [], // 关系
          contactsName: '', // 联系人姓名
          contactsMobile: '', // 联系人手机
          contactsMobile_disabled: true, // 联系人手机是否不可以编辑
          contactsName_disabled: true // 联系人姓名是否不可以编辑
        },
        popup: {
          showLoanReason: false,
          LoanReasonList: [],
          showEducationType: false,
          EducationTypeList: [],
          showProfession: false,
          ProfessionList: [],
          showContactsRelation: false,
          ContactsRelationList: []
        },
        Alert: {
          show: false,
          content: '请使用本人手机通讯录进行授权，请确保手机通讯录权限打开，以确保成功授权',
          buttonText: '我知道了'
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
      DialogConfirmCallBack () {}
    }
  }
</script>
<style>
  .userInfo_box .weui-cell{ padding:0.25rem 0 0.3rem!important;border-bottom: 0.01rem solid #eeeeee;}
  .userInfo_box .weui-input{ height: 2em!important; line-height: 2!important;}
  .userInfo_box [class^="weui-icon-"]:before, [class*=" weui-icon-"]:before {margin-right: 0.88em!important;}
  .userInfo_box .vux-cell-box{ display: none!important;}
  .userInfo_box .form_input_box_right_ico .weui-icon-clear{ margin-top: -0.375rem;}
  .userInfo_box .weui-cell_access .weui-cell__ft:after{border-width:0.01rem 0.01rem 0 0; width: 0.18rem; height: 0.18rem;}
</style>
<style lang="less" scoped>
  .form_input_box{padding: 0 0 0 15px; position: relative;}
  .form_mid_title{ padding-left: 15px; height: 1.12rem; line-height: 1.12rem;}
  .add_contact_ico{ width: 0.5rem; height: auto; margin:0 0.25rem 0 0;}
  .vux-cell-arrow-down {transform:rotate(90deg);}
</style>



