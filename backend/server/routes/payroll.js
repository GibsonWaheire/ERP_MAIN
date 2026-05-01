const router = require('express').Router()

console.log('[payroll] route loaded')

// GET all payroll records
router.get('/', (req, res) => {
  res.json({ success: true, data: [], message: 'payroll - GET all' })
})

// GET single payroll record
router.get('/:id', (req, res) => {
  res.json({ success: true, data: null, message: `payroll - GET id:${req.params.id}` })
})

// POST create payroll record
router.post('/', (req, res) => {
  res.status(201).json({ success: true, data: req.body, message: 'payroll - POST created' })
})

// PUT update payroll record
router.put('/:id', (req, res) => {
  res.json({ success: true, data: req.body, message: `payroll - PUT id:${req.params.id}` })
})

// DELETE payroll record
router.delete('/:id', (req, res) => {
  res.json({ success: true, data: null, message: `payroll - DELETE id:${req.params.id}` })
})

module.exports = router
