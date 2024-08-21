//import productModel from "../../models/productModel.js"

const productList = (req, res) => {

    const product = productModel.getAll();

    res.json(product)
}

export default productList