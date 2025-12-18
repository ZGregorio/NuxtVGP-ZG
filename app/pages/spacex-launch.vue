<template>
  <v-app-bar>
    <v-toolbar-title>SpaceX Launch</v-toolbar-title>
    <template v-if="$vuetify.display.mdAndUp">
      <v-btn 
      icon="mdi-magnify" 
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
    <v-row>
      <v-col cols="11">
        <v-select
          label="Filter by Year"
          :items="availableYears"
          v-model="selectedYear"
          clearable
        ></v-select>
      </v-col>
      <v-col cols="1">
        <v-btn 
          icon="mdi-filter" 
          variant="text"
          >
        </v-btn>
      </v-col>
    </v-row>
    <v-row 
        class="w-100 align-center justify-center">
      <v-col class="text-center">
        <strong>Mission Name</strong>
      </v-col>
      <v-col class="text-center">
        <strong>Launch Date</strong>
      </v-col>
      <v-col class="text-center">
        <strong>Launch Site</strong>
      </v-col>
      <v-col class="text-center">
        <strong>Rocket</strong>
      </v-col>
    </v-row>
    <br></br>
    <v-expansion-panels>
      <v-expansion-panel
      v-for="launch in filteredLaunches"
      :key="launch.mission_name"
      >
        <v-expansion-panel-title>
          <v-row class="w-100 align-center justify-center">
            <v-col  >
              <strong>{{ launch.mission_name ?? 'No mission name data Available.' }}</strong>
            </v-col>
            <v-col  class="text-center">
              {{ launch.date ?? 'No launch date data Available.' }}
            </v-col>
            <v-col  class="text-center">
              {{ launch.launch_site?.site_name_long ?? 'No launch site data Available.' }}
            </v-col>
            <v-col  class="text-center">
              {{ launch.rocket?.rocket_name ?? 'No rocket data Available.' }}
            </v-col>
          </v-row>
        </v-expansion-panel-title>
        <v-expansion-panel-text>
          {{ launch.details ?? 'No launch details available.' }}
        </v-expansion-panel-text>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-container>
</template>

<script lang="ts" setup>
  import { ref } from 'vue'
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
  const selectedYear = ref<number | null>(null)
  const availableYears = computed(() => {
    return [...new Set(launches.value.map(l => new Date(l.launch_date_utc).getFullYear()))]
  }
)
  const launches = computed(() => 
  (data.value?.launches ?? []).map(launch => ({
    ...launch,
    date: new Date(launch.launch_date_utc).toLocaleDateString()
  }))
)
  const { filteredLaunches } = useFilter(launches, selectedYear)
</script>