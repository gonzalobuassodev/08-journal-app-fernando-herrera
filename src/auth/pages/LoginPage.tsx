import { FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthLayout } from "../layout/AuthLayout";
import { useForm } from "../../hooks";
import {
  startGoogleSignIn,
  startLoginWithEmailPassword,
} from "../../store/auth";
import { useAppDispatch } from "../../store";
import { useMemo, useState } from "react";
import { useAppSelector } from "../../store/auth/hook";
import "animate.css";



const formValidations = [{
  email: [(value: string) => value.includes("@"), "El correo no es valido"],
  password: [
    (value: string) => value.length >= 6,
    "El password debe de tener mas de 6 caracteres",
  ],
}];

const formData = {
  email: "",
  password: "",
};

export const LoginPage = () => {
  const { status, errorMessage } = useAppSelector((state) => state.auth);
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);

  const dispatch = useAppDispatch();

  const { email, password, onInputChange, isFormValid } = useForm(formData, formValidations);

  const isAuthenticated = useMemo(() => status === "authenticated", [status]);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormSubmitted(true);

    if (!isFormValid) return;
    dispatch(startLoginWithEmailPassword({ email, password }));
  };

  const onGoogleSignIn = () => {
    dispatch(startGoogleSignIn());
  };

  return (
    <AuthLayout title={"Login"}>
      <form
        onSubmit={onSubmit}
        className="animate__animated animate__fadeIn animate__faster"
      >

        <div>
          {
            isFormValid ? null : <p className="text-red-500 text-sm">Formulario no válido</p>
          }

        </div>
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
