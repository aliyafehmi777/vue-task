
<template>
  <v-container mt-1 ml-3>
    <material-card color="green" title="Sign Up" text="Please, enter your data.">
      <form width="200px">
        <label>Name:</label>
        <v-text-field v-model="user.name"></v-text-field>
        <label>Email:</label>
        <v-text-field v-model="user.email"></v-text-field>

        <v-btn color="success" @click="submit">submit</v-btn>
        <v-btn color="success" @click="getData">Show Data</v-btn>
        <template>
          <ul>
            <li
              v-for="( u, index) in users"
              :key="index"
              style="listStyle:none"
            >{{ u.name }} - {{ u.email }}</li>
          </ul>
        </template>
      </form>
    </material-card>
  </v-container>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      user: {
        name: "",
        email: ""
      },
      users: []
    };
  },
  methods: {
    submit() {
      axios
        .post(
          "https://myfirstproject-93489.firebaseio.com/users.json",
          this.user
        )
        .then(
          response => {
            console.log(response);
          },
          error => {
            console.log(error);
          }
        );
    },

    getData() {
      axios
        .get("https://myfirstproject-93489.firebaseio.com/users.json")
        .then(response => {
          const result = [];
          const data = response.data;
          for (let key in data) {
            result.push(data[key]);
          }
          console.log(result);
          // this.users = result;
        });
    },
    created() {
      const customActions = {
        saveAlt: {
          method: "POST",
          URL: "https://myfirstproject-93489.firebaseio.com/alternative.json"
        }
      };
      this.users = this.$response("users.json", {}, customActions);
    }
  }
};
</script>