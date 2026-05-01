require('dotenv').config()
const express = require('express')
const cors = require('cors')
const helmet = require('helmet')
const morgan = require('morgan')

const invoicesRouter = require('./routes/invoices')
const expensesRouter = require('./routes/expenses')
const payrollRouter  = require('./routes/payroll')
const stockRouter    = require('./routes/stock')
const reportsRouter  = require('./routes/reports')
const settingsRouter = require('./routes/settings')

const app = express()
const PORT = process.env.PORT || 5000

// ── Middleware ──────────────────────────────────────────────
app.use(helmet())
app.use(cors())
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// ── Health check ────────────────────────────────────────────
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    app: 'ERP Business Kenya',
    timestamp: new Date().toISOString(),
  })
})

// ── Routes ──────────────────────────────────────────────────
app.use('/api/invoices', invoicesRouter)
app.use('/api/expenses', expensesRouter)
app.use('/api/payroll',  payrollRouter)
app.use('/api/stock',    stockRouter)
app.use('/api/reports',  reportsRouter)
app.use('/api/settings', settingsRouter)

// ── 404 handler ─────────────────────────────────────────────
app.use((req, res) => {
  res.status(404).json({ success: false, message: 'Route not found' })
})

// ── Error handler ───────────────────────────────────────────
app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).json({ success: false, message: 'Internal server error' })
})

// ── Start ───────────────────────────────────────────────────
app.listen(PORT, () => {
  console.log(`
╔══════════════════════════════════════════╗
║   ERP Business Kenya — Backend Server   ║
║   Running on http://localhost:${PORT}      ║
║   ENV: ${process.env.NODE_ENV}                     ║
╚══════════════════════════════════════════╝
  `)
})
