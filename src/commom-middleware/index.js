import jwt from 'jsonwebtoken'

// REQUIRE SIGIN login
export const requireSignin = (req, res, next) => {
    if (req) {
        const token = req.headers.authorization.split(" ")[1];
        const user = jwt.verify(token, process.env.JWT_SECRATE)
        req.user = user
    }
    else{
        return res.status(500).json({ message: "authorization req" });
    }
    next()
 
} 

// ADMIN AUTHORIZATION 
export const adminMiddleware = (req, res, next) => {

    if (req.user.role !== 'admin') {
        return res.status(500).json({ message: "admin access denied" });
    }
    next()
}

