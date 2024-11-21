import { FaRegSave } from "react-icons/fa";
import { ImageGallery } from "./ImageGallery";
import {
  setActiveNote,
  startToDeleteNoteById,
  startUpdatingNote,
  uploadImageToCloudinary,
  useAppDispatch,
  useAppSelector,
} from "../../store";
import { useForm } from "../../hooks";
import { ChangeEvent, useEffect, useMemo, useRef } from "react";
import Swal from "sweetalert2";
import { IoCloudUploadOutline } from "react-icons/io5";
import { MdDeleteOutline } from "react-icons/md";

export const NoteView = () => {
  const {
    active: noteActive,
    messageSaved,
    isSavingNewNote,
  } = useAppSelector((state) => state.journal);

  const dispatch = useAppDispatch();

  const { body, title, date, imageUrls , onInputChange, formState } = useForm(noteActive);

  const dateString = useMemo(() => {
    if (date === 0) return '';
    const newDate = new Date(date);
    return newDate.toUTCString();
  }, [date]);

  useEffect(() => {
    dispatch(setActiveNote(formState));
  }, [formState, dispatch]);

  useEffect(() => {
    if (messageSaved.length > 0) {
      Swal.fire({
        title: "¡Guardado!",
        text: messageSaved,
        icon: "success",
        confirmButtonText: "Aceptar",
      });
    }
  }, [messageSaved]);

  const onSaveNote = () => {
    dispatch(startUpdatingNote());
  };

  const fileInputRef = useRef<HTMLInputElement>(null);

  const onImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;

    if (!files) return;

    dispatch(uploadImageToCloudinary(files));
  };

  const onDeleteNote = () => {
    dispatch(startToDeleteNoteById());
  }

  return (
    <div className="flex-1 overflow-y-auto h-[2000px] animate__animated animate__fadeIn animate__faster">
      <div className="flex justify-between mb-1 p-4">
        <div>
          <h6 className="text-5xl text-slate-700">{dateString}</h6>
        </div>

        <div className="flex items-center gap-2">
          <input
            onChange={onImageChange}
            multiple
            placeholder="Select an image"
            type="file"
            className="hidden"
            ref={fileInputRef}
          />

          <button onClick={() => fileInputRef.current?.click()}>
            <IoCloudUploadOutline className="text-6xl text-black p-4 cursor-pointer" />
          </button>

          <button
            disabled={isSavingNewNote}
            onClick={onSaveNote}
            className={`flex items-center gap-2 p-2 border-slate-700 border rounded-md`}
          >
            <FaRegSave className={`${isSavingNewNote ? "animate-spin" : ""}`} />

            {isSavingNewNote ? "Guardando..." : "Guardar"}
          </button>

          <button onClick={onDeleteNote}>
            <MdDeleteOutline className="text-6xl text-red-600 p-4 cursor-pointer" />
          </button>
        </div>
      </div>

      <div className="flex flex-col p-2 w-full gap-2">
        <input
          placeholder="Ingrese un título"
          className="border border-gray-300 w-full p-2 rounded-md focus:outline-none focus:ring-2 bg-slate-200"
          type="text"
          name="title"
          value={title ?? ""}
          onChange={(e) => onInputChange(e)}
        />

        <textarea
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 bg-slate-200"
          rows={4}
          placeholder="Que sucedio hoy?"
          name="body"
          value={body ?? ""}
          onChange={(e) => onInputChange(e)}
        />

        <ImageGallery images={imageUrls} />
      </div>
    </div>
  );
};
