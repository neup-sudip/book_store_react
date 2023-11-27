import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { instance } from "./axios";
import { LOGOUT } from "../redux/sagas/actions";

const AxiosInterceptor = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleRequest = () => {
    instance.interceptors.response.use((response) => {
      if (response?.data?.status === 401) {
        dispatch(LOGOUT());
        navigate("/auth/login");
      }
      return response;
    });
  };

  useEffect(() => {
    handleRequest();
    //eslint-disable-next-line
  }, []);
  return <></>;
};

export default AxiosInterceptor;
