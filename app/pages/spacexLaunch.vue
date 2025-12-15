<template>

</template>

<script lang="ts" setup>
const query = gql`
	query getLaunch {
		launch: {
		mission_name
		launch_date_utc
		launch_site
        rocket
        details
	}
`
const { data } = useAsyncQuery<{
	launch: {
		mission_name: string
		launch_date_utc: string
		launch_site: string
        rocket: string
        details: string
	}[]
}>(query)
const launch = computed(() => data.value?.launch ?? [])
</script>