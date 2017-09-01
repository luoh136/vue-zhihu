<template>
	<div @click="goThemelist(themes.id)">{{themes.name}}</div>
</template>

<script>
	export default{
		name:'theme',
		props:['themes'],
		methods:{
			goThemelist(id){
				this.$router.push({
					name:'themelist',
					params: {id}
				})
			}
		}
	}
</script>

<style>
</style>