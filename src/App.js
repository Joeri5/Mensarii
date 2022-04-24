import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext.jsx";

import HomePage from "./pages/HomePage";
import SignInPage from "./pages/SignInPage";
import PaymentsPage from "./pages/PaymentsPage";

export default function App() {
  return (
    <Router>
      <AuthProvider>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/signin" component={SignInPage} />
          <Route path="/payments" component={PaymentsPage} />
        </Switch>
      </AuthProvider>
    </Router>
  );
}
