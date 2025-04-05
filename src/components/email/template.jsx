import data from "@/data/config";
import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  // Img,
  Link,
  Preview,
  // Section,
  Text,
  Tailwind,
} from "@react-email/components";

const Template = ({ children, name, preview }) => {
  return (
    <Html>
      <Head />
      <Preview>{preview}</Preview>
      <Tailwind>
        <Body className="mx-auto my-auto bg-white px-2 font-sans">
          <Container className="mx-auto my-[40px] max-w-[465px] rounded border border-solid border-[#eaeaea] bg-[#72231C] p-[20px] text-[#FFEBD2]">
            {/* <Section className="mt-[32px]">
              <Img
                src="https://jezaktl1r2.ufs.sh/f/AdpLMvBHJtoLMwLOPESeHVAZTj3irIfa12CBtSq9YdN75lWD"
                width="40"
                height="37"
                alt="Vercel"
                className="mx-auto my-0"
              />
            </Section> */}
            <Heading className="mx-0 my-[30px] p-0 text-center text-[24px] font-normal text-[#FFEBD2]">
              Thank you for applying!
            </Heading>
            <Text className="text-[14px] leading-[24px] text-[#FFEBD2]">
              Hello <strong className="text-white">{name}</strong>,
            </Text>
            {children}
            <Text>
              - {data.name} Team {data.heart}
            </Text>
            <Hr className="mx-0 my-[26px] w-full border border-solid border-[#eaeaea]" />
            <Text className="text-white">
              Visit{" "}
              <Link href={data.domain} className="text-[#EAA54F]">
                {data.domain}{" "}
              </Link>
              for more information about <strong>{data.name}</strong> and follow
              us on{" "}
              <Link href={data.instagram} className="text-[#EAA54F]">
                {" "}
                Instagram{" "}
              </Link>{" "}
              and{" "}
              <Link href={data.linkedin} className="text-[#EAA54F]">
                LinkedIn{" "}
              </Link>
              for up to date information and announcements.
            </Text>
            <Text className="text-xs leading-[24px] text-[#e7d5d5]">
              This invitation was intended for{" "}
              <span className="text-white">{name}</span>. If you were not
              expecting this email, you can ignore this email. If you are
              concerned about your account&apos;s safety, please contact{" "}
              <Link href={`mailto:${data.email}`} className="text-[#EAA54F]">
                {" "}
                {data.email}{" "}
              </Link>{" "}
              to get in touch with us.
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default Template;
