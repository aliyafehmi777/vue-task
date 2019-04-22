<template>
  <v-layout row justify-center>
    <v-dialog v-model="deleteDialog" max-width="23.5%">
      <v-card>
        <v-card-text>Are you sure, do you want to delete {{ delCourses.CourseName }} ?</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" flat="flat" @click="$emit('disagree')">No</v-btn>
          <v-btn color="green darken-1" flat="flat" @click="$emit('agree')">Yes</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
</template>
<script>
export default {
  props: ["deleteDialog", "delCourses"]
};
</script>