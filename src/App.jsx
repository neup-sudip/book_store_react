import { Route, Routes, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import UserList from "./components/user/UserList";
// import SingleUser from "./components/user/ViewUser";
import HomePage from "./components/layout/HomePage";
import Login from "./components/auth/Login";
import AddBook from "./components/book/AddBook";
import ViewBook from "./components/book/ViewBook";
import CartList from "./components/cart/CartList";
import Public from "./common/Public";
import LayoutDecider from "./common/LayoutDecider";
import RoleChecker from "./common/RoleChecker";
import Protected from "./common/Protected";
import BookList from "./components/book/BookList";
import EditBook from "./components/book/EditBook";

function App() {
  const { profile } = useSelector((state) => state.user);

  return (
    <Routes>
      <Route path="/auth" element={<Public profile={profile} />}>
        <Route index element={<Navigate to="login" replace />} />
        <Route path="login" element={<Login />} />
      </Route>

      <Route path="/" element={<LayoutDecider profile={profile} />}>
        <Route index element={<HomePage />} />

        <Route path="users" element={<RoleChecker profile={profile} />}>
          <Route index element={<UserList />} />
          {/* <Route path=":id" element={<SingleUser />} /> */}
        </Route>

        <Route path="books">
          <Route index element={<BookList />} />
          <Route path="view/:slug" element={<ViewBook />} />

          <Route path="add" element={<RoleChecker profile={profile} />}>
            <Route index element={<AddBook />} />
          </Route>
          <Route path="edit/:slug" element={<RoleChecker profile={profile} />}>
            <Route index element={<EditBook />} />
          </Route>
        </Route>

        <Route path="/cart" element={<Protected profile={profile} />}>
          <Route index element={<CartList />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
