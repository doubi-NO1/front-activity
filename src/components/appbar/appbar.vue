<template>
  <div class="app-bar">
    <mu-appbar :title="title">
        <mu-icon-button v-if="isBack" icon="chevron_left" :size="32" slot="left" :href="backUrl"/>
    </mu-appbar>
  </div>
</template>
<script>
export default {
    data (){
        return {
            title: '',
            isBack: false,
            backUrl: ''
        };
    },
    methods: {
    },
    created() {
        this.$root.eventHub.$on('setAppbar', (obj) => {
            this.title = obj.title;
            this.isBack = obj.isBack ? obj.isBack : false;
            this.backUrl = obj.backUrl;
        });
    }
}
</script>
<style lang="scss" ref="stylesheet/scss">
@import './static/css/style.scss';
.app-bar {
    @extend %p-f;
    top: 0;
    left:0;
    right:0;
    z-index: 10;
}
</style>


