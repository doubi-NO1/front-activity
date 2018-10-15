<template>
  <div class="person-edit">
      <mu-text-field label="姓名" labelFloat v-model="name"/>
      <div class="sex">
          <div class="mu-text-field-label">性别</div>
          <mu-radio label="男" name="group" nativeValue="男" v-model="sex"/>
          <mu-radio label="女" name="group" nativeValue="女" v-model="sex"/>
      </div>
      <mu-text-field label="手机号1" labelFloat v-model="phone[0]"/>
      <mu-text-field label="手机号2" labelFloat v-model="phone[1]" v-if="phone[1]"/>
      <mu-text-field label="邮箱" labelFloat v-model="mail"/>
      <mu-text-field label="QQ" labelFloat v-model="qq"/>
      <mu-text-field label="地址" labelFloat v-model="address"/>
      <mu-text-field label="职业" labelFloat v-model="career"/>
      <mu-raised-button label="完成编辑" class="edit-btn" @click="editUserMsg" fullWidth/>
  </div>
</template>
<script>
export default {
  data() {
    return {
      avatar: '/static/images/avatar1.jpg',
      name: 'shona',
      sex: '女',
      career: '设计师',
      phone:['13123456789','15823453456'],
      mail:'143325543@qq.com',
      qq: '1233435',
      address: '上海市浦东新区川沙'
    };
  },
  methods:{
    editUserMsg(){

    }
  },
  created() {
    this.$root.eventHub.$emit('setAppbar',{
      title: '编辑个人信息',
      isBack: true,
      backUrl: '#/person'
    });
    this.$root.eventHub.$emit('showBottom',false);
  }
}
</script>
<style lang="scss">
@import './static/css/style.scss';
.person-edit {
  width:100%;
  padding:16px;
  .mu-text-field{
    width: 100%;
  }
  .sex{
    height: 72px;
    label{
      margin-right: 30px;
      margin-top:10px;
    }
  }
  .edit-btn{
    background: $main-color;
    .mu-raised-button-label{
      color: #fff;
    }
    @extend %p-f;
    bottom: 0;
    left: 0;
    z-index: 5;
    height: 44px;
    line-height: 44px;
  }
}
</style>

