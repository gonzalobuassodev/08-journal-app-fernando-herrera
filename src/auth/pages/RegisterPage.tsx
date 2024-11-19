import { Link } from "react-router-dom";
import { AuthLayout } from "../layout/AuthLayout";
import { useForm } from "../../hooks";
import { useMemo, useState } from "react";
import { useDispatch } from "react-redux";
import { startCreatingUserWithEmailPassword } from "../../store/auth";
import { useAppSelector } from "../../store/auth/hook";
import 'animate.css';

const formData = {
  name: "Martin",
  email: "martin@gmail.com",
  password: "123456",
};

const formValidations = {
  email: [(value: string) => value.includes("@"), "El correo no es valido"],
  password: [
    (value: string) => value.length >= 6,
    "El password debe de tener mas de 6 caracteres",
  ],
  name: [
    (value: string) => value.length >= 3,
    "El nombre debe de tener mas de 3 caracteres",
  ],
};

export const RegisterPage = () => {
  const { status, errorMessage } = useAppSelector((state) => state.auth);

  const isCheckingAuthentication = useMemo(
    () => status === "checking",
    [status]
  );

  const dispatch = useDispatch();
  const {
    formState,
    name,
    email,
    password,
    onInputChange,
    isFormValid,
    nameValid,
    emailValid,
    passwordValid,
  } = useForm(formData, formValidations);

  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormSubmitted(true);
    if (!isFormValid) return;

    dispatch(startCreatingUserWithEmailPassword({
      email: 'gonzalobuasso@gmail.com',
      password: 'password', 
      name: ''
    }));
  };

  // console.log(nameValid);

  return (
    <AuthLayout title={"Crear cuenta"}>
      <h1>FormValid {isFormValid ? "true" : "false"}</h1>
      <form onSubmit={onSubmit} className="animate__animated animate__fadeIn animate__faster">
        <div className="flex flex-col gap-2">
          <div className="flex flex-col ">
            <input
              placeholder="Nombre Completo"
              type="text"
              className="w-full border-2 rounded-md p-3"
              name="name"
              value={name}
              onChange={onInputChange}
            />

            {!!nameValid && formSubmitted && (
              <p className="text-red-500 text-sm">{nameValid}</p>
            )}
          </div>

          <div className="flex flex-col">
            <input
              placeholder="Correo"
              type="text"
              className="w-full border-2 rounded-md p-3"
              name="email"
              value={email}
              onChange={onInputChange}
            />

            {emailValid && formSubmitted && (
              <p className="text-red-500 text-sm">{emailValid}</p>
            )}
          </div>

          <div className="flex flex-col">
            <input
              placeholder="Contraseña"
              type="text"
              className="w-full border-2 rounded-md p-3"
              name="password"
              value={password}
              onChange={onInputChange}
            />

            {!!passwordValid && formSubmitted && (
              <p className="text-red-500 text-sm">{passwordValid}</p>
            )}
          </div>
        </div>

        <div className={`mt-3 rounded-md bg-red-400 text-white ${errorMessage ? '' :'hidden'}`}>
          <p className="text-center text-sm p-5">{errorMessage}</p>
        </div>

        <div className="my-3">
          <button
            disabled={isCheckingAuthentication}
            type="submit"
            className={`bg-blue-900 w-full text-white p-2 rounded-md ${
              status !== "not-authenticated" ? "bg-slate-500" : null
            }`}
          >
            Crear cuenta
          </button>
        </div>


        <div className="flex justify-end py-2">
          <p className="mr-2">Ya tienes una cuenta?</p>

          <Link to={"/auth/login"}>ingresar</Link>
        </div>
      </form>
    </AuthLayout>
  );
};
