export default (router) => router.map({
	'/': {
		name:'list',
		component: function (resolve) {
      		require(['../pages/list/list.vue'], resolve)
      	}
	},
	'/login': {
		name:'login',
		component: require('../pages/login/login')
	}
});