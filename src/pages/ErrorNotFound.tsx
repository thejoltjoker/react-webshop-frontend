import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const ErrorNotFound = () => {
  return (
    <>
      <Navbar />

      <div className="relative flex max-h-[80vh] min-h-40 w-full overflow-hidden object-cover">
        <div className="absolute flex h-full w-full flex-col items-center justify-center text-center">
          <h2 className=" mb-8 text-6xl text-white">Are you lost?</h2>
          <p className=" text-xl font-light uppercase tracking-widest text-white opacity-50">
            Page not found
          </p>
        </div>
        <img
          src="/img/gantas-vaiciulenas-FVz5fDfGFFw-unsplash.jpg"
          alt=""
          className="self-center"
        />
      </div>

      <Footer />
    </>
  );
};

export default ErrorNotFound;
