<template>
	<NuxtPage/>

	<v-container>
		
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
