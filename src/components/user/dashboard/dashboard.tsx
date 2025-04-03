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
    <div className="font-poppins flex h-full flex-col gap-3">
      <div className="max-sm:hidden lg:flex">
        <Image src={curtain} alt={curtain} className="absolute inset-0 z-20" />
        <div className="absolute inset-0 top-[20%] grid translate-x-[17%] grid-cols-1 gap-3 lg:grid-cols-3">
          <div className="col-span-1 flex flex-col gap-3 md:col-span-2">
            <Header />
            <div className="">
              <Countdown />
            </div>

            <div className="flex flex-col gap-4 md:flex-row">
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
            <div className="flex flex-col gap-4">
              <BulletList text="Rules" list={RULES} />
              <BulletList text="Judging" list={JUDGING} />
            </div>
          </div>
        </div>
      </div>
      {/* small end */}
      <div className="max-sm:flex md:hidden">
        <div className="absolute inset-0 left-0 top-11 grid grid-cols-1 gap-3 text-xs lg:grid-cols-3">
          <div className="flex flex-col gap-5">
            <Header />
            <div className="">
              <Countdown />
            </div>

            <div className="flex flex-col gap-4 md:flex-row">
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
            <div className="flex flex-col gap-4">
              <BulletList text="Rules" list={RULES} />
              <BulletList text="Judging" list={JUDGING} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
