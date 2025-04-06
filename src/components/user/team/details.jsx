"use client";
import { useState } from "react";
import toaster from "@/utils/toaster";
import { Copy, Link as LinkIcon } from "lucide-react";
import { api } from "@/utils/api";
import { SiDiscord as Discord } from "@icons-pack/react-simple-icons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const Details = ({ team }) => {
  const [details, setDetails] = useState(team);

  const handleCopy = () => {
    navigator.clipboard.writeText(details.id);
    toaster("Successfully copied team ID!", "success");
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(
      `${process.env.NEXT_PUBLIC_URL}user/join/${details.id}`,
    );
    toaster("Successfully copied join link!", "success");
  };

  const handleLeave = async () => {
    await api({
      method: "DELETE",
      url: "/api/members",
    });
    toaster("Successfully left team!", "success");
  };

  const handleSave = async () => {
    if (
      !(
        details.links.github === "" ||
        details.links.github.includes("github.com/")
      )
    ) {
      toaster("Invalid Github Link", "error");
      return;
    }
    if (
      !(
        details.links.devpost === "" ||
        details.links.devpost.includes("devpost.com/")
      )
    ) {
      toaster("Invalid Devpost Link", "error");
      return;
    }
    if (
      !(
        details.links.figma === "" || details.links.figma.includes("figma.com/")
      )
    ) {
      toaster("Invalid Figma Link", "error");
      return;
    }

    await api({
      method: "PUT",
      url: "/api/team",
      body: details,
    });
    toaster("Successfully Updated!", "success");
  };

  return (
    <div className="mt-4 w-full rounded-md bg-black text-amber-100 shadow-lg">
      <div className="rounded-t-md border-b-4 border-amber-300 bg-citrus-red-100 p-4 text-amber-100">
        <div className="text-xl font-bold uppercase tracking-wide">
          Team Details
        </div>
      </div>
      <div className="flex flex-col items-start gap-4 border-b border-amber-900/60 bg-zinc-900 px-6 py-4 md:flex-row md:items-center">
        <div className="flex flex-col">
          <p className="text-sm text-amber-200/70">Team name</p>
          <h2 className="text-2xl font-bold text-amber-200">{details.name}</h2>
        </div>
        <div className="px-0 py-4 md:px-6">
          <Label
            htmlFor="teamId"
            className="mb-1 block font-semibold text-amber-200"
          >
            Team ID
          </Label>
          <div className="flex max-w-sm items-center gap-2">
            <Input
              id="teamId"
              className="w-full border-amber-900 bg-zinc-800 text-amber-100"
              value={details.id}
              disabled
            />
            <Copy
              onClick={handleCopy}
              className="h-5 w-5 cursor-pointer text-amber-300 hover:text-amber-200"
            />
            <LinkIcon
              onClick={handleCopyLink}
              className="h-5 w-5 cursor-pointer text-amber-300 hover:text-amber-200"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-wrap gap-4 border-b border-amber-900/60 bg-zinc-900/80 px-6 py-6">
        <div className="w-full space-y-1.5 md:w-1/3">
          <Label htmlFor="devpost" className="text-amber-200">
            Devpost
          </Label>
          <Input
            id="devpost"
            value={details.links.devpost}
            placeholder="https://devpost.com/super-cool-project"
            className="border-amber-900 bg-zinc-800 text-amber-100 placeholder:text-amber-100/40"
            onChange={(e) =>
              setDetails({
                ...details,
                links: { ...details.links, devpost: e.target.value },
              })
            }
          />
        </div>
        <div className="w-full space-y-1.5 md:w-1/3">
          <Label htmlFor="github" className="text-amber-200">
            Github
          </Label>
          <Input
            id="github"
            value={details.links.github}
            placeholder="https://github.com/super-cool-code"
            className="border-amber-900 bg-zinc-800 text-amber-100 placeholder:text-amber-100/40"
            onChange={(e) =>
              setDetails({
                ...details,
                links: { ...details.links, github: e.target.value },
              })
            }
          />
        </div>
        <div className="w-full space-y-1.5 md:w-1/3">
          <Label htmlFor="figma" className="text-amber-200">
            Figma
          </Label>
          <Input
            id="figma"
            value={details.links.figma}
            placeholder="https://figma.com/super-cool-design"
            className="border-amber-900 bg-zinc-800 text-amber-100 placeholder:text-amber-100/40"
            onChange={(e) =>
              setDetails({
                ...details,
                links: { ...details.links, figma: e.target.value },
              })
            }
          />
        </div>
      </div>
      <div className="border-b border-amber-900/60 bg-zinc-900/50 px-6 py-6">
        <h3 className="mb-4 text-xl font-semibold uppercase tracking-wide text-amber-200">
          Members
        </h3>
        <div className="flex flex-wrap gap-4">
          {details.members.length === 0 ? (
            <p className="text-amber-100/70">
              No team members yet. Invite others to join your team.
            </p>
          ) : (
            details.members.map(({ name, discord }, index) => (
              <div
                key={index}
                className="w-52 rounded-md border border-amber-900/80 bg-zinc-800 p-4 shadow-md"
              >
                <p className="text-sm font-medium text-amber-200">{name}</p>
                <div className="mt-1 flex items-center space-x-2 text-sm text-amber-100/80">
                  <Discord size={18} />
                  <span>{discord}</span>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
      <div className="flex items-center justify-between rounded-b-md bg-citrus-black/80 px-6 py-4">
        <Button
          variant="destructive"
          onClick={handleLeave}
          className="bg-red-800 text-amber-100 hover:bg-red-700"
        >
          Leave Team
        </Button>
        <Button
          onClick={handleSave}
          className="bg-amber-700 text-amber-100 hover:bg-amber-600"
        >
          Save Team
        </Button>
      </div>
    </div>
  );
};

export default Details;
