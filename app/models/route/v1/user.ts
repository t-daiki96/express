import express from 'express'
const router: express.Router = express.Router()

router.get('/test', (req, res) => {
  res.json({ message: 'This is user api' })
})

export default router
