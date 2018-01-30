var mongoose = require('mongoose');

var TaxonomySchema = new mongoose.Schema({
    customerId: String,
    themeName: String,
    id: Number,
    parent: Number,
    model: String,
    name: String,
    weight: Number,
    collectionName: String,
    collectionType: String,
    defaultModel: String,
    description: String,
    threshold: Number,
    timestamp: Date,
  }
);

  module.exports = mongoose.model('Taxonomy', TaxonomySchema, 'viz_taxonomy_dap');