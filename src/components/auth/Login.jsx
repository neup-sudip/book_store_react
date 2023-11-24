import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ApiServices } from "../../utils/httpServices";
import { emitErrorToast } from "../../common/toast/ReactToast";
import { useDispatch } from "react-redux";
import { GET_CART, GET_USER_PROFILE } from "../../redux/sagas/actions";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [isLoginType, setIsLoginType] = useState(true);
  const [username, setUserName] = useState("");
  const [password, setpassword] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("USER");

  const handleLogin = async () => {
    const { message, success } = await ApiServices.post({
      url: "/users/login",
      data: { username, password },
    });

    if (success) {
      const payload = {
        url: "/users/profile",
      };
      dispatch(GET_USER_PROFILE(payload));

      const payload2 = {
        url: "/cart",
      };
      dispatch(GET_CART(payload2));
      navigate("/books");
    } else {
      emitErrorToast(message);
    }
  };

  const handleSignup = async () => {
    const { message, success } = await ApiServices.post({
      url: "/users/register",
      data: { username, password, email, role },
    });

    if (success) {
      setUserName("");
      setpassword("");
      setEmail("");
      setIsLoginType(true);
    } else {
      emitErrorToast(message);
    }
  };

  return (
    <div className="">
      <form className="form-signin">
        <h2 className="form-signin-heading">Please sign in</h2>
        <p>
          <label htmlFor="username" className="sr-only">
            Username
          </label>
          <input
            type="text"
            value={username}
            className="form-control"
            placeholder="Username"
            required=""
            onChange={(e) => setUserName(e.target.value)}
            autoFocus=""
          />
        </p>

        <p>
          <label htmlFor="password" className="sr-only">
            Password
          </label>
          <input
            value={password}
            onChange={(e) => setpassword(e.target.value)}
            type="text"
            className="form-control"
            placeholder="Password"
            required=""
          />
        </p>
        {!isLoginType && (
          <>
            <p>
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                className="form-control"
                placeholder="Email"
                required=""
              />
            </p>

            <p>
              <label htmlFor="role" className="sr-only">
                Role
              </label>
              <select
                name="role"
                className="form-control"
                onChange={(e) => setRole(e.target.value)}
              >
                <option value="USER">USER</option>
                <option value="ADMIN">ADMIN</option>
              </select>
            </p>
          </>
        )}

        <button
          onClick={isLoginType ? handleLogin : handleSignup}
          className="btn btn-primary btn-block"
          type="button"
        >
          {isLoginType ? "Sign In" : "Sign Up"}
        </button>

        <button
          className="btn btn-secondary btn-block"
          type="button"
          onClick={() => setIsLoginType((prev) => !prev)}
        >
          {isLoginType
            ? "Don't have account Signup "
            : "Already have account Login"}
        </button>
      </form>
    </div>
  );
};

export default Login;
