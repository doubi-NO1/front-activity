<template>
  <div class="activities-list">
      <mu-tabs :value="activeTab" @change="handleTabChange">
        <mu-tab value="1" title="所有"/>
        <mu-tab value="2" title="进行中"/>
        <mu-tab value="3" title="未开始"/>
        <mu-tab value="4" title="已结束"/>
        <mu-tab value="5" title="已取消"/>
      </mu-tabs>
      <div v-if="activeTab === '1'" class="list all">
        <div class="first">
          <mu-card >
            <mu-card-title :title="beginAct.title"/>
            <div class="list-teams">
              <mu-badge v-for="(team,key) in beginAct.team" :key="key" :content="team.name" slot="left"/>
            </div>
            <mu-card-media title="" :subTitle="beginAct.detail">
              <img :src="beginAct.pic" />
              <div class="status begin"><span>进行中</span></div>
            </mu-card-media>
            <mu-card-text>
              <div class="address">
                <mu-icon value="map"/>
                <span>{{beginAct.address}}</span>
              </div>
              <div class="date">
                <mu-icon value="date_range"/>
                <span>{{beginAct.date}}</span>
              </div>
              <div class="budget">
                <mu-icon value="credit_card"/>
                <span>{{beginAct.budget}}</span>
              </div>
            </mu-card-text>
            <mu-divider />
            <mu-card-actions>
              <span>
                <mu-icon value="launch" class="launch" @click="launch" slot="left" color="#31c27c"/>
                <mu-icon value="people" color="#31c27c"/>
                <span class="people">{{beginAct.people}}</span>
              </span>
              <mu-raised-button label="我要参加" class="demo-raised-button" :href="'#/activity/'+beginAct.id" />
            </mu-card-actions>
          </mu-card>
        </div>
        <div class="other">
          <mu-card v-for="(act,key) in otherAct" :key="key">
            <div class="flex">
              <mu-card-media title="" subTitle="">
                <img :src="act.pic" />
                <div v-if="act.status === 1" class="status begin">
                  <span>进行中</span>
                </div>
                <div v-if="act.status === 2" class="status no-begin">
                  <span>未开始</span>
                </div>
                <div v-if="act.status === 3" class="status end">
                  <span>已结束</span>
                </div>
                <div v-if="act.status === 4" class="status cancle">
                  <span>已取消</span>
                </div>
              </mu-card-media>
              <div class="mu-content">
                  <mu-card-title :title="act.title"/>
                  <div class="list-teams">
                    <mu-badge v-for="(team,key) in act.team" :key="key" :content="team.name" slot="left"/>
                  </div>
                  <mu-card-text>
                    <div class="address">
                      <mu-icon value="map"/>
                      <span>{{act.address}}</span>
                    </div>
                    <div class="date">
                      <mu-icon value="date_range"/>
                      <span>{{act.date}}</span>
                    </div>
                    <div class="budget">
                      <mu-icon value="credit_card"/>
                      <span>{{act.budget}}</span>
                    </div>
                  </mu-card-text>
              </div>
            </div>
              <mu-divider />
            <mu-card-actions>
                 <span>
                    <mu-icon value="launch" class="launch" @click="launch" slot="left" color="#31c27c"/>
                    <mu-icon value="people" color="#31c27c"/>
                    <span class="people">{{act.people}}</span>
                  </span>
                  <mu-raised-button v-if="act.status === 1" label="我要参加" class="demo-raised-button " :href="'#/activity/'+act.id" />
                  <mu-raised-button v-if="act.status === 2" label="我要参加" class="demo-raised-button " :href="'#/activity/'+act.id" />
                  <mu-raised-button v-if="act.status === 3" label="查看详情" class="demo-raised-button " :href="'#/activity/'+act.id"/>
                  <mu-raised-button v-if="act.status === 4" label="查看详情" class="demo-raised-button " :href="'#/activity/'+act.id"/>
                </mu-card-actions>  
          </mu-card>
        </div>
      </div>
      <div v-if="activeTab === '2'" class="list begin">
        <h2>Tab Two</h2>
        <p>
          这是第二个 tab
        </p>
      </div>
      <div v-if="activeTab === '3'" class="list no-begin">
        <h2>Tab Three</h2>
        <p>
          这是第三个 tab
        </p>
      </div>
      <div v-if="activeTab === '4'" class="list end">
        <h2>Tab four</h2>
        <p>
          这是第四个 tab
        </p>
      </div>
      <div v-if="activeTab === '5'" class="list cancle">
        <h2>Tab five</h2>
        <p>
          这是第五个 tab
        </p>
      </div>
      <mu-float-button icon="add" class="demo-float-button add-list" :href="'#/activity/pub'"/>
      <share :bottomSheet="isShowShare" @changeShow="change"></share>
  </div>
