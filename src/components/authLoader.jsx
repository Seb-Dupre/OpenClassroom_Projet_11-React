import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProfile } from "../features/auth/authActions";

function AuthLoader() {
  const dispatch = useDispatch();
  const { token, user, isAuthenticated } = useSelector((state) => state.auth);

  useEffect(() => {
    if (token && isAuthenticated && !user) {
      dispatch(fetchProfile());
    }
  }, [dispatch, token, isAuthenticated, user]);

  return null;
}

export default AuthLoader;
