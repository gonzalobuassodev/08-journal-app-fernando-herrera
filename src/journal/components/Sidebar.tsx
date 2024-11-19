import { HiTemplate } from "react-icons/hi";
import { useAppSelector } from "../../store/auth/hook";

export const Sidebar = ({ drawerWidth }: { drawerWidth: number }) => {

  const { displayName } = useAppSelector((state) => state.auth)

  return (
    <div
      className={`w-[${drawerWidth}px] hidden flex-shrink-0 overflow-y-auto border-r-2 md:block`}
    >
      <div className="fixed top-0 right-0 left-0 z-50 h-[49px] w-[240px] bg-white flex justify-center items-center border-b-2">
        <h6 className="font-semibold text-slate-700">{ displayName }</h6>
      </div>

      <div className="w-[240px] mt-12">
        {["Enero", "Febrero", "Marzo", "Abril"].map((mounth) => (
          <div className="flex cursor-pointer mt-2">
            <div className="flex items-center p-3">
              <HiTemplate />
            </div>
            <div className="flex flex-col p-2">
              <h6 className="text-md">{mounth}</h6>
              <p className="text-sm text-slate-400 mt-1">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi,
                ipsa!
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
