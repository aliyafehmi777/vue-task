<template>
  <v-container fill-height fluid grid-list-xl>
    <v-layout justify-center wrap>
      <v-flex md12>
        <material-card color="green" title="Users" text="List of users">
          <v-card-title>
            <v-text-field
              v-model="search"
              append-icon="mdi-account-search-outline"
              label="Search"
              single-line
              hide-details
            ></v-text-field>
            <v-icon>mdi-gears</v-icon>
          </v-card-title>
          <v-data-table
            :headers="headers"
            :items="indexedItems"
            hide-actions
            :pagination.sync="pagination"
            must-sort
            :search="search"
          >
            <template slot="headerCell" slot-scope="{ header }" @click="changeSort(header.value)">
              <span
                class="subheading font-weight-light text-success text--darken-3"
                v-text="header.text"
              />
            </template>
            <template slot="items" slot-scope="{ item }">
              <tr>
                <td style="width: 6rem">
                  <span style="cursor: pointer" @click="userExpand(item)">
                    <v-icon v-if="!item.expand">mdi-plus</v-icon>
                    <v-icon v-else>mdi-minus</v-icon>
                  </span>
                  {{ item.userId }}
                </td>
                <td class="profile" style="width: 3rem">
                  <v-avatar size="40" style="margin-top:0.2rem;">
                    <v-img src="img/user.jpg"></v-img>
                  </v-avatar>
                  <div class="text" style="width: 1rem">{{ item.userName }}</div>
                </td>
                <td v-text="item.firstName"></td>
                <td v-text="item.lastName"></td>
                <td v-text="item.email"></td>
                <td style="width:11rem;">
                  <v-text-field
                    v-model="item.password"
                    :append-icon="item.show ? 'fa-eye' : 'fa-eye-slash'"
                    :rules="[rules.required, rules.min]"
                    :type="item.show ? 'text' : 'password'"
                    name="input-10-1"
                    label="Password"
                    hint="At least 8 characters"
                    @click:append="showPass(item)"
                  ></v-text-field>
                </td>
                <td>
                  <img :src="`img/flags/cr.png`" alt>
                  {{ item.country }}
                </td>
                <td class="status">
                  <v-select :items="item.status" label="Standard"></v-select>
                </td>
                <td class="text-xs-right">
                  <v-tooltip top content-class="top">
                    <v-btn slot="activator" class="v-btn--simple" color="success" icon>
                      <img src="../assets/edit.png" alt @click.stop="editUser(item)">
                    </v-btn>
                    <span style="color: #fff;">Edit</span>
                  </v-tooltip>
                  <v-tooltip top content-class="top">
                    <v-btn slot="activator" class="v-btn--simple" color="danger" icon>
                      <img src="../assets/delete.png" alt @click.stop="delUser(item)">
                    </v-btn>
                    <span style="color: #fff;">Delete</span>
                  </v-tooltip>
                </td>
              </tr>
              <template v-if="item.expand">
                <tr>
                  <td></td>
                  <td>{{ item.userName }}</td>
                  <td>{{ item.firstName }}</td>
                  <td>{{ item.lastName }}</td>
                  <td>{{ item.email }}</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              </template>
              <user-edit-modal :dialog="dialog" @close="dialog = false" :editUsers="editUsers">
                <input type="text">
              </user-edit-modal>
              <delete-user-modal
                :deleteDialog="deleteDialog"
                @disagree="deleteDialog = false"
                @agree="deleteUser()"
                :user="delUsers"
              ></delete-user-modal>
            </template>
            <v-alert
              style="background:red;"
              v-slot:no-results
              :value="true"
              color="error"
              icon="warning"
            >Your search for "{{ search }}" found no results.</v-alert>
          </v-data-table>
          <div class="text-xs-center pt-2">
            <v-pagination v-model="pagination.page" :length="pages"></v-pagination>
          </div>
        </material-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
