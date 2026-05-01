import { TrendingUp, TrendingDown, DollarSign, Package } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const kpis = [
  {
    title: 'Total Revenue',
    value: 'KES 4,250,000',
    change: '+12.5%',
    trend: 'up',
    icon: DollarSign,
    color: 'text-green-600',
    bg: 'bg-green-50',
    iconBg: 'bg-green-100',
    badge: 'bg-green-100 text-green-700',
  },
  {
    title: 'Total Expenses',
    value: 'KES 1,830,000',
    change: '+4.2%',
    trend: 'up',
    icon: TrendingDown,
    color: 'text-red-600',
    bg: 'bg-red-50',
    iconBg: 'bg-red-100',
    badge: 'bg-red-100 text-red-700',
  },
  {
    title: 'Net Profit',
    value: 'KES 2,420,000',
    change: '+18.3%',
    trend: 'up',
    icon: TrendingUp,
    color: 'text-emerald-700',
    bg: 'bg-emerald-50',
    iconBg: 'bg-emerald-100',
    badge: 'bg-emerald-100 text-emerald-700',
  },
  {
    title: 'Stock Value',
    value: 'KES 980,000',
    change: '-2.1%',
    trend: 'down',
    icon: Package,
    color: 'text-blue-600',
    bg: 'bg-blue-50',
    iconBg: 'bg-blue-100',
    badge: 'bg-blue-100 text-blue-700',
  },
]

export default function Dashboard() {
  return (
    <div className="space-y-6">
      {/* Page heading */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-sm text-muted-foreground mt-1">
          Financial overview — FY {new Date().getFullYear()}
        </p>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {kpis.map(({ title, value, change, trend, icon: Icon, color, bg, iconBg, badge }) => (
          <Card key={title} className="border shadow-sm">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {title}
              </CardTitle>
              <div className={`flex h-9 w-9 items-center justify-center rounded-lg ${iconBg}`}>
                <Icon className={`h-5 w-5 ${color}`} />
              </div>
            </CardHeader>
            <CardContent>
              <p className={`text-2xl font-bold ${color}`}>{value}</p>
              <div className="mt-2 flex items-center gap-1">
                {trend === 'up' ? (
                  <TrendingUp className="h-3.5 w-3.5 text-green-500" />
                ) : (
                  <TrendingDown className="h-3.5 w-3.5 text-red-500" />
                )}
                <span className={`text-xs font-medium px-1.5 py-0.5 rounded-full ${badge}`}>
                  {change}
                </span>
                <span className="text-xs text-muted-foreground">vs last month</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Placeholder charts row */}
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <Card className="border shadow-sm">
          <CardHeader>
            <CardTitle className="text-sm font-semibold">Revenue vs Expenses</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex h-48 items-center justify-center rounded-lg bg-gray-100 text-sm text-muted-foreground">
              Chart coming soon
            </div>
          </CardContent>
        </Card>

        <Card className="border shadow-sm">
          <CardHeader>
            <CardTitle className="text-sm font-semibold">Cash Flow Summary</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex h-48 items-center justify-center rounded-lg bg-gray-100 text-sm text-muted-foreground">
              Chart coming soon
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
