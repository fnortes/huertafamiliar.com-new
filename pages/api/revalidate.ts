// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  revalidate: boolean
}

// A este servicio se debería de llamar desde un webhook (que a su vez se debería ejecutar cuando nos interese,
// por ejemplo que se actualice algo en BD).
// Para pruebas, correr la build y luego ejecutar el "yarn start" para arrancar en modo build y después llamar
// a este servicio a mano desde el Postman o similar.
export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  if (req.headers['x-secret'] === process.env.REVALIDATE_SECRET) {
    await res.revalidate('/')
    res.status(200).json({ revalidate: true })
  } else {
    res.status(401).end()
  }
}
