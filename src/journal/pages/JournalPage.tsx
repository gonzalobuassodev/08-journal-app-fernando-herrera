import { FaPlus } from "react-icons/fa";
import { JournalLayout } from "../layout/JournalLayout";
import { NoteView, NothingSelectedView } from "../views";
import { startNewNote } from "../../store/journal";
import { useAppSelector } from "../../store/auth/hook";
import { useAppDispatch } from "../../store";

export const JournalPage = () => {


  const { isSavingNewNote, active: activeNote } = useAppSelector((state) => state.journal)
  const dispatch = useAppDispatch();

  const onClickNewNote = () => {
    dispatch(startNewNote());
  };

  return (
    <JournalLayout>
      {activeNote && activeNote ? <NoteView /> : <NothingSelectedView />}

      <button
        disabled={isSavingNewNote}
        onClick={onClickNewNote}
        className={`fixed bottom-6 right-6 bg-red-600 rounded-full flex justify-center items-center
            ${isSavingNewNote ? "opacity-50" : ""}
          `}
      >
        <FaPlus className="text-5xl text-white p-4 cursor-pointer" />
      </button>

      {/* Note */}
    </JournalLayout>
  );
};
