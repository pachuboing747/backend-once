const { Router } = require('express')
const manager = require('../../dao/managers/user.manager')

const router = Router()

router.post('/', async (req, res) => {
  const { body } =  req

  const created = await manager.create(body)

  res.send(created)
})

module.exports = router
