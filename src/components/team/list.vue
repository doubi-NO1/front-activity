<template>
  <div class="team-list">
      <mu-list>
        <mu-list-item title="我创建的" toggleNested>
          <span class="list-num">{{createdBy.number}}</span>
          <mu-list-item v-for="(group,index) in createdBy.list" :key="index" slot="nested" :title="group.title" :href="'#/team/'+ group.groupId">
            <mu-avatar :src="group.avatar" slot="leftAvatar"/>
            <span class="group-num">{{group.number}}</span>
          </mu-list-item>  
        </mu-list-item>
        <mu-divider />
        <mu-list-item title="我加入的" toggleNested>
          <span class="list-num">{{joinIn.number}}</span>
          <mu-list-item v-for="(group,index) in joinIn.list" :key="index" slot="nested" :title="group.title" :href="'#/team/'+ group.groupId">
            <mu-avatar :src="group.avatar" slot="leftAvatar"/>
            <span class="group-num">{{group.number}}</span>
          </mu-list-item>
        </mu-list-item>
    </mu-list>
    <mu-float-button icon="add" class="demo-float-button add-team" :href="'#/team/create'"/>
  </div>
</template>
<script>
export default {
  data() {
    return {
      createdBy: {
        number: 2,
        list: [
          {  title: '我的家人群',
            groupId: '1',
            avatar: '/static/images/avatar1.png',
            number: 34,
          },{
            title: '我的游戏群',
            groupId: '2',
            avatar: '/static/images/avatar1.png',
            number: 20
          }]
      },
      joinIn: {
        number: 3,
        list: [{
          title: '初中群',
          gruopId: '3',
          avatar: '/static/images/avatar1.png',
          number: 40
        },{
          title: '高中群',
          gruopId: '4',
          avatar: '/static/images/avatar1.png',
          number: 50
        },{
          title: '小学群',
          gruopId: '5',
          avatar: '/static/images/avatar1.png',
          number: 30
        }] 
      }
    };
  },
  created() {
    this.$root.eventHub.$emit('setAppbar',{
      title: '团队'
    });
    this.$root.eventHub.$emit('showBottom',true);
  }
}
</script>
<style lang="scss" ref="stylesheet/scss">
@import './static/css/style.scss';
.team-list{
  .add-team{
      @extend %p-f;
      bottom: 100px;
      right: 30px;
      z-index: 5;
  }
  .mu-float-button{
      background: $emb-color;
      .mu-icon.material-icons{
        color: #fff !important;
      }
    }
}
</style>
