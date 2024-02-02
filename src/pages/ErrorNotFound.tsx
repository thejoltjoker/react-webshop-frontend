import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const ErrorNotFound = () => {
  return (
    <>
      <Navbar />

      <div className="relative flex h-[70vh] w-full overflow-hidden object-cover">
        <div className="absolute flex h-full w-full flex-col items-center justify-center text-center">
          <h2 className=" mb-8 text-6xl text-white">Are you lost?</h2>
          <p className=" text-xl font-light uppercase tracking-widest text-white opacity-50">
            Page not found
          </p>
        </div>
        <img
          src="/react-webshop-frontend/img/404.jpg"
          alt=""
          className="absolute bottom-0 -z-10"
        />
      </div>

      <Footer />
    </>
  );
};

export default ErrorNotFound;
