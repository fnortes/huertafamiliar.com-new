import { NextApiRequest, NextApiResponse } from 'next'
import { createMocks, RequestMethod } from 'node-mocks-http'

import handler from '@/pages/api/revalidate'

describe('API - revalidate', () => {
  function mockRequestResponse(method: RequestMethod = 'GET', headers?: NextApiRequest['headers']) {
    const { req, res }: { req: NextApiRequest; res: NextApiResponse } = createMocks({ method })

    res.revalidate = (_: string) => Promise.resolve()

    if (headers) {
      req.headers = headers
    }

    return { req, res }
  }

  test('Debería ir bien cuando no recibe la cabecera con el x-secret correcto', async () => {
    const { req, res } = mockRequestResponse()

    await handler(req, res)

    expect(res.statusCode).toEqual(401)
  })

  test('Debería ir bien cuando recibe el x-secret correcto', async () => {
    const { req, res } = mockRequestResponse('GET', { 'x-secret': process.env.REVALIDATE_SECRET })

    await handler(req, res)

    expect(res.statusCode).toEqual(200)
  })
})
