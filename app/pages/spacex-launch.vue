<template>
    <v-app-bar>
        <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

        <v-toolbar-title>My files</v-toolbar-title>

        <template v-if="$vuetify.display.mdAndUp">
          <v-btn icon="mdi-magnify" variant="text"></v-btn>

          <v-btn icon="mdi-filter" variant="text"></v-btn>
        </template>

        <v-btn icon="mdi-dots-vertical" variant="text"></v-btn>
      </v-app-bar>

    <v-navigation-drawer v-model="drawer">
      <v-list nav>
        <v-list-item
          title="Home Page"
          component="NuxtLink"
          to="/"
        />
        
        <v-list-item
          title="SpaceX Launch Details"
          component="NuxtLink"
          to="/spacex-launch"
        />
      </v-list>
    </v-navigation-drawer>
    <NuxtPage/>
    <v-container>
      <div>SpaceX Launch Page</div>
        <h2>
            breh
        </h2>
    </v-container>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const drawer = ref(false)
const query = gql`  
	query getLaunch {
		launch {
		  mission_name
		  launch_date_utc 
		  launch_site {
        site_name_long
      }
      rocket {
        name
      }
      details
    }
	}
`
const { data } = useAsyncQuery<{
  launches: {
    mission_name: string
    launch_date_utc: string
    launch_site: { site_name_long: string }
    rocket: { name: string }
    details: string
  }[]
}>(query)

const launch = computed(() => data.value?.launches ?? [])
</script>