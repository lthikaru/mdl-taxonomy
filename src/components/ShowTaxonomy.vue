<template>
  <b-row>
    <b-col cols="12">
      <h2>
        Edit Taxonomy
        <b-link href="#/">(Taxonomy List)</b-link>
      </h2>
      <b-jumbotron>
        <template slot="header">
          {{book.title}}
        </template>
        <template slot="lead">
          customerId: {{book.customerId}}<br>
          themeName: {{book.themeName}}<br>
          id: {{book.id}}<br>
          parent: {{book.parent}}<br>
          model: {{book.model}}<br>
          name: {{book.name}}<br>
          weight: {{book.weight}}<br>
          collectionName: {{book.collectionName}}<br>
          collectionType: {{book.collectionType}}<br>
          defaultModel: {{book.defaultModel}}<br>
          description: {{book.description}}<br>
          threshold: {{book.threshold}}<br>
        </template>
        <hr class="my-4">
        <p>
          timestamp: {{book.timestamp}}
        </p>
        <b-btn variant="success" @click.stop="editbook(book._id)">Edit</b-btn>
        <b-btn variant="danger" @click.stop="deletebook(book._id)">Delete</b-btn>
      </b-jumbotron>
    </b-col>
  </b-row>
</template>

<script>

import axios from 'axios'

export default {
  name: 'ShowTaxonomy',
  data () {
    return {
      book: []
    }
  },
  created () {
    axios.get(`http://192.168.99.100:3000/taxonomy/` + this.$route.params.id)
    .then(response => {
      this.book = response.data
    })
    .catch(e => {
      this.errors.push(e)
    })
  },
  methods: {
    editbook (bookid) {
      this.$router.push({
        name: 'EditTaxonomy',
        params: { id: bookid }
      })
    },
    deletebook (bookid) {
      axios.delete('http://192.168.99.100:3000/taxonomy/' + bookid)
      .then((result) => {
        this.$router.push({
          name: 'TaxonomyList'
        })
      })
      .catch(e => {
        this.errors.push(e)
      })
    }
  }
}
</script>

<style>
  .jumbotron {
    padding: 2rem;
  }
</style>