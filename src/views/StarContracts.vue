<template>
  <div>
    <v-toolbar color="primary">
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat to="#summary">Contract Summary</v-btn>
        <v-btn flat to="#details">Contract Details</v-btn>
        <v-btn flat to="#purchase">Purchase Contracts</v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-container fill-height fluid grid-list-xl>
      <v-layout wrap>
        <!-- Star Contract Summary Section -->
        <v-flex md12 id="summary">
          <material-card
            color="warning"
            title="Star Contract Summary"
            text="Check you Star Contract Data"
          >
            <v-layout wrap>
              <v-flex sm6 xs12 md6 lg4>
                <material-stats-card
                  class="text-primary"
                  color="ternarity"
                  icon="mdi-star"
                  title="My Total Star Contracts"
                  value="552"
                  small-value=" Stars on my contract"
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
                  small-value="Stars on my team"
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
          </material-card>
        </v-flex>
        <!-- Star Contract Details Section -->
        <v-flex md12 lg12 id="details">
          <material-card
            color="purple"
            title="Star Contract Details"
            text="Useful information for you!"
          >
            <v-layout wrap>
              <v-flex sm12 xs12 md6>
                <v-text-field label="Block No." class="purple-input" value="7412589630" disabled/>
              </v-flex>
              <v-flex sm12 xs12 md6>
                <v-text-field label="Contract No." class="purple-input" value="xXx0X" disabled/>
              </v-flex>
              <v-flex md4>
                <v-card color="primary" dark>
                  <v-card-title>
                    <span class="title font-weight-light">Revenue Rate</span>
                  </v-card-title>
                  <v-card-text justify-center align-center class="font-weight-bold">12% - 22%</v-card-text>
                </v-card>
              </v-flex>
              <v-flex md4>
                <v-card color="primary" dark>
                  <v-card-title>
                    <span class="title font-weight-light">Total Purchased</span>
                  </v-card-title>
                  <v-card-text justify-center align-center class="font-weight-bold">57</v-card-text>
                </v-card>
              </v-flex>
              <v-flex md4>
                <v-card color="primary" dark>
                  <v-card-title>
                    <span class="title font-weight-light">Max To Buy</span>
                  </v-card-title>
                  <v-card-text justify-center align-center class="font-weight-bold">250</v-card-text>
                </v-card>
              </v-flex>
              <v-flex md4>
                <v-card color="primary" dark>
                  <v-card-title>
                    <span class="title font-weight-light">Start Historial</span>
                  </v-card-title>
                  <v-card-text justify-center align-center class="font-weight-bold">2019-03-07</v-card-text>
                </v-card>
              </v-flex>
              <v-flex md4>
                <v-card color="primary" dark>
                  <v-card-title>
                    <span class="title font-weight-light">Finish Historial</span>
                  </v-card-title>
                  <v-card-text justify-center align-center class="font-weight-bold">2019-03-22</v-card-text>
                </v-card>
              </v-flex>
              <v-flex md4>
                <v-card color="primary" dark>
                  <v-card-title>
                    <span class="title font-weight-light">Last Participation Historial</span>
                  </v-card-title>
                  <v-card-text justify-center align-center class="font-weight-bold">2019-03-07</v-card-text>
                </v-card>
              </v-flex>
              <v-flex md4>
                <v-card color="primary" dark>
                  <v-card-title>
                    <span class="title font-weight-light">Ordinary Securities</span>
                  </v-card-title>
                  <v-card-text justify-center align-center class="font-weight-bold">Star Coin</v-card-text>
                </v-card>
              </v-flex>
              <v-flex md4>
                <v-card color="primary" dark>
                  <v-card-title>
                    <span class="title font-weight-light">Securities Price</span>
                  </v-card-title>
                  <v-card-text justify-center align-center class="font-weight-bold">1.33 Euro</v-card-text>
                </v-card>
              </v-flex>
              <v-flex md4>
                <v-card color="primary" dark>
                  <v-card-title>
                    <span class="title font-weight-light">Contract Time</span>
                  </v-card-title>
                  <v-card-text justify-center align-center class="font-weight-bold">360 hours</v-card-text>
                </v-card>
              </v-flex>
            </v-layout>
          </material-card>
        </v-flex>
        <!-- Purchase Star Contract Section -->
        <v-flex md12 lg12 id="purchase">
          <material-card
            color="secondary"
            title="Purchase Star Conract"
            text="All Star Contracts within Star Block are listed below. Please, click on the 'add' button to buy the contract at the specified limits."
          >
            <v-layout>
              <v-flex md6>
                <v-text-field
                  label="Select Star Block"
                  class="purple-input"
                  value="xxx0x"
                  disabled
                />
              </v-flex>
              <v-flex md6>
                <v-text-field label="Empty Book" class="purple-input" value disabled/>
              </v-flex>
            </v-layout>
            <v-data-table :headers="headers" :items="items" hide-actions>
              <template slot="headerCell" slot-scope="{ header }">
                <span class="font-weight-light text-warning text--darken-3" v-text="header.text"/>
              </template>
              <template slot="items" slot-scope="{ index, item }">
                <td>{{ item.contractNumber }}</td>
                <td>{{ item.price }}</td>
                <td class="text-xs-right">{{ item.contractIncome}}</td>
                <td class="text-xs-right">{{ item.incomeToYou }}</td>
                <td class="text-xs-right">{{ item.totalPieces }}</td>
                <td class="text-xs-right">{{ item.piecesReceived }}</td>
                <td class="text-xs-right">{{ item.maxQuantityAvalaiable }}</td>
                <td class="text-xs-right">{{ item.piecesBasket }}</td>
                <td class="text-xs-right">{{ item.quantity }}</td>
                <td class="text-xs-right" v-if="item.add">
                  <v-btn class="primary">ADD</v-btn>
                </td>
              </template>
            </v-data-table>
          </material-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>
