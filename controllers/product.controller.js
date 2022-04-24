
const db = require('../db')

class ProductController {

    async createProduct(req, res) {
        const {name, description, price, size, image, category_id} = req.body
        const newProduct = await db.query('insert into product (name, description, price, size, image, category_id) ' +
            'values ($1, $2, $3, $4, $5, $6) RETURNING *', [name, description, price, size, image, category_id])
        res.json(newProduct.rows[0])
    }

    async deleteProduct(req, res) {
        const id = req.params.id
        await db.query('delete from product where id = $1', [id])
        res.json('deleted')
    }

    async updateProduct(req, res) {
        const {id, name, description, price, size, image, category_id} = req.body
        const updatedProduct = await db.query('update product set name = $1, description = $2, price = $3, size = $4, image = $5, category_id = $6) ' +
            'where id = $7 RETURNING *', [name, description, price, size, image, category_id])
        res.json(updatedProduct.rows[0])
    }

    async getProducts(req, res) {
        const products = await db.query('select * from product')
        res.render('listproduct.html', {products: products.rows})
    }

    async getProductById(req, res) {
        const id = req.params.id
        const product = await db.query('select * from product where id = $1', [id])
        res.render('product_details.html', {product: product.rows[0]})
    }

}

module.exports = new ProductController()