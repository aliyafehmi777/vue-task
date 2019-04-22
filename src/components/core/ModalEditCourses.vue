<template>
  <v-dialog v-model="dialog" persistent max-width="70%">
    <v-card>
      <v-card-title>
        <span class="headline">Courses</span>
      </v-card-title>
      <v-card-text>
        <v-container grid-list-md>
          <v-layout wrap>
            <v-flex xs12 sm6 md4>
              <v-text-field label="Course Name*" required v-model="editCourses.courseName"></v-text-field>
            </v-flex>
            <v-flex xs12 sm6 md4>
              <v-text-field
                v-model="editCourses.courseType"
                label="Course Type*"
                hint="example of persistent helper text"
                persistent-hint
                required
              ></v-text-field>
            </v-flex>
            <v-flex xs12 sm6 md4>
              <v-text-field label="Course Vedios*" v-model="editCourses.courseVedios" required></v-text-field>
            </v-flex>
            <v-flex xs12 md6>
              <v-text-field label="Duration*" v-model="editCourses.duration" required></v-text-field>
            </v-flex>
            <v-flex xs12 md6>
              <v-text-field label="Instructor Name*" v-model="editCourses.instructorName" required></v-text-field>
            </v-flex>
          </v-layout>
        </v-container>
        <small>*indicates required field</small>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="green darken-1" flat @click="$emit('close')">Close</v-btn>
        <v-btn color="blue darken-1" flat @click="$emit('save')">Save</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script>
export default {
  props: ["dialog", "editCourses"]
};
</script>