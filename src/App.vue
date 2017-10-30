
<template>
  <div class="app-page">
    <appbar></appbar>
    <div class="app-content">
      <router-view></router-view>
    </div>
    <bottomNav v-show="showBottom"></bottomNav>
  </div>
</template>
<script>
import appbar from './components/appbar/appbar.vue';
import bottomNav from './components/bottomNav/bottomNav.vue';
export default {
  components: {
    appbar: appbar,
    bottomNav: bottomNav
  },
  data(){
    return {
      showBottom: true
    }
  },
  created() {
    this.$root.eventHub.$on('showBottom',(flag) => {
        this.showBottom = flag;
    });
  }
}
</script>
<style lang="scss">
  .app-page{
    width: 100%;
    overflow: hidden;
  }
  .app-content{
    margin-top: 56px;
    margin-bottom: 56px;
  }
</style>



