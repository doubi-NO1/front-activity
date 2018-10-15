
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
  methods:{
    getUserMsg(){
      let param = {
        avatar: '/static/images/avatar1.jpg',
        name: 'shona',
        sex: '女',
        profession: '设计师',
        phone1: '13123456789',
        phone2: '15823453456',
        mail:'143325543@qq.com',
        qq: '1233435',
        address: '上海市浦东新区川沙'
      }
      this.$http.post(this.apis.userAdd,param)
      .then((data)=>{
        console.log(data);
      })
      .catch((error)=>{

      });
    }
  },
  created() {
    this.getUserMsg();
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



