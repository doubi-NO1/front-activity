<template>
  <div class="team-detail">
      <div class="group-msg">
          <div class="blur-border">
              <img :src="img" :alt="groupName" class="group-bg-img blur">
          </div>
          <div class="img-bg-cricle"></div>
          <img :src="img" :alt="groupName" class="group-avatar">
          <div class="group-text">
                <p class="group-name">{{groupName}}</p>
                <div class="group-labels">
                    <span v-for="(group,index) in groupLabel" :key="index" :id="group.id">{{group.labelName}}</span>
                </div>
          </div>
          <div class="detail-btn" @click="showDetail">
               <mu-icon value="sort" color="white"/>
               <span>详情</span>
          </div>
          <div class="group-detail" v-show="isShowDetail" @click="showDetail">
              <!-- <mu-icon value="clear" color="white" @click="showDetail"/> -->
              <p>{{groupDetail}}</p>
           </div>
      </div>
      <div class="team-detail-list">
          <mu-list>
            <mu-list-item title="" class="imgs" :href="'#/team/'+this.groupId +'/member'">
                <mu-icon slot="left" value="group"/>
                <div class="member-imgs">
                    <span v-for="(advatar,index) in groupMember" :key="index">
                        <img :src="advatar" alt="" class="member-img"/>
                    </span>
                    <a class="add-btn" :href="'#/team/'+this.groupId +'/member/add'">
                        <mu-icon value="add"/>
                    </a>
                </div>
                <span class="group-member-number">{{groupNumber}}人</span>
                <mu-icon value="chevron_right" slot="right" />
            </mu-list-item>
            <mu-divider />
            <mu-list-item title="邀请成员" :href="'#/team/'+this.groupId +'/invitation'">
                <mu-icon slot="left" value="drafts"/>
                <mu-icon value="chevron_right" slot="right"/>
            </mu-list-item>
            <mu-divider />
            <mu-list-item title="审核记录" :href="'#/team/'+this.groupId +'/audit'">
                <mu-icon slot="left" value="find_in_page"/>
                <mu-icon value="chevron_right" slot="right"/>
            </mu-list-item>
            <mu-divider />
            <mu-list-item title="编辑团队资料" :href="'#/team/'+this.groupId +'/edit'">
                <mu-icon slot="left" value="mode_edit"/>
                <mu-icon value="chevron_right" slot="right"/>
            </mu-list-item>
            <mu-divider />
        </mu-list>
    

      </div>
  </div>
</template>
<script>
import { eventHub } from '../eventHub.vue';
export default {
    data() {
        return {
            img: '/static/images/bg.jpg',
            groupName: '我的家人群',
            groupNumber: 120,
            groupMember:['/static/images/avatar1.png','/static/images/avatar1.png','/static/images/avatar1.png'],
            groupLabel: [{
                    id: 1,
                    labelName: '校友'
                },{
                    id: 2,
                    labelName: '户外'
                }],
            groupDetail: '团队详情文字详情文字详情文字团队详情文字详情文字详情文字团队详情文字详情文字详情文字团队详情文字详情文字详情文字团队详情文字详情文字详情文字团队详情文字详情文字详情文字',
            isShowDetail: false,
            groupId: ''
        };
    },
    methods: {
        showDetail() {
            this.isShowDetail = !this.isShowDetail;
        }
    },
    created() {
        this.groupId = this.$route.params.id;
        this.$root.eventHub.$emit('setAppbar',{
            title: '团队详情',
            isBack: true,
            backUrl: '#/team'
        });
        this.$root.eventHub.$emit('showBottom',false);
    }
}
</script>
<style lang="scss" ref="stylesheet/scss">
@import './static/css/style.scss';
    .group-msg {
        @extend %p-r;
        .blur-border{
            width: 100%;
            height: 200px;
            overflow: hidden;
        }
        .group-bg-img {
            width: 110%;
            max-height: 300px;
            margin-top:-10px;
            margin-left: -10px;
        }
        .group-avatar {
            width: 100px;
            height: 100px;
            @extend %p-a;
            top: 20px;
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
            top:11px;
            border-radius: 59px;
            margin-left: -59px;
        }
        .group-name {
            font-size: 16px;
            @extend %t-a-c;
            color: #fff;
            margin-bottom: 8px;
        }
        .group-labels{
            @extend %d-f;
            @extend %j-c-c;
            span {
                padding: 5px 10px;
                border-radius: 4px;
                background: $main-color;
                color: #fff;
                margin: 0 5px;
            }
        }
        .group-text {
            @extend %p-a;
            width: 100%;
            top: 140px;
        }
        .detail-btn{
            @extend %d-i-b;
            @extend %p-a;
            top: 153px;
            right: 20px;
            padding: 5px 10px;
            background: rgba(0,0,0,0.3);
            border-radius: 4px;
            span{
                color: #fff;
                @extend %v-a-m;
            }
            i{
                @extend %v-a-m;
            }
        }
        .group-detail{
            @extend %p-a;
            height: 70px;
            top: 130px;
            width: 100%;
            background: rgba(0,0,0,0.7);
            z-index: 2;
            p{
                display: -webkit-box;  
                display: -moz-box;  
                overflow: hidden;  
                text-overflow: ellipsis;  
                word-break: break-all;  
                -webkit-box-orient: vertical;  
                -webkit-line-clamp:2;  
                color: #fff;
                line-height: 26px;
                padding:10px;
                font-size: 14px;
            }
        }
    }
    .member-imgs{
        @extend %d-i-b;
        .member-img{
            width: 28px;
            height: 28px;
            border-radius: 14px;
            margin: 3px;
        }
        span{
            @extend %d-i-b;
        }
    }
    .add-btn{
        width: 26px;
        height: 26px;
        border-radius: 15px;
        @extend %d-i-b;
        @extend %p-r;
        border: 2px dashed $icon-color;
        top:-4px;
        i {
            color: $icon-color;
            @extend %p-a;
            top:-1px;
            left: -1px;
        }
    }
    .group-member-number{
        @extend %p-a;
        right: 0;
        top: 12px;
    }
    .team-detail-list{
        .mu-list {
            padding: 0;
        }
        .imgs {
            .mu-item {
                padding-top:0;
                padding-bottom: 0;
            }
        }
    }
</style>
