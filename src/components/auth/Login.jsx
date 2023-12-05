/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Form } from "formik";
import { ApiServices } from "../../utils/httpServices";
import ReactToast from "../../common/toast/ReactToast";
import { useDispatch } from "react-redux";
import { GET_CART, GET_USER_PROFILE } from "../../redux/sagas/actions";
import FormikInputField from "../../common/form/FormikInput";
import FormikSelect from "../../common/form/FormikSelect";
import {
  emitSuccessToast,
  emitErrorToast,
} from "../../common/toast/EmitToast.js";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [isLoginType, setIsLoginType] = useState(true);
  const loginInitial = {
    username: "",
    password: "",
  };

  const signupInitial = {
    username: "",
    password: "",
    email: "",
    role: "",
  };

  const roleOptions = [
    {
      label: "User",
      value: "USER",
    },
    {
      label: "Admin",
      value: "ADMIN",
    },
  ];

  const [form, setForm] = useState(null);

  const handleSubmit = async (values, action) => {
    const url = isLoginType ? "/auth/login" : "/auth/register";
    const { data, success, message } = await ApiServices.post({
      url: url,
      data: values,
    });
    if (success) {
      emitSuccessToast(message);
      if (isLoginType) {
        dispatch(GET_USER_PROFILE("/users/profile"));
        dispatch(GET_CART("/cart"));
        navigate("/");
      } else {
        setIsLoginType(true);
      }
    } else {
      if (data) {
        action.setErrors(data);
      } else {
        emitErrorToast(message);
      }
    }
  };

  useEffect(() => {
    if (isLoginType) {
      setForm(loginInitial);
    } else {
      setForm((prev) => ({ ...prev, ...signupInitial }));
    }
    //eslint-disable-next-line
  }, [isLoginType]);

  return (
    <>
      <ReactToast />
      {form && (
        <Formik
          initialValues={form}
          onSubmit={handleSubmit}
          // validationSchema={bookValidation}
          enableReinitialize
        >
          {(formik) => (
            <Form className="container w-75">
              {isLoginType ? <h1>Please Log in</h1> : <h1>Please sign Up</h1>}
              <div>
                <FormikInputField
                  name="username"
                  formik={formik}
                  label="Username"
                  placeholder="Enter username"
                />
                <FormikInputField
                  name="password"
                  formik={formik}
                  label="Password"
                  placeholder="Enter password"
                />
                {!isLoginType && (
                  <>
                    <FormikInputField
                      name="email"
                      formik={formik}
                      label="Email"
                      type="email"
                      placeholder="Enter email"
                    />

                    <FormikSelect
                      name="role"
                      formik={formik}
                      options={roleOptions}
                      label="Select Role"
                    />
                  </>
                )}
              </div>

              <button type="submit" className="btn btn-primary ">
                Submit
              </button>

              <button
                className="btn btn-secondary btn-block"
                type="button"
                onClick={() => {
                  setForm(null);
                  setIsLoginType((prev) => !prev);
                }}
              >
                {isLoginType
                  ? "Don't have account Signup "
                  : "Already have account Login"}
              </button>
            </Form>
          )}
        </Formik>
      )}
    </>

    // <div className="">
    //   <form className="form-signin">
    //     <h2 className="form-signin-heading">Please sign in</h2>
    //     <p>
    //       <label htmlFor="username" className="sr-only">
    //         Username
    //       </label>
    //       <input
    //         type="text"
    //         value={username}
    //         className="form-control"
    //         placeholder="Username"
    //         required=""
    //         onChange={(e) => setUserName(e.target.value)}
    //         autoFocus=""
    //       />
    //     </p>

    //     <p>
    //       <label htmlFor="password" className="sr-only">
    //         Password
    //       </label>
    //       <input
    //         value={password}
    //         onChange={(e) => setpassword(e.target.value)}
    //         type="text"
    //         className="form-control"
    //         placeholder="Password"
    //         required=""
    //       />
    //     </p>
    //     {!isLoginType && (
    //       <>
    //         <p>
    //           <label htmlFor="email" className="sr-only">
    //             Email
    //           </label>
    //           <input
    //             value={email}
    //             onChange={(e) => setEmail(e.target.value)}
    //             type="email"
    //             className="form-control"
    //             placeholder="Email"
    //             required=""
    //           />
    //         </p>

    //         <p>
    //           <label htmlFor="role" className="sr-only">
    //             Role
    //           </label>
    //           <select
    //             name="role"
    //             className="form-control"
    //             onChange={(e) => setRole(e.target.value)}
    //           >
    //             <option value="USER">USER</option>
    //             <option value="ADMIN">ADMIN</option>
    //           </select>
    //         </p>
    //       </>
    //     )}

    //     <button
    //       onClick={handleSubmit}
    //       className="btn btn-primary btn-block"
    //       type="button"
    //     >
    //       {isLoginType ? "Sign In" : "Sign Up"}
    //     </button>

    //     <button
    //       className="btn btn-secondary btn-block"
    //       type="button"
    //       onClick={() => {
    //         console.log(isLoginType);
    //         isLoginType ? setForm(signupInitial) : setForm(loginInitial);
    //         setIsLoginType((prev) => !prev);
    //       }}
    //     >
    //       {isLoginType
    //         ? "Don't have account Signup "
    //         : "Already have account Login"}
    //     </button>
    //   </form>
    // </div>
  );
};

export default Login;
