import { authorInfo } from '../data'

export default function About() {
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 watercolor-bg"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-up">
          <div className="inline-flex items-center gap-2 border border-[#8FA67A]/30 text-[#8FA67A] px-4 py-2 mb-4 text-sm font-nunito font-semibold rounded-full">
            The Author
          </div>
          <h2 className="text-4xl md:text-5xl font-cormorant italic text-[#444444] mb-4">{authorInfo.name}</h2>
          <div className="w-20 h-[3px] bg-gradient-to-r from-[#8FA67A] to-[#D6C38A] mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-5 gap-10 max-w-6xl mx-auto">
          <div className="md:col-span-2">
            <div className="bg-gradient-to-br from-[#F8F6F1] to-[#E8F0F5] rounded-2xl overflow-hidden border border-[#8FA67A]/10 shadow-lg animate-fade-up">
              <div className="aspect-[3/4] overflow-hidden flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-24 h-24 mx-auto mb-4 bg-[#A8D5E5] rounded-full flex items-center justify-center">
                    <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <div className="text-3xl font-cormorant italic font-bold text-[#444444] mb-2">GS</div>
                  <p className="text-sm font-nunito font-semibold text-[#444444]/40 uppercase tracking-wider">{authorInfo.name}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="md:col-span-3 space-y-6">
            <div className="bg-[#F8F6F1]/80 backdrop-blur-sm p-8 rounded-2xl border border-[#8FA67A]/8 animate-fade-up hover-lift">
              <p className="text-[#444444]/60 leading-relaxed font-nunito">{authorInfo.bio}</p>
            </div>
            <div className="bg-[#F8F6F1]/80 backdrop-blur-sm p-8 rounded-2xl border-l-2 border-[#8FA67A] animate-fade-up-delayed hover-lift">
              <p className="text-[#444444]/50 leading-relaxed font-nunito">{authorInfo.bio2}</p>
            </div>
            <div className="bg-[#F8F6F1]/80 backdrop-blur-sm p-8 rounded-2xl animate-fade-up-delayed-2 hover-lift">
              <p className="text-[#444444]/40 leading-relaxed font-nunito italic">{authorInfo.bio3}</p>
            </div>
            <div className="flex flex-wrap gap-3">
              {authorInfo.roles.map((role, i) => (
                <span key={i} className="px-5 py-2.5 bg-white text-[#444444] text-sm font-nunito font-semibold border border-[#8FA67A]/15 hover:border-[#8FA67A]/40 hover:text-[#8FA67A] hover-lift transition-all rounded-full">
                  {role}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}