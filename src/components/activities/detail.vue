<template>
  <div class="activities-detail">
    <!-- <div class="anchor">
      <a href="#baseMsg" :class="isActive === 1 ? 'active' : ''">基本信息</a>
      <a href="#detail" :class="isActive === 2 ? 'active' : ''">活动详情</a>
      <a href="#comment" :class="isActive === 3 ? 'active' : ''">消息讨论</a>
    </div> -->
    <div class="msg">
      <div id="baseMsg">
        <img :src="actMsg.pic" alt="图片">
        <div class="btns">
          <div class="bg pics" @click="gotoPics">
            <mu-icon value="image" color="white"/>
            <span>123图</span>
          </div>
          <div class="bg share" @click="launch">
            <mu-icon value="launch" color="white"/>
          </div>
        </div>
      </div>
      <div id="detail">
        <h3>{{actMsg.title}}</h3>
        <div class="list-teams">
          <mu-badge v-for="(team,key) in actMsg.team" :key="key" :content="team.name" slot="left"/>
        </div>
        <mu-list class="del-list">
          <div class="item">
            <mu-icon value="date_range"/>
            <mu-list-item :title="actDate" class="title"/>
          </div>
          <mu-divider shallowInset/>
          <div class="item">
            <mu-icon value="map"/>
            <mu-list-item :title="actMsg.address" class="title"/>
          </div>
          <mu-divider shallowInset/>
          <div class="item">
            <mu-icon value="credit_card"/>
            <mu-list-item :title="actMsg.budget+'元/人'" class="title"/>
          </div>
        </mu-list>
      </div>
      <div id="comment">
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
        <mu-raised-button label="查看全部评价" class="demo-raised-button all-comment" :href="'#/activity/'+ actId +'/comment'"/>
      </div> 
    </div>
    <div class="flex-btns">
        <mu-flat-button label="编辑" class="edit" :href="'#/activity/'+actId+'/edit'"/>
        <mu-flat-button label="报名参加" class="join"/>
    </div>
    <share :bottomSheet="isShowShare" @changeShow="change"></share>
  </div>
</template>
<script>
import share from '../common/share.vue';
export default {
  components: {
    share: share
  },
  data() {
    return {
      actMsg: {
        id: 1,
        title: '东方明珠一日游',
        team:[{
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
        budget: '100',
        closeDate: '2017/12/12',
        audit: true
      },
      comment: {
        list: 23,
        message:[{
          title: '',
        }]
      },
      isActive: 1,
      actId: '',
      isShowShare: false
    };
  },
  methods: {
    gotoPics() {
      window.location.href = '#/activity/'+ this.actId +'/pic';
    },
    launch() {
      this.isShowShare = !this.isShowShare;
    },
    change(isShow) {
      this.isShowShare = isShow;
    }
  },
  computed: {
    actDate() {
      return this.actMsg.beginDate +'-'+ this.actMsg.endDate;
    }
  },
  created() {
    this.actId = this.$route.params.id;
    this.$root.eventHub.$emit('setAppbar',{
        title: '活动详情',
        isBack: true,
        backUrl: '#/activity'
    });
    this.$root.eventHub.$emit('showBottom',false);
  }
}
</script>
<style lang="scss" ref="stylesheet/scss">
@import './static/css/style.scss';
  .activities-detail{
    background-color: $bg-color;
    .anchor{
      @extend %d-f;
      height: 48px;
      line-height: 48px;
      color: $font-color;
      background: #fff;
      a{
        @extend %f-1;
        text-align: center;
        @extend %d-i-b;
        border-bottom: 1px solid $border-color;
        &.active{
          color: $main-color;
          border-bottom: 1px solid $main-color;
        }
      }
    }
    #baseMsg {
      @extend %p-r;
      img{
        width: 100%;
      }
      .btns {
        @extend %p-a;
          bottom: 10px;
          right: 15px;
        .bg{
          @extend %d-i-b;
          background-color: rgba(0,0,0,0.5);
          border-radius: 4px;
          padding: 7px 10px;
          i,span{
            @extend %v-a-m;
            color: #fff;
          }
          span{
            line-height: 24px;
          }
        }
        .pics{
          margin-right: 10px;
        }
      }
    }
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
    #detail{
      padding-top: 10px;
      background-color: #fff;
      h3{
        line-height: 30px;
        font-size: 18px;
        padding-left: 24px;
        @extend %d-i-b;
        @extend %v-a-m;
      }
      .list-teams {
        padding-left: 16px;
        @extend %d-i-b;
        .mu-badge{
          padding: 3px 5px;
          background: $main-color;
          margin-right: 5px;
        }
      }
      hr{
        margin-left: 54px;
      }
      .title{
        @extend %f-1;
        .mu-item-title{
          font-size: 14px;
        }
      }
    }
    #comment{
      margin-top: 8px;
      background-color: #fff;
      padding-bottom: 20px;
      .mu-item{
        padding-right: 5px;
      }
    }
    .all-comment{
      background: $main-color;
      @extend %d-b;
      margin:0 auto;
      width: 130px;
      .mu-raised-button-label{
        color: #fff;
      }
    }
     .mu-float-button{
      background: $emb-color;
      .mu-icon.material-icons{
        color: #fff !important;
        font-size: 18px;
        margin-top: -5px;
      }
    }
    .flex-btns {
      @extend %p-f;
      @extend %d-f;
      bottom: 0;
      right: 0;
      left: 0;
      z-index: 5;
      .edit,.join{
        color: #fff;
        border-radius: 0;
      }
      .edit{
        width: 100px;
        background-color: $main-color;
      }
      .join{
        background: $emb-color;
        flex: 1;
      }
      .mu-flat-button{
        height: 44px;
        line-height: 44px;
      }
    }
  }
</style>
