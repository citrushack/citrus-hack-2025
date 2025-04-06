import Details from "./details";
import NewTeam from "./new";
import { getSession } from "@/utils/auth";
import { fetchTeam } from "@/actions/join";

const Team = async () => {
  const session = await getSession();

  if (!session?.user) return <></>;

  const teamId = session.user.team;
  const details = teamId ? await fetchTeam(teamId) : null;

  return (
    <div className="flex h-full w-full flex-col items-start gap-3 bg-citrus-red-200 px-8 py-6">
      <h1 className="text-3xl font-bold text-white">My Team</h1>
      {teamId === "" ? <NewTeam /> : <Details team={details} />}
    </div>
  );
};

export default Team;
