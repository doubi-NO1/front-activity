<template>
  <div class="activities-publish">
    <div class="line"></div>
    <div class="part-one">
      <mu-text-field label="活动标题" labelFloat v-model="actMsg.title"/><br/>
      <mu-text-field label="活动详情描述" v-model="actMsg.detail" labelFloat multiLine :rows="6" :rowsMax="8" :maxLength="100" :errorText="multiLineInputErrorText" @textOverflow="handleMultiLineOverflow"/>
      <mu-icon value="camera_alt"/>
    </div>
    <div class="line"></div>
    <div class="part-two">
      <div class="set-date">
        <mu-date-picker labelFloat v-model="actMsg.beginDate" label="活动开始时间"/>
        <mu-date-picker labelFloat v-model="actMsg.endDate" label="活动结束时间"/>
      </div>
      <mu-date-picker labelFloat v-model="actMsg.closeDate" label="报名截止时间"/>
      <mu-text-field labelFloat v-model="actMsg.address" label="活动地点"/>
      <mu-text-field  labelFloat v-model="actMsg.budget" label="活动预算"/>
      <mu-select-field v-model="actMsg.team" multiple labelFloat label="活动团体">
        <mu-menu-item v-for="(item,key) in actMsg.team" :key="key" :value="item.id" :title="item.name"/>
      </mu-select-field>
      <div class="audit-text">
        <span>需要审核申请者</span>
        <mu-switch v-model="actMsg.audit" label="" />
      </div>
    </div>
    <mu-raised-button label="发布" class="publish-btn" fullWidth/>
  </div>
</template>
<script>
export default {
  data() {
    return {
      actMsg: {
        title: '',
        team:[],
        people: '',
        pic: '',
        detail: '',
        address: '',
        beginDate: '',
        endDate: '',
        closeDate: '',
        budget: '',
        audit: false
      },
      multiLineInputErrorText: '',
      actId: ''
    };
  },
  methods:{
    handleMultiLineOverflow (isOverflow) {
      this.multiLineInputErrorText = isOverflow ? '不能超过100字' : ''
    }
  },
  created(){
    this.actId = this.$route.params.id;
    this.$root.eventHub.$emit('showBottom',false);
    if (this.actId) { //编辑页面
        this.$root.eventHub.$emit('setAppbar',{
            title: '编辑活动',
            isBack: true,
            backUrl: '#/activity/:'+this.actId
        });
        // 请求数据
        this.actMsg = {
          id: 1,
          title: '东方明珠一日游',
          game2:[{
            name: '上海智阳',
            id: 1
          },{
            name: '上海昊基人力',
            id: 2
          }],
          status: 1,
          people: 23,
          pic: '/static/images/bg.jpg',
          detail: '上海智阳上海智阳上海智阳上海智阳上海智阳上海智阳上海智阳上海智阳上海智阳上海智阳上海智阳上海智阳上海智阳上海智阳上海智阳上海智阳上海智阳上海智阳上海智阳上海智阳上海智阳上海智阳上海智阳上海智阳上海智阳上海智阳',
          address: '上海市浦东新区东方明珠',
          beginDate: '2017/12/12',
          endDate: '2017/12/18',
          closeDate: '2017/12/12',
          budget: '100',
          audit: true
        }
    } else {
      this.$root.eventHub.$emit('setAppbar',{
          title: '新建活动',
          isBack: true,
          backUrl: '#/activity'
      });
      // 请求团队列表页面，绑定下拉
      this.team = [{
        name: '包一中同学群',
        value: 1
      },{
        name: '上海老乡群',
        value: 2
      },{
        name: '旅游群',
        value: 3
      }]
    }
  }
}
</script>
<style lang="scss" ref="stylesheet/scss">
@import './static/css/style.scss';
  .activities-publish{
    .line{
      width: 100%;
      height: 8px;
      background: $bg-color;
    }
    .part-one{
      background: #fff;
      padding: 0 24px;
      @extend %p-r;
    }
    .mu-text-field{
      width: 100%;
    }
    .mu-icon.material-icons {
      @extend %p-a;
      bottom: 30px;
      left: 24px;
    }
    .fonts{
      @extend %p-a;
      bottom: 30px;
      right: 24px;
    }
    .part-two{
      padding: 0 24px 20px;
      @extend %p-r;
      .set-date{
        @extend %d-f;
        margin-top: 20px;
        .mu-date-picker{
          @extend %f-1;
          width: auto;
        }
      }
      .set-date .mu-date-picker:first-child{
        margin-right: 10px;
      }
      .mu-date-picker{
          width: 100%;
        }
    }
    .audit-text{
      @extend %d-f;
      span{
        @extend %d-i-b;
        padding-top: 28px;
        padding-bottom: 12px;
        color: rgba(0,0,0,0.54);
        @extend %f-1;
      }
      label{
        width: 40px;
        padding-top: 28px;
      }
    }
    .publish-btn{
      background: $main-color;
      .mu-raised-button-label{
        color: #fff;
      }
      @extend %p-f;
      bottom: 0;
      z-index: 5;
      height: 44px;
      line-height: 44px;
    }
    .mu-text-field-help{
      margin-top: -26px;
      div:first-child{
        padding-left: 40px;
      }
    }
    textarea.mu-text-field-input{
      margin-bottom: 30px;
    }
  }
</style>
