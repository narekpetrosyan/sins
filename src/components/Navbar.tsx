import { FC } from "react";

export const Navbar: FC = () => {
  return (
    <div className="w-full max-h-min px-6 py-2 bg-white flex items-center justify-between">
      <div className="lg:w-20 lg:h-20 w-12 h-12">
        <img className="w-full h-full" src="/images/logo.png" alt="sins-logo" />
      </div>

      <button className="bg-black px-4 py-2 text-white lg:text-2xl text-base">
        BUY $SINS
      </button>
    </div>
  );
};
