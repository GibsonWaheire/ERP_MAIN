const router = require('express').Router()

console.log('[expenses] route loaded')

// GET all expenses
router.get('/', (req, res) => {
  res.json({ success: true, data: [], message: 'expenses - GET all' })
})

// GET single expense
router.get('/:id', (req, res) => {
  res.json({ success: true, data: null, message: `expenses - GET id:${req.params.id}` })
})

// POST create expense
router.post('/', (req, res) => {
  res.status(201).json({ success: true, data: req.body, message: 'expenses - POST created' })
})

// PUT update expense
router.put('/:id', (req, res) => {
  res.json({ success: true, data: req.body, message: `expenses - PUT id:${req.params.id}` })
})

// DELETE expense
router.delete('/:id', (req, res) => {
  res.json({ success: true, data: null, message: `expenses - DELETE id:${req.params.id}` })
})

module.exports = router
