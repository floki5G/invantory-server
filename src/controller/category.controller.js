import Category from "../schema/category.schema.js"
import slugify from "slugify"




export const categorycontoller = (req, res) => {
    const _category = {
        name: req.body.name,
        slug: slugify(req.body.name),
    }



    const _user = new Category(_category)

    _user.save((error, data) => {
        if (data) {
            res.status(200).json({ message: data })
        }
        if (error) {
            res.status(500).json(error)

        }
    })
}


export const getcontroller = async (req, res) => {

    const getall = await Category.find({})
        .exec((error, data) => {
            if (error) {
                res.status(500).json(error)
            }
            if (data) {
      
                res.status(200).json({ message: data })
            }
        })

}


export const updatecatecontroller = (req, res) => {

    const _updatecategory = {
        name: req.body.name,
        slug: slugify(req.body.name),
    }
    const update = Category.findByIdAndUpdate({ _id: req.body._id }, _updatecategory, { new: true })
        .exec((error, data) => {

            if (data) {
                const getall = Category.find({})
                    .exec((error, data) => {
                        if (error) {
                            res.status(500).json(error)
                        }
                        if (data) {
                            const getallcat = getallCategories(data)
                            res.status(200).json({ message: getallcat })

                            console.log(getallcat)
                        }
                    })
            }
            if (error) {
                res.status(500).json(error)

            }
        })

}

export const deletecatecontroller = async (req, res) => {

    const update = await Category.findByIdAndRemove({ _id: req.body._id })
    .exec((error, data) => {
            if (error) {
                res.status(500).json(error)
            }
            if (data) {
                const getall = Category.find({})
                .exec((error, data) => {
                    if (error) {
                        res.status(500).json(error)
                    }
                    if (data) {
     
                        res.status(200).json({ message: data })
                    }
                })
            }
        })

}