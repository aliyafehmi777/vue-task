<template>
  <v-flex md12 lg12>
    <material-card
      color="secondary"
      title="Purchase Star Conract"
      text="All Star Contracts within Star Block are listed below. Please, click on the 'add' button to buy the contract at the specified limits."
    >
      <v-layout>
        <v-flex md6>
          <v-text-field label="Select Star Block" class="purple-input" value="xxx0x" disabled/>
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
