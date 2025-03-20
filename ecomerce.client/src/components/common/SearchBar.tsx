import React from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search } from "lucide-react"

interface SearchBarProps {
  searchQuery: string
  setSearchQuery: (query: string) => void
}

const SearchBar: React.FC<SearchBarProps> = ({ searchQuery, setSearchQuery }) => {
  return (
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
  )
}

export default SearchBar
