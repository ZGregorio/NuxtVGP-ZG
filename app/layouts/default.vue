<template>
	<v-app>
		<v-main>
			<AppBar />
			<slot />
			<Footer />
		</v-main>
	</v-app>
</template>

<script setup>
import AppBar from '~/components/AppBar.vue';
import Footer from '~/components/Footer.vue';
</script>
