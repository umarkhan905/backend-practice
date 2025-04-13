import Joi from "joi";

const signupSchema = Joi.object({
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(8).required(),
});

export const validateSignup = async (formData) => {
  try {
    return await signupSchema.validateAsync(formData);
  } catch (error) {
    return error;
  }
};
