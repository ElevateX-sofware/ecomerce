"use client"

import type React from "react"

import { useState } from "react"
import { Link } from "react-router-dom"
import { Bell, Facebook, HelpCircle, Instagram, Menu, Search, ShoppingCart, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function ShopeeNavbar() {
  const [searchQuery, setSearchQuery] = useState("")
  const [isLoggedIn, setIsLoggedIn] = useState(false)

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
      {/* Top navbar */}
      <div className="w-full bg-[#ee4d2d] text-white">
        {/* Upper navbar with seller, app, connect links */}
        <div className="container mx-auto px-4 py-1 flex items-center justify-between text-xs">
          {/* Left side links - hidden on mobile */}
          <div className="hidden md:flex items-center space-x-4">
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

            <div className="h-4 w-[1px] bg-white/30"></div>

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

            <div className="h-4 w-[1px] bg-white/30"></div>

            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className="h-7 border-none bg-transparent text-white hover:bg-white/10 hover:text-white px-2 text-xs flex items-center gap-1"
                >
                  <span>Kết nối</span>
                  <Facebook className="h-3.5 w-3.5" />
                  <Instagram className="h-3.5 w-3.5" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-48">
                <div className="space-y-2">
                  <h4 className="font-medium">Kết nối với chúng tôi</h4>
                  <div className="flex gap-2">
                    <Button variant="outline" size="icon" className="h-8 w-8">
                      <Facebook className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="icon" className="h-8 w-8">
                      <Instagram className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="icon" className="h-8 w-8">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z" />
                      </svg>
                    </Button>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          </div>

          {/* Mobile menu button */}
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

          {/* Right side utilities */}
          <div className="flex items-center space-x-2 md:space-x-4">
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className="h-7 border-none bg-transparent text-white hover:bg-white/10 hover:text-white px-1 md:px-2 text-xs flex items-center gap-1"
                >
                  <Bell className="h-3.5 w-3.5" />
                  <span className="hidden md:inline">Thông Báo</span>
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-80" align="end">
                <div className="space-y-2">
                  <h4 className="font-medium">Thông báo mới nhận</h4>
                  {isLoggedIn ? (
                    <div className="space-y-2 max-h-[400px] overflow-y-auto">
                      <div className="flex gap-3 p-2 hover:bg-slate-50 rounded cursor-pointer">
                        <div className="h-10 w-10 rounded bg-orange-100 flex-shrink-0 flex items-center justify-center">
                          <img
                            src="/placeholder.svg?height=40&width=40"
                            alt="Notification icon"
                            width={20}
                            height={20}
                          />
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-medium">Đơn hàng đã được xác nhận</p>
                          <p className="text-xs text-muted-foreground">
                            Đơn hàng #123456 của bạn đã được xác nhận và đang được chuẩn bị.
                          </p>
                          <p className="text-xs text-muted-foreground mt-1">2 giờ trước</p>
                        </div>
                      </div>
                      <div className="flex gap-3 p-2 hover:bg-slate-50 rounded cursor-pointer">
                        <div className="h-10 w-10 rounded bg-blue-100 flex-shrink-0 flex items-center justify-center">
                          <img
                            src="/placeholder.svg?height=40&width=40"
                            alt="Notification icon"
                            width={20}
                            height={20}
                          />
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-medium">Flash Sale sắp diễn ra</p>
                          <p className="text-xs text-muted-foreground">
                            Flash Sale sản phẩm bạn đã lưu sẽ diễn ra trong 2 giờ nữa!
                          </p>
                          <p className="text-xs text-muted-foreground mt-1">5 giờ trước</p>
                        </div>
                      </div>
                      <div className="flex gap-3 p-2 hover:bg-slate-50 rounded cursor-pointer">
                        <div className="h-10 w-10 rounded bg-green-100 flex-shrink-0 flex items-center justify-center">
                          <img
                            src="/placeholder.svg?height=40&width=40"
                            alt="Notification icon"
                            width={20}
                            height={20}
                          />
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-medium">Khuyến mãi đặc biệt</p>
                          <p className="text-xs text-muted-foreground">
                            Nhận ngay voucher giảm 100.000đ cho đơn hàng tiếp theo của bạn.
                          </p>
                          <p className="text-xs text-muted-foreground mt-1">1 ngày trước</p>
                        </div>
                      </div>
                      <div className="flex gap-3 p-2 hover:bg-slate-50 rounded cursor-pointer">
                        <div className="h-10 w-10 rounded bg-purple-100 flex-shrink-0 flex items-center justify-center">
                          <img
                            src="/placeholder.svg?height=40&width=40"
                            alt="Notification icon"
                            width={20}
                            height={20}
                          />
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-medium">Đánh giá sản phẩm</p>
                          <p className="text-xs text-muted-foreground">
                            Hãy đánh giá sản phẩm bạn đã mua để nhận 100 xu Ecomerce.
                          </p>
                          <p className="text-xs text-muted-foreground mt-1">2 ngày trước</p>
                        </div>
                      </div>
                      <div className="flex gap-3 p-2 hover:bg-slate-50 rounded cursor-pointer">
                        <div className="h-10 w-10 rounded bg-red-100 flex-shrink-0 flex items-center justify-center">
                          <img
                            src="/placeholder.svg?height=40&width=40"
                            alt="Notification icon"
                            width={20}
                            height={20}
                          />
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-medium">Cập nhật ứng dụng</p>
                          <p className="text-xs text-muted-foreground">
                            Phiên bản mới của ứng dụng Ecomerce đã có sẵn với nhiều tính năng hấp dẫn.
                          </p>
                          <p className="text-xs text-muted-foreground mt-1">3 ngày trước</p>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="h-48 flex items-center justify-center border rounded">
                      <p className="text-sm text-muted-foreground">Đăng nhập để xem thông báo</p>
                    </div>
                  )}
                  {isLoggedIn && (
                    <div className="pt-2 border-t">
                      <Button variant="ghost" className="w-full text-[#ee4d2d]">
                        Xem tất cả
                      </Button>
                    </div>
                  )}
                </div>
              </PopoverContent>
            </Popover>

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

        {/* Main navbar with logo, search and cart */}
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
              <span className="text-xl md:text-2xl font-bold ml-1 md:ml-2">Ecomerce</span>
            </div>
          </Link>

          <div className="flex-1 mx-1 md:mx-4">
            <div className="relative">
              <Input
                type="text"
                placeholder="TRÚNG VÀNG 40 TRIỆU ĐỒNG"
                className="w-full h-8 md:h-10 rounded bg-white text-black placeholder:text-gray-500 border-none text-xs md:text-sm"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Button className="absolute right-0 top-0 h-8 md:h-10 w-8 md:w-10 bg-[#ee4d2d] hover:bg-[#d73211] rounded-none rounded-r">
                <Search className="h-4 w-4 md:h-5 md:w-5 text-white" />
              </Button>
            </div>
          </div>

          <Popover>
            <PopoverTrigger asChild>
              <div className="relative cursor-pointer">
                <ShoppingCart className="h-6 w-6 md:h-8 md:w-8 text-white" />
                <div className="absolute -top-1 -right-1 bg-white text-[#ee4d2d] rounded-full h-4 w-4 md:h-5 md:w-5 flex items-center justify-center text-xs font-bold">
                  2
                </div>
              </div>
            </PopoverTrigger>
            <PopoverContent className="w-80" align="end">
              <div className="space-y-2">
                <h4 className="font-medium">Giỏ hàng</h4>
                {isLoggedIn ? (
                  <>
                    <div className="space-y-2 max-h-[300px] overflow-y-auto">
                      <div className="flex gap-3 p-2 hover:bg-slate-50 rounded">
                        <div className="h-16 w-16 rounded bg-slate-100 flex-shrink-0 overflow-hidden">
                          <img src="/placeholder.svg?height=64&width=64" alt="Product img" width={64} height={64} />
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-medium line-clamp-2">
                            Điện thoại Samsung Galaxy A54 5G 8GB/128GB Chính Hãng
                          </p>
                          <div className="flex justify-between items-center mt-1">
                            <p className="text-xs text-[#ee4d2d]">₫7.990.000</p>
                            <div className="flex items-center gap-1">
                              <span className="text-xs text-muted-foreground">x</span>
                              <span className="text-xs">1</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex gap-3 p-2 hover:bg-slate-50 rounded">
                        <div className="h-16 w-16 rounded bg-slate-100 flex-shrink-0 overflow-hidden">
                          <img src="/placeholder.svg?height=64&width=64" alt="Product image" width={64} height={64} />
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-medium line-clamp-2">
                            Tai nghe Bluetooth True Wireless Earbuds Pro Chống ồn chủ động
                          </p>
                          <div className="flex justify-between items-center mt-1">
                            <p className="text-xs text-[#ee4d2d]">₫1.290.000</p>
                            <div className="flex items-center gap-1">
                              <span className="text-xs text-muted-foreground">x</span>
                              <span className="text-xs">1</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="pt-2 border-t flex justify-between items-center">
                      <div>
                        <p className="text-xs text-muted-foreground">2 sản phẩm trong giỏ hàng</p>
                        <div className="flex items-center gap-1">
                          <p className="text-sm">Tổng tiền:</p>
                          <p className="text-sm font-medium text-[#ee4d2d]">₫9.280.000</p>
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
        </div>

        {/* Category links */}
        <div className="container mx-auto px-4 pb-2">
          <div className="flex items-center justify-center space-x-2 md:space-x-4 text-xs pb-1 max-w-full mx-auto">
            <div className="flex items-center justify-center space-x-2 md:space-x-4 overflow-x-auto scrollbar-hide">
              <Link to="#" className="hover:opacity-80 text-[10px] md:text-xs whitespace-nowrap">
                Hồ Cá Sinh Thái
              </Link>
              <Link to="#" className="hover:opacity-80 text-[10px] md:text-xs whitespace-nowrap">
                Motor Giảm Tốc 12v
              </Link>
              <Link to="#" className="hover:opacity-80 text-[10px] md:text-xs whitespace-nowrap">
                Ốp Lenovo Legion 5
              </Link>
              <Link to="#" className="hover:opacity-80 text-[10px] md:text-xs whitespace-nowrap">
                Đèn Ngủ Godzilla
              </Link>
              <Link to="#" className="hover:opacity-80 text-[10px] md:text-xs whitespace-nowrap">
                Cosplay Thỏ Sexy
              </Link>
              <Link to="#" className="hover:opacity-80 text-[10px] md:text-xs whitespace-nowrap">
                Khủng Long Điều Khiển Từ Xa
              </Link>
              <Link to="#" className="hover:opacity-80 text-[10px] md:text-xs whitespace-nowrap">
                Setup
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