<script>
export default {
  data() {
    return {
      headers: [
        {
          sortable: false,
          text: "Contract No.",
          value: "contractNumber"
        },
        {
          sortable: false,
          text: "Price",
          value: "price"
        },
        {
          sortable: false,
          text: "Contract Income",
          value: "contractIncome"
        },
        {
          sortable: false,
          text: "Income Offered to you",
          value: "incomeToYou"
        },
        {
          sortable: false,
          text: "Total/Remaining Pieces",
          value: "totalPieces",
          align: "right"
        },
        {
          sortable: false,
          text: "Pices Received",
          value: "piecesReceived",
          align: "right"
        },
        {
          sortable: false,
          text: "Max Quantity Avalaiable",
          value: "maxQuantityAvalaiable",
          align: "right"
        },
        {
          sortable: false,
          text: "Pieces in Basket",
          value: "piecesBasket",
          align: "right"
        },
        {
          sortable: false,
          text: "Quantity",
          value: "quantity",
          align: "right"
        },
        {
          sortable: false,
          text: "Process",
          value: "add",
          align: "right"
        }
      ],
      items: [
        {
          contractNumber: "SCa6c",
          price: "1.03",
          contractIncome: "7%",
          incomeToYou: "10%",
          totalPieces: "10,000 / 1,534",
          piecesReceived: "0",
          maxQuantityAvalaiable: "250",
          piecesBasket: "0",
          quantity: "256",
          add: true
        },
        {
          contractNumber: "SCa6d",
          price: "1.03",
          contractIncome: "7%",
          incomeToYou: "10%",
          totalPieces: "10,000 / 1,534",
          piecesReceived: "0",
          maxQuantityAvalaiable: "250",
          piecesBasket: "0",
          quantity: "256",
          add: true
        },
        {
          contractNumber: "SCa6f",
          price: "1.03",
          contractIncome: "7%",
          incomeToYou: "10%",
          totalPieces: "10,000 / 1,534",
          piecesReceived: "0",
          maxQuantityAvalaiable: "250",
          piecesBasket: "0",
          quantity: "256",
          add: true
        },
        {
          contractNumber: "SCa71",
          price: "1.03",
          contractIncome: "7%",
          incomeToYou: "10%",
          totalPieces: "10,000 / 1,534",
          piecesReceived: "0",
          maxQuantityAvalaiable: "250",
          piecesBasket: "0",
          quantity: "256",
          add: true
        }
      ],
      tabs: 0,
      list: {
        0: false,
        1: false,
        2: false
      }
    };
  },
  methods: {
    complete(index) {
      this.list[index] = !this.list[index];
    }
  }
};
</script>
