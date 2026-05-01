const router = require('express').Router()

console.log('[reports] route loaded')

// GET Profit & Loss report
router.get('/profit-loss', (req, res) => {
  res.json({
    success: true,
    data: {
      revenue: 0,
      expenses: 0,
      netProfit: 0,
      period: req.query.period || 'monthly',
    },
    message: 'reports - profit-loss',
  })
})

// GET VAT Return report
router.get('/vat-return', (req, res) => {
  res.json({
    success: true,
    data: {
      outputVAT: 0,
      inputVAT: 0,
      netVAT: 0,
      period: req.query.period || 'monthly',
    },
    message: 'reports - vat-return',
  })
})

// GET Cash Flow report
router.get('/cash-flow', (req, res) => {
  res.json({
    success: true,
    data: {
      inflows: 0,
      outflows: 0,
      netCashFlow: 0,
      period: req.query.period || 'monthly',
    },
    message: 'reports - cash-flow',
  })
})

module.exports = router
