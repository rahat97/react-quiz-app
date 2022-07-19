import { Navigate, Route } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export default function PublicRoute({ element: Element, ...rest }) {
  const { currentUser } = useAuth();

  return !currentUser ? (
    <Route {...rest}>{(props) => <Element {...props} />}</Route>
  ) : (
    <Navigate to="/" />
  );
}
