import { useNavigate } from 'react-router-dom'
import { authorInfo, navLinks } from '../data'

export default function Footer() {
  const navigate = useNavigate()

  const handleScroll = (e, href) => {
    e.preventDefault()
    navigate('/' + href)
  }

  return (
    <footer className="bg-[#444444] text-white relative overflow-hidden">
      {/* Top decoration */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#A8D5E5] via-[#8FA67A] to-[#D6C38A]"></div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <span className="font-cormorant italic text-4xl text-[#D6C38A]">{authorInfo.name}</span>
          <p className="text-white/40 text-sm font-nunito mt-2">Pastor & Children's Author</p>
        </div>

        <div className="flex flex-wrap justify-center gap-6 mb-12">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} onClick={(e) => handleScroll(e, link.href)} 
              className="px-5 py-2 text-white/50 hover:text-white text-sm font-nunito font-semibold rounded-full hover:bg-white/5 transition-all">
              {link.name}
            </a>
          ))}
        </div>

        <div className="flex justify-center mb-12">
          <a
            href="https://buy.stripe.com/7sY5kEdVm6vNfRU8Ey2kw07"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#D6C38A] text-[#444444] font-nunito font-bold py-4 px-10 rounded-2xl shadow-xl transform transition-all duration-300 hover:scale-105 hover:shadow-[#D6C38A]/30"
          >
            Launch & Go-Live Portal
          </a>
        </div>

        <div className="text-center border-t border-white/10 pt-8">
          <p className="text-white/25 text-sm font-nunito">
            &copy; {new Date().getFullYear()} {authorInfo.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}