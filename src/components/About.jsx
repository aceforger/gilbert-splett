import { authorInfo } from '../data'

export default function About() {
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      {/* Side decorations */}
      <div className="absolute left-0 top-0 w-2 h-full bg-gradient-to-b from-[#A8D5E5]/30 via-[#8FA67A]/20 to-[#D6C38A]/30"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-up">
          <div className="inline-flex items-center gap-2 px-5 py-2 bg-[#F8F6F1] border border-[#D6C38A]/20 rounded-full mb-4">
            <span className="text-sm font-nunito font-semibold text-[#8FA67A]">Meet the Author</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-cormorant italic text-[#444444] mb-4">{authorInfo.name}</h2>
          <div className="w-20 h-[3px] bg-gradient-to-r from-[#8FA67A] to-[#D6C38A] mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Card-based layout */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {/* Card 1 */}
          <div className="bg-[#F8F6F1] rounded-3xl p-8 border border-[#A8D5E5]/15 hover-lift animate-fade-up">
            <div className="w-12 h-12 bg-[#A8D5E5]/20 rounded-2xl flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-[#8FA67A]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"/>
              </svg>
            </div>
            <p className="text-[#444444]/60 leading-relaxed font-nunito text-sm">{authorInfo.bio}</p>
          </div>

          {/* Card 2 */}
          <div className="bg-[#F8F6F1] rounded-3xl p-8 border border-[#D6C38A]/15 hover-lift animate-fade-up-delayed">
            <div className="w-12 h-12 bg-[#D6C38A]/20 rounded-2xl flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-[#8FA67A]" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"/>
              </svg>
            </div>
            <p className="text-[#444444]/60 leading-relaxed font-nunito text-sm">{authorInfo.bio2}</p>
          </div>

          {/* Card 3 */}
          <div className="bg-[#F8F6F1] rounded-3xl p-8 border border-[#8FA67A]/15 hover-lift animate-fade-up-delayed-2">
            <div className="w-12 h-12 bg-[#8FA67A]/20 rounded-2xl flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-[#8FA67A]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd"/>
              </svg>
            </div>
            <p className="text-[#444444]/60 leading-relaxed font-nunito text-sm italic">{authorInfo.bio3}</p>
          </div>
        </div>

        {/* Roles at bottom */}
        <div className="flex flex-wrap gap-3 justify-center mt-10">
          {authorInfo.roles.map((role, i) => (
            <span key={i} className="px-6 py-3 bg-white text-[#444444] text-sm font-nunito font-semibold border-2 border-[#D6C38A]/20 hover:border-[#8FA67A]/40 hover:text-[#8FA67A] hover-lift transition-all rounded-2xl shadow-sm">
              {role}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}