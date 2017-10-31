<template>
    <div class="bottom-nav">
        <mu-bottom-nav :value="bottomNav" shift @change="handleChange">
            <mu-bottom-nav-item value="团队" title="团队" icon="group" href="#/team" />
            <mu-bottom-nav-item value="活动" title="活动" icon="whatshot" href="#/activity" />
            <mu-bottom-nav-item value="个人" title="个人" icon="face" href="#/person"/>
        </mu-bottom-nav>
    </div>
</template>
<script>
export default {
     data () {
        return {
            bottomNav: '团队',
            bottomNavColor: '团队'
        }
    },
    methods: {
        handleChange (val) {
            this.bottomNav = val
        }
    }
}
</script>
<style lang="scss" ref="stylesheet/scss">
@import './static/css/style.scss';
    .bottom-nav {
        @extend %p-f;
        bottom:0;
        left:0;
        right:0;
        z-index:20;
        .mu-bottom-item-icon.mu-icon.material-icons {
            color: #fff;
        }
        .svg-icon{
            fill: $icon-color;
            width: 24px;
            height: 24px;
        }
    }
</style>


