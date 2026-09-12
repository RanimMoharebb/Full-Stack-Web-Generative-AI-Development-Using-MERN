import User from "./users.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const registerUserController = async (request, response, next) => {
    const { name, email, password } = request.body;

    try
    {
        if (!name || !email || !password)
        {
            return response.status(400).json({ message: "Invalid user data." });
        }

        await User.create({ name, email, password });

        return response.status(200).json({ message: "User registered successfully!" });
    } catch(error)
    {
        return next(error);
    }
}

export const loginUserController = async (request, response, next) => {
    const { email, password } = request.body;

    try
    {
        if (!email || !password)
        {
            return response.status(400).json({ message: "Invalid user data." });
        }

        const user = await User.findOne({ email });

        if (!user)
        {
            return response.status(400).json({ message: "Incorrect email or password." });
        }

        const isPasswordCorrect = await bcrypt.compare(password, user.password);

        if (!isPasswordCorrect)
        {
            return response.status(400).json({ message: "Incorrect email or password." });
        }

        const jwtToken = jwt.sign(
            { userId: user._id },
            process.env.JWT_SECRET_KEY,
            { expiresIn: "1d" }
        );

        return response.status(200).json({ jwtToken });
    } catch(error)
    {
        return next(error);
    }
}