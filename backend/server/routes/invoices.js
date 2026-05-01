const router = require('express').Router()

console.log('[invoices] route loaded')

// GET all invoices
router.get('/', (req, res) => {
  res.json({ success: true, data: [], message: 'invoices - GET all' })
})

// GET single invoice
router.get('/:id', (req, res) => {
  res.json({ success: true, data: null, message: `invoices - GET id:${req.params.id}` })
})

// POST create invoice
router.post('/', (req, res) => {
  res.status(201).json({ success: true, data: req.body, message: 'invoices - POST created' })
})

// PUT update invoice
router.put('/:id', (req, res) => {
  res.json({ success: true, data: req.body, message: `invoices - PUT id:${req.params.id}` })
})

// DELETE invoice
router.delete('/:id', (req, res) => {
  res.json({ success: true, data: null, message: `invoices - DELETE id:${req.params.id}` })
})

module.exports = router
