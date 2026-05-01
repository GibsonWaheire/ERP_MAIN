import { Package } from 'lucide-react'

export default function Stock() {
  return (
    <div className="flex flex-col items-center justify-center h-64 gap-3 text-muted-foreground">
      <Package className="h-10 w-10 opacity-30" />
      <p className="text-lg font-medium">Stock</p>
      <p className="text-sm">This page is under construction.</p>
    </div>
  )
}
