<template>
  <v-app light>
    <organism-header />

    <v-main>
      <v-container>
        <slot />
      </v-container>
    </v-main>

    <organism-footer />
  </v-app>
</template>

<script>
// noinspection JSUnusedGlobalSymbols
export default {
  name: 'LayoutsDefault'
}
</script>
