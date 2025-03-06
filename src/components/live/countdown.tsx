import Clock from "@/components/ui/countdown";
const Countdown = () => {
  return (
    <div>
      <Clock
        classNames={{
          digit: "text-white",
          background: "bg-white",
          unit: "text-white",
        }}
      />
    </div>
  );
};

export default Countdown;
