import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Button } from "@/components/ui/button"

export default function SellerChannel() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className="h-7 border-none bg-transparent text-white hover:bg-white/10 hover:text-white px-2 text-xs"
        >
          Kênh Người Bán
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-48">
        <div className="space-y-2">
          <h4 className="font-medium">Kênh Người Bán</h4>
          <p className="text-sm text-muted-foreground">Quản lý và bán hàng hiệu quả trên Ecomerce</p>
          <Button size="sm" className="w-full bg-[#ee4d2d] hover:bg-[#d73211]">
            Đăng ký bán hàng
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  )
}
