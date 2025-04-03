import { Loader } from "lucide-react";

const Loading = () => {
  return (
    <div className="flex h-[70vh] flex-col items-center justify-center">
      <p className="text-3xl font-bold text-white">Loading...</p>
      <Loader className="animate-spin text-white" />
    </div>
  );
};

export default Loading;
