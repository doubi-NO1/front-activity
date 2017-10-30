<template>
  <div class="activities-comment">
    <mu-list class="del-list">
          <div class="item">
            <mu-icon value="message"/>
            <mu-list-item title="讨论消息" class="title"/>
            <span>({{comment.list}})</span>
          </div>
          <mu-list-item title="Alex Qin">
            <mu-avatar src="/static/images/avatar1.png" slot="leftAvatar"/>
            <span slot="describe">
              <span style="color: rgba(0, 0, 0, .87)">这个周末一起吃饭么?</span>
              <p>周末要来你这里出差，要不要一起吃个饭呀，实在编不下去了,哈哈哈哈哈哈</p>
            </span>
            <mu-icon-menu slot="right" icon="more_vert" tooltip="操作">
              <mu-menu-item title="回复" />
              <mu-menu-item title="标记" />
              <mu-menu-item title="删除" />
            </mu-icon-menu>
          </mu-list-item>
          <mu-divider inset/>
          <mu-list-item title="Alex Qin">
            <mu-avatar src="/static/images/avatar1.png" slot="leftAvatar"/>
            <span slot="describe">
              <span style="color: rgba(0, 0, 0, .87)">看电影啊</span> <br/>
              我们去看电影，最近有部烂片上映，又有吐槽的了
            </span>
            <mu-icon-menu slot="right" icon="more_vert" tooltip="操作">
              <mu-menu-item title="回复" />
              <mu-menu-item title="标记" />
              <mu-menu-item title="删除" />
            </mu-icon-menu>
          </mu-list-item>
          <mu-divider inset/>
          <mu-list-item title="LOL">
            <mu-avatar src="/static/images/avatar1.png" slot="leftAvatar"/>
            <span slot="describe">
              <span style="color: rgba(0, 0, 0, .87)">去打游戏啊</span><br/>
              周末一起 LOL
            </span>
            <mu-icon-menu slot="right" icon="more_vert" tooltip="操作">
              <mu-menu-item title="回复" />
              <mu-menu-item title="标记" />
              <mu-menu-item title="删除" />
            </mu-icon-menu>
          </mu-list-item>
    </mu-list>
  </div>
</template>
<script>
export default {
  data() {
      return {
        comment: {
            list: 23,
            message:[{
            title: '',
            }]
        },
        actId:''
      }
  },
  created(){
    this.actId = this.$route.params.id;
    this.$root.eventHub.$emit('setAppbar',{
        title: '讨论消息',
        isBack: true,
        backUrl: '#/activity/:'+this.actId
    });
    this.$root.eventHub.$emit('showBottom',false);
  }
}
</script>
<style lang="scss">
@import './static/css/style.scss';
.activities-comment{
     .del-list{
        .item{
          @extend %d-f;
          i{
            @extend %v-a-m;
            margin:12px 0 0 10px;
            width: 24px;
          }
          span{
            line-height: 48px;
          }
        }
        padding: 10px;
        margin-top: 5px;
    }
   
}
</style>
