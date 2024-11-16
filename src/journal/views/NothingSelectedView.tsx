import { FaRegStar } from "react-icons/fa";

export const NothingSelectedView = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-violet-800 p-2">
      <FaRegStar className="text-6xl text-white" />

      <h6 className="text-white mt-4">Selecciona o crea una nota</h6>
    </div>
  );
};
