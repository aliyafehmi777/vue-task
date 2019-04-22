<template>
  <v-layout>
    <v-container>
      <template class="addBtn">
        <v-btn dark class="mb-5" color="primary" @click.stop="addCourse()" icons>Add Course</v-btn>
      </template>
      <v-container>
        <v-data-table :headers="headers" :items="courses" class="elevation-1">
          <template slot="header" slot-scope="{ header }">
            <v-tooltip bottom>
              <template>
                <span>{{ header.text }}</span>
              </template>
              <span>{{ header.text }}</span>
            </v-tooltip>
          </template>
          <template slot="items" slot-scope="{ item, index }">
            <td>{{ index+1 }}</td>
            <td>{{ item.courseName }}</td>
            <td class="text-xs-right text-md-left">{{ item.courseType }}</td>
            <td class="text-xs-right text-md-left">{{ item.courseVedios }}</td>
            <td class="text-xs-right text-md-left">{{ item.duration }}</td>
            <td class="text-xs-right text-md-left">{{ item.instructorName }}</td>
            <td class="text-xs-right">
              <v-tooltip top content-class="top">
                <v-btn
                  slot="activator"
                  class="v-btn--simple"
                  color="success"
                  @click.stop="editCourse(item)"
                  icon
                >
                  <img src="../assets/edit.png" alt>
                </v-btn>
                <span style="color: #fff;">Edit</span>
              </v-tooltip>
            </td>
            <td class="text-xs-right">
              <v-tooltip top content-class="top">
                <v-btn
                  slot="activator"
                  class="v-btn--simple"
                  color="success"
                  @click.stop="delCourse(item)"
                  icon
                >
                  <img src="../assets/delete.png" alt>
                </v-btn>
                <span style="color: #fff;">Delete</span>
              </v-tooltip>
            </td>
          </template>
        </v-data-table>
        <template>
          <modal-course
            :dialog="dialog"
            @close="close()"
            :editCourses="editCourses"
            :modalTitle="modalTitle"
            @save="save()"
          >
            <input type="text">
          </modal-course>
        </template>
      </v-container>
    </v-container>
  </v-layout>
</template>
<script>
import ModalCourse from "../components/core/ModalCourse.vue";
export default {
  components: {
    ModalCourse
  },
  data: () => ({
    show: false,
    editedIndex: -1,
    dialog: false,
    editCourses: {},
    desserts: [],
    defaultItem: {},
    addCourse: {},
    headers: [
      {
        text: "S/No",
        align: "left",
        sortable: false,
        value: "serial"
      },
      { text: "Course_Name", value: "courseName" },
      { text: "Course_Type", value: "courseType", sortable: false },
      { text: "Course_Vedios", value: "courseVedios", sortable: false },
      { text: "Duration (hr)", value: "duration", sortable: false },
      { text: "Instructor_Name", value: "instructorName", sortable: true },
      { text: "Action", value: "action", sortable: false }
    ],
    courses: [
      {
        courseName: "Work Press",
        courseType: "Web",
        courseVedios: "Vedio-1",
        duration: 2,
        instructorName: "Alia"
      },
      {
        courseName: "Android",
        courseType: "Mobile",
        courseVedios: "Vedio-1",
        duration: 3,
        instructorName: "Nousheen"
      },
      {
        courseName: "Networking",
        courseType: "Network",
        courseVedios: "Vedio-1",
        duration: 3,
        instructorName: "Shahin"
      },
      {
        courseName: "Algorithms",
        courseType: " Algos",
        courseVedios: "Vedio-1",
        duration: 4,
        instructorName: "Sohail"
      },
      {
        courseName: "Vue Course",
        courseType: "Web",
        courseVedios: "Vedio-1",
        duration: 5,
        instructorName: "Noor Khan"
      },
      {
        courseName: "React Course",
        courseType: "Web",
        courseVedios: "Vedio-1",
        duration: 3,
        instructorName: "Afaq"
      }
    ],
    editCourse(item) {
      this.dialog = true;
      this.editedIndex = this.courses.indexOf(item);
      this.editCourses = Object.assign({}, item);
    },
    addCourse() {
      this.dialog = true;
    },

    delCourse(item) {
      const index = this.courses.indexOf(item);
      confirm(`Are you sure you want to delete ${item.courseName}`) &&
        this.courses.splice(index, 1);
    },

    close() {
      this.dialog = false;
      setTimeout(() => {
        this.editCourses = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      }, 300);
    },

    save() {
      if (this.editedIndex > -1) {
        Object.assign(this.courses[this.editedIndex], this.editCourses);
      } else {
        this.courses.push(this.editCourses);
      }
      this.close();
    }
  }),
  computed: {
    modalTitle() {
      return this.editedIndex === -1 ? "Add New Course" : "Edit Course";
    }
  }
};
</script>