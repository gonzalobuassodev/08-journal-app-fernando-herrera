import { Link } from "react-router-dom";
import { AuthLayout } from "../layout/AuthLayout";

export const RegisterPage = () => {
  return (
    <AuthLayout title={"Crear cuenta"}>
      <form>
        <div className="flex flex-col gap-2">
          <input
            placeholder="Nombre Completo"
            type="text"
            className="w-full border-2 rounded-md p-3"
          />

          <input
            placeholder="Correo"
            type="text"
            className="w-full border-2 rounded-md p-3"
          />

          <input
            placeholder="Contraseña"
            type="text"
            className="w-full border-2 rounded-md p-3"
          />
        </div>

        <div className="my-3">
          <button className="bg-blue-900 w-full text-white p-2 rounded-md">
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
