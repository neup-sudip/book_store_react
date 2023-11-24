import * as yup from "yup";

let bookValidation = yup.object().shape({
  title: yup
    .string()
    .trim()
    .required("Required !")
    .min(4, "Title too short !")
    .max(30, "Title too long !"),
  detail: yup
    .string()
    .trim()
    .required("Required !")
    .min(20, "Title too short !")
    .max(1000, "Title too long !"),
  author: yup
    .string()
    .trim()
    .required("Required !")
    .min(4, "Author too short !")
    .max(30, "Author too long !"),
  genre: yup.string().required("Required !"),
  price: yup.number().required("Required !").min(0),
});

export default bookValidation;
