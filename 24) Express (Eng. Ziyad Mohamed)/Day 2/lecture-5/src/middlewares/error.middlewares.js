export const errorHandler = async (error, request, response, next)=> {
    console.error(error);

    if (error.code === 11000 || error.name === "ValidationError" || error.name === "CastError")
    {
        return response.status(400).json({ message: "Invalid user data." });
    }

    if (error.name === "TokenExpiredError" || error.name === "JsonWebTokenError")
    {
        return response.status(401).json({ message: "Unauthorized" });
    }

    return response.status(500).json({ message: "Something went wrong." });
}