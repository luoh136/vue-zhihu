<template>
	<div class="wrapper">
		<div class="header">{{msg}}</div>
		<div class="main">
			<router-view></router-view>
		</div>
		<div class="subnav">
			<router-link to="/last">最新消息</router-link>
			<theme v-for="theme in themelist" :themes="theme" :key="theme.id"></theme>
		</div>
	</div>
</template>

<script>
import theme from "./theme"
export default {
  name: 'layout',
  data () {
    return {
      msg: '知乎日报',
      themelist:''
    }
  },
  components:{
  	theme
  },
  created(){
  	this.getTheme()
  },
  methods:{
  	getTheme(){
  		this.$http.get('https://zhihu-daily.leanapp.cn/api/v1/themes').then((response)=>{
  			this.themelist=response.body.THEMES.others
  		},(response)=>{
  			alert(response)
  		})
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.wrapper{width:100%;height:100%;overflow: hidden;position: relative;}
	.header{width: 100%;height: 10%;background: #eee;color: #fff;font-size: 24px;line-height: 2;text-align: center;box-shadow: 0 6px 8px 0 rgba(0,37,55,.1);z-index: 999;position: relative;}
	.subnav{width: 20%;border-right: 1px solid #ccc;box-sizing: border-box;position: absolute;left: 0;top:10%;bottom: 0;}
	.main{width: 80%;height: 90%;float: right;overflow: hidden;overflow-y: auto;z-index: 0;position: relative;}
</style>
