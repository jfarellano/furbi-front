import { getPositions } from "@/api/users";
import { getSession } from "@/auth";
import { redirect } from "next/navigation";

export default async function Home() {

  const session = await getSession()
  const positions = await getPositions()
  if(!session) redirect('/login')
  
  return (
    <main>
      Hello {session.name}, welcome to Furbi!
    </main>
  );
}
