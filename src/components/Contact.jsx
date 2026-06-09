import { contactInfo, authorInfo } from '../data'

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-[#F8F6F1] relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 right-10 w-48 h-48 border-2 border-[#D6C38A]/15 rounded-full"></div>
      <div className="absolute bottom-10 left-10 w-36 h-36 border border-[#A8D5E5]/20 rounded-full"></div>

      <div className="max-w-2xl mx-auto px-6 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-5 py-2 bg-white border border-[#D6C38A]/20 rounded-full mb-8 shadow-sm">
          <span className="text-sm font-nunito font-semibold text-[#8FA67A]">Get in Touch</span>
        </div>
        <h2 className="text-5xl md:text-6xl font-cormorant italic text-[#444444] mb-6 animate-fade-up">Contact {authorInfo.firstName}</h2>
        <p className="text-[#444444]/40 text-lg mb-12 font-nunito animate-fade-up-delayed">
          Have questions about Tommy's adventures or want to connect?
        </p>

        <div className="bg-white rounded-3xl shadow-xl border-2 border-[#D6C38A]/15 p-10 animate-fade-up-delayed-2 hover-lift">
          <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-[#A8D5E5] to-[#8FA67A] rounded-2xl rotate-3 flex items-center justify-center shadow-lg">
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
            </svg>
          </div>
          <a href={`mailto:${contactInfo.email}`} className="inline-flex items-center gap-3 px-8 py-4 bg-[#8FA67A] text-white font-nunito font-bold text-lg rounded-2xl hover:bg-[#7A8F6A] transition-all hover-lift shadow-lg shadow-[#8FA67A]/20">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
            </svg>
            {contactInfo.email}
          </a>
        </div>
      </div>
    </section>
  )
}