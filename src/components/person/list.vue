<template>
  <div class="person-list">
      <div class="person-msg">
          <div class="blur-border">
              <img :src="avatar" :alt="name" class="person-bg-img blur">
          </div>
          <div class="img-bg-cricle"></div>
          <img :src="avatar" :alt="name" class="person-avatar">
          <div class="person-text">
                <span class="person-name">{{name}}</span>
                <span class="person-sex">{{sex}}</span>
                <span class="person-career">{{career}}</span>
          </div>
          <mu-list>
            <mu-list-item :title="phone[0]">
              <mu-icon slot="left" value="phone"/>
              <div class="mu-item-title next-phone" v-if="phone[1]">{{phone[1]}}</div>
            </mu-list-item>
            <mu-divider shallowInset/>
            <mu-list-item :title="mail">
              <mu-icon slot="left" value="mail"/>
            </mu-list-item>
            <mu-divider shallowInset/>
            <mu-list-item :title="qq" titleClass="has-svg">
              <div class="mu-item-left svg-item">
                <svg class="svg-icon">
                    <use xlink:href="../../static/css/icon.svg#icon-qq"></use>
                </svg>
              </div>
            </mu-list-item>
            <mu-divider shallowInset/>
            <mu-list-item :title="address">
              <mu-icon slot="left" value="location_on"/>
            </mu-list-item>
          </mu-list>
      </div>
      <mu-float-button icon="mode_edit" class="demo-float-button edit" :href="'#/person/edit'"/>
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
  created() {
    this.$root.eventHub.$emit('setAppbar',{
        title: '个人中心',
        isBack: false
    });
    this.$root.eventHub.$emit('showBottom',true);
  }
}
</script>
<style lang="scss" ref="stylesheet/scss">
  @import './static/css/style.scss';
  .person-list{
    .person-msg {
        @extend %p-r;
        .blur-border{
            width: 100%;
            height: 200px;
            overflow: hidden;
        }
        .person-bg-img {
            width: 110%;
            max-height: 300px;
            margin-top:-10px;
            margin-left: -10px;
        }
        .person-avatar {
            width: 100px;
            height: 100px;
            @extend %p-a;
            top: 40px;
            left: 50%;
            margin-left: -50px;
            border-radius: 53px;
            border: 6px solid #fff;
        }
        .img-bg-cricle {
            width: 118px;
            height: 118px;
            background: rgba(255,255,255,0.26);
            @extend %p-a;
            left: 50%;
            top:30px;
            border-radius: 59px;
            margin-left: -59px;
        }
        .person-name {
            font-size: 16px;
            @extend %t-a-c;
            margin-bottom: 8px;
        }
        .person-text {
            @extend %p-a;
            width: 100%;
            top: 160px;
            text-align: center;
            font-size: 16px;
            color: #fff;
            span{
              margin:0 5px; 
            }
        }
        .person-name,.person-sex{
          &:after{
            content: "|";
            font-size: 16px;
            margin-left: 10px;
          }
        }
        .next-phone{
          padding-top: 20px;
        }
        hr{
          margin-left: 54px;
        }
        .mu-item.show-left{
          padding-left: 54px;
        }
    }
    .mu-float-button.edit{
      @extend %p-a;
      top: 225px;
      right: 30px;
      z-index: 5;
      background: $emb-color;
      i{
        color: #fff;
      }
    }
    .svg-item{
      left: 0;
    }
    .has-svg{
      margin-left: 40px;
    }
  }
    
</style>

