const Product = require('../../models/Product')

module.exports = {
  Mutation: {
    createProduct: async(_, {productInput: {
      title,
      desc,
      image,
      size,
      color,
      category,
      price
    }}) => {
      try{
        const newProduct = new Product({
        title,
        desc,
        image, 
        size, 
        color,
        category,
        price
      })

      const product = await newProduct.save()
      return product
      }catch(err){
        throw err
      }
      

    },
    updateProduct: async(_, {productInput: {
      id,
      title,
      desc,
      image,
      size,
      color,
      category,
      price
    }}) => {

      try{
        const updatedProduct = await Product.findByIdAndUpdate(
        id,{
          $set: {
            title,
            desc,
            image, 
            size, 
            color,
            category,
            price
          }}, 
          { new: true})

      return updatedProduct
      }catch(err){
        throw err
      }

      

    }
  }
}