'use Client'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useState } from "react";
import Auth from "./Auth";
export default function NaveBar({user}) {
  // const [user, setUser] = useState(null);
  return (
    <div>
      <div className="flex justify-between px-12 my-5">
        <h1 className="text-4xl font-bold text-center">{user ? user.name: 'Next.js App' }</h1>
        <div>
          <Auth/>
        <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </div>
  );
}
