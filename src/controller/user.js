import Post_schema from '../schema/user.js'
import jwt from 'jsonwebtoken'
import shortid from 'shortid'
export const signin = async (req, res) => {
    try {
        const user = await Post_schema.findOne({ email: req.body.email })

        if (user) {
            if (user.authenticate(req.body.pass) && user.role == "admin") {
                const token = jwt.sign({ _id: user._id, role: user.role }, process.env.JWT_SECRATE, { expiresIn: '1d' });
                const { _id, firstName, lastName, email, role, fullName } = user;
                res.status(200).json({
                    token,
                    user: {
                        _id, firstName, lastName, email, role, fullName
                    }
                })
            }
            else {
                return res.status(500).json({ message: "invalid pass" })
            }
        }
    }
    catch (error) {
        return res.status(500).json({ message: "someting went wrong" })
    }

    // Post_schema.findOne({ email: req.body.email })
    //     .exec((error, user) => {
    //         if (error) {
    //             return res.status(500).json({ message: "signin" })
    //         }
    //         if (user) {
    //             if (user.authenticate(req.body.pass) && user.role == "admin") {
    //                 const token = jwt.sign({ _id: user._id, role: user.role }, process.env.JWT_SECRATE, { expiresIn: '1d' });
    //                 const { _id, firstName, lastName, email, role, fullName } = user;
    //                 res.status(200).json({
    //                     token,
    //                     user: {
    //                         _id, firstName, lastName, email, role, fullName
    //                     }
    //                 })
    //             }
    //             else {
    //                 return res.status(500).json({ message: "invalid pass" })
    //             }
    //         } else {
    //             return res.status(500).json({ message: "someting went wrong" })
    //         }
    //     })

}

export const signup = async (req, res) => {
    console.log(req.body)
    const posts = await Post_schema.findOne({ email: req.body.email })
    if (posts) {
        res.status(201).json({ message: "user already exist" })
    }
    else {
        const {
            firstName,
            lastName,
            email,
            pass,
            role

        } = req.body;
        const _user = new Post_schema({
            firstName,
            lastName,
            email,
            pass,
            role,
            userName: shortid.generate(),

        })
        _user.save((error, data) => {

            if (data) {
                res.status(200).json({ message: data })

            }
            if (error) {
                res.status(500).json({ message: "invalid data" })

            }
        })
    }

}

export const adminupdata = (req, res) => {
console.log(req.body)

    const _user = {
        firstName: req.body.firstName, 
        lastName:req.body.lastName,
        email: req.body.email,
        pass: req.body.email,
        role: req.body.role,
        userName: shortid.generate(),
    }
    const update = Post_schema.findOneAndUpdate({ _id: req.body._id }, _user )
        .exec((error, data) => {

            if (data) {
                res.status(200).json({ message: data })

            }
            if (error) {
                console.log(error)
                res.status(500).json(error)

            }
        })

}
