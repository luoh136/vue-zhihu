<template>
	<div class="itembox">
		<div class="item" v-for="item in laststories" @click="gotoContent(item.id)">
			<div class="thumb"><img :src="item.images[0]"/></div>
			<div class="title">{{item.title}}</div>
		</div>
		<div class="beforeNews" @click="getMoreNews()">更多消息</div>
	</div>
</template>

<script>
	import moment from '../common/moment'
	export default {
		name:"laststories",
		data(){
			return{
				laststories:'',
				beforeDate:new Date()
			}
		},
		mounted(){
			this.getData()
		},
		methods:{
			//获取最新日报
			getData(){
				this.$http.get('https://zhihu-daily.leanapp.cn/api/v1/last-stories').then((response) => {
				    // 响应成功回调
				    this.laststories=response.body.STORIES.stories;
				    //console.log(this.laststories)
				}, (response) => {
				    // 响应错误回调
				    alert(reponse)
				});
			},
			//进行路由跳转
			gotoContent(id){
				this.$router.push({
					path:'content',
					query:{
						id
					}
				})
			},
			//获取前一日消息
			getMoreNews(){
				var nextTime=moment.format(this.beforeDate-=24*60*60*1000);
				console.log(nextTime)
				this.$http.get('https://zhihu-daily.leanapp.cn/api/v1/before-stories/'+nextTime).then((response)=>{
					this.laststories.concat(response.body.STORIES.stories);
					this.laststories=this.laststories.concat(response.body.STORIES.stories);
				},(response)=>{
					alert(response)
				})				
			}
		}		
	}
</script>

<style scoped>
	.itembox{padding:3%}
	.item{border-bottom: 1px solid #ccc;overflow: hidden;cursor: pointer;}
	.item .thumb{display:block;width: 20%;max-width:100px;height:100%;float: left;box-sizing: border-box;padding: 3%;overflow: hidden;}
	.item .thumb img{display: block;width: 100%;}
	.item .title{width: 80%;float: left;box-sizing: border-box;padding:3% 0;text-align: left;overflow: hidden;}
</style>