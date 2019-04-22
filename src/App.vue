<template>
  <v-app>
    <!-- <core-toolbar/> -->

    <core-drawer/>
    <!-- The app is rendered at core-view -->
    <core-view/>
  </v-app>
</template>

<style lang="scss">
@import "@/styles/index.scss";
.v-datatable thead th.column.sortable i {
  vertical-align: unset;
}
</style>
