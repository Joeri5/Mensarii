import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext.jsx";

import HomePage from "./pages/HomePage";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import PaymentsPage from "./pages/PaymentsPage";
import FallBackPage from "./pages/FallBackPage.jsx";

export default function App() {
  return (
    <Router>
      <AuthProvider>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/signin" component={SignInPage} />
          {/* <Route path="/signup" component={SignUpPage} /> */}
          <Route path="/payments" component={PaymentsPage} />
          <Route path="*" component={FallBackPage} />
        </Switch>
      </AuthProvider>
    </Router>
  );
}
