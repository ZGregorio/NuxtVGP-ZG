<template>
  <NuxtPage/>

  <v-row>
    <v-col cols="4" v-for="rocket in rockets" :key="rocket.name">
        <v-card
            class="mx-auto my-12"
            max-width="374"
        >
            <v-img
            height="250"
            src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
            cover
            ></v-img>

            <v-card-item>
            <v-card-title><strong>{{ rocket.name }}</strong></v-card-title>

            <v-card-subtitle>
                <v-col>
                    <v-row>
                        <span class="me-1">Height: {{ rocket.height.feet }}ft / {{ rocket.height.meters }}m</span>
                    </v-row>
                    <v-row>
                        <span class="me-1">Mass: {{ rocket.mass.kg }}kgs / {{ rocket.mass.lb }}lbs</span>
                    </v-row>
                    <v-row>
                        <span class="me-1">Diameter: {{ rocket.diameter.feet }}ft / {{ rocket.diameter.meters }}m</span>
                    </v-row>
                </v-col>
            </v-card-subtitle>
            </v-card-item>

            <v-card-text>
            <div>{{ rocket.description }}</div>
            </v-card-text>

            <v-divider class="mx-4 mb-1"></v-divider>

            <v-card-title>
                <strong>Extra Information:</strong>
            </v-card-title>

            <v-card-text>
                <v-col>
                    <v-row>
                        <div>First flight date: {{ rocket.first_flight }}</div>
                    </v-row>
                    <v-row>
                        <div>Stages: {{ rocket.stages }}</div>
                    </v-row>
                </v-col>
            </v-card-text>
        </v-card>
    </v-col>
  </v-row>
</template>

<script lang="ts" setup>
  import { ref } from 'vue'
  const query = gql`  
    query getRockets {
    rockets {
        name
        description
        first_flight
        height {
            feet
            meters
        }
        diameter {
            feet
            meters
        }
        mass {
            kg
            lb
        }
        stages
    }
  }
  `
  const { data } = useAsyncQuery<{
    rockets: {
      name: string
      description: string
      first_flight: string
      height: { 
        feet: number
        meters: number
      }
      diameter: { 
        feet: number
        meters: number
      }
      mass: { 
        kg: number
        lb: number
      }
      stages: number
    }[]
  }>(query)

  const rockets = computed(() => 
  (data.value?.rockets ?? []).map(rockets => ({
    ...rockets,
    date: new Date(rockets.first_flight).toLocaleDateString()
  }))
)
</script>