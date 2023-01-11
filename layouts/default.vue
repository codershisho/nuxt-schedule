<template>
  <v-app dark>
    <v-navigation-drawer v-model="drawer" fixed app dark color="primary">
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar fixed app flat color="white">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title>{{ title }}</v-toolbar-title>
      <v-spacer />
    </v-app-bar>
    <v-main style="background-color:#e7e7e7">
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data() {
    return {
      drawer: true,
      items: [
        {
          icon: 'mdi-chart-bubble',
          title: 'Members',
          to: '/members',
        },
        {
          icon: 'mdi-apps',
          title: 'Projects',
          to: '/projects',
        },
        {
          icon: 'mdi-apps',
          title: 'About',
          to: '/about',
        },
      ],
      title: 'Vuetify.js',
    }
  },
}
</script>
