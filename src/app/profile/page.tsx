"use server"
import { UserProfileForm } from "./form"
import { getPositions, getProfile } from "@/api/users"

export default async function Page() {
  const profile = await getProfile()
  const positions = await getPositions()

  return (
    <>
      <h1>Profile</h1>
      <UserProfileForm profile={profile} positions={positions} />
    </>
  )
}