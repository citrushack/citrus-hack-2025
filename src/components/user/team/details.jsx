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
    <div className="mt-4 w-full rounded-md bg-white shadow-md">
      <div className="flex items-center gap-4 border-b p-6">
        <div className="flex flex-col">
          <h2 className="text-2xl font-bold">{details.name}</h2>
          <p className="text-sm text-gray-500">Team Details</p>
        </div>
      </div>

      <div className="border-b px-6 py-4">
        <h3 className="mb-2 text-xl font-semibold">Members</h3>
        <div className="flex flex-wrap gap-4">
          {details.members.length === 0 ? (
            <p className="text-gray-500">
              No team members yet. Invite others to join your team.
            </p>
          ) : (
            details.members.map(({ name, discord }, index) => (
              <div key={index} className="w-52 rounded-md border p-4">
                <p className="text-sm font-medium">{name}</p>
                <div className="mt-1 flex items-center space-x-2 text-sm text-gray-600">
                  <Discord size={18} />
                  <span>{discord}</span>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      <div className="border-b px-6 py-4">
        <Label htmlFor="teamId" className="mb-1 block font-semibold">
          Team ID
        </Label>
        <div className="flex max-w-sm items-center gap-2">
          <Input id="teamId" className="w-full" value={details.id} disabled />
          <Copy
            onClick={handleCopy}
            className="h-5 w-5 cursor-pointer text-gray-600 hover:opacity-75"
          />
          <LinkIcon
            onClick={handleCopyLink}
            className="h-5 w-5 cursor-pointer text-gray-600 hover:opacity-75"
          />
        </div>
      </div>

      <div className="space-y-4 border-b px-6 py-4">
        <div className="space-y-1.5">
          <Label htmlFor="devpost">Devpost</Label>
          <Input
            id="devpost"
            value={details.links.devpost}
            placeholder="https://devpost.com/super-cool-project"
            onChange={(e) =>
              setDetails({
                ...details,
                links: { ...details.links, devpost: e.target.value },
              })
            }
          />
        </div>

        <div className="space-y-1.5">
          <Label htmlFor="github">Github</Label>
          <Input
            id="github"
            value={details.links.github}
            placeholder="https://github.com/super-cool-code"
            onChange={(e) =>
              setDetails({
                ...details,
                links: { ...details.links, github: e.target.value },
              })
            }
          />
        </div>

        <div className="space-y-1.5">
          <Label htmlFor="figma">Figma</Label>
          <Input
            id="figma"
            value={details.links.figma}
            placeholder="https://figma.com/super-cool-design"
            onChange={(e) =>
              setDetails({
                ...details,
                links: { ...details.links, figma: e.target.value },
              })
            }
          />
        </div>
      </div>

      <div className="flex items-center justify-between px-6 py-4">
        <Button variant="destructive" onClick={handleLeave}>
          Leave Team
        </Button>
        <Button onClick={handleSave} className="bg-hackathon-green-400">
          Save Team
        </Button>
      </div>
    </div>
  );
};

export default Details;
