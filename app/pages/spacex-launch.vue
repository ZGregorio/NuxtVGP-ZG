<template>
  <v-app-bar>
    <v-toolbar-title>SpaceX Launch</v-toolbar-title>
    <template v-if="$vuetify.display.mdAndUp">
      <v-btn 
      icon="mdi-magnify" 
      variant="text"
      >
      </v-btn>

      <v-btn 
      icon="mdi-filter" 
      variant="text"
      >
      </v-btn>
    </template>

    <v-btn 
    icon="mdi-dots-vertical" 
    variant="text"
    >
    </v-btn>
  </v-app-bar>

  <v-navigation-drawer 
    expand-on-hover
    permanent
    rail
    >
    <v-list nav>
      <v-list-item
        title="Home Page"
        component="NuxtLink"
        to="/"
        prepend-icon="mdi-home"
      />
      
      <v-list-item
        title="SpaceX Launch Details"
        component="NuxtLink"
        to="/spacex-launch"
        prepend-icon="mdi-rocket"
      />
    </v-list>
  </v-navigation-drawer>

  <NuxtPage/>

  <v-container>
    <v-table>
      <thead>
        <tr>
          <th class="text-left">Mission Name</th>
          <th class="text-left">Launch Date</th>
          <th class="text-left">Launch Site</th>
          <th class="text-left">Rocket</th>
          <th class="text-left">Launch Details</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="launch in launches" :key="launch.mission_name">
          <td>{{ launch.mission_name }}</td>
        </tr>
      </tbody>
    </v-table>
  </v-container>
</template>

<script lang="ts" setup>
const query = gql`  
	query getLaunches {
  launches {
    mission_name
    launch_date_utc
    launch_site {
      site_name_long
    }
    rocket {
      rocket_name
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
    rocket: { rocket_name: string }
    details: string
  }[]
}>(query)

const launches = computed(() => data.value?.launches ?? [])
</script>