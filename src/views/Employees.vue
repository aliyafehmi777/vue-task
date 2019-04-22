
<template>
  <v-container grid-list-md text-xs-center>
    <v-layout row wrap>
      <v-flex v-for="(e, index) in employees" :key="index">
        <v-card xs12 sm4 class="m-0">
          <v-img height="500px" :src="e.avatar">
            <v-layout column fill-height>
              <v-spacer></v-spacer>

              <v-card-title class="white--text pl-5 pt-5">
                <div class="display-1 pl-5 pt-5"></div>
              </v-card-title>
            </v-layout>
          </v-img>

          <v-list two-line>
            <v-list-tile>
              <v-list-tile-action>
                <v-icon color="indigo">User ID:</v-icon>
              </v-list-tile-action>

              <v-list-tile-content>
                <v-list-tile-title>{{ e.id }}</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>

            <v-divider inset></v-divider>

            <v-list-tile>
              <v-list-tile-action>
                <v-icon color="indigo">First Name:</v-icon>
              </v-list-tile-action>

              <v-list-tile-content>
                <v-list-tile-title>{{ e.first_name }}</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
            <v-list-tile>
              <v-list-tile-action>
                <v-icon color="indigo">Last Name:</v-icon>
              </v-list-tile-action>

              <v-list-tile-content>
                <v-list-tile-title>{{ e.last_name }}</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
            <template class="addBtn">
              <v-btn dark class="mb-5" color="primary" @click="getData()" icons>Employee</v-btn>
            </template>
          </v-list>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>
   
<script>
export default {
  data() {
    return {
      employees: []
    };
  },
  methods: {
    getData() {
      this.$http.get("https://reqres.in/api/users?page=2").then(response => {
        this.employees = response.body.data;
        console.log(this.employees);
      });
      // .then(data => {
      //   const result = [];
      //   for (let key in data) {
      //     result.push(data[key]);
      //   }
      //   this.employees = result;
      // });
    }
  },
  mounted() {
    this.getData();
  }
};
</script>

