<template>
  <b-row>
    <b-col cols="12">
      <h2>
        Taxonomy DAP List
        <b-link href="#/add-word">(Add Word)</b-link>
      </h2>
      <b-table striped hover :items="books" :fields="fields">
        <template slot="actions" scope="row">
          <b-btn size="sm" @click.stop="details(row.item)">Details</b-btn>
        </template>
      </b-table>
      <ul v-if="errors && errors.length">
        <li v-for="error of errors">
          {{error.message}}
        </li>
      </ul>
    </b-col>
  </b-row>
</template>

<script>

import axios from 'axios'

export default {
  name: 'TaxonomyList',
  data () {
    return {
      fields: {
        customerId: { label: 'customerId', sortable: true, 'class': 'text-center' },
        themeName: { label: 'themeName', sortable: true, 'class': 'text-center' },
        id: { label: 'themeName', sortable: true, 'class': 'text-center' },
        parent: { label: 'parent', sortable: true, 'class': 'text-center' },
        name: { label: 'name', sortable: true, 'class': 'text-center' },
        model: { label: 'model', sortable: true, 'class': 'text-center' },
        weight: { label: 'weight', sortable: true },
        timestamp: { label: 'timestamp', sortable: true },
        actions: { label: 'Action', 'class': 'text-center' }
      },
      books: [],
      errors: []
    }
  },
  created () {
    axios.get(`http://192.168.99.100:3000/taxonomy`)
    .then(response => {
      this.books = response.data
    })
    .catch(e => {
      this.errors.push(e)
    })
  },
  methods: {
    details (book) {
      this.$router.push({
        name: 'ShowTaxonomy',
        params: { id: book._id }
      })
    }
  }
}
</script>