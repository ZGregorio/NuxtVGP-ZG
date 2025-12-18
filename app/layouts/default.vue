<template>
	<v-app>
		<v-main>
			<header>
				<v-app-bar>
					<v-toolbar-title><strong>SpaceX API Playground</strong></v-toolbar-title>
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
						prepend-icon="mdi-rocket-launch"
					/>

					<v-list-item
						title="SpaceX Rocket Details"
						component="NuxtLink"
						to="/spacex-rocket"
						prepend-icon="mdi-rocket"
					/>
					</v-list>
				</v-navigation-drawer>
			</header>
			<slot />
			<footer>
				<v-footer class="text-center d-flex flex-column ga-2 py-4">
					<div class="d-flex ga-3">
					<v-btn
						v-for="icon in icons"
						:key="icon"
						:icon="icon"
						density="comfortable"
						variant="text"
					></v-btn>
					</div>

					<v-divider class="my-2" thickness="2" width="50"></v-divider>

					<div class="text-caption font-weight-regular ">
						This mini-project was created by Zejirah Gavin S. Gregorio in accordance to his application at Apollo Systems. If you're curious about the process for this project, feel free to check the dev logs and click the button below.
					</div>

					<v-divider></v-divider>

					<div>
						<v-btn
							variant="text"
						>
						Dev logs
						</v-btn>
					</div>
				</v-footer>
			</footer>
		</v-main>
	</v-app>
</template>
<script>
export default {
	name: 'DefaultLayout',
}
</script>
