<template>
	<div class="themelist">
		<div class="banner">
			<img :src="themedes.image" class="ban" />
			<p class="name">{{themedes.name}}</p>
			<p class="des">{{themedes.description}}</p>
		</div>
		<ul class="list">
			<li class="list-item" v-for="themede in themedes.stories" @click="gotoContent(themede.id)">
				<img :src="themede.images"/>
				<p>{{themede.title}}</p>
			</li>
		</ul>
	</div>
</template>

<script>
	export default{
		name:'themelist',
		data(){
			return{
				themedes:''
			}
		},
		created(){
			this.getThemes()
		},
		//监听路由变化 执行getThemes
		watch: {
	    	'$route': 'getThemes'
	  	},
		methods:{
			getThemes(){
				this.$http.get('https://zhihu-daily.leanapp.cn/api/v1/themes/'+this.$route.params.id).then((response)=>{
					this.themedes=response.body.THEMEDES;
				},(response)=>{
					alert(response)
				})
			},
			//进行路由跳转
			gotoContent(id){
				this.$router.push({
					name:'content',
					query:{
						id
					}
				})
			}
		}
	}
</script>

<style>
	.banner{position: relative;}
	.ban{display: block;width: 100%;}
	.name{position: absolute;left: 0;top:0;color: #fff;padding:4px;font-size: 12px;background: rgba(0,0,0,.4);border-bottom-right-radius: 6px;}
	.des{position: absolute;left: 0;bottom: 0;width:100%;color: #fff;text-align: center;font-size: 18px;background: rgba(0,0,0,.3);padding-bottom:5px}
	.list-item{padding: 10px;border-bottom: 1px solid #ccc;}
	.list-item:after{content: " ";display: block;clear: both;}
	.list-item img{max-height: 60px;float: left;}
	.list-item p{float: left;width: auto;margin-left: 5px;}
</style>