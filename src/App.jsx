import { Route, Routes, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import UserList from "./components/user/UserList";
// import SingleUser from "./components/user/ViewUser";
import HomePage from "./components/layout/HomePage";
import Login from "./components/auth/Login";
import BookList from "./components/book/BookList";
import AddBook from "./components/book/AddBook";
import ViewBook from "./components/book/ViewBook";
import CartList from "./components/cart/CartList";
import Public from "./components/layout/Public";
import LayoutDecider from "./components/layout/LayoutDecider";
import RoleChecker from "./components/layout/RoleChecker";
import Protected from "./components/layout/Protected";

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
          <Route path=":slug" element={<ViewBook />} />

          <Route path="add" element={<RoleChecker profile={profile} />}>
            <Route index element={<AddBook />} />
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
