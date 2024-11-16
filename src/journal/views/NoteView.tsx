import { FaRegSave } from "react-icons/fa";
import { ImageGallery } from "./ImageGallery";

export const NoteView = () => {
  return (
    <div className="flex-1 overflow-y-auto h-[2000px]">
      <div className="flex justify-between mb-1 p-4">
        <div>
          <h6 className="text-5xl text-slate-700">28 de agosto, 2023</h6>
        </div>

        <div>
          <button className="flex items-center gap-2 p-2 border-slate-700 border rounded-md">
            <FaRegSave />
            Guardar
          </button>
        </div>
      </div>

      <div className="flex flex-col p-2 w-full gap-2">
        <input
          placeholder="Ingrese un título"
          className="border border-gray-300 w-full p-2 rounded-md focus:outline-none focus:ring-2 bg-slate-200"
          type="text"
        />

        <textarea
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 bg-slate-200"
          rows={4}
          placeholder="Que sucedio hoy?"
        />

        <ImageGallery />
      </div>

    </div>
  );
};