</template>
<script>
  import share from '../common/share.vue';
  export default {
    components: {
      share: share
    },
    data () {
      return {
        activeTab: '1',
        activityList:[{
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
            date: '2017/12/12',
            budget: '100元/人'
          },{
            id: 2,
            title: '东方明珠一日游',
            team:[{
              name: '上海智阳',
              id: 1
            },{
              name: '上海昊基人力',
              id: 2
            }],
            status: 2,
            people: 23,
            pic: '/static/images/ac_pic.png',
            detail: '上海智阳上海智阳上海智阳上海智阳上海智阳上海智阳上海智阳上海智阳上海智阳上海智阳上海智阳上海智阳上海智阳上海智阳上海智阳上海智阳上海智阳上海智阳上海智阳上海智阳上海智阳上海智阳上海智阳上海智阳上海智阳上海智阳',
            address: '上海市浦东新区东方明珠',
            date: '2017/12/12',
            budget: '100元/人'
          },{
            id: 3,
            title: '东方明珠一日游',
            team:[{
              name: '上海智阳',
              id: 1
            },{
              name: '上海昊基人力',
              id: 2
            }],
            status: 3,
            people: 23,
            pic: '/static/images/ac_pic.png',
            detail: '上海智阳上海智阳上海智阳上海智阳上海智阳上海智阳上海智阳上海智阳上海智阳上海智阳上海智阳上海智阳上海智阳上海智阳上海智阳上海智阳上海智阳上海智阳上海智阳上海智阳上海智阳上海智阳上海智阳上海智阳上海智阳上海智阳',
            address: '上海市浦东新区东方明珠',
            date: '2017/12/12',
            budget: '100元/人'
          },{
            id: 4,
            title: '东方明珠一日游',
            team:[{
              name: '上海智阳',
              id: 1
            },{
              name: '上海昊基人力',
              id: 2
            }],
            status: 4,
            people: 23,
            pic: '/static/images/ac_pic.png',
            detail: '上海智阳上海智阳上海智阳上海智阳上海智阳上海智阳上海智阳上海智阳上海智阳上海智阳上海智阳上海智阳上海智阳上海智阳上海智阳上海智阳上海智阳上海智阳上海智阳上海智阳上海智阳上海智阳上海智阳上海智阳上海智阳上海智阳',
            address: '上海市浦东新区东方明珠',
            date: '2017/12/12',
            budget: '100元/人'
        }],
        isShowShare: false
      };
    },
    methods: {
      handleTabChange (val) {
        this.activeTab = val
      },
      launch() {
        this.isShowShare = !this.isShowShare;
      },
      change(isShow) {
        this.isShowShare = isShow;
      },
      gotoDel(id) {
        debugger;
        // window.location.href = '/activity/'+id;
      }
    },
    computed: {
      beginAct() {
        return this.activityList[0];
      },
      otherAct() {
        return this.activityList.splice(1);
      }
    },
    created() {
      this.$root.eventHub.$emit('setAppbar',{
          title: '活动列表',
          isBack: false
      });
      this.$root.eventHub.$emit('showBottom',true);
    }
  }
</script>
<style lang="scss" ref="stylesheet/scss">
@import './static/css/style.scss';
  .activities-list{
    background-color: $bg-color;
    .mu-tabs{
      margin-bottom: 10px;
      @extend %p-f;
      top: 56px;
    }
    .list{
      padding-top: 58px;
      padding-bottom: 10px;
      .list-box{
        width: 96%;
        margin-left: 2%;
        border-radius: 4px;
        background-color: #fff; 
      }
      .mu-card{
        border-radius: 6px;
        width: 96%;
        margin-left: 2%;
        margin-bottom: 10px;
        @extend %o-h;
      }
    }
    .mu-card-title-container{
      padding: 5px 0 0 16px;
      .mu-card-title{
        font-size: 18px;
      }
    }
    .list-teams {
      padding-left: 16px;
      margin-bottom: 10px;
      .mu-badge{
        padding: 3px 5px;
        background: $main-color;
        margin-right: 5px;
      }
    }
    .mu-card-media-title {
      padding:0;
      .mu-card-sub-title{
        display: -webkit-box;  
        display: -moz-box;  
        overflow: hidden;  
        text-overflow: ellipsis;  
        word-break: break-all;  
        -webkit-box-orient: vertical;  
        -webkit-line-clamp:2;  
        color: #fff;
        line-height: 24px;
        padding:7px 10px;
        font-size: 14px;
      }
    }
    .mu-card-media{
      .status {
        span{
          color: #fff;
          @extend %p-a;
          top: 17px;
          left: 0px;
          z-index: 3;
          @include rotate(-45deg);
        }
        &:after{
          content: "";
          @extend %p-a;
          top: -8px;
          left: -33px;
          @include rotate(-45deg);
          
        }
        &.begin:after{
          @include triangle('top',50px,$main-color);
        }
        &.no-begin:after{
          @include triangle('top',50px,$main-color);
        }
        &.end:after{
          @include triangle('top',50px,$warn-color);
        }
        &.cancle:after{
          @include triangle('top',50px,$icon-color);
        }
      }
    }
    .address,.date,.budget{
      margin-bottom: 5px;
      i{
        @extend %v-a-m;
        @extend %d-i-b;
        margin-right: 5px;
      }
    }
    .mu-card-actions{
      line-height: 34px;
      i {
        @extend %v-a-m;
      }
      .launch{
        margin-right: 10px;
      }
      .people{
        font-size: 16px;
        color: $main-color;
        @extend %v-a-m;
      }
      .mu-raised-button.demo-raised-button{
        float:right;
        background: $main-color;
        color: #fff;
        height: 34px;
        line-height: 34px;
      }
    }
    .other {
      .flex{
        @extend %d-f;
      }
      .mu-card-media{
        width: 35%;
      }
      .mu-content{
        @extend %f-1;
      }
    }
    .add-list{
      @extend %p-f;
      bottom: 100px;
      right: 30px;
      z-index: 5;
    }
    .mu-float-button{
      background: $emb-color;
      .mu-icon.material-icons{
        color: #fff !important;
      }
    }
  }
</style>
