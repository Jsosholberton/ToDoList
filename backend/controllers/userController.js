import User from "../models/User.js";
import genId from "../helpers/generateid.js";
import genJWT from "../helpers/genereteJWT.js";
import { emailReg, emailPwd } from "../helpers/emails.js"

const register = async (req, res) => {

    // register duplicate
    const { email } = req.body;
    const existUser = await User.findOne({email});

    if (existUser) {
        const error = new Error('User or Email actually is register');
        return res.status(400).json({ msg: error.message });
    }

    try {
        const user = new User(req.body);
        user.token = genId();
        const userSave = await user.save();

        emailReg({
            email: user.email,
            name: user.name,
            token: user.token
        });

        res.json({msg: "User created correctly, check your email to confirm the account"});
    } catch (err) {
        console.log(err);
    }
}

const authenticate = async (req, res) => {

    const { email, password } = req.body;
    // check if the email exists
    const instUser = await User.findOne({email});
    if(!instUser) {
        const error = new Error('User not exist');
        return res.status(404).json({msg: error.message});
    }
    // check if the user is confirmade
    if(!instUser.confirm) {
        const error = new Error('Your accont is not confirmed');
        return res.status(404).json({msg: error.message});
    }
    // check the pwd
    if(await instUser.checkPassword(password)) {
        res.json({
            _id: instUser._id,
            name: instUser.name,
            email: instUser.email,
            user: instUser.user,
            token: genJWT(instUser._id),
            });
    } else {
        const error = new Error('The password is incorrect');
        return res.status(403).json({msg: error.message});
    }
};

const confirm = async (req, res) => {
    const { token } = req.params;
    const userConfirm = await User.findOne({token});
    if (!userConfirm) {
        const error = new Error('Invalid Token');
        return res.status(403).json({msg: error.message});
    }
    try {
        userConfirm.confirm = true;
        userConfirm.token = "";
        await userConfirm.save();
        return res.json({msg: "User confirm correctly"});
    } catch (err) {
        console.log(err);
    }
}

const lostPwd = async (req, res) => {
    const { email } = req.body;
    const instUser = await User.findOne({email});

    if(!instUser) {
        const error = new Error('User not exist');
        return res.status(404).json({msg: error.message});
    }

    try {
        instUser.token = genId();
        await instUser.save();
        res.json({msg: "We have sent an email with instructions"})

        emailPwd({
            email: instUser.email,
            name: instUser.name,
            token: instUser.token
        });

    } catch (err) {
        console.log(err);
    }
};

const checkToken = async (req, res) => {
    const { token } = req.params;
    const validToken = await User.findOne({ token });
    if (validToken) {
        res.json({msg: "Token is valid and the user exist"})
    } else {
        const error = new Error('Invalid token');
        return res.status(404).json({msg: error.message});
    }
};

const newPwd = async (req, res) => {
    const { token } = req.params;
    const { password } = req.body;

    const user = await User.findOne({ token });

    if (user) {
        user.password = password;
        user.token = "";
        try {
            await user.save();
            res.json({msg: "Password has been changed successfully"});
        } catch (err) {
            console.log(err);
        }
    } else {
        const error = new Error('Invalid token');
        return res.status(404).json({msg: error.message});
    }
};

const profile = async (req, res) => {
    const { user } = req;
    res.json(user);
}

export {
    register,
    authenticate,
    confirm,
    lostPwd,
    checkToken,
    newPwd,
    profile
}