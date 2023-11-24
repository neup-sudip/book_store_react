import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const emitSuccessToast = (msg) => {
  toast.success(msg);
};

export const emitErrorToast = (msg) => {
  toast.error(msg);
};

export const emitWarnToast = (msg) => {
  toast.warn(msg);
};

export const emitInfoToast = (msg) => {
  toast.info(msg);
};

const ReactToast = () => {
  return (
    <ToastContainer
      position="top-right"
      autoClose={3000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
    />
  );
};

export default ReactToast;
