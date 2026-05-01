import { Routes, Route, Navigate } from 'react-router-dom'
import MainLayout from '@/layouts/MainLayout'
import Dashboard from '@/pages/Dashboard'
import Invoices from '@/pages/Invoices'
import Expenses from '@/pages/Expenses'
import Payroll from '@/pages/Payroll'
import Stock from '@/pages/Stock'
import ProfitLoss from '@/pages/ProfitLoss'
import VATReturn from '@/pages/VATReturn'
import CashFlow from '@/pages/CashFlow'
import Settings from '@/pages/Settings'

export default function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<Navigate to="/dashboard" replace />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/invoices" element={<Invoices />} />
        <Route path="/expenses" element={<Expenses />} />
        <Route path="/payroll" element={<Payroll />} />
        <Route path="/stock" element={<Stock />} />
        <Route path="/profit-loss" element={<ProfitLoss />} />
        <Route path="/vat-return" element={<VATReturn />} />
        <Route path="/cash-flow" element={<CashFlow />} />
        <Route path="/settings" element={<Settings />} />
      </Route>
    </Routes>
  )
}
