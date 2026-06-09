import { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { navLinks } from '../data'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const navigate = useNavigate()
  const location = useLocation()
  const isHomePage = location.pathname === '/'

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
      if (isHomePage) {
        const sections = navLinks.map(link => link.href.replace('#', ''))
        const scrollPosition = window.scrollY + 100
        for (const section of sections) {
          const element = document.getElementById(section)
          if (element) {
            const { offsetTop, offsetHeight } = element
            if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
              setActiveSection(section)
              break
            }
          }
        }
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isHomePage])

  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [location.pathname])

  const handleNavClick = (e, href) => {
    e.preventDefault()
    setIsMobileMenuOpen(false)
    if (isHomePage) {
      const targetId = href.replace('#', '')
      const element = document.getElementById(targetId)
      if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    } else {
      navigate('/' + href)
    }
  }

  const handleLogoClick = (e) => {
    e.preventDefault()
    setIsMobileMenuOpen(false)
    navigate('/')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-[#F8F6F1]/95 backdrop-blur-xl shadow-lg border-b-2 border-[#D6C38A]/30' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a href="/" onClick={handleLogoClick} className="flex items-center gap-2 group">
            
            <div>
              <span className="font-cormorant text-xl italic font-bold text-[#444444] group-hover:text-[#8FA67A] transition-colors">
                Gilbert Splett
              </span>
            </div>
          </a>

          <div className="hidden md:flex items-center gap-1 bg-white/50 backdrop-blur-sm rounded-full px-2 py-1 border border-[#8FA67A]/10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`relative px-5 py-2 text-sm font-nunito font-semibold rounded-full transition-all duration-300 ${
                  activeSection === link.href.replace('#', '') && isHomePage
                    ? 'bg-[#8FA67A] text-white shadow-md'
                    : 'text-[#444444]/60 hover:text-[#444444] hover:bg-[#8FA67A]/5'
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden w-10 h-10 flex items-center justify-center text-[#444444] bg-white/80 rounded-full shadow-sm"
          >
            <div className="relative w-5 h-5">
              <span className={`absolute left-0 w-full h-0.5 bg-current transform transition-all duration-300 rounded-full ${isMobileMenuOpen ? 'top-2 rotate-45' : 'top-0'}`}></span>
              <span className={`absolute left-0 top-2 w-full h-0.5 bg-current transition-all duration-300 rounded-full ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
              <span className={`absolute left-0 w-full h-0.5 bg-current transform transition-all duration-300 rounded-full ${isMobileMenuOpen ? 'top-2 -rotate-45' : 'top-4'}`}></span>
            </div>
          </button>
        </div>

        <div className={`md:hidden transition-all duration-500 overflow-hidden ${isMobileMenuOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="bg-white/98 border-2 border-[#D6C38A]/20 rounded-3xl shadow-xl mt-3 p-3 backdrop-blur-xl">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} onClick={(e) => handleNavClick(e, link.href)}
                className={`block px-5 py-3 font-nunito font-semibold rounded-2xl transition-all ${
                  activeSection === link.href.replace('#', '') && isHomePage
                    ? 'bg-[#8FA67A] text-white'
                    : 'text-[#444444]/60 hover:bg-[#8FA67A]/5'
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}