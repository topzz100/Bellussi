const mongoose = require('mongoose')

const ProductSchema = mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  desc: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  size: {
    type: Array,
  },
  color: {
    type: Array,
  },
  price: {
    type: Number,
    required: true
  },
  category: {
    type: Array
  }
},{
  timestamps: true
})
module.exports = mongoose.model('Product', ProductSchema)