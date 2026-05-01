import { Outlet, NavLink, useLocation } from 'react-router-dom'
import {
  LayoutDashboard,
  FileText,
  Receipt,
  Users,
  Package,
  TrendingUp,
  Calculator,
  ArrowLeftRight,
  Settings,
  Building2,
  ChevronRight,
} from 'lucide-react'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
  SidebarInset,
} from '@/components/ui/sidebar'
import { Separator } from '@/components/ui/separator'

const navItems = [
  { label: 'Dashboard', path: '/dashboard', icon: LayoutDashboard },
  { label: 'Invoices', path: '/invoices', icon: FileText },
  { label: 'Expenses', path: '/expenses', icon: Receipt },
  { label: 'Payroll', path: '/payroll', icon: Users },
  { label: 'Stock', path: '/stock', icon: Package },
]

const reportsItems = [
  { label: 'Profit & Loss', path: '/profit-loss', icon: TrendingUp },
  { label: 'VAT Return', path: '/vat-return', icon: Calculator },
  { label: 'Cash Flow', path: '/cash-flow', icon: ArrowLeftRight },
]

export default function MainLayout() {
  const location = useLocation()

  const pageTitle = [
    ...navItems,
    ...reportsItems,
    { label: 'Settings', path: '/settings', icon: Settings },
  ].find((i) => location.pathname === i.path)?.label ?? 'ERP Business'

  return (
    <SidebarProvider>
      <Sidebar collapsible="icon">
        {/* Logo / Header */}
        <SidebarHeader className="border-b border-sidebar-border">
          <div className="flex items-center gap-2 px-2 py-3">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-400">
              <Building2 className="h-5 w-5 text-white" />
            </div>
            <div className="flex flex-col leading-tight group-data-[collapsible=icon]:hidden">
              <span className="text-sm font-bold text-sidebar-foreground">ERP Business</span>
              <span className="text-[10px] text-sidebar-foreground/60 uppercase tracking-widest">Kenya</span>
            </div>
          </div>
        </SidebarHeader>

        {/* Main Nav */}
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Main</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {navItems.map(({ label, path, icon: Icon }) => (
                  <SidebarMenuItem key={path}>
                    <SidebarMenuButton
                      asChild
                      isActive={location.pathname === path}
                      tooltip={label}
                    >
                      <NavLink to={path}>
                        <Icon />
                        <span>{label}</span>
                      </NavLink>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>

          <SidebarGroup>
            <SidebarGroupLabel>Reports</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {reportsItems.map(({ label, path, icon: Icon }) => (
                  <SidebarMenuItem key={path}>
                    <SidebarMenuButton
                      asChild
                      isActive={location.pathname === path}
                      tooltip={label}
                    >
                      <NavLink to={path}>
                        <Icon />
                        <span>{label}</span>
                      </NavLink>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>

          <SidebarGroup className="mt-auto">
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton
                    asChild
                    isActive={location.pathname === '/settings'}
                    tooltip="Settings"
                  >
                    <NavLink to="/settings">
                      <Settings />
                      <span>Settings</span>
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>

        {/* Footer */}
        <SidebarFooter className="border-t border-sidebar-border">
          <div className="flex items-center gap-2 px-2 py-3 group-data-[collapsible=icon]:justify-center">
            <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-green-400/30 text-xs font-bold text-sidebar-foreground">
              JD
            </div>
            <div className="flex flex-col leading-tight group-data-[collapsible=icon]:hidden">
              <span className="text-xs font-medium text-sidebar-foreground">Acme Ltd</span>
              <span className="text-[10px] text-sidebar-foreground/60">Nairobi, Kenya</span>
            </div>
          </div>
        </SidebarFooter>
      </Sidebar>

      {/* Main content area */}
      <SidebarInset>
        {/* Topbar */}
        <header className="flex h-14 items-center gap-3 border-b bg-white px-4">
          <SidebarTrigger className="text-muted-foreground" />
          <Separator orientation="vertical" className="h-5" />
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <span>ERP</span>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="font-medium text-foreground">{pageTitle}</span>
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 overflow-auto p-6 bg-gray-50 min-h-[calc(100vh-3.5rem)]">
          <Outlet />
        </main>
      </SidebarInset>
    </SidebarProvider>
  )
}
