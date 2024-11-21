import { useAppSelector } from "../../store/auth/hook";
import { SidebarItem } from "./SidebarItem";

export const Sidebar = ({ drawerWidth }: { drawerWidth: number }) => {
  const { displayName } = useAppSelector((state) => state.auth);
  const { notes } = useAppSelector((state) => state.journal);

  return (
    <div
      className={`w-[${drawerWidth}px] hidden flex-shrink-0 overflow-y-auto border-r-2 md:block`}
    >
      <div className="fixed top-0 right-0 left-0 z-50 h-[49px] w-[240px] bg-white flex justify-center items-center border-b-2">
        <h6 className="font-semibold text-slate-700">{displayName}</h6>
      </div>

      <div className="w-[240px] mt-12">
        {notes.map((note) => (
          <SidebarItem key={note.id} note={note} />
        ))}
      </div>
    </div>
  );
};
