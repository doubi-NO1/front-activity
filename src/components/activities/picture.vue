<template>
  <div class="activities-picture">
    <mu-grid-list class="gridlist-demo">
      <mu-grid-tile v-for="(tile,index) in list" :key="'tile' + index" titlePosition="bottom" actionPosition="left" :rows="tile.featured ? 2 : 1" :cols="tile.featured ? 2 : 1">
        <img :src="tile.image" @click="open(tile.image,tile.author,tile.title,tile.avatar)"/>
        <span slot="title">{{tile.title}}</span>
        <span slot="subTitle"><b>{{tile.author}}</b></span>
        <span slot="action"><img :src="tile.avatar" :alt="tile.author"></span>
      </mu-grid-tile>
    </mu-grid-list>
    <mu-dialog :open="dialog" @close="close" dialogClass="act-pic">
      <img :src="openImg.src" :alt="openImg.title">
      <div class="msg">
        <span><img :src="openImg.avatar" :alt="openImg.author"></span>
        <div class="title">
          <p>{{openImg.title}}</p>
          <p><b>{{openImg.author}}</b></p>
        </div>
        <mu-icon-button icon="launch" @click="launch"/>
      </div>
      <!-- <mu-flat-button slot="actions" @click="close" primary label="取消"/>
      <mu-flat-button slot="actions" primary @click="close" label="确定"/> -->
    </mu-dialog>
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
      list: [{
        image: '/static/images/breakfast.jpg',
        title: 'Breakfast',
        author: 'Myron',
        avatar: '/static/images/avatar1.png',
        featured: true
      }, {
        image: '/static/images/burger.jpg',
        title: 'Burger',
        avatar: '/static/images/avatar1.png',
        author: 'Linyu'
      }, {
        image: '/static/images/camera.jpg',
        title: 'Camera',
        avatar: '/static/images/avatar1.png',
        author: 'ruolin'
      }, {
        image: '/static/images/hats.jpg',
        title: 'Hats',
        avatar: '/static/images/avatar1.png',
        author: 'kakali'
      }, {
        image: '/static/images/honey.jpg',
        title: 'Honey',
        avatar: '/static/images/avatar1.png',
        author: 'yuyang'
      }, {
        image: '/static/images/morning.jpg',
        title: 'Morning',
        avatar: '/static/images/avatar1.png',
        author: 'mokayi',
        featured: true
      }, {
        image: '/static/images/vegetables.jpg',
        title: 'Vegetables',
        avatar: '/static/images/avatar1.png',
        author: 'NUyyyyyyy'
      }, {
        image: '/static/images/water-plant.jpg',
        title: 'water',
        avatar: '/static/images/avatar1.png',
        author: 'TDDyyyyyyy'
      }],
      dialog: false,
      openImg: {
        src: '',
        author: '',
        title: '',
        avatar:''
      },
      isShowShare: false
    };
   },
   methods: {
     open (url,author,title,avatar) {
      this.dialog = true;
      this.openImg = {
        src: url,
        author: author,
        title: title,
        avatar: avatar
      }
    },
    close () {
      this.dialog = false
    },
    launch() {
      this.isShowShare = !this.isShowShare;
    },
    change(isShow) {
      this.isShowShare = isShow;
    }
   },
   created(){
    this.actId = this.$route.params.id;
    this.$root.eventHub.$emit('setAppbar',{
        title: '精彩瞬间',
        isBack: true,
        backUrl: '#/activity/:'+this.actId
    });
    this.$root.eventHub.$emit('showBottom',false);s
  }
}
</script>
<style lang="scss" ref="stylesheet/scss">
@import './static/css/style.scss';
.mu-dialog.act-pic{
  width:100%;
  @extend %p-r;
  
  .mu-dialog-body {
    padding:0;
    @extend %p-r;
    img{
      width: 100%;
      @extend %d-b;
    }
  }
  .msg{
    height: 80px;
    background:rgba(0,0,0,0.4);
    @extend %p-a;
    bottom: 0;
    left: 0;
    width: 100%;
    @extend %d-f;
    padding:10px;
    color: #fff;
    .title{
      @extend %f-1;
      margin-top:5px;
      p{
        line-height: 26px;
      }
    } 
    img{
      width:56px;
      margin-right: 10px;
    }
    button{
      margin-top:5px;
      .mu-icon.material-icons{
        color: #fff;
      }
    }
  }
}
.activities-picture{
  .mu-grid-list{
    .mu-icon.material-icons{
      color: #fff;
    }
  }
  .mu-grid-tile-action{
    width:56px;
    margin-left: 10px;
    margin-right:10px;
    img{
      width: 100%;
    }
  }
}
</style>
