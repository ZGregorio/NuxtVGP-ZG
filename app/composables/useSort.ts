export function useSort(
    filteredLaunches: Ref<any[]>,
    sortState: Ref<'asc' | 'desc'>
) {
    const sortedLaunches = computed(() => {
        if ((sortState.value) === 'asc')
            return filteredLaunches.value.slice().sort((a, b) => new Date(a.launch_date_utc).getTime() - new Date(b.launch_date_utc).getTime())
        if ((sortState.value) === 'desc')
            return filteredLaunches.value.slice().sort((a, b) => new Date(b.launch_date_utc).getTime() - new Date(a.launch_date_utc).getTime())
        return filteredLaunches.value
    })
return {sortedLaunches}
}