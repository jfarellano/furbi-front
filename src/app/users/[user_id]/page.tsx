import { getUser } from "@/api/users"
import { Typography } from "@mui/material"
import { UsersForm } from "./form"

export default async function Page({params}:{params: {user_id: string}}) {
  const user: any = await getUser(params.user_id)

  return user ? (
    <>
      <Typography variant="h3">
        Edicion de usuario
      </Typography>
      <UsersForm user={user} />
    </>
  ) : 'Error cargando los usuarios'
}