import React from 'react'
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Button } from "@/components/ui/button"
import { Bell } from 'lucide-react'

interface NotifyPopoverProps {
  isLoggedIn: boolean
  notifications: {
    id: number
    title: string
    description: string
    time: string
    icon: string
  }[]
}

const NotifyPopover: React.FC<NotifyPopoverProps> = ({ isLoggedIn, notifications }) => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" className="h-7 border-none bg-transparent text-white hover:bg-white/10 hover:text-white px-1 md:px-2 text-xs flex items-center gap-1">
          <Bell className="h-3.5 w-3.5" />
          <span className="hidden md:inline">Thông Báo</span>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80" align="end">
        <div className="space-y-2">
          <h4 className="font-medium">Thông báo mới nhận</h4>
          {isLoggedIn ? (
            <div className="space-y-2 max-h-[400px] overflow-y-auto">
              {notifications.map(notification => (
                <div key={notification.id} className="flex gap-3 p-2 hover:bg-slate-50 rounded cursor-pointer">
                  <div className="h-10 w-10 rounded bg-orange-100 flex-shrink-0 flex items-center justify-center">
                    <img src={notification.icon} alt="Notification icon" width={20} height={20} />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">{notification.title}</p>
                    <p className="text-xs text-muted-foreground">{notification.description}</p>
                    <p className="text-xs text-muted-foreground mt-1">{notification.time}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="h-48 flex items-center justify-center border rounded">
              <p className="text-sm text-muted-foreground">Đăng nhập để xem thông báo</p>
            </div>
          )}
          {isLoggedIn && (
            <div className="pt-2 border-t">
              <Button variant="ghost" className="w-full text-[#ee4d2d]">Xem tất cả</Button>
            </div>
          )}
        </div>
      </PopoverContent>
    </Popover>
  )
}

export default NotifyPopover