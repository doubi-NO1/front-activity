<template>
  <div class="add-member">
      <div class="top">
        <mu-text-field icon="search" class="appbar-search-field"  slot="right" hintText="请输入搜索内容"/>
        <mu-raised-button label="添加"  class="demo-raised-button sure-btn"/>
      </div>
      <mu-list v-for="(obj,index) in memberList" :key="index" v-scroll="onScroll">
          <mu-list-item v-for="(member,key) in obj.member"  :key="key" :title="member.name">
              <mu-avatar v-if="!key" class="level" slot="left">{{obj.level}}</mu-avatar>
              <mu-checkbox  :class="[key ? 'space' : '']" slot="left"/>
              <mu-avatar :src="member.avatar" slot="rightAvatar"/>
          </mu-list-item>
          <mu-divider inset/>
      </mu-list>
  </div>
</template>
<script>
export default {
  data() {
      return {
          memberList: [{
              level: '*',
              member: [{
                    name: 'Mike Li',
                    avatar: '/static/images/avatar1.png',
                    id: '1'
                },{
                    name: 'Maco Mai',
                    avatar: '/static/images/avatar1.png',
                    id: '2'
                },{
                    name: 'Alex Qin',
                    avatar: '/static/images/avatar1.png',
                    id: '3'
                },{
                    name: 'Allen Qun',
                    avatar: '/static/images/avatar1.png',
                    id: '4'
                }]
          },{
              level: 'A',
              member: [{
                    name: 'Ayron Liu',
                    avatar: '/static/images/avatar1.png',
                    id: '1'
                },{
                    name: 'Aaia Zhou',
                    avatar: '/static/images/avatar1.png',
                    id: '2'
                },{
                    name: 'Ailler Wang',
                    avatar: '/static/images/avatar1.png',
                    id: '3'
                },{
                    name: 'Aike Li',
                    avatar: '/static/images/avatar1.png',
                    id: '4'
                },{
                    name: 'Ali li',
                    avatar: '/static/images/avatar1.png',
                    id: '5'
                }]
          }],
          memberArr:[],
          groupId: ''
      };
  },
  methods: {
    onScroll (e,position) {
         debugger;
      console.log(position);
    }
  },
  created() {
        this.groupId = this.$route.params.id;
        this.$root.eventHub.$emit('setAppbar',{
            title: '添加队友',
            isBack: true,
            backUrl: '#/team/'+this.groupId
        });
        this.$root.eventHub.$emit('showBottom',false);
    }
}
</script>
<style lang="scss" ref="stylesheet/scss">
@import './static/css/style.scss';
    .add-member{
        .top{
          @extend %p-f;
          left: 0;
          right: 0;
          top: 56px;
          background-color: #fff;
          z-index: 2;
          // @include box-shadow($shadow);
          @extend %d-f;
          .sure-btn{
              background-color: $main-color;
              margin: 15px 15px 0 0;
              span{
                color: #fff;
              }
          }
          & + .mu-list{
            padding-top: 64px;
          }
        }
        .mu-text-field{
            width: 100% !important;
            margin-bottom: 0;
        }
        .mu-text-field-input{
            height: 48px;
        }
        .mu-text-field-hint{
            line-height: 48px;
        }
        .mu-text-field-icon{
            top: 18px;
        }
        .mu-text-field.has-icon .mu-text-field-line,.mu-text-field.has-icon .mu-text-field-focus-line{
            left: 72px;
        }
        .mu-text-field-line{
            right: 15px;
        }
        .mu-text-field.has-icon{
            padding-left: 72px;
        }
        .mu-avatar.level {
            background-color: transparent;
            margin-left: -8px;
            color: $main-color;
        }
        .mu-checkbox.no-label.space{
          padding-left: 22px;
          .mu-checkbox-ripple-wrapper{
            left: 10px;
          }
        }
       
    }
</style>
