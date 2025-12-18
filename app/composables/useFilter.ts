export function useFilter(
    launches: Ref<any[]>,
    selectedYear: Ref<number | null>
) {
     const filteredLaunches = computed(() => {
        if (!selectedYear.value) 
            return launches.value

        return launches.value.filter(
        launch => new Date(launch.launch_date_utc).getFullYear() === selectedYear.value
    )
  })
return {filteredLaunches}
}