import Vue from 'vue'
import Router from 'vue-router'
// import BookList from '@/components/BookList'
// import ShowBook from '@/components/ShowBook'
// import CreateBook from '@/components/CreateBook'
// import EditBook from '@/components/EditBook'
import TaxonomyList from '@/components/TaxonomyList'
import ShowTaxonomy from '@/components/ShowTaxonomy'
import CreateTaxonomy from '@/components/CreateTaxonomy'
import EditTaxonomy from '@/components/EditTaxonomy'

Vue.use(Router)

export default new Router({
  routes: [
/*     {
      path: '/',
      name: 'BookList',
      component: BookList
    }, */
    {
      path: '/',
      name: 'TaxonomyList',
      component: TaxonomyList
    },
    {
      path: '/show-book/:id',
      name: 'ShowTaxonomy',
      component: ShowTaxonomy
    },
    {
      path: '/add-book',
      name: 'CreateTaxonomy',
      component: CreateTaxonomy
    },
    {
      path: '/edit-book/:id',
      name: 'EditTaxonomy',
      component: EditTaxonomy
    }
  ]
})