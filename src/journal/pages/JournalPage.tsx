import { FaPlus } from "react-icons/fa";
import { JournalLayout } from "../layout/JournalLayout";
import { NoteView, NothingSelectedView } from "../views";

export const JournalPage = () => {
  return (
    <JournalLayout>
      {/* NothinSelected */}

      {/* <NothingSelectedView /> */}
      <NoteView />

      <button className="fixed bottom-6 right-6 bg-red-600 rounded-full flex justify-center items-center active:bg-blue-600 active:scale-95 transition duration-150 ease-in-out">
        <FaPlus className="text-5xl text-white p-4 cursor-pointer"  />
      </button>


      {/* Note */}
    </JournalLayout>
  );
};
