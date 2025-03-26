import Title from "@/components/ui/title";
import { COMMITTEES } from "@/data/live/committees";

const Committees = () => {
  return (
    <div className="flex flex-col items-center gap-10 py-10">
      <Title>COMMITTEES</Title>

      <div className="flex flex-wrap justify-center gap-4 text-center font-bold text-white sm:text-xl lg:text-3xl">
        {COMMITTEES.map(({ name, members }, index) => (
          <div key={index} className="px-5">
            {name}
            <div className="grid grid-rows-4 justify-items-center text-xs font-normal md:text-xl lg:text-xl">
              {members.map((item, index) => (
                <span key={index}>{item}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Committees;
