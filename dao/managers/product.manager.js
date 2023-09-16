const fs = require('fs/promises')

const productModel = require('../models/product.model')

class ProductManager {

  getAll() {
    return productModel.find().lean()
  }

  getAllPaged(page = 1, limit = 10) {
    return productModel.paginate({}, { limit, page, lean: true })
  }


  async getById(id) {
    const products = await productModel.find({ _id: id })

    return products[0]
  }

  async create(body) {
    return productModel.create(body)
  }

  async update(id, product) {
    const result = await productModel.updateOne({ _id: id }, product)

    return result
  }

  async delete(id) {
    const result = await productModel.deleteOne({ _id: id })

    return result
  }
}

module.exports = new ProductManager() 
