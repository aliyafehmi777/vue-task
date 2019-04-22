<template>
  <v-container fill-height fluid grid-list-xl>
    <v-layout justify-center wrap>
      <v-flex xs12 md8>
        <material-card
          color="purple"
          title="Login Form"
          text="Please, provide us this information."
        >
          <v-form>
            <v-container py-0>
              <v-layout wrap>
                <v-flex xs12 md6>
                  <v-text-field
                    class="purple-input"
                    prepend-icon="mdi-login-variant"
                    name="login"
                    label="Login"
                    type="text"
                  />
                </v-flex>
                <v-flex xs12 md6>
                  <v-text-field
                    class="purple-input"
                    id="password"
                    prepend-icon="mdi-textbox-password"
                    name="password"
                    label="Password"
                    type="password"
                  />
                </v-flex>
                <v-flex xs12 text-xs-right>
                  <v-btn class="mx-0 font-weight-light" color="secondary">Login</v-btn>
                  <v-btn class="mx-0 font-weight-dark" color="info">Forgot Password?</v-btn>
                </v-flex>
              </v-layout>
            </v-container>
          </v-form>
        </material-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    drawer: null
  })
};
</script>

<style scoped>
.primary--text {
  color: #8e24aa !important;
  caret-color: #8e24aa !important;
}
</style>
