import { HiTemplate } from "react-icons/hi";
import { Note, setActiveNote, useAppDispatch } from "../../store";
import { useMemo } from "react";

export const SidebarItem = ({ note }: { note: Note }) => {
  const { id, title, body } = note;
  const dispatch = useAppDispatch();

  const newBody = useMemo(() => {
    return body.length > 17 ? body.substring(0, 17) + "..." : body;
  }, [body]);

  const onClickItem = () => {
    dispatch(setActiveNote(note));
  };

  return (
    <div
      onClick={onClickItem}
      key={id}
      className="flex cursor-pointer mt-2 active:bg-slate-100 select-none"
    >
      <div className="flex items-center p-3">
        <HiTemplate />
      </div>
      <div className="flex flex-col p-2">
        <h6 className="text-md">{title}</h6>
        <span className="text-sm text-slate-400 mt-1">{newBody}</span>
      </div>
    </div>
  );
};
