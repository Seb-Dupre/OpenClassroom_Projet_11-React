import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProfile, updateUserName } from "../features/auth/authActions";
import EditName from "../components/EditName";
import AccountCard from "../components/AccountCard";
import "../main.css";

function User() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user, token, isAuthenticated } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!token || !isAuthenticated) {
      navigate("/");
      return;
    }

    if (token && isAuthenticated && !user) {
      dispatch(fetchProfile());
    }
  }, [token, isAuthenticated, user, dispatch, navigate]);

  const handleSave = async (newName) => {
    try {
      await dispatch(updateUserName(newName));
    } catch (error) {
      throw new Error("Erreur lors de la mise à jour");
    }
  };

  const accounts = [
    {
      title: "Argent Bank Checking (x8349)",
      amount: "$2,082.79",
      description: "Available Balance",
    },
    {
      title: "Argent Bank Savings (x6712)",
      amount: "$10,928.42",
      description: "Available Balance",
    },
    {
      title: "Argent Bank Credit Card (x8349)",
      amount: "$184.30",
      description: "Current Balance",
    },
  ];

  if (!user) return <main className="main bg-dark"></main>;

  return (
    <main className="main bg-dark">
      <div className="header">
        <h1>
          Welcome back
          <br />
          {user.userName}!
        </h1>
        <EditName
          currentUserName={user.userName}
          firstName={user.firstName}
          lastName={user.lastName}
          onSave={handleSave}
        />
      </div>

      <h2 className="sr-only">Accounts</h2>

      {accounts.map((account, index) => (
        <AccountCard
          key={index}
          title={account.title}
          amount={account.amount}
          description={account.description}
        />
      ))}
    </main>
  );
}

export default User;
