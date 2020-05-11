import { NextApiRequest, NextApiResponse } from 'next'
import { getMockResidents } from '@/mock'

export default (req: NextApiRequest, res: NextApiResponse) => {
  console.log(req.method)
  if (req.method === 'GET') {
    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify(getMockResidents()))
  } else {
    res.statusCode = 500
    res.end(new Error('unsupported request type'))
  }
}
