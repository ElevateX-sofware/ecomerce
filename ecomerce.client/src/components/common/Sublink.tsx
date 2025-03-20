import { Link } from "react-router-dom"

interface SublinkProps {
  links: { to: string; title: string }[];
}

export default function Sublink({ links }: SublinkProps) {
  return (
    <div className="container mx-auto px-4 pb-2">
      <div className="flex items-center justify-center space-x-1 md:space-x-2 text-xs pb-1 max-w-full mx-auto">
        <div className="flex items-center justify-center space-x-1 md:space-x-2 overflow-x-auto scrollbar-hide">
          {links.map((link, index) => (
            <Link 
              key={index} 
              to={link.to} 
              className="hover:opacity-80 text-[10px] md:text-xs whitespace-nowrap"
            >
              {link.title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
