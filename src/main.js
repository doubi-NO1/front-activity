import Vue from 'vue';
import App from './app.vue';
import teamList from './components/team/list.vue';
import teamDetail from './components/team/detail.vue';
import teamInvitation from './components/team/invitation.vue';
import teamMember from './components/team/member.vue';
import addMember from './components/team/add.vue';
import teamAudit from './components/team/audit.vue';
import teamCreated from './components/team/created.vue';
import activityList from './components/activities/list.vue';
import activityDel from './components/activities/detail.vue';
import activityComment from './components/activities/comment.vue';
import activityPic from './components/activities/picture.vue';
import activityPub from './components/activities/publish.vue';
import person from './components/person/list.vue';
import personEdit from './components/person/edit.vue';
import Router from 'vue-router';
import MuseUI from 'muse-ui';
import 'muse-ui/dist/muse-ui.css';
import { eventHub } from './components/eventHub';

Vue.use(Router);
Vue.use(MuseUI);

let routes = [
	{
		path: '/',
		redirect: '/team',
		component: App
	},{
		path: '/index',
		redirect: '/team',
		component: App
	},{
		path: '/team',
		component: teamList
	},{
		path: '/team/create',
		component: teamCreated
	},{
		path: '/team/:id',
		component: teamDetail
	},{
		path: '/team/:id/invitation',
		component: teamInvitation
	},{
		path: '/team/:id/member',
		component: teamMember
	},{
		path: '/team/:id/member/add',
		component: addMember
	},{
		path: '/team/:id/audit',
		component: teamAudit
	},{
		path: '/team/:id/edit',
		component: teamCreated
	},{
		path: '/activity',
		component: activityList
	},{
		path: '/activity/pub',
		component: activityPub
	},{
		path: '/activity/:id',
		component: activityDel
	},{
		path: '/activity/:id/comment',
		component: activityComment
	},{
		path: '/activity/:id/pic',
		component: activityPic
	},{
		path: '/activity/:id/edit',
		component: activityPub
	},{
		path: '/person',
		component: person
	},{
		path: '/person/edit',
		component: personEdit
	}
];
let router = new Router({
	routes
});
/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	template: '<App/>',
	components: { App },
	data: {
		eventHub: new Vue()
	}
});