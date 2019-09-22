<template>
	<v-app>
		
		<APPMenu />

		<Toolbar />

		<v-content>
			<appc-arousel />
		</v-content>

		<app-footer />

	</v-app>
</template>

<script>

	import Footer from './components/template/Footer.vue'
	import Carousel from './components/widget/Carousel.vue'
	import Toolbar from './components/template/Toolbar.vue'
	import Menu from './components/template/Menu.vue'
	export default {
		components:{
			//nome ddas tags representativas instanciadoras dos componentes
			appFooter : Footer,
			appcArousel : Carousel,
			Toolbar,
			'APPMenu' : Menu
		},
		data() {
			return {
				itensMenu: [
					{titulo: 'Início', icon: 'dashboard'},
					{titulo: 'Sobre', icon: 'question_answer'}
				],
				fotos: [
					{src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg'},
					{src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg'},
					{src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg'},
					{src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg'}
				]
			}
		}
	}

</script>
