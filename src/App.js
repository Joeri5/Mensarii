import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext.jsx";

import HomePage from "./pages/HomePage";
import WelcomePage from "./pages/WelcomePage.jsx";
import SignInPage from "./pages/SignInPage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import PaymentsPage from "./pages/PaymentsPage";
import FallBackPage from "./pages/FallBackPage.jsx";
import IndexPage from "./pages/IndexPage.jsx";

export default function App() {
  return (
    <Router>
      <AuthProvider>
        <Switch>
          <Route exact path="/" component={IndexPage} />
          <Route path="/welcome" component={WelcomePage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/signup" component={SignUpPage} />
          <Route path="/payments" component={PaymentsPage} />
          <Route path="*" component={FallBackPage} />
        </Switch>
      </AuthProvider>
    </Router>
  );
}
