import { object, string } from "yup";

export const signup = object({
  email: string().required("Email is required."),
  firstName: string().required("First name is required."),
  password: string()
    .required("Password is required.")
    .matches(/[0-9]/, "Must contain at least one numeric.")
    .matches(/[A-Z]/, "Must contain at least one uppercase letter.")
    .matches(/[a-z]/, "Must contain at least one lowercase letter.")
    .matches(/(\W)/, "Must contain at least one special character")
    .min(8, "Must be at least 8 characters."),
});

export const login = object({
  email: string().required("Email is required."),
  password: string()
    .required("Password is required.")
    .matches(/[0-9]/, "Must contain at least one numeric.")
    .matches(/[A-Z]/, "Must contain at least one uppercase letter.")
    .matches(/[a-z]/, "Must contain at least one lowercase letter.")
    .matches(/(\W)/, "Must contain at least one special character")
    .min(8, "Must be at least 8 characters."),
});

export const profile = object({
  name: string().required("Name is required."),
  email: string().email("Invalid email").required("Email is required."),
  phone: string().required("Phone is required."),
});
