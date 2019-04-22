<template>
  <v-container fill-height fluid grid-list-xl>
    <v-layout justify-center wrap>
      <v-flex xs12 md8>
        <material-card
          color="purple"
          title="New User Registry"
          text="We will be thankful if you fill this form."
        >
          <v-form ref="form" v-model="valid" lazy-validation>
            <v-container py-0>
              <v-layout wrap>
                <v-flex xs12 md4>
                  <v-text-field
                    class="purple-input"
                    prepend-icon="mdi-at"
                    name="username"
                    label="Username"
                    type="text"
                    :rules="usernameRules"
                    required
                  />
                </v-flex>
                <v-flex xs12 md4>
                  <v-text-field
                    class="purple-input"
                    prepend-icon="mdi-account-outline"
                    name="fullname"
                    label="Full name"
                    type="text"
                    :rules="nameRules"
                    required
                  />
                </v-flex>
                <v-flex xs12 md4>
                  <v-text-field
                    class="purple-input"
                    prepend-icon="mdi-email-variant"
                    name="email"
                    label="E-mail"
                    type="email"
                    :rules="emailRules"
                    required
                  />
                </v-flex>
                <v-flex xs12 md4>
                  <v-text-field
                    class="purple-input"
                    prepend-icon="mdi-phone"
                    name="phoneNumber"
                    label="Phone number"
                    type="number"
                    :rules="phoneRules"
                    required
                  />
                </v-flex>
                <v-flex xs12 md4>
                  <v-select
                    class="purple-input"
                    prepend-icon="mdi-gender-male-female"
                    v-model="select"
                    :items="genders"
                    :rules="[v => !!v || 'Item is required']"
                    label="Gender"
                    required
                  />
                </v-flex>
                <v-flex xs12 md4>
                  <v-dialog
                    dark
                    ref="dialog"
                    v-model="modal"
                    :return-value.sync="date"
                    persistent
                    lazy
                    full-width
                    width="290px"
                  >
                    <template>
                      <v-text-field
                        v-model="date"
                        label="Picker in dialog"
                        prepend-icon="mdi-calendar"
                        readonly
                      ></v-text-field>
                    </template>
                    <v-date-picker v-model="date" scrollable>
                      <v-spacer></v-spacer>
                      <v-btn flat color="purple" @click="modal = false">Cancel</v-btn>
                      <v-btn flat color="purple" @click="$refs.dialog.save(date)">OK</v-btn>
                    </v-date-picker>
                  </v-dialog>
                </v-flex>
                <v-flex xs12 md12>
                  <v-text-field
                    class="purple-input"
                    prepend-icon="mdi-textbox-password"
                    id="password"
                    name="password"
                    label="Password"
                    type="password"
                    required
                  />
                </v-flex>
                <v-flex xs12 text-xs-right>
                  <v-btn class="mx-0 font-weight-light" color="primary">Update Profile</v-btn>
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
    date: new Date().toISOString().substr(0, 10),
    modal: false,
    valid: true,
    name: "",
    nameRules: [
      v => !!v || "Full name is required",
      v => (v && v.length <= 40) || "Name must be less than 40 characters"
    ],
    phoneRules: [
      v => !!v || "Phone number is required",
      v =>
        (/^[0-9]*$/.test(v) && v.length >= 10) || "Phone must be only numbers"
    ],
    usernameRules: [v => !!v || "Username is required"],
    email: "",
    emailRules: [
      v => !!v || "E-mail is required",
      v => /.+@.+/.test(v) || "E-mail must be valid"
    ],
    select: null,
    genders: ["Male", "Female"]
  }),

  methods: {
    validate() {
      if (this.$refs.form.validate()) {
        this.snackbar = true;
      }
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    }
  }
};
</script>