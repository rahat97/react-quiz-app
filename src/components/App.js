import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthProvider } from "../contexts/AuthContext";
import "../styles/App.css";
import Layout from "./Layout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Quiz from "./pages/Quiz";
import Result from "./pages/Result";
import Signup from "./pages/Signup";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Layout>
          <Routes>
            {/* instead of switch, Routes and its the updated system from version 6 for react-router-dom */}
            {/* <Route path="/Home" element={<PublicRoute />}>
              <Route exact path="/Home" element={<Home />} />
            </Route>
            <Route path="/Signup" element={<PublicRoute />}>
              <Route exact path="/Signup" element={<Signup />} />
            </Route>
            <Route path="/Login" element={<PublicRoute />}>
              <Route exact path="/Login" element={<Login />} />
            </Route> */}

            <Route path="/" element={<Home />} />

            {/* <Route path="/signup" element={<Signup />} /> */}

            <Route path="/*" element={<PublicRoute />}>
              <Route path="signup" element={<Signup />} />
            </Route>

            <Route
              path="/login"
              element={
                <PublicRoute>
                  {" "}
                  <Login />{" "}
                </PublicRoute>
              }
            />

            <Route
              path="/quiz/:id"
              element={
                <PrivateRoute>
                  <Quiz />
                </PrivateRoute>
              }
            />
            <Route
              path="/result/:id"
              element={
                <PrivateRoute>
                  <Result />
                </PrivateRoute>
              }
            />

            {/* switch and this is for react-router-dom version 5 and beforehead */}
            {/* <Route exact path="/" component={Home} /> */}
            {/* <Route exact path="/signup" component={Signup} /> */}
            {/* <Route exact path="/login" component={Login} /> */}
            {/* <Route exact path="/quiz" component={Quiz} /> */}
            {/* <Route exact path="/result" component={Result} /> */}
          </Routes>
        </Layout>
      </AuthProvider>
    </Router>
  );
}

export default App;
