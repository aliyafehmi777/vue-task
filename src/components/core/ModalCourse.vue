<template>
  <v-dialog v-model="dialog" persistent max-width="60%">
    <v-card>
      <v-card-title>
        <span class="title">{{ modalTitle }}</span>
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
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" flat @click="$emit('close')">Close</v-btn>
          <v-btn color="blue darken-1" flat @click="$emit('save')">Save</v-btn>
        </v-card-actions>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>
<script>
export default {
  props: ["dialog", "editCourses", "modalTitle"]
};
</script>













  <!-- <v-dialog v-model="addDialog" persistent max-width="70%">
    <v-card>
      <v-card-title>
        <span class="headline">Add Courses</span>
      </v-card-title>
      <v-card-text>
        <v-container grid-list-md>
          <v-layout wrap>
            <v-flex xs12 sm6 md4>
              <v-text-field label="Course Name*" required v-model="name"></v-text-field>
            </v-flex>
            <v-flex xs12 sm6 md4>
              <v-text-field
                v-model="type"
                label="Course Type*"
                hint="example of persistent helper text"
                persistent-hint
                required
              ></v-text-field>
            </v-flex>
            <v-flex xs12 sm6 md4>
              <v-text-field label="Course Vedios*" v-model="vedios" required></v-text-field>
            </v-flex>
            <v-flex xs12 md6>
              <v-text-field label="Duration*" v-model="courseDuration" required></v-text-field>
            </v-flex>
            <v-flex xs12 md6>
              <v-text-field label="Instructor Name*" v-model="instructor" required></v-text-field>
            </v-flex>
          </v-layout>
        </v-container>
        <small>*indicates required field</small>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="green darken-1" flat @click="$emit('Close')">Close</v-btn>
        <v-btn color="blue darken-1" flat @click="save(addCourses)">Save</v-btn>
        <p>{{courseName}}</p>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template> -->
<!-- <script>
export default {
  props: ["addDialog"],
  data() {
    return {
      name: "",
      type: "",
      vedios: "",
      courseDuration: "",
      instructor: ""
    };
  },
  methods: {
    save(item) {
      let addedCourse = {
        courseName: this.name,
        courseType: this.type,
        courseVedios: this.vedios,
        duration: this.courseDuration,
        instructorName: this.instructor
      };
      this.$emit("Save", addedCourse);
    }
  }
};
</script> -->