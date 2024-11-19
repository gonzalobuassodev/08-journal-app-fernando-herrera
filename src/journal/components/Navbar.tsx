import { IoMdMenu } from "react-icons/io";
import { RiLogoutBoxRLine } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { startLogout } from "../../store/auth";
import { AppDispatch } from "../../store";

export const Navbar = () => {
  const dispatch = useDispatch<AppDispatch>();

  const logout = () =>{ 
    dispatch(startLogout());
  }

  return (
    <div
      className={`flex items-center justify-between bg-blue-900 py-4 h-[49px] w-[calc(100vw-242px)] fixed`}
    >
      <div className="flex items-center gap-2">
        <IoMdMenu className="text-white text-3xl ml-2 block sm:hidden" />
        <h1 className="text-white ml-2">Journal App</h1>
      </div>
      <div className="flex items-center gap-2 mr-3">
        <RiLogoutBoxRLine
          onClick={() => logout()}
          className="text-pink-800 cursor-pointer"
        />
      </div>
    </div>
  );
};
