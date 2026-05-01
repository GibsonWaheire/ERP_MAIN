const router = require('express').Router()

console.log('[settings] route loaded')

// In-memory placeholder until DB is wired up
let companySettings = {
  name: 'Acme Ltd',
  address: 'Nairobi, Kenya',
  phone: '+254 700 000000',
  email: 'info@acme.co.ke',
  vatNumber: 'P051234567A',
  currency: 'KES',
  taxRate: 16,
}

// GET company settings
router.get('/', (req, res) => {
  res.json({ success: true, data: companySettings, message: 'settings - GET' })
})

// PUT update company settings
router.put('/', (req, res) => {
  companySettings = { ...companySettings, ...req.body }
  res.json({ success: true, data: companySettings, message: 'settings - PUT updated' })
})

module.exports = router
