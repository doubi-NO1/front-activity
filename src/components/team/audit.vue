<template>
  <div class="team-audit">
    <mu-list>
    <mu-sub-header>待审核</mu-sub-header>
    <mu-list-item v-for="(member,key) in auditList.noAudit" :key="key" :title="member.name">
      <mu-avatar :src="member.avatar" slot="leftAvatar"/>
      <mu-icon value="done" slot="right" color="#31c27c" @click="passAudit(member.id)"/>
      <mu-icon value="close" slot="right" color="#ff5252" @click="noPassAudit(member.id)"/>
    </mu-list-item>
  </mu-list>
  <mu-divider/>
  <mu-list>
    <mu-sub-header>审核完成</mu-sub-header>
    <mu-list-item v-for="(member,key) in auditList.audit" :title="member.name" :key="key">
      <mu-avatar :src="member.avatar" slot="leftAvatar"/>
      <mu-badge v-if="member.status" content="已通过"  class="pass" slot="right"/>
      <mu-badge v-if="!member.status" content="未通过"  class="no-pass" slot="right"/>
    </mu-list-item>
  </mu-list>
  </div>
</template>
<script>
export default {
  data() {
    return {
      auditList: {
        noAudit:[{
          name: 'Mike Li',
          avatar: '/static/images/avatar1.png',
          id: '1'
        },{
          name: 'Maco Mai',
          avatar: '/static/images/avatar1.png',
          id: '2'
        },{
          name: 'Alex Qin',
          avatar: '/static/images/avatar1.png',
          id: '3'
        },{
          name: 'Allen Qun',
          avatar: '/static/images/avatar1.png',
          id: '4'
        },{
          name: 'Myron Liu',
          avatar: '/static/images/avatar1.png',
          id: '5'
        }],
        audit:[{
          name: 'Mike nn',
          avatar: '/static/images/avatar1.png',
          id: '9',
          status: 1
        },{
          name: 'Mike tt',
          avatar: '/static/images/avatar1.png',
          id: '112',
          status: 0
        },{
          name: 'Mike zhang',
          avatar: '/static/images/avatar1.png',
          id: '12',
          status: 1
        },{
          name: 'Mike wang',
          avatar: '/static/images/avatar1.png',
          id: '13',
          status: 0
        }]
      }
    };
  },
  methods: {
    passAudit(id) {
      alert('你通过了'+id+'的审核');
    },
    noPassAudit(id) {
      alert('你拒绝了'+id+'的申请');
    }
  },
  created() {
      this.groupId = this.$route.params.id;
      this.$root.eventHub.$emit('setAppbar',{
          title: '审核记录',
          isBack: true,
          backUrl: '#/team/:'+this.groupId
      });
      this.$root.eventHub.$emit('showBottom',false);
  }
}
</script>
<style lang="scss" ref="stylesheet/scss">
@import './static/css/style.scss';
  .team-audit{
    .mu-item-right {
      right: 35px;
      i{
        margin: 0 20px;
        @extend %d-i-b;
      }
    }
    .mu-badge{
      width: 50px;
      padding: 3px 6px;
    }
    .pass {
        .mu-badge {
         background-color: $main-color; 
        }
    }
    .no-pass {
      .mu-badge {
         background-color: $warn-color; 
      }
    }
  }
</style>
