import Countdown from "./countdown";
import Header from "../header";
import Tile from "./tile";
import { QrCode, ParkingCircle } from "lucide-react";
import Rooms from "./rooms";
import Packing from "./packing";
import BulletList from "./bulletlist";
import { JUDGING } from "@/data/user/judging";
import { RULES } from "@/data/user/rules";
import curtain from "@/public/assets/sponsors/sponsorcurtain.svg";
import Image from "next/image";

const Dashboard = () => {
  return (
    <div className="font-poppins relative flex h-full flex-col gap-3">
      <div className="absolute inset-0 z-10 hidden h-full w-full items-center justify-center md:flex">
        <Image src={curtain} alt={curtain} className="m-auto scale-x-125" />
      </div>
      <div className="absolute inset-0 top-0 z-20 grid grid-cols-1 gap-3 md:top-[20%] md:translate-x-[17%] lg:grid-cols-3">
        <div className="col-span-1 flex flex-col gap-3 p-4 md:col-span-2 md:p-0">
          <Header />
          <Countdown />
          <div className="relative flex flex-col gap-4 md:flex-row">
            <Tile
              icon={<QrCode size={40} />}
              text="Check In"
              link="/user/checkin"
            />
            <Tile
              icon={<ParkingCircle size={40} />}
              text="Parking Info"
              link="https://transportation.ucr.edu/visitor-parking"
            />
          </div>
          <Rooms />
          <Packing />
          <div className="flex flex-col gap-4 md:flex-row">
            <BulletList text="Rules" list={RULES} />
            <BulletList text="Judging" list={JUDGING} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
