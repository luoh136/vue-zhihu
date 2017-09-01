import Vue from 'vue'
import Router from 'vue-router'
import layout from '@/components/layout'
import last from '@/components/laststories'
import content from '@/components/content'
import themelist from '@/components/themelist'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'layout',
      component: layout,
      children:[
	      {
	      	path: '/last',
	        name: 'laststories',
	        component: last
	      },
		    {
			  	path: '/content',
			  	name: 'content',
			  	component: content
			  },
			  {
			  	path: '/themelist/:id',
			  	name: 'themelist',
			  	component:themelist
			  }
      ]
    }
  ]
})
