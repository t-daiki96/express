import express from 'express'
import article from './article'
import user from './user'

export const router: express.Router = express.Router();

router.get('/', (req, res) => {
  res.json({ message: 'Hello' })
})

router.use('/article', article);
router.use('/user', user)
