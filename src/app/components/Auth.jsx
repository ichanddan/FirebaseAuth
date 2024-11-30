import { Button } from "@/components/ui/button";
import { Dialog } from "@/components/ui/dialog";
import { useAuth } from "../Context/AuthContext";

export default function Auth() {
  const { user, login, logOut } = useAuth();
  const handleLogin = async () => {
    await login();
  };
 
  return (
    <Dialog>
      <div>
        <Button variant="outline" onClick={handleLogin}>
          LogIn
        </Button>
      </div>
    </Dialog>
  );
}
