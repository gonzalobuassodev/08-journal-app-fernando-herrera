import { IoMdMenu } from "react-icons/io";

export const Navbar = () => {
  return (
    <div
      className={`flex items-center bg-blue-900 py-4 h-[49px] w-full fixed`}
    >
        <IoMdMenu className="text-white text-3xl ml-2 block sm:hidden" />
        <p className="text-white ml-2">Journal App</p>
    </div>
  );
};
