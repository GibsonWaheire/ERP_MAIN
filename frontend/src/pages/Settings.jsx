import { Settings as SettingsIcon } from 'lucide-react'

export default function Settings() {
  return (
    <div className="flex flex-col items-center justify-center h-64 gap-3 text-muted-foreground">
      <SettingsIcon className="h-10 w-10 opacity-30" />
      <p className="text-lg font-medium">Settings</p>
      <p className="text-sm">This page is under construction.</p>
    </div>
  )
}
