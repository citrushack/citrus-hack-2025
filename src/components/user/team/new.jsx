"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import toaster from "@/utils/toaster";
import Link from "next/link";
import { api } from "@/utils/api";

const NewTeam = () => {
  const [team, setTeam] = useState({
    id: "",
    name: "",
  });

  const [id, setId] = useState("");

  const handleJoin = async () => {
    if (team.id === "") {
      toaster("Enter a Valid Team ID", "error");
      return;
    }

    const response = await api({
      method: "PUT",
      url: "/api/members",
      body: { team: team.id },
    });

    if (response.message === "OK") {
      toaster("Successfully joined team!", "success");
      setId(team.id);
      return;
    }

    toaster(`${response.message}`, "error");
  };

  const handleCreate = async () => {
    if (team.name === "") {
      toaster("Enter a Valid Team Name", "error");
      return;
    }

    const { id } = await api({
      method: "POST",
      url: "/api/team",
      body: { team: team },
    });

    setId(id);

    toaster("Successfully created a new team!", "success");
  };

  return (
    <>
      <AlertDialog open={id !== ""}>
        <AlertDialogContent className="border-2 border-amber-700 bg-zinc-900 text-amber-100">
          <AlertDialogHeader>
            <AlertDialogTitle className="text-2xl font-bold tracking-wide text-amber-200">
              Welcome to your new team!
            </AlertDialogTitle>
            <AlertDialogDescription className="text-lg text-amber-100">
              Using the team dashboard, you can add team members, upload
              submission links and view critical information for judging!
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <Link href={`/user/team`}>
              <AlertDialogAction className="bg-citrus-red-100/80 font-bold text-amber-100 hover:bg-citrus-red-100">
                Visit New Team
              </AlertDialogAction>
            </Link>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <Tabs defaultValue="join" className="w-full">
        <TabsList className="mb-8 grid w-full grid-cols-2 gap-4 bg-transparent">
          <TabsTrigger
            className="rounded-sm border-2 border-amber-700 bg-citrus-black py-3 text-xl font-bold text-amber-200 data-[state=active]:border-amber-300 data-[state=active]:bg-red-900 md:text-2xl"
            value="join"
          >
            Join a Team
          </TabsTrigger>
          <TabsTrigger
            className="rounded-sm border-2 border-amber-700 bg-citrus-black py-3 text-xl font-bold text-amber-200 data-[state=active]:border-amber-300 data-[state=active]:bg-red-900 md:text-2xl"
            value="create"
          >
            Create a Team
          </TabsTrigger>
        </TabsList>

        <TabsContent className="items-center" value="join">
          <Card className="border-amber-800 bg-black shadow-lg">
            <CardHeader className="items-center border-b border-amber-900/50">
              <CardTitle className="text-4xl font-bold uppercase tracking-wide text-amber-200">
                Join a Team
              </CardTitle>
              <CardDescription className="text-xl text-amber-100/80">
                Ask your teammates for a team id to join their team.
              </CardDescription>
            </CardHeader>
            <CardContent className="mt-8 flex flex-col items-center space-y-4 bg-zinc-900/70">
              <Label
                className="text-xl font-semibold text-amber-200"
                htmlFor="team"
              >
                Team ID
              </Label>
              <Input
                className="w-1/2 rounded-sm border-amber-700 bg-zinc-800 py-6 text-xl text-amber-100 placeholder:text-amber-100/40"
                id="team"
                placeholder="ie. abc123"
                onChange={(e) => setTeam({ id: e.target.value, name: "" })}
              />
            </CardContent>
            <CardFooter className="flex flex-col items-center bg-zinc-900/50 pb-8">
              <Button
                className="w-1/8 mt-5 h-14 rounded-sm bg-amber-700 text-2xl font-bold text-amber-100 hover:bg-amber-600"
                onClick={handleJoin}
              >
                Join Team
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent className="items-center" value="create">
          <Card className="border-amber-800 bg-black shadow-lg">
            <CardHeader className="items-center border-b border-amber-900/50">
              <CardTitle className="text-4xl font-bold uppercase tracking-wide text-amber-200">
                Create a Team
              </CardTitle>
              <CardDescription className="text-xl text-amber-100/80">
                Enter a unique and fun team name! You can change this name
                later.
              </CardDescription>
            </CardHeader>
            <CardContent className="mt-8 flex flex-col items-center space-y-4 bg-zinc-900/70">
              <Label
                className="text-xl font-semibold text-amber-200"
                htmlFor="name"
              >
                Team Name
              </Label>
              <Input
                className="w-1/2 rounded-sm border-amber-700 bg-zinc-800 py-6 text-xl text-amber-100 placeholder:text-amber-100/40"
                id="name"
                type="text"
                placeholder="ie. Snrolax"
                onChange={(e) => setTeam({ name: e.target.value, id: "" })}
              />
            </CardContent>
            <CardFooter className="flex flex-col items-center bg-zinc-900/50 pb-8">
              <Button
                className="w-1/8 mt-5 h-14 rounded-sm bg-amber-700 text-2xl font-bold text-amber-100 hover:bg-amber-600"
                onClick={handleCreate}
              >
                Create Team
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </>
  );
};

export default NewTeam;
