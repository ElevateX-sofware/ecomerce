"use client"

import type React from "react"

import { useState } from "react"
import { Link } from "react-router-dom"
import { Bell, Facebook, HelpCircle, Instagram, Menu, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import SellerChannel from "./SellerChannel"
import DownloadApp from "./DownloadApp"
import Connect from "./Connect"
import NotifyPopover from "./NotifyPopover"
import SearchBar from "./SearchBar"
import CartPopover from "./CartPopover"
import Sublink from "./Sublink"

export default function ShopeeNavbar() {
  const [searchQuery, setSearchQuery] = useState("")
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const notifications = [
    {
      id: 1,
      title: "Đơn hàng đã được xác nhận",
      description: "Đơn hàng #123456 của bạn đã được xác nhận và đang được chuẩn bị.",
      time: "2 giờ trước",
      icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIiB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCI+CiAgPHJlY3Qgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiIGZpbGw9IiNjY2NjY2MiPjwvcmVjdD4KICA8dGV4dCB4PSI1MCUiIHk9IjUwJSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9Im1vbm9zcGFjZSIgZm9udC1zaXplPSIxMHB4IiBmaWxsPSIjMzMzMzMzIj4xMDB4MTAwPC90ZXh0PiAgIAo8L3N2Zz4="
    },
    {
      id: 2,
      title: "Đơn hàng đang vận chuyển",
      description: "Đơn hàng #123457 của bạn đã được gửi đi và đang trên đường đến địa chỉ của bạn.",
      time: "1 ngày trước",
      icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIiB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCI+CiAgPHJlY3Qgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiIGZpbGw9IiNjY2NjY2MiPjwvcmVjdD4KICA8dGV4dCB4PSI1MCUiIHk9IjUwJSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9Im1vbm9zcGFjZSIgZm9udC1zaXplPSIxMHB4IiBmaWxsPSIjMzMzMzMzIj4xMDB4MTAwPC90ZXh0PiAgIAo8L3N2Zz4="
    },
    {
      id: 3,
      title: "Chúc mừng bạn nhận được ưu đãi mới!",
      description: "Nhận ngay giảm giá 10% cho đơn hàng tiếp theo. Xem chi tiết trong tài khoản của bạn.",
      time: "3 ngày trước",
      icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIiB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCI+CiAgPHJlY3Qgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiIGZpbGw9IiNjY2NjY2MiPjwvcmVjdD4KICA8dGV4dCB4PSI1MCUiIHk9IjUwJSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9Im1vbm9zcGFjZSIgZm9udC1zaXplPSIxMHB4IiBmaWxsPSIjMzMzMzMzIj4xMDB4MTAwPC90ZXh0PiAgIAo8L3N2Zz4="
    },
    {
      id: 4,
      title: "Yêu cầu xác thực tài khoản",
      description: "Vui lòng xác thực tài khoản của bạn để tiếp tục sử dụng dịch vụ.",
      time: "5 ngày trước",
      icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIiB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCI+CiAgPHJlY3Qgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiIGZpbGw9IiNjY2NjY2MiPjwvcmVjdD4KICA8dGV4dCB4PSI1MCUiIHk9IjUwJSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9Im1vbm9zcGFjZSIgZm9udC1zaXplPSIxMHB4IiBmaWxsPSIjMzMzMzMzIj4xMDB4MTAwPC90ZXh0PiAgIAo8L3N2Zz4="
    },
  ];

  const cartItems = [
    {
      id: 1,
      name: "Điện thoại Samsung Galaxy A54 5G 8GB/128GB Chính Hãng",
      price: 7990000,
      quantity: 1,
      image: "data:image/svg+xml;base64,..."
    },
    {
      id: 2,
      name: "Laptop Dell Inspiron 15 5000",
      price: 18990000,
      quantity: 2,
      image: "data:image/svg+xml;base64,..."
    },
    {
      id: 3,
      name: "Tai nghe Sony WH-1000XM4",
      price: 7990000,
      quantity: 1,
      image: "data:image/svg+xml;base64,..."
    },
    {
      id: 4,
      name: "Máy tính bảng iPad Air 5th Gen 10.9-inch",
      price: 14990000,
      quantity: 1,
      image: "data:image/svg+xml;base64,..."
    }
  ];

  const links = [
    { title: "Hồ Cá Sinh Thái", to: "#" },
    { title: "Motor Giảm Tốc 12v", to: "#" },
    { title: "Ốp Lenovo Legion 5", to: "#" },
    { title: "Đèn Ngủ Godzilla", to: "#" },
    { title: "Cosplay Thỏ Sexy", to: "#" },
    { title: "Khủng Long Điều Khiển Từ Xa", to: "#" },
    { title: "Setup", to: "#" },
  ];


  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoggedIn(true)
  }

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoggedIn(true)
  }

  const handleLogout = () => {
    setIsLoggedIn(false)
  }

  return (
    <div className="w-full">
      <div className="w-full bg-[#ee4d2d] text-white">
        <div className="container mx-auto px-4 py-1 flex items-center justify-between text-xs">
          <div className="hidden md:flex items-center space-x-4">
            <SellerChannel />
            <div className="h-4 w-[1px] bg-white/30"></div>
            <DownloadApp />
            <div className="h-4 w-[1px] bg-white/30"></div>
            <Connect />
          </div>
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[80%] sm:w-[350px]">
                <div className="p-4">
                  <div className="flex items-center mb-6">
                    <div className="bg-[#ee4d2d] p-1 rounded">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 48 48" fill="white">
                        <path d="M24.5 2C14.3 2 6 10.3 6 20.5c0 5.4 2.3 10.3 6 13.7V46l8-4.8c1.5.3 3 .4 4.5.4 10.2 0 18.5-8.3 18.5-18.5S34.7 2 24.5 2zm0 33.3c-1.3 0-2.6-.1-3.8-.4l-6.5 3.9v-7.9c-3-2.6-4.9-6.5-4.9-10.8C9.3 12.1 16.1 5.3 24.5 5.3S39.7 12.1 39.7 20.5 32.9 35.3 24.5 35.3z" />
                      </svg>
                    </div>
                    <span className="text-xl font-bold ml-2">Ecomerce</span>
                  </div>

                  {isLoggedIn ? (
                    <div className="flex items-center gap-2 mb-4 p-2 bg-slate-100 rounded">
                      <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
                        <img src="/placeholder.svg?height=40&width=40" alt="User avatar" width={40} height={40} />
                      </div>
                      <div>
                        <p className="font-medium">anhngoct...</p>
                        <Button variant="link" className="p-0 h-auto text-[#ee4d2d] text-xs" onClick={handleLogout}>
                          Đăng xuất
                        </Button>
                      </div>
                    </div>
                  ) : (
                    <div className="flex gap-2 mb-4">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button className="flex-1 bg-[#ee4d2d] hover:bg-[#d73211]">Đăng nhập</Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-md">
                          <DialogHeader>
                            <DialogTitle>Đăng nhập</DialogTitle>
                          </DialogHeader>
                          <Tabs defaultValue="phone" className="w-full">
                            <TabsList className="grid w-full grid-cols-2">
                              <TabsTrigger value="phone">Số điện thoại</TabsTrigger>
                              <TabsTrigger value="email">Email</TabsTrigger>
                            </TabsList>
                            <TabsContent value="phone" className="mt-4">
                              <form onSubmit={handleLogin} className="space-y-4">
                                <div className="space-y-2">
                                  <Label htmlFor="login-phone">Số điện thoại</Label>
                                  <Input id="login-phone" type="tel" placeholder="Nhập số điện thoại" required />
                                </div>
                                <div className="space-y-2">
                                  <Label htmlFor="login-password">Mật khẩu</Label>
                                  <Input id="login-password" type="password" placeholder="Nhập mật khẩu" required />
                                </div>
                                <div className="text-right">
                                  <Button variant="link" className="p-0 h-auto text-[#ee4d2d]">
                                    Quên mật khẩu?
                                  </Button>
                                </div>
                                <Button type="submit" className="w-full bg-[#ee4d2d] hover:bg-[#d73211]">
                                  Đăng nhập
                                </Button>
                              </form>
                            </TabsContent>
                            <TabsContent value="email" className="mt-4">
                              <form onSubmit={handleLogin} className="space-y-4">
                                <div className="space-y-2">
                                  <Label htmlFor="login-email">Email</Label>
                                  <Input id="login-email" type="email" placeholder="Nhập email" required />
                                </div>
                                <div className="space-y-2">
                                  <Label htmlFor="login-password-email">Mật khẩu</Label>
                                  <Input
                                    id="login-password-email"
                                    type="password"
                                    placeholder="Nhập mật khẩu"
                                    required
                                  />
                                </div>
                                <div className="text-right">
                                  <Button variant="link" className="p-0 h-auto text-[#ee4d2d]">
                                    Quên mật khẩu?
                                  </Button>
                                </div>
                                <Button type="submit" className="w-full bg-[#ee4d2d] hover:bg-[#d73211]">
                                  Đăng nhập
                                </Button>
                              </form>
                            </TabsContent>
                          </Tabs>
                        </DialogContent>
                      </Dialog>
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button variant="outline" className="flex-1">
                            Đăng ký
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-md">
                          <DialogHeader>
                            <DialogTitle>Đăng ký</DialogTitle>
                          </DialogHeader>
                          <Tabs defaultValue="phone" className="w-full">
                            <TabsList className="grid w-full grid-cols-2">
                              <TabsTrigger value="phone">Số điện thoại</TabsTrigger>
                              <TabsTrigger value="email">Email</TabsTrigger>
                            </TabsList>
                            <TabsContent value="phone" className="mt-4">
                              <form onSubmit={handleRegister} className="space-y-4">
                                <div className="space-y-2">
                                  <Label htmlFor="phone">Số điện thoại</Label>
                                  <Input id="phone" type="tel" placeholder="Nhập số điện thoại" required />
                                </div>
                                <div className="space-y-2">
                                  <Label htmlFor="password">Mật khẩu</Label>
                                  <Input id="password" type="password" placeholder="Nhập mật khẩu" required />
                                </div>
                                <div className="flex items-center space-x-2">
                                  <Checkbox id="terms" />
                                  <label
                                    htmlFor="terms"
                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                  >
                                    Tôi đồng ý với Điều khoản dịch vụ và Chính sách bảo mật
                                  </label>
                                </div>
                                <Button type="submit" className="w-full bg-[#ee4d2d] hover:bg-[#d73211]">
                                  Đăng ký
                                </Button>
                              </form>
                            </TabsContent>
                            <TabsContent value="email" className="mt-4">
                              <form onSubmit={handleRegister} className="space-y-4">
                                <div className="space-y-2">
                                  <Label htmlFor="email">Email</Label>
                                  <Input id="email" type="email" placeholder="Nhập email" required />
                                </div>
                                <div className="space-y-2">
                                  <Label htmlFor="password-email">Mật khẩu</Label>
                                  <Input id="password-email" type="password" placeholder="Nhập mật khẩu" required />
                                </div>
                                <div className="flex items-center space-x-2">
                                  <Checkbox id="terms-email" />
                                  <label
                                    htmlFor="terms-email"
                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                  >
                                    Tôi đồng ý với Điều khoản dịch vụ và Chính sách bảo mật
                                  </label>
                                </div>
                                <Button type="submit" className="w-full bg-[#ee4d2d] hover:bg-[#d73211]">
                                  Đăng ký
                                </Button>
                              </form>
                            </TabsContent>
                          </Tabs>
                        </DialogContent>
                      </Dialog>
                    </div>
                  )}

                  <div className="space-y-1 border-t pt-4">
                    <Button variant="ghost" className="w-full justify-start text-sm h-10">
                      <Bell className="h-4 w-4 mr-2" />
                      Thông Báo
                    </Button>
                    <Button variant="ghost" className="w-full justify-start text-sm h-10">
                      <HelpCircle className="h-4 w-4 mr-2" />
                      Hỗ Trợ
                    </Button>
                    <Button variant="ghost" className="w-full justify-start text-sm h-10">
                      <Facebook className="h-4 w-4 mr-2" />
                      Kết nối Facebook
                    </Button>
                    <Button variant="ghost" className="w-full justify-start text-sm h-10">
                      <Instagram className="h-4 w-4 mr-2" />
                      Kết nối Instagram
                    </Button>
                    <Button variant="ghost" className="w-full justify-start text-sm h-10">
                      Kênh Người Bán
                    </Button>
                    <Button variant="ghost" className="w-full justify-start text-sm h-10">
                      Tải ứng dụng
                    </Button>
                  </div>

                  <div className="border-t pt-4 mt-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Ngôn ngữ</span>
                      <div className="flex gap-2">
                        <Button variant="ghost" size="sm" className="text-xs h-7">
                          Tiếng Việt
                        </Button>
                        <Button variant="ghost" size="sm" className="text-xs h-7">
                          English
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
          <div className="flex items-center space-x-2 md:space-x-4">
            {/* popover thông báo */}
            <NotifyPopover isLoggedIn={isLoggedIn} notifications={notifications} />
            {/* popover thông báo */}
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className="h-7 border-none bg-transparent text-white hover:bg-white/10 hover:text-white px-1 md:px-2 text-xs flex items-center gap-1"
                >
                  <HelpCircle className="h-3.5 w-3.5" />
                  <span className="hidden md:inline">Hỗ Trợ</span>
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-64" align="end">
                <div className="space-y-2">
                  <h4 className="font-medium">Trung tâm hỗ trợ</h4>
                  <div className="space-y-1">
                    <Link to="#" className="block text-sm hover:text-[#ee4d2d]">
                      Trung tâm trợ giúp
                    </Link>
                    <Link to="#" className="block text-sm hover:text-[#ee4d2d]">
                      Ecomerce Blog
                    </Link>
                    <Link to="#" className="block text-sm hover:text-[#ee4d2d]">
                      Hướng dẫn mua hàng
                    </Link>
                    <Link to="#" className="block text-sm hover:text-[#ee4d2d]">
                      Hướng dẫn bán hàng
                    </Link>
                    <Link to="#" className="block text-sm hover:text-[#ee4d2d]">
                      Thanh toán
                    </Link>
                    <Link to="#" className="block text-sm hover:text-[#ee4d2d]">
                      Vận chuyển
                    </Link>
                  </div>
                </div>
              </PopoverContent>
            </Popover>

            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className="hidden md:flex h-7 border-none bg-transparent text-white hover:bg-white/10 hover:text-white px-2 text-xs items-center gap-1"
                >
                  <span>Tiếng Việt</span>
                  <ChevronDown className="h-3.5 w-3.5" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-40" align="end">
                <div className="space-y-1">
                  <Button variant="ghost" className="w-full justify-start text-sm h-8">
                    Tiếng Việt
                  </Button>
                  <Button variant="ghost" className="w-full justify-start text-sm h-8">
                    English
                  </Button>
                </div>
              </PopoverContent>
            </Popover>

            {isLoggedIn ? (
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className="hidden md:flex h-7 border-none bg-transparent text-white hover:bg-white/10 hover:text-white px-2 text-xs items-center gap-1"
                  >
                    <div className="h-5 w-5 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
                      <img src="/placeholder.svg?height=20&width=20" alt="User avatar" width={20} height={20} />
                    </div>
                    <span>anhngoct...</span>
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-48" align="end">
                  <div className="space-y-1">
                    <Link to="#" className="block text-sm hover:text-[#ee4d2d] py-1">
                      Tài khoản của tôi
                    </Link>
                    <Link to="#" className="block text-sm hover:text-[#ee4d2d] py-1">
                      Đơn mua
                    </Link>
                    <Button
                      variant="ghost"
                      className="w-full justify-start text-sm h-8 hover:text-[#ee4d2d]"
                      onClick={handleLogout}
                    >
                      Đăng xuất
                    </Button>
                  </div>
                </PopoverContent>
              </Popover>
            ) : (
              <div className="hidden md:flex items-center space-x-1">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="link" className="h-7 text-white hover:text-white/80 px-1 text-xs">
                      Đăng ký
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-md">
                    <DialogHeader>
                      <DialogTitle>Đăng ký</DialogTitle>
                    </DialogHeader>
                    <Tabs defaultValue="phone" className="w-full">
                      <TabsList className="grid w-full grid-cols-2">
                        <TabsTrigger value="phone">Số điện thoại</TabsTrigger>
                        <TabsTrigger value="email">Email</TabsTrigger>
                      </TabsList>
                      <TabsContent value="phone" className="mt-4">
                        <form onSubmit={handleRegister} className="space-y-4">
                          <div className="space-y-2">
                            <Label htmlFor="phone">Số điện thoại</Label>
                            <Input id="phone" type="tel" placeholder="Nhập số điện thoại" required />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="password">Mật khẩu</Label>
                            <Input id="password" type="password" placeholder="Nhập mật khẩu" required />
                          </div>
                          <div className="flex items-center space-x-2">
                            <Checkbox id="terms" />
                            <label
                              htmlFor="terms"
                              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                              Tôi đồng ý với Điều khoản dịch vụ và Chính sách bảo mật
                            </label>
                          </div>
                          <Button type="submit" className="w-full bg-[#ee4d2d] hover:bg-[#d73211]">
                            Đăng ký
                          </Button>
                        </form>
                      </TabsContent>
                      <TabsContent value="email" className="mt-4">
                        <form onSubmit={handleRegister} className="space-y-4">
                          <div className="space-y-2">
                            <Label htmlFor="email">Email</Label>
                            <Input id="email" type="email" placeholder="Nhập email" required />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="password-email">Mật khẩu</Label>
                            <Input id="password-email" type="password" placeholder="Nhập mật khẩu" required />
                          </div>
                          <div className="flex items-center space-x-2">
                            <Checkbox id="terms-email" />
                            <label
                              htmlFor="terms-email"
                              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                              Tôi đồng ý với Điều khoản dịch vụ và Chính sách bảo mật
                            </label>
                          </div>
                          <Button type="submit" className="w-full bg-[#ee4d2d] hover:bg-[#d73211]">
                            Đăng ký
                          </Button>
                        </form>
                      </TabsContent>
                    </Tabs>
                  </DialogContent>
                </Dialog>
                <div className="h-4 w-[1px] bg-white/30"></div>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="link" className="h-7 text-white hover:text-white/80 px-1 text-xs">
                      Đăng nhập
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-md">
                    <DialogHeader>
                      <DialogTitle>Đăng nhập</DialogTitle>
                    </DialogHeader>
                    <Tabs defaultValue="phone" className="w-full">
                      <TabsList className="grid w-full grid-cols-2">
                        <TabsTrigger value="phone">Số điện thoại</TabsTrigger>
                        <TabsTrigger value="email">Email</TabsTrigger>
                      </TabsList>
                      <TabsContent value="phone" className="mt-4">
                        <form onSubmit={handleLogin} className="space-y-4">
                          <div className="space-y-2">
                            <Label htmlFor="login-phone">Số điện thoại</Label>
                            <Input id="login-phone" type="tel" placeholder="Nhập số điện thoại" required />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="login-password">Mật khẩu</Label>
                            <Input id="login-password" type="password" placeholder="Nhập mật khẩu" required />
                          </div>
                          <div className="text-right">
                            <Button variant="link" className="p-0 h-auto text-[#ee4d2d]">
                              Quên mật khẩu?
                            </Button>
                          </div>
                          <Button type="submit" className="w-full bg-[#ee4d2d] hover:bg-[#d73211]">
                            Đăng nhập
                          </Button>
                        </form>
                      </TabsContent>
                      <TabsContent value="email" className="mt-4">
                        <form onSubmit={handleLogin} className="space-y-4">
                          <div className="space-y-2">
                            <Label htmlFor="login-email">Email</Label>
                            <Input id="login-email" type="email" placeholder="Nhập email" required />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="login-password-email">Mật khẩu</Label>
                            <Input id="login-password-email" type="password" placeholder="Nhập mật khẩu" required />
                          </div>
                          <div className="text-right">
                            <Button variant="link" className="p-0 h-auto text-[#ee4d2d]">
                              Quên mật khẩu?
                            </Button>
                          </div>
                          <Button type="submit" className="w-full bg-[#ee4d2d] hover:bg-[#d73211]">
                            Đăng nhập
                          </Button>
                        </form>
                      </TabsContent>
                    </Tabs>
                  </DialogContent>
                </Dialog>
              </div>
            )}
          </div>
        </div>
        <div className="container mx-auto px-4 py-2 md:py-4 flex items-center">
          <Link to="/" className="mr-2 md:mr-4">
            <div className="flex items-center">
              <div className="bg-white p-1 rounded">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 48 48"
                  fill="#ee4d2d"
                  className="md:w-8 md:h-8"
                >
                  <path d="M24.5 2C14.3 2 6 10.3 6 20.5c0 5.4 2.3 10.3 6 13.7V46l8-4.8c1.5.3 3 .4 4.5.4 10.2 0 18.5-8.3 18.5-18.5S34.7 2 24.5 2zm0 33.3c-1.3 0-2.6-.1-3.8-.4l-6.5 3.9v-7.9c-3-2.6-4.9-6.5-4.9-10.8C9.3 12.1 16.1 5.3 24.5 5.3S39.7 12.1 39.7 20.5 32.9 35.3 24.5 35.3z" />
                </svg>
              </div>
              <span className="text-xl font-bold ml-2 hidden md:inline">Ecomerce</span>
            </div>
          </Link>
          <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
          <CartPopover isLoggedIn={isLoggedIn} cartItems={cartItems} />
        </div>
        <Sublink links={links} />
      </div>
    </div>
  )
}

