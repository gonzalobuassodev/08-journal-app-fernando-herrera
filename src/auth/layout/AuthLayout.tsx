import React from "react";

export const AuthLayout = ({children, title}: {children: React.ReactNode, title: string}) => {
  return (
    <div className="flex justify-center items-center bg-violet-800 h-screen">
      <div className="bg-white w-96 m-2 p-3 sm:w-[500px] rounded-md">
        <h5 className="mb-6 text-3xl">{title}</h5>
        {children}
      </div>
    </div>
  );
};
