const router = require('express').Router()

console.log('[stock] route loaded')

// GET all stock items
router.get('/', (req, res) => {
  res.json({ success: true, data: [], message: 'stock - GET all' })
})

// GET single stock item
router.get('/:id', (req, res) => {
  res.json({ success: true, data: null, message: `stock - GET id:${req.params.id}` })
})

// POST create stock item
router.post('/', (req, res) => {
  res.status(201).json({ success: true, data: req.body, message: 'stock - POST created' })
})

// PUT update stock item
router.put('/:id', (req, res) => {
  res.json({ success: true, data: req.body, message: `stock - PUT id:${req.params.id}` })
})

// DELETE stock item
router.delete('/:id', (req, res) => {
  res.json({ success: true, data: null, message: `stock - DELETE id:${req.params.id}` })
})

module.exports = router
