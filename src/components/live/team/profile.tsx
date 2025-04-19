import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";

type props = {
  image: StaticImageData;
  name: string;
  role?: string;
};

const Profile = ({ image, name, role }: props) => {
  return (
    <motion.div
      key={name}
      className="my-4 gap-3 text-center font-rubiks text-white"
      initial="initial"
      whileHover="hover"
    >
      <motion.div
        className="relative mx-auto h-40 w-40"
        variants={{
          hover: {
            scale: 1.05,
            transition: { duration: 0.9 },
          },
        }}
      >
        <motion.div
          className="absolute -inset-0 rounded-full opacity-0"
          variants={{
            hover: {
              opacity: 0.7,
              boxShadow: "0 0 25px 5px rgba(255, 215, 0, 0.7)",
              transition: {
                duration: 1.1,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              },
            },
          }}
        />
        <Image
          src={image}
          alt={name}
          className="h-full w-full rounded-full border-2 border-citrus-yellow object-cover"
        />
      </motion.div>
      <div className="mt-3 text-center">
        {role && role !== "" && <p>{role}</p>}
        <p>{name}</p>
      </div>
    </motion.div>
  );
};

export default Profile;
