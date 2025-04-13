import Joi from "joi";
import { errorResponse, successResponse } from "../utils/api-response.js";
import { validateSignup } from "../validations/user.validation.js";
import { User } from "../models/user.model.js";

export const registerUser = async (req, res) => {
  try {
    const response = await validateSignup(req.body);
    if (response instanceof Joi.ValidationError) {
      return res.status(400).json(errorResponse(400, response.message));
    }

    const { firstName, lastName, email, password } = req.body;

    const user = await User.create({
      firstName,
      lastName,
      email,
      password,
    });

    return res.status(200).json(
      successResponse(200, "User registered", {
        user: { ...user._doc, password: undefined },
      })
    );
  } catch (error) {
    console.log("Error occurs in register user", error);
    return res.status(500).json(errorResponse());
  }
};
