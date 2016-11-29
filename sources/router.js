import {Router} from 'express'

const router = Router()

router
  .route('/users')
  .get(listeUsers)

module.exports = router

function listeUsers(req, res) {
  const users = [
    {name: 'Darlan'},
    {name: 'Clara'},
  ]
  res.json(users)
}
