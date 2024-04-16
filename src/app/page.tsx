import { getSession } from "@/auth";
import { redirect } from "next/navigation";

export default async function Home() {

  const session = await getSession()
  if(!session) redirect('/login')
  
  return (
    <main>
      Hola {session.name}, bienvenido al panel Hepic!
    </main>
  );
}
