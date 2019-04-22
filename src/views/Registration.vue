
<template>
  <v-container mt-1 ml-3>
    <material-card color="green" title="Registration" text="Please, enter your data.">
      <form width="200px">
        <label>First Name:</label>
        <v-text-field v-model="user.firstName"></v-text-field>
        <label>Last Name:</label>
        <v-text-field v-model="user.lastName"></v-text-field>
        <label>Email:</label>
        <v-text-field v-model="user.email"></v-text-field>
        <label>Password:</label>
        <v-text-field v-model="user.Password"></v-text-field>

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
