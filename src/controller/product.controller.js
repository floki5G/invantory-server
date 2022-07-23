import Productschema from "../schema/product.schema.js"
import slugify from "slugify"

export const createproduct = (req, res) => {

    const products = {
        name: req.body.name,
        slug: slugify(req.body.name),
        caseQuantity: req.body.caseQuantity,
        retailPrice: req.body.retailPrice,
        unitholesalePrice: req.body.unitholesalePrice,
        description: req.body.description,
        category: req.body.category,
        styleAndDimensions: req.body.styleAndDimensions,
        review: req.body.review,
        createdBy: req.user._id,
    }

 
    if (req.body.bestsaller) {
        products.bestsaller = req.body.bestsaller
    }

    const user = new Productschema(products)
    user.save((error, data) => {
        if (error) {
            console.log(error)
            res.status(500).json(error)
        }
        if (data) {
            res.status(200).json({ message: data })
        }
    })
}

export const getallproducts = async (req, res) => {

    const products = await Productschema.find({})
        .exec((error, data) => {
            if (error) {
                res.status(500).json(error)
            }
            if (data) {
                res.status(200).json({ message: data })
            }
        })

}

export const getProductbyAdmin = async (req, res) => {

    const adminproduct = await Productschema.find({})
        .exec((error, data) => {
            if (error) {
                res.status(500).json({ message: "something went wrong productcontroller getproductbyadmin" })
            }
            if (data) {

                const _getProductbyAdmin = data.filter((e) => e.createdBy == req.user._id)

                if (_getProductbyAdmin.length > 0) {
                    res.status(200).json({ message: _getProductbyAdmin })
                } else {
                    res.status(200).json({ message: "no product found" })
                }

            }
        })

}










export const updateproductcontroller = (req, res) => {


    const updateproducts = {
        name: req.body.name,
        slug: slugify(req.body.name),
        retailPrice: req.body.retailPrice,
        unitholesalePrice: req.body.unitholesalePrice,
        description: req.body.description,
        bestsaller: req.body.bestsaller,
        offers: req.body.offers,
        styleAndDimensions: req.body.styleAndDimensions,
        review: req.body.review,
        createdBy: req.user._id,
        category: req.body.category,
    }
    const update = Productschema.findByIdAndUpdate({ _id: req.body._id }, updateproducts, { new: true })
        .exec((error, data) => {

            if (data) {

                res.status(200).json({ message: data })

            }
            if (error) {
                res.status(500).json(error)

            }
        })

}






export const deleteproductcontroller = async (req, res) => {

    const update = await Productschema.findByIdAndRemove({ _id: req.body._id })
        .exec((error, data) => {
            if (error) {
                res.status(500).json(error)
            }
            if (data) {
                res.status(200).json({ message: data })
            }
        })
}