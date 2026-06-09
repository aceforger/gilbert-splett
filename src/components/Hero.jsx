import { authorInfo } from '../data'

export default function Hero() {
  const handleScroll = (e, href) => {
    e.preventDefault()
    const targetId = href.replace('#', '')
    const element = document.getElementById(targetId)
    if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden bg-gradient-to-b from-[#87CEEB] via-[#A8D5E5] to-[#F8F6F1]">
      {/* Sun */}
      <div className="absolute top-16 right-24 w-24 h-24 bg-[#FFE4B5] rounded-full shadow-[0_0_60px_rgba(255,228,181,0.6),0_0_120px_rgba(255,228,181,0.3)] animate-warm-glow"></div>

      {/* Large Fluffy Clouds - Layer 1 (closest, biggest, most visible) */}
      <div className="absolute top-32 left-0 w-full h-48 overflow-hidden pointer-events-none">
        <div className="absolute animate-cloud" style={{ animationDuration: '70s' }}>
          <div className="flex gap-32">
            <div className="relative mt-2">
              <div className="w-52 h-20 bg-white rounded-full shadow-lg"></div>
              <div className="w-36 h-14 bg-white rounded-full absolute -top-6 left-8 shadow-lg"></div>
              <div className="w-28 h-12 bg-white rounded-full absolute -top-4 left-20 shadow-lg"></div>
              <div className="w-32 h-10 bg-white rounded-full absolute -top-2 left-2 shadow-lg"></div>
            </div>
            <div className="relative mt-8">
              <div className="w-44 h-16 bg-white rounded-full shadow-lg"></div>
              <div className="w-32 h-12 bg-white rounded-full absolute -top-5 left-6 shadow-lg"></div>
              <div className="w-24 h-10 bg-white rounded-full absolute -top-3 left-18 shadow-lg"></div>
            </div>
            <div className="relative mt-0">
              <div className="w-56 h-22 bg-white rounded-full shadow-lg"></div>
              <div className="w-40 h-16 bg-white rounded-full absolute -top-7 left-8 shadow-lg"></div>
              <div className="w-30 h-14 bg-white rounded-full absolute -top-5 left-22 shadow-lg"></div>
              <div className="w-34 h-12 bg-white rounded-full absolute -top-3 left-4 shadow-lg"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Fluffy Clouds - Layer 2 (medium) */}
      <div className="absolute top-52 left-0 w-full h-40 overflow-hidden pointer-events-none opacity-80">
        <div className="absolute animate-cloud-slow" style={{ animationDuration: '70s ', animationDirection: 'reverse' }}>
          <div className="flex gap-24">
            <div className="relative mt-4">
              <div className="w-40 h-16 bg-white rounded-full shadow-md"></div>
              <div className="w-28 h-12 bg-white rounded-full absolute -top-5 left-6 shadow-md"></div>
              <div className="w-22 h-10 bg-white rounded-full absolute -top-3 left-14 shadow-md"></div>
            </div>
            <div className="relative mt-10">
              <div className="w-36 h-14 bg-white rounded-full shadow-md"></div>
              <div className="w-26 h-10 bg-white rounded-full absolute -top-4 left-5 shadow-md"></div>
            </div>
            <div className="relative mt-2">
              <div className="w-48 h-18 bg-white rounded-full shadow-md"></div>
              <div className="w-34 h-14 bg-white rounded-full absolute -top-6 left-7 shadow-md"></div>
              <div className="w-28 h-12 bg-white rounded-full absolute -top-4 left-16 shadow-md"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Fluffy Clouds - Layer 3 (smaller, higher) */}
      <div className="absolute top-80 left-0 w-full h-36 overflow-hidden pointer-events-none opacity-60">
        <div className="absolute animate-cloud" style={{ animationDuration: '40s', animationDelay: '5s' }}>
          <div className="flex gap-28">
            <div className="relative mt-6">
              <div className="w-34 h-12 bg-white rounded-full shadow-sm"></div>
              <div className="w-24 h-10 bg-white rounded-full absolute -top-4 left-5 shadow-sm"></div>
            </div>
            <div className="relative mt-2">
              <div className="w-42 h-16 bg-white rounded-full shadow-sm"></div>
              <div className="w-30 h-12 bg-white rounded-full absolute -top-5 left-6 shadow-sm"></div>
              <div className="w-24 h-10 bg-white rounded-full absolute -top-3 left-16 shadow-sm"></div>
            </div>
            <div className="relative mt-8">
              <div className="w-30 h-12 bg-white rounded-full shadow-sm"></div>
              <div className="w-22 h-9 bg-white rounded-full absolute -top-3 left-4 shadow-sm"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Wispy high clouds */}
      <div className="absolute top-16 left-0 w-full overflow-hidden opacity-30 pointer-events-none">
        <div className="animate-cloud" style={{ animationDuration: '45s' }}>
          <div className="flex gap-40">
            <div className="w-72 h-1.5 bg-white rounded-full blur-sm"></div>
            <div className="w-48 h-1 bg-white rounded-full blur-sm mt-1"></div>
            <div className="w-60 h-1.5 bg-white rounded-full blur-sm"></div>
          </div>
        </div>
      </div>

      {/* Birds */}
      <div className="absolute top-24 left-0 w-full h-32 overflow-hidden pointer-events-none">
        <div className="absolute animate-bird" style={{ top: '20%', animationDuration: '14s' }}>
          <svg className="w-7 h-3.5 text-[#444444]/30" viewBox="0 0 35 18" fill="currentColor">
            <path d="M2 16 Q10 2 17 10 Q24 2 33 16 Q24 9 17 12 Q10 9 2 16Z"/>
          </svg>
        </div>
        <div className="absolute animate-bird" style={{ top: '45%', animationDuration: '18s', animationDelay: '3s' }}>
          <svg className="w-9 h-4.5 text-[#444444]/25" viewBox="0 0 45 22" fill="currentColor">
            <path d="M2 20 Q13 2 22 13 Q31 2 43 20 Q31 11 22 16 Q13 11 2 20Z"/>
          </svg>
        </div>
        <div className="absolute animate-bird" style={{ top: '35%', animationDuration: '20s', animationDelay: '6s' }}>
          <svg className="w-6 h-3 text-[#444444]/20" viewBox="0 0 30 15" fill="currentColor">
            <path d="M1 14 Q9 1 15 9 Q21 1 29 14 Q21 7 15 10 Q9 7 1 14Z"/>
          </svg>
        </div>
      </div>

      {/* Decorative circles */}
      <div className="absolute bottom-10 left-10 w-48 h-48 border-2 border-white/20 rounded-full"></div>
      <div className="absolute bottom-16 left-16 w-36 h-36 border border-white/15 rounded-full"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 md:py-32 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left - Text Content */}
          <div className="text-center md:text-left order-2 md:order-1">
            <div className="inline-flex items-center gap-2 px-5 py-2 bg-white/70 backdrop-blur-sm border border-[#D6C38A]/30 rounded-full mb-8 animate-fade-up shadow-md">
              <span className="text-lg">📖</span>
              <span className="text-sm font-nunito font-semibold text-[#8FA67A]">Pastor & Children's Author</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-6xl font-cormorant italic text-[#444444] mb-6 leading-tight animate-fade-up drop-shadow-sm">
              {authorInfo.name}
            </h1>

            <div className="flex items-center gap-4 mb-8 animate-fade-up-delayed justify-center md:justify-start">
              <div className="w-16 h-[2px] bg-[#D6C38A]"></div>
              <div className="w-3 h-3 bg-[#8FA67A] rounded-full"></div>
              <div className="w-16 h-[2px] bg-[#D6C38A]"></div>
            </div>

            <p className="text-xl md:text-2xl text-[#444444]/60 mb-8 font-nunito max-w-xl animate-fade-up-delayed">
              Stories of <span className="text-[#8FA67A] font-bold">faith</span>, wonder, and <span className="text-[#D6C38A] font-bold">discovery</span> for children
            </p>

            <div className="bg-white/60 backdrop-blur-sm border border-[#A8D5E5]/30 rounded-3xl px-8 py-5 mb-8 max-w-xl animate-fade-up-delayed shadow-lg mx-auto md:mx-0">
              <p className="text-[#444444]/50 font-cormorant italic text-lg">
                "A wonderful way to preach to children — to preach to all of us!"
              </p>
            </div>

            <div className="flex flex-wrap gap-3 mb-8 justify-center md:justify-start animate-fade-up-delayed-2">
              {authorInfo.roles.map((role, i) => (
                <span key={i} className="px-5 py-2.5 bg-white/70 backdrop-blur-sm text-[#444444] text-sm font-nunito font-semibold border border-[#8FA67A]/15 hover:border-[#D6C38A]/40 hover:shadow-md hover-lift transition-all rounded-2xl">
                  {role}
                </span>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start animate-fade-up-delayed-2">
              <a href="#about" onClick={(e) => handleScroll(e, '#about')} className="px-10 py-4 bg-[#8FA67A] text-white font-nunito font-bold text-lg rounded-2xl hover:bg-[#7A8F6A] transition-all hover-lift shadow-lg shadow-[#8FA67A]/20">
                About the Author
              </a>
              <a href="#book" onClick={(e) => handleScroll(e, '#book')} className="px-10 py-4 bg-white text-[#444444] font-nunito font-bold text-lg rounded-2xl border-2 border-[#D6C38A]/40 hover:border-[#8FA67A] hover:text-[#8FA67A] transition-all hover-lift shadow-md">
                View the Book
              </a>
            </div>
          </div>

          {/* Right - Profile Image */}
          <div className="relative mx-auto order-1 md:order-2 animate-fade-up">
            <div className="absolute -inset-6 bg-white/20 rounded-full blur-3xl"></div>
            <div className="absolute -inset-3 bg-[#D6C38A]/10 rounded-full blur-2xl"></div>
            
            <div className="relative">
              <div className="absolute -inset-4 border-2 border-dashed border-white/40 rounded-full animate-spin-slow"></div>
              <div className="absolute -inset-2 border border-white/30 rounded-full"></div>
              
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-2xl hover-lift bg-gradient-to-br from-[#F8F6F1] to-[#E0ECF2]">
                <img
                  src="/images/profile.png"
                  alt={authorInfo.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none'
                    e.target.parentElement.classList.add('flex', 'items-center', 'justify-center')
                    e.target.parentElement.innerHTML = `
                      <div class="text-center p-8">
                        <div class="w-24 h-24 mx-auto mb-4 bg-[#A8D5E5] rounded-full flex items-center justify-center shadow-lg">
                          <svg class="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"/>
                          </svg>
                        </div>
                        <div class="text-2xl font-cormorant italic font-bold text-[#444444]">GS</div>
                        <p class="text-sm font-nunito font-semibold text-[#444444]/50 uppercase tracking-wider mt-1">${authorInfo.name}</p>
                      </div>
                    `
                  }}
                />
              </div>

              
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}