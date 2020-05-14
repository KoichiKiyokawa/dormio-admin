import { NextApiRequest, NextApiResponse } from 'next'
import { getMockNotices } from '@/mock'

export default (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify(getMockNotices()))
  } else {
    res.statusCode = 500
    res.end(new Error('unsupported request type'))
  }
}
