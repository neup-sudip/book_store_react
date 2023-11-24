import { Route, Routes } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import UserList from "./components/user/UserList";
// import SingleUser from "./components/user/ViewUser";
import HomePage from "./components/layout/HomePage";
import Login from "./components/auth/Login";
import BookList from "./components/book/BookList";
import AddBook from "./components/book/AddBook";
import ViewBook from "./components/book/ViewBook";
import CartList from "./components/cart/CartList";
import ReactToast from "./common/toast/ReactToast";

function App() {
  return (
    <>
      <ReactToast />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/users">
          <Route index element={<UserList />} />
          {/* <Route path=":id" element={<SingleUser />} /> */}
        </Route>
        <Route path="/books">
          <Route index element={<BookList />} />
          <Route path="add" element={<AddBook />} />
          <Route path=":slug" element={<ViewBook />} />
        </Route>
        <Route path="/cart">
          <Route index element={<CartList />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
