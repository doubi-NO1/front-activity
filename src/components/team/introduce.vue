<template>
    <div class="team-introduce">
        <mu-card>
            <mu-card-title :title="groupName"/>
            <mu-card-text>
                {{ groupDetail }}
            </mu-card-text>
        </mu-card>
    </div>
</template>
<script>
export default {
    data() {
        return{
            groupDetail: '团队详情文字详情文字详情文字团队详情文字详情文字详情文字团队详情文字详情文字详情文字团队详情文字详情文字详情文字团队详情文字详情文字详情文字团队详情文字详情文字详情文字',
            groupName: '我的家人群'
        };
    },
    created() {
        this.groupId = this.$route.params.id;
        this.$root.eventHub.$emit('setAppbar',{
            title: '团队介绍',
            isBack: true,
            backUrl: '#/team/'+this.groupId
        });
        this.$root.eventHub.$emit('showBottom',false);
    }
}
</script>
<style lang="scss" ref="stylesheet/scss">
    @import './static/css/style.scss';
    .team-introduce{
        .mu-card-title {
            font-size: 16px;
            text-align: center;
        }
        .mu-card-title-container{
            padding: 8px 16px 0 16px;
        }
        .mu-card-text{
            padding-top: 8px;
            font-size: 14px;
            line-height: 20px;
            text-indent: 2em;
        }
        .mu-card{
            box-shadow: none;
        }
    }
</style>