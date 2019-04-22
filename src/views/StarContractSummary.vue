<template>
  <v-layout wrap>
    <v-flex sm6 xs12 md6 lg4>
      <material-stats-card
        class="text-primary"
        color="ternarity"
        icon="mdi-star"
        title="My Total Star Contracts"
        value="552"
        small-value=" Stars on your contract"
      />
    </v-flex>
    <v-flex sm6 xs12 md6 lg4>
      <material-stats-card
        color="primary"
        icon="mdi-star"
        title="My Total Insvestment"
        value="0"
        small-value="EURO"
      />
    </v-flex>
    <v-flex sm6 xs12 md6 lg4>
      <material-stats-card
        color="primary"
        icon="mdi-star"
        title="My Star Contract Earnings"
        value="0"
        small-value="EURO"
      />
    </v-flex>
    <v-flex sm6 xs12 md6 lg4>
      <material-stats-card
        color="secondary"
        icon="mdi-account-group"
        title="Total Team Star Contracts"
        value="257"
        small-value="Stars on your team contract"
      />
    </v-flex>
    <v-flex sm6 xs12 md6 lg4>
      <material-stats-card
        color="accent"
        icon="mdi-account-group"
        title="Total Team Investment"
        value="1569"
        small-value="EURO"
      />
    </v-flex>
    <v-flex sm6 xs12 md6 lg4>
      <material-stats-card
        color="error"
        icon="mdi-account-group"
        title="The Team"
        value="27"
        small-value="Users"
      />
    </v-flex>
    <v-flex sm6 xs12 md6 lg4>
      <material-stats-card
        color="info"
        icon="mdi-fire"
        title="Occupancy Percentage"
        small-value="%"
        value="12"
      />
    </v-flex>
    <v-flex sm6 xs12 md6 lg4>
      <material-stats-card
        color="success"
        icon="mdi-account"
        title="Team I Sponsor"
        value="11"
        small-value="Users"
      />
    </v-flex>
    <v-flex sm6 xs12 md6 lg4>
      <material-stats-card
        color="warning"
        icon="mdi-account-group"
        title="Profitability"
        small-value="About %"
        value="7-10"
      />
    </v-flex>
  </v-layout>
</template>
