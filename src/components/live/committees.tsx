import Title from "@/components/ui/title";
import ITEMS from "@/data/live/committees";

const Committees = () => {
  return (
    <div className="justify-items-center space-y-10">
      <Title>COMMITTEES</Title>

      <div className="flex font-bold text-white sm:text-xl lg:text-3xl">
        {ITEMS.map(({ name, members }) => (
          <div key={name} className="px-5">
            {name}
            <div className="grid grid-rows-4 justify-items-center sm:text-xs md:text-xl lg:text-xl">
              {members.map((member, index) => (
                <span key={index}>{member.name}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Committees;
