import React from "react";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../firebase";

const PaymentsPage = () => {
  const history = useHistory();

  const handleLogout = async () => {
    await auth.signOut();

    history.push("/");
  };
  return (
    <div>
      <Link onClick={handleLogout}>Logout</Link>
    </div>
  );
};

export default PaymentsPage;
