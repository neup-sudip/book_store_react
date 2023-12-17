/* eslint-disable react/prop-types */
import { Formik, Form } from "formik";
import { useEffect, useState } from "react";
import FormikInputField from "../../common/form/FormikInput";
import FormikSelect from "../../common/form/FormikSelect";
import FormikSwitch from "../../common/form/FormikSwitch";
import bookValidation from "../../validation/bookvalidation";
import { useNavigate } from "react-router-dom";
import FormikTextArea from "../../common/form/FormikTextArea";
import slugify from "slugify";
import { ApiServices } from "../../utils/httpServices";
import { emitErrorToast } from "../../common/toast/EmitToast.js";

const BookForm = ({ editBook }) => {
  const navigate = useNavigate();
  const [book, setBook] = useState({
    title: "",
    slug: "",
    author: "",
    genre: "",
    price: "",
    available: true,
  });

  const bookOptions = [
    { label: "Action", value: "Action" },
    { label: "Horror", value: "Horror" },
    { label: "Sc-fi", value: "Sc-fi" },
  ];

  useEffect(() => {
    if (editBook) {
      setBook((prev) => ({ ...prev, ...editBook }));
    }
  }, [editBook]);

  const handleSubmit = async (values) => {
    const payload = {
      ...values,
      slug: `${slugify(values.title, { lower: true })}-${Math.round(
        Math.random() * 1000
      )}`,
    };

    const url = editBook ? `/admin/books/${editBook?.bookId}` : "/admin/books";
    const method = editBook ? "put" : "post";

    const { data, success, message } = await ApiServices[method]({
      url: url,
      data: payload,
    });

    if (success) {
      navigate(`/books/view/${data?.slug}`);
    } else {
      emitErrorToast(message);
    }
  };

  return (
    <Formik
      initialValues={book}
      onSubmit={handleSubmit}
      validationSchema={bookValidation}
      enableReinitialize
    >
      {(formik) => (
        <Form className=" ">
          {editBook ? <h1>Edit Book</h1> : <h1>Add Book</h1>}
          <div>
            <FormikInputField
              name="title"
              formik={formik}
              label="Book Title"
              placeholder="Enter book title"
            />
            <FormikTextArea
              name="detail"
              formik={formik}
              label="Book Detail"
              placeholder="Enter book detail"
            />
            <FormikInputField
              name="author"
              formik={formik}
              label="Book Author"
              placeholder="Enter book author"
            />
            <FormikSelect
              name="genre"
              options={bookOptions}
              formik={formik}
              label="Book Genre"
            />
            <FormikInputField
              name="price"
              formik={formik}
              label="Book Price"
              type="number"
              placeholder="Enter book price"
            />

            <FormikSwitch
              name="available"
              label="Book Available ?"
              formik={formik}
            />
          </div>

          <button type="submit" className="btn btn-primary ">
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default BookForm;