import userEditModal from "../components/core/ModalEditUser.vue";
import deleteUserModal from "../components/core/ModalDeleteUser.vue";
export default {
  components: {
    userEditModal,
    deleteUserModal
  },
  data: () => ({
    dialog: false,
    rules: {
      required: value => !!value || "Required.",
      min: v => v.length >= 8 || "Min 8 characters"
    },
    search: "",
    deleteDialog: false,
    pagination: {
      rowsPerPage: 6,
      descending: false
    },
    delUsers: {},
    editUsers: {},
    flags: [
      "ad",
      "ae",
      "af",
      "ag",
      "al",
      "am",
      "ao",
      "ar",
      "at",
      "au",
      "az",
      "ba",
      "bb",
      "bd",
      "be",
      "bf",
      "bg",
      "bh",
      "bi",
      "bj",
      "bn",
      "bo",
      "br",
      "bs",
      "bt",
      "bw",
      "by",
      "bz",
      "ca",
      "cd",
      "cf",
      "cg",
      "ch",
      "ci",
      "cl",
      "cm",
      "cn",
      "co",
      "cr",
      "cu",
      "cv",
      "cy",
      "cz",
      "de",
      "dj"
    ],
    headers: [
      {
        sortable: true,
        text: "User ID",
        value: "userid"
      },
      {
        sortable: true,
        text: "User Name",
        value: "userName"
      },
      {
        sortable: true,
        text: "First Name",
        value: "firstName"
      },
      {
        sortable: true,
        text: "Last Name",
        value: "lastName"
      },
      {
        sortable: false,
        text: "Email",
        value: "email"
      },
      {
        sortable: false,
        text: "Password",
        value: "password"
      },
      {
        sortable: false,
        text: "Country",
        value: "country"
      },
      {
        sortable: false,
        text: "Status",
        value: "status"
      },
      {
        sortable: false,
        text: "Actions",
        value: "salary",
        align: "right"
      }
    ],
    items: [
      {
        userId: "111b",
        userName: "Aliya",
        name: "Aliya Rice",
        firstName: "Aliya",
        lastName: "Rice",
        email: "aliya@gmail.com",
        password: "asdfasdf@123",
        country: "USA",
        status: ["Active", "Not Active", "Suspended"],
        show: false,
        expand: false
      },
      {
        userId: "112c",
        userName: "Nousheen",
        name: "Nousheen ali",
        firstName: "Nousheen",
        lastName: "ali",
        email: "nousheen@gmail.com",
        password: "asdfasdf@123",
        status: ["Active", "Not Active", "Suspended"],
        country: "Canada",
        show: false,
        expand: false
      },
      {
        userId: "113d",
        userName: "Zahid",
        name: "Zahid Ali",
        firstName: "Zahid",
        lastName: "Ali",
        email: "zahidali@gmail.com",
        password: "asdfasdf@123",
        country: "England",
        status: ["Active", "Not Active", "Suspended"],
        show: false,
        expand: false
      },
      {
        userId: "114e",
        userName: "Qurban",
        name: "Qurban Ali",
        firstName: "Qurban",
        lastName: "Ali",
        email: "qurban@gmail.com",
        password: "asdfasdf@123",
        country: "Fineland",
        status: ["Active", "Not Active", "Suspended"],
        show: false,
        expand: false
      },
      {
        userId: "115f",
        userName: "Nousheen",
        name: "Nousheen ali",
        firstName: "Nousheen",
        lastName: "ali",
        email: "nousheen@gmail.com",
        password: "asdfasdf@123",
        country: "Iceland",
        status: ["Active", "Not Active", "Suspended"],
        show: false,
        expand: false
      },
      {
        userId: "116g",
        userName: "Shaheen",
        name: "Shaheen rumi",
        firstName: "Shaheen",
        lastName: "rumi",
        email: "shaheenRumi@gmail.com",
        password: "asdfasdf@123",
        country: "Srilanka",
        status: ["Active", "Not Active", "Suspended"],
        show: false,
        expand: false
      },
      {
        userId: "117h",
        userName: "Nousheen",
        name: "Nousheen ali",
        firstName: "Nousheen",
        lastName: "ali",
        email: "nousheen@gmail.com",
        password: "asdfasdf@123",
        country: "South Africa",
        status: ["Active", "Not Active", "Suspended"],
        show: false,
        expand: false
      },
      {
        userId: "118i",
        userName: "Hadi",
        name: "Hadi Rice",
        firstName: "Hadi",
        lastName: "Rice",
        email: "hadi@gmail.com",
        password: "asdfasdf@123",
        country: "Norway",
        status: ["Active", "Not Active", "Suspended"],
        show: false,
        expand: false
      },
      {
        userId: "119j",
        userName: "sohail",
        name: "sohail ahmed",
        firstName: "sohail",
        lastName: "ahmed",
        email: "sohailAhmed@gmail.com",
        password: "asdfasdf@123",
        country: "Austria",
        status: ["Active", "Not Active", "Suspended"],
        show: false,
        expand: false
      },
      {
        userId: "1110k",
        userName: "afaq",
        name: "afaq ahmed",
        firstName: "afaq",
        lastName: "ahmed",
        email: "afaq@gmail.com",
        password: "asdfasdf@123",
        country: "Pakistan",
        status: ["Active", "Not Active", "Suspended"],
        show: false,
        expand: false
      }
    ]
  }),
  methods: {
    test() {
      console.log("testing...");
    },
    editUser(user) {
      this.dialog = true;
      this.editUsers = user;
    },
    delUser(user) {
      this.delUsers = user;
      this.deleteDialog = true;
    },
    deleteUser() {
      this.items.splice(this.delUsers.id, 1);
      this.deleteDialog = false;
    },
    changeSort(column) {
      if (this.pagination.sortBy === column) {
        this.pagination.descending = !this.pagination.descending;
      } else {
        this.pagination.sortBy = column;
        this.pagination.descending = false;
      }
    },
    showPass(val) {
      this.items[val.id].show == true
        ? (this.items[val.id].show = false)
        : (this.items[val.id].show = true);
    },
    userExpand(val) {
      this.items[val.id].expand == true
        ? (this.items[val.id].expand = false)
        : (this.items[val.id].expand = true);
    }
  },
  computed: {
    pages() {
      if (
        this.pagination.rowsPerPage == null ||
        this.pagination.totalItems == null
      )
        return 0;

      return Math.ceil(
        this.pagination.totalItems / this.pagination.rowsPerPage
      );
    },
    indexedItems() {
      return this.items.map((user, index) => ({
        id: index,
        ...user
      }));
    }
  }
};
</script>
<style scoped>
.v-btn {
  margin: 0 -5px !important;
}
.profile {
  display: flex;
  margin-top: 0.7rem;
  margin-right: 5rem;
}
@media (max-width: 991px) {
  .profile {
    margin-top: 1.1rem;
  }
}
.text {
  padding: 0.8rem 0.5rem;
}
.status {
  width: 10rem;
}

/deep/.v-input__icon i.mdi-plus::before {
  color: red !important;
}
/deep/.v-input__icon i.fa::before {
  font-size: 1rem !important;
}
/deep/.v-pagination__navigation .v-icon {
  font-size: 1rem !important;
}
</style>
