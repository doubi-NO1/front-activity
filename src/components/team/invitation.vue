<template>
    <div class="team-invitation">
        <div class="group-msg">
          <div class="blur-border">
              <img :src="img" :alt="groupName" class="group-bg-img blur">
          </div>
          <div class="bg-white"></div>
          <div class="img-bg-cricle"></div>
          <img :src="img" :alt="groupName" class="group-avatar">
          <div class="group-text">
                <p class="group-name">{{groupName}}</p>
                <div class="group-labels">
                    <span v-for="(group,index) in groupLabel" :key="index" :id="group.id">{{group.labelName}}</span>
                </div>
          </div>
          <!-- <div class="detail-btn" @click="showDetail">
               <mu-icon value="sort" color="white"/>
               <span>详情</span>
          </div>
          <div class="group-detail" v-show="isShowDetail" @click="showDetail">
              <p>{{groupDetail}}</p>
           </div> -->
        </div>
        <div class="code">
            <img :src="groupCode" />
        </div>
    </div>
</template>
<script>
export default {
  data() {
        return {
            img: '/static/images/bg.jpg',
            groupName: '我的家人群',
            groupCode: '/static/images/code.png',
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
            title: '邀请成员',
            isBack: true,
            backUrl: '#/team/'+this.groupId
        });
        this.$root.eventHub.$emit('showBottom',false);
    }
}
</script>
<style lang="scss" ref="stylesheet/scss">
    @import './static/css/style.scss';
    .team-invitation{
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
                color: $main-color;
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
            .bg-white{
                width: 90%;
                height:300px;
                background-color: #fff;
                border-radius: 10px;
                @extend %p-a;
                top: 80px;
                left: 5%;
            }
        }
        .code {
            img{
                width: 150px;
                height: 150px;
                @extend %p-r;
                z-index: 4;
                left: 50%;
                margin-left: -70px;
                top:20px;
            }
        }
    }
   
</style>
