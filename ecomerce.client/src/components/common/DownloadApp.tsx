import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Button } from "@/components/ui/button"

export default function DownloadApp() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className="h-7 border-none bg-transparent text-white hover:bg-white/10 hover:text-white px-2 text-xs"
        >
          Tải ứng dụng
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-64">
        <div className="space-y-2">
          <h4 className="font-medium">Tải ứng dụng Ecomerce</h4>
          <div className="grid grid-cols-2 gap-2">
            <div className="text-center">
              <div className="bg-gray-100 p-2 rounded">
                <div className="w-24 h-24 mx-auto bg-gray-200"></div>
              </div>
              <p className="text-xs mt-1">Quét mã QR</p>
            </div>
            <div className="space-y-2">
              <Button variant="outline" size="sm" className="w-full">
                App Store
              </Button>
              <Button variant="outline" size="sm" className="w-full">
                Google Play
              </Button>
              <Button variant="outline" size="sm" className="w-full">
                AppGallery
              </Button>
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  )
}
