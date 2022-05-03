import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext.jsx";

import WelcomePage from "./pages/WelcomePage.jsx";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import FallBackPage from "./pages/FallBackPage.jsx";
import IndexPage from "./pages/IndexPage.jsx";
import HomePage from "./pages/HomePage.jsx";

export default function App() {
  return (
    <Router>
      <AuthProvider>
        <Switch>
          <Route exact path="/" component={IndexPage} />
          <Route path="/welcome" component={WelcomePage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/signup" component={SignUpPage} />
          <Route path="/home" component={HomePage} />
          <Route path="*" component={FallBackPage} />
        </Switch>
      </AuthProvider>
    </Router>
  );
}
