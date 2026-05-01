import { FileText } from 'lucide-react'

export default function Invoices() {
  return (
    <div className="flex flex-col items-center justify-center h-64 gap-3 text-muted-foreground">
      <FileText className="h-10 w-10 opacity-30" />
      <p className="text-lg font-medium">Invoices</p>
      <p className="text-sm">This page is under construction.</p>
    </div>
  )
}
