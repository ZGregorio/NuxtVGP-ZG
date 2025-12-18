<template>
	<NuxtPage/>

	<v-container class="text-center">
		<h1 style="font-size: xx-large;">
			Welcome to the SpaceX API Project
		</h1>
		<br></br>
		<p>This exam serves as both a practice and a way to identify my strengths and areas for improvement.</p>
		<p>(Apologies for the lack of design. I didn't have enough time but I might complete this mini-project after holidays)</p>
	</v-container>
</template>
<script lang="ts" setup>
const store = useCounter()
const selection = ref(0)
const query = gql`
	query getShips {
		ships {
			id
			name
			active
		}
	}
`
const { data } = useAsyncQuery<{
	ships: {
		id: string
		name: string
		active: boolean
	}[]
}>(query)
const ships = computed(() => data.value?.ships ?? [])
</script>
