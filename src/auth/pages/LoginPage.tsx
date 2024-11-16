import { FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthLayout } from "../layout/AuthLayout";

export const LoginPage = () => {
  return (
    <AuthLayout title={"Login"}>
      <form>
        <div className="flex flex-col gap-2">
          <input
            type="text"
            className="w-full border-2 rounded-md p-3"
            placeholder="Correo"
          />
          <input
            type="password"
            className="w-full border-2 rounded-md p-3"
            placeholder="Contraseña"
          />
        </div>

        <div className="flex flex-col sm:flex-row gap-2 justify-center my-3">
          <button className="bg-blue-900 text-white p-2 rounded-md w-full">
            Login
          </button>
          <button className="bg-blue-900 text-white p-2 rounded-md w-full flex items-center justify-center">
            <FaGoogle className="mr-2" />
            <span className="uppercase">Google</span>
          </button>
        </div>

        <div className="flex flex-row justify-end py-2">
          <Link to="/auth/register">Crear una cuenta</Link>
        </div>
      </form>
    </AuthLayout>
  );
};
