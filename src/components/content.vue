<template>
	<div class="ctn">
		<div v-html="content" class="content">
		</div>
		<ul class="more">
			<li>长评论: {{extra.long_comments}}</li>
			<li>段评论: {{extra.short_comments}}</li>
			<li>点赞: {{extra.popularity}}</li>
		</ul>
	</div>
</template>

<script>
	export default{
		name:"content",
		data(){
			return{
				content:"",
				headImage:"",
				extra:''
			}
		},
		created(){
			this.getContent()
		},
		methods:{
			getContent(){
				this.$http.get("https://zhihu-daily.leanapp.cn/api/v1/contents/"+this.$route.query.id).then((response) => {
					this.content='<link rel="stylesheet" type="text/css" href='+response.body.CONTENTS.css[0]+"/>"+response.body.CONTENTS.body;
					this.headImage=response.body.CONTENTS.image;
				},(response) => {
					alert(response)
				})
				this.$http.get("https://zhihu-daily.leanapp.cn/api/v1/contents/extra/"+this.$route.query.id).then((response)=>{
					console.log(response)
					this.extra=response.body.DES;
				},(response)=>{
					
				})
			}
		}
	}
</script>

<style scoped>
	.content{max-width: 960px; margin: 0 auto;}
	.more{overflow: hidden;padding: 10px 0;}
	.more li{width: 33.3%;text-align: center;box-sizing: border-box;float: left;color: #0f94f3;}
	.more li+li{border-left:1px solid #ccc}
</style>