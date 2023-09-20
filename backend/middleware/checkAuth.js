import jwt from "jsonwebtoken";
import User from "../models/User.js";


const checkAuth = async (req, res, next) => {
    let token;
    if (
        req.headers.authorization &&
        req.headers.authorization.startsWith('Bearer')
        ) {
        try {
            token = req.headers.authorization.split(" ")[1];

            const decoded = jwt.verify(token, process.env.JWT_SECRET);

            req.user = await User.findById(decoded.id).select("-password -confirm -token -createdAt -updatedAt -__v");

            return next();
        } catch (err) {
            return res.status(404).json({msg: "Something was wrong!"});
        }
    };
    if (!token) {
        const error = new Error("Invalid Token");
        return res.status(401).json({msg: error.message});
    }
    next();
}

export default checkAuth;