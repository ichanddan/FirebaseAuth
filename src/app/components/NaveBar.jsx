"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Auth from "./Auth";
import { useAuth } from "../Context/AuthContext";
import { Button } from "@/components/ui/button";
export default function NaveBar() {
  const { user, logOut } = useAuth();
  console.log(user);
  const handleLogOut = async () => {
    await logOut();
  };
  return (
    <div>
      <div className="flex justify-between px-12 my-5">
        <h1 className="text-4xl font-bold text-center">
          {user ? user?.displayName : "Next.js App"}
        </h1>
        {user && user.displayName ? (
          <div className="flex gap-5">
            <Avatar>
              <AvatarImage src={user.photoURL} alt="@shadcn" />
              <AvatarFallback>{user.displayName}</AvatarFallback>
            </Avatar>
            <Button variant="outline" onClick={handleLogOut}>
              LogOut
            </Button>
          </div>
        ) : (
          <>
            <Auth />
          </>
        )}
      </div>
    </div>
  );
}
