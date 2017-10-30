<template>
  <div class="team-edit">
    <div class="change-img">
        <img :src="groupMsg.img" :alt="groupMsg.groupName">
        <p>点击更换团队头像</p>
    </div>
    <div class="list">
        <mu-text-field labelFloat v-model="groupMsg.groupName" label="团队名称"/>
        <mu-text-field label="团队详情" v-model="groupMsg.groupDetail" labelFloat multiLine :rows="6" :rowsMax="8" :maxLength="100" :errorText="multiLineInputErrorText" @textOverflow="handleMultiLineOverflow"/>        
        <mu-select-field multiple labelFloat label="团队标签">
            <mu-menu-item v-for="(item,key) in groupMsg.groupLabel" :key="key" :value="item.id" :title="item.labelName"/>
        </mu-select-field>
    </div>
    <mu-raised-button label="完成" class="publish-btn" fullWidth/>
  </div>
</template>
<script>
export default {
    data() {
        return {
            groupMsg: {
                img: '/static/images/bg.jpg',
                groupName: '',
                groupLabel: [],
                groupDetail: ''
            },
            groupId: '',
            multiLineInputErrorText: ''
        };
    },
    methods: {
        handleMultiLineOverflow (isOverflow) {
            this.multiLineInputErrorText = isOverflow ? '不能超过100字' : ''
        }
    },
    computed: {
    },
    created() {
        this.groupId = this.$route.params.id;
        this.$root.eventHub.$emit('showBottom',false);
        if (this.groupId) {// 编辑页面
            this.$root.eventHub.$emit('setAppbar',{
                title: '编辑信息',
                isBack: true,
                backUrl: '#/team/:'+this.groupId
            });
            // 请求团队信息进行赋值
            this.groupMsg = {
                img: '/static/images/bg.jpg',
                groupName: '我的家人群',
                groupLabel: [{
                        id: 1,
                        labelName: '校友'
                    },{
                        id: 2,
                        labelName: '户外'
                    }],
                groupDetail: '团队详情文字详情文字详情文字团队详情文字详情文字详情文字团队详情文字详情文字详情文字团队详情文字详情文字详情文字团队详情文字详情文字详情文字团队详情文字详情文字详情文字'
            }
        } else { // 新建页面
            this.$root.eventHub.$emit('setAppbar',{
                title: '新建团队',
                isBack: true,
                backUrl: '#/team'
            });
            // 获取标签数据，下拉数据绑定
            this.groupMsg.groupLabel = [{
                id: 1,
                labelName: '校友'
            },{
                id: 2,
                labelName: '户外'
            },{
                id: 3,
                labelName: '同事'
            }]
        }
    }
}
</script>
<style lang="scss" ref="stylesheet/scss">
@import './static/css/style.scss';
.team-edit {
    .change-img{
        @extend %p-r;
        img{
            max-height: 200px;
        }
        p{
            @extend %p-a;
            top: 55%;
            left: 50%;
            padding: 15px 20px;
            background: rgba(0,0,0,0.5);
            border-radius: 4px;
            margin-left: -75px;
            z-index: 5;
            color: #fff;
        }
    }
    .list{
        padding: 16px;
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
    .mu-text-field{
        width: 100%;
        font-size: 16px;
    }
    .mu-text-field-help{
        margin-top: -26px;
    }
    textarea.mu-text-field-input{
        margin-bottom: 20px;
    }
}

</style>
