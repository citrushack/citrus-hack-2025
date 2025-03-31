import Fault from "@/utils/error";

const Error = ({ code, name, message, dev }: Fault) => {
  return (
    <div className="fixed flex h-screen w-screen flex-col items-center justify-center">
      <p className="m-0 text-center text-6xl font-extrabold text-white">
        {code}
      </p>
      <p className="m-0 text-center text-lg font-bold text-white md:text-2xl">
        {name}
      </p>
      <p className="m-0 text-center text-sm text-white md:text-lg">{message}</p>
      {dev && (
        <p className="m-0 text-center text-sm text-white md:text-lg">
          Developer Notes: {dev}
        </p>
      )}
    </div>
  );
};

export default Error;
