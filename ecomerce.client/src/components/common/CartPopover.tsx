import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Button } from "@/components/ui/button"
import { ShoppingCart } from "lucide-react"
import { formatPrice } from "@/lib/utils"
import { useMemo } from "react"

interface CartPopoverProps {
  isLoggedIn: boolean
  cartItems: {
    id: number
    name: string
    price: number
    quantity: number
    image: string
  }[]
}

export default function CartPopover({ isLoggedIn, cartItems }: CartPopoverProps) {
  const totalPrice = useMemo(() => formatPrice(cartItems.reduce((total, item) => total + item.price * item.quantity, 0)), [cartItems]);

  return (
    <Popover>
      <PopoverTrigger asChild>
        <div className="relative cursor-pointer">
          <ShoppingCart className="h-6 w-6 md:h-8 md:w-8 text-white" />
          <div className="absolute -top-1 -right-1 bg-white text-[#ee4d2d] rounded-full h-4 w-4 md:h-5 md:w-5 flex items-center justify-center text-xs font-bold">
            {cartItems.length}
          </div>
        </div>
      </PopoverTrigger>
      <PopoverContent className="w-80" align="end">
        <div className="space-y-2">
          <h4 className="font-medium">Giỏ hàng</h4>
          {isLoggedIn ? (
            <>
              <div className="space-y-2 max-h-[300px] overflow-y-auto">
                {cartItems.map(item => (
                  <div key={item.id} className="flex gap-3 p-2 hover:bg-slate-50 rounded">
                    <div className="h-16 w-16 rounded bg-slate-100 flex-shrink-0 overflow-hidden">
                      <img src={item.image} alt="Product img" width={64} height={64} />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium line-clamp-2">{item.name}</p>
                      <div className="flex justify-between items-center mt-1">
                        <p className="text-xs text-[#ee4d2d]">{formatPrice(item.price)}</p>
                        <div className="flex items-center gap-1">
                          <span className="text-xs text-muted-foreground">x</span>
                          <span className="text-xs">{item.quantity}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="pt-2 border-t flex justify-between items-center">
                <div>
                  <p className="text-xs text-muted-foreground">{cartItems.length} sản phẩm trong giỏ hàng</p>
                  <div className="flex items-center gap-1">
                    <p className="text-sm">Tổng tiền:</p>
                    <p className="text-sm font-medium text-[#ee4d2d]">{totalPrice}</p>
                  </div>
                </div>
                <Button className="bg-[#ee4d2d] hover:bg-[#d73211]">Xem giỏ hàng</Button>
              </div>
            </>
          ) : (
            <div className="h-48 flex flex-col items-center justify-center border rounded gap-2">
              <div className="h-16 w-16 rounded-full bg-slate-100 flex items-center justify-center">
                <ShoppingCart className="h-8 w-8 text-muted-foreground" />
              </div>
              <p className="text-sm text-muted-foreground">Chưa có sản phẩm</p>
              <Button variant="outline" className="mt-2 border-[#ee4d2d] text-[#ee4d2d] hover:bg-[#ee4d2d]/10">
                Đăng nhập
              </Button>
            </div>
          )}
        </div>
      </PopoverContent>
    </Popover>
  )
}
