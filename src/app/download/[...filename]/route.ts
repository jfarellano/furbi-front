import { clientFile } from "@/api/clients";

export async function GET(req: Request, { params }:{params:any}) {
  const response = await clientFile(params.filename.join('/'))
  return new Response(response?.body, {
    headers: response?.headers
  })
}