import { redirect } from "next/navigation"
import { getSession } from "@/auth"

export default async function Page() {
  const session = await getSession()

  if(!session) redirect('/')

  return (
    <>
      {session.name}
    </>
  )
}