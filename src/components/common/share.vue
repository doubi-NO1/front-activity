<template>
  <div class="common-share">
    <mu-bottom-sheet :open="bottomSheet" @close="closeBottomSheet">
        <mu-flexbox>
            <mu-flexbox-item>
                <mu-icon value="launch"/>
                <p>发送给朋友</p>
            </mu-flexbox-item>
            <mu-flexbox-item>
                <svg class="svg-icon">
                    <use xlink:href="../../static/css/icon.svg#icon-qq"></use>
                </svg>
                <p>朋友圈</p>
            </mu-flexbox-item>
            <mu-flexbox-item>
                <mu-icon value="star_rate"/>
                <p>收藏</p>
            </mu-flexbox-item>
            <mu-flexbox-item>
                <mu-icon value="search"/>
                <p>搜索内容</p>
            </mu-flexbox-item>
        </mu-flexbox>
        <mu-flexbox>
            <mu-flexbox-item>
                <mu-icon value="link"/>
                <p>复制链接</p>
            </mu-flexbox-item>
            <mu-flexbox-item>
                <svg class="svg-icon">
                    <use xlink:href="../../static/css/icon.svg#icon-user"></use>
                </svg>
                <p>查看公众号</p>
            </mu-flexbox-item>
            <mu-flexbox-item>
                <svg class="svg-icon">
                    <use xlink:href="../../static/css/icon.svg#icon-move-up"></use>
                </svg>
                <p>置顶</p>
            </mu-flexbox-item>
            <mu-flexbox-item>
                <mu-icon value="explore"/>
                <p>在浏览器打开</p>
            </mu-flexbox-item>
        </mu-flexbox>
        <mu-flexbox>
            <mu-flexbox-item>
                <svg class="svg-icon">
                    <use xlink:href="../../static/css/icon.svg#icon-qq"></use>
                </svg>
                <p>分享到手机QQ</p>
            </mu-flexbox-item>
            <mu-flexbox-item>
                <svg class="svg-icon">
                    <use xlink:href="../../static/css/icon.svg#icon-qq"></use>
                </svg>
                <p>分享到QQ空间</p>
            </mu-flexbox-item>
        </mu-flexbox>
    </mu-bottom-sheet>
  </div>    
</template>
<script>
export default {
    props:{
        bottomSheet: {
            type: Boolean
        }
    },
    data(){
        return {};
    },
    methods: {
        closeBottomSheet(){
            this.bottomSheet = !this.bottomSheet;
            this.$emit('changeShow',this.bottomSheet);
        }
    }
}
</script>
<style lang="scss" ref="stylesheet">
@import './static/css/style.scss';
    .mu-bottom-sheet{
        padding: 20px 10px;
    }
    .mu-flexbox.mu-flex-row{
        margin-bottom: 8px;
    }
    .mu-icon{
        color: $icon-color;
    }    
    .mu-flexbox-item{
        @extend %p-r;
        i,svg{
            @extend %p-a;
            top:10px;
            left: 50%;
            margin-left: -12px;
            width: 24px;
            height: 24px;
        }
        p{
            padding-top: 45px;
            text-align: center;
        }
        .svg-icon{
            fill: $icon-color;
		    width: 24px;
		    height: 24px;
        }
    }
</style>

