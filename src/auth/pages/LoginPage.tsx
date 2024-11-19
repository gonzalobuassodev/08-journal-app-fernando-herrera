import { FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthLayout } from "../layout/AuthLayout";
import { useForm } from "../../hooks";
import { useDispatch } from "react-redux";
import {
  checkingAuthentication,
  startGoogleSignIn,
  startLoginWithEmailPassword,
} from "../../store/auth";
import { AppDispatch } from "../../store";
import { useMemo } from "react";
import { useAppSelector } from "../../store/auth/hook";
import 'animate.css';

export const LoginPage = () => {
  const { status, errorMessage } = useAppSelector((state) => state.auth);

  const dispatch = useDispatch<AppDispatch>();

  const { email, password, onInputChange } = useForm({
    email: "gonzalobuasso@gmail.com",
    password: "123456789",
  });

  const isAuthenticated = useMemo(() => status === "authenticated", [status]);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    dispatch(startLoginWithEmailPassword({ email, password }));
  };

  const onGoogleSignIn = () => {
    dispatch(startGoogleSignIn());
  };

  return (
    <AuthLayout title={"Login"}>
      <form onSubmit={onSubmit} className="animate__animated animate__fadeIn animate__faster">
        <div className="flex flex-col gap-2">
          <input
            type="text"
            className="w-full border-2 rounded-md p-3"
            placeholder="Correo"
            name="email"
            value={email}
            onChange={onInputChange}
          />
          <input
            type="password"
            className="w-full border-2 rounded-md p-3"
            placeholder="Contraseña"
            name="password"
            value={password}
            onChange={onInputChange}
          />
        </div>

        <div className="flex flex-col sm:flex-row gap-2 justify-center my-3">
          <button
            disabled={isAuthenticated}
            type="submit"
            className={`bg-blue-900 text-white p-2 rounded-md w-full ${
              isAuthenticated ? "opacity-50" : ""
            }`}
          >
            Login
          </button>
          <button
            disabled={isAuthenticated}
            onClick={onGoogleSignIn}
            className={`bg-blue-900 text-white p-2 rounded-md w-full flex items-center justify-center
                ${isAuthenticated ? "opacity-50" : ""}
              `}
          >
            <FaGoogle className="mr-2" />
            <span className="uppercase">Google</span>
          </button>
        </div>

        <div>
          {errorMessage && (
            <p className="text-red-500 text-sm">{errorMessage}</p>
          )}
        </div>

        <div className="flex flex-row justify-end py-2">
          <Link to="/auth/register">Crear una cuenta</Link>
        </div>
      </form>
    </AuthLayout>
  );
};
