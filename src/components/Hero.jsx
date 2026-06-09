import { authorInfo } from '../data'

export default function Hero() {
  const handleScroll = (e, href) => {
    e.preventDefault()
    const targetId = href.replace('#', '')
    const element = document.getElementById(targetId)
    if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden">
      {/* Sky background - More blue */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#A8D5E5]/60 via-[#B8DEEE]/40 to-[#F8F6F1]"></div>

      {/* Moving Clouds Layer 1 - Top */}
      <div className="absolute top-10 left-0 w-full h-40 overflow-hidden">
        <div className="absolute animate-cloud" style={{ animationDuration: '25s' }}>
          <div className="flex gap-20">
            <div className="relative mt-4">
              <div className="w-40 h-14 bg-white rounded-full opacity-70"></div>
              <div className="w-28 h-10 bg-white rounded-full absolute -top-4 left-6 opacity-70"></div>
              <div className="w-24 h-8 bg-white rounded-full absolute -top-2 left-14 opacity-70"></div>
            </div>
            <div className="relative mt-8">
              <div className="w-32 h-10 bg-white rounded-full opacity-50"></div>
              <div className="w-20 h-8 bg-white rounded-full absolute -top-3 left-4 opacity-50"></div>
            </div>
            <div className="relative mt-2">
              <div className="w-48 h-16 bg-white rounded-full opacity-60"></div>
              <div className="w-32 h-12 bg-white rounded-full absolute -top-5 left-8 opacity-60"></div>
              <div className="w-28 h-10 bg-white rounded-full absolute -top-3 left-18 opacity-60"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Moving Clouds Layer 2 - Middle */}
      <div className="absolute top-32 left-0 w-full h-40 overflow-hidden">
        <div className="absolute animate-cloud-slow" style={{ animationDuration: '35s', animationDirection: 'reverse' }}>
          <div className="flex gap-16">
            <div className="relative mt-6">
              <div className="w-36 h-12 bg-white rounded-full opacity-55"></div>
              <div className="w-24 h-9 bg-white rounded-full absolute -top-3 left-5 opacity-55"></div>
            </div>
            <div className="relative mt-3">
              <div className="w-44 h-14 bg-white rounded-full opacity-45"></div>
              <div className="w-30 h-11 bg-white rounded-full absolute -top-4 left-7 opacity-45"></div>
              <div className="w-26 h-9 bg-white rounded-full absolute -top-2 left-16 opacity-45"></div>
            </div>
            <div className="relative mt-10">
              <div className="w-28 h-10 bg-white rounded-full opacity-40"></div>
              <div className="w-20 h-7 bg-white rounded-full absolute -top-2 left-4 opacity-40"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Moving Clouds Layer 3 - Bottom */}
      <div className="absolute top-56 left-0 w-full h-40 overflow-hidden">
        <div className="absolute animate-cloud" style={{ animationDuration: '30s', animationDelay: '5s' }}>
          <div className="flex gap-24">
            <div className="relative mt-5">
              <div className="w-34 h-12 bg-white rounded-full opacity-50"></div>
              <div className="w-22 h-8 bg-white rounded-full absolute -top-3 left-4 opacity-50"></div>
              <div className="w-20 h-7 bg-white rounded-full absolute -top-1 left-12 opacity-50"></div>
            </div>
            <div className="relative mt-8">
              <div className="w-40 h-14 bg-white rounded-full opacity-40"></div>
              <div className="w-28 h-10 bg-white rounded-full absolute -top-4 left-6 opacity-40"></div>
            </div>
            <div className="relative mt-2">
              <div className="w-30 h-10 bg-white rounded-full opacity-45"></div>
              <div className="w-22 h-8 bg-white rounded-full absolute -top-2 left-4 opacity-45"></div>
            </div>
          </div>
        </div>
      </div>

      {/* High altitude wispy clouds */}
      <div className="absolute top-6 left-0 w-full overflow-hidden opacity-25">
        <div className="animate-cloud" style={{ animationDuration: '40s' }}>
          <div className="flex gap-32">
            <div className="w-60 h-1 bg-white rounded-full blur-sm"></div>
            <div className="w-40 h-0.5 bg-white rounded-full blur-sm mt-2"></div>
            <div className="w-50 h-1 bg-white rounded-full blur-sm"></div>
          </div>
        </div>
      </div>

      {/* Flying Birds */}
      <div className="absolute top-20 left-0 w-full h-40 overflow-hidden pointer-events-none">
        {/* Bird 1 */}
        <div className="absolute animate-bird" style={{ top: '20%', animationDuration: '15s', animationDelay: '0s' }}>
          <svg className="w-8 h-4 text-[#444444]/30" viewBox="0 0 40 20" fill="currentColor">
            <path d="M2 18 Q12 2 20 12 Q28 2 38 18 Q28 10 20 14 Q12 10 2 18Z"/>
          </svg>
        </div>
        {/* Bird 2 */}
        <div className="absolute animate-bird" style={{ top: '35%', animationDuration: '18s', animationDelay: '3s' }}>
          <svg className="w-6 h-3 text-[#444444]/25" viewBox="0 0 30 15" fill="currentColor">
            <path d="M1 14 Q9 1 15 9 Q21 1 29 14 Q21 7 15 10 Q9 7 1 14Z"/>
          </svg>
        </div>
        {/* Bird 3 */}
        <div className="absolute animate-bird" style={{ top: '50%', animationDuration: '20s', animationDelay: '6s' }}>
          <svg className="w-10 h-5 text-[#444444]/20" viewBox="0 0 50 25" fill="currentColor">
            <path d="M3 23 Q15 2 25 15 Q35 2 47 23 Q35 12 25 18 Q15 12 3 23Z"/>
          </svg>
        </div>
        {/* Bird 4 */}
        <div className="absolute animate-bird" style={{ top: '15%', animationDuration: '22s', animationDelay: '9s' }}>
          <svg className="w-7 h-3.5 text-[#444444]/30" viewBox="0 0 35 18" fill="currentColor">
            <path d="M2 16 Q10 2 17 10 Q24 2 33 16 Q24 9 17 12 Q10 9 2 16Z"/>
          </svg>
        </div>
        {/* Bird 5 - smaller, higher */}
        <div className="absolute animate-bird-slow" style={{ top: '8%', animationDuration: '25s', animationDelay: '4s' }}>
          <svg className="w-5 h-2.5 text-[#444444]/20" viewBox="0 0 25 13" fill="currentColor">
            <path d="M1 12 Q8 1 12 8 Q16 1 24 12 Q16 6 12 9 Q8 6 1 12Z"/>
          </svg>
        </div>
        {/* Bird 6 */}
        <div className="absolute animate-bird" style={{ top: '40%', animationDuration: '16s', animationDelay: '7s' }}>
          <svg className="w-9 h-4.5 text-[#444444]/25" viewBox="0 0 45 22" fill="currentColor">
            <path d="M2 20 Q13 2 22 13 Q31 2 43 20 Q31 11 22 16 Q13 11 2 20Z"/>
          </svg>
        </div>
      </div>

      {/* Watercolor texture overlay */}
      <div className="absolute inset-0 opacity-25"
        style={{
          background: `
            radial-gradient(ellipse at 20% 30%, rgba(168, 213, 229, 0.2) 0%, transparent 50%),
            radial-gradient(ellipse at 80% 60%, rgba(214, 195, 138, 0.1) 0%, transparent 50%),
            radial-gradient(ellipse at 50% 90%, rgba(143, 166, 122, 0.08) 0%, transparent 50%)
          `
        }}>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 md:py-32 w-full">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="text-center md:text-left">
            <div className="inline-flex items-center gap-2 border border-[#8FA67A]/30 text-[#8FA67A] px-4 py-2 mb-8 text-sm font-nunito font-semibold rounded-full bg-white/60 backdrop-blur-sm animate-fade-up">
              <span className="w-2 h-2 bg-[#D6C38A] rounded-full"></span>
              Pastor & Children's Author
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-cormorant italic text-[#444444] mb-6 leading-tight animate-fade-up">
              {authorInfo.name}
            </h1>
            <div className="w-24 h-[3px] bg-gradient-to-r from-[#8FA67A] to-[#D6C38A] mb-8 mx-auto md:mx-0 rounded-full"></div>
            <p className="text-xl text-[#444444]/70 mb-6 font-nunito font-semibold animate-fade-up-delayed">
              Stories of <span className="text-[#8FA67A] font-bold">faith</span>, wonder, and <span className="text-[#D6C38A] font-bold">discovery</span> for children
            </p>
            <p className="text-[#444444]/50 leading-relaxed max-w-lg mx-auto md:mx-0 font-cormorant italic text-lg border-l-2 border-[#A8D5E5]/50 pl-6 py-2 animate-fade-up-delayed">
              "A wonderful way to preach to children — to preach to all of us!"
            </p>
            <div className="flex flex-wrap gap-3 my-8 justify-center md:justify-start animate-fade-up-delayed-2">
              {authorInfo.roles.map((role, i) => (
                <span key={i} className="px-4 py-2 bg-white/80 backdrop-blur-sm text-[#444444] text-sm font-nunito font-semibold border border-[#8FA67A]/15 hover:border-[#8FA67A]/40 hover:bg-[#8FA67A]/5 hover-lift transition-all rounded-full">
                  {role}
                </span>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start animate-fade-up-delayed-2">
              <a href="#about" onClick={(e) => handleScroll(e, '#about')} className="px-8 py-4 bg-[#8FA67A] text-white font-nunito font-bold hover:bg-[#7A8F6A] transition-all text-center hover-lift rounded-full shadow-[0_0_20px_rgba(143,166,122,0.2)]">
                About the Author
              </a>
              <a href="#book" onClick={(e) => handleScroll(e, '#book')} className="px-8 py-4 border-2 border-[#D6C38A]/50 text-[#444444] font-nunito font-bold hover:border-[#8FA67A] hover:text-[#8FA67A] transition-all text-center hover-lift rounded-full">
                View the Book
              </a>
            </div>
          </div>

          <div className="relative mx-auto max-w-sm animate-fade-up">
            <div className="relative">
              <div className="absolute -inset-8 bg-[#A8D5E5]/15 rounded-full blur-3xl animate-warm-glow"></div>
              <div className="absolute -inset-4 bg-[#D6C38A]/8 rounded-full blur-2xl"></div>
              
              <div className="relative bg-white/85 backdrop-blur-sm shadow-2xl border border-[#8FA67A]/15 overflow-hidden hover-lift rounded-2xl">
                <div className="aspect-[3/4] overflow-hidden flex items-center justify-center bg-gradient-to-br from-[#F8F6F1] to-[#E0ECF2]">
                  <div className="text-center p-8">
                    <div className="w-20 h-20 mx-auto mb-4 bg-[#A8D5E5] rounded-full flex items-center justify-center animate-bounce-gentle shadow-[0_0_20px_rgba(168,213,229,0.3)]">
                      <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                      </svg>
                    </div>
                    <div className="text-2xl font-cormorant italic font-bold text-[#444444] mb-2">GS</div>
                    <p className="text-sm font-nunito font-semibold text-[#444444]/50 uppercase tracking-wider">{authorInfo.name}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}