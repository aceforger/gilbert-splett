import { contactInfo, authorInfo } from '../data'

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 watercolor-bg"></div>
      <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
        <div className="inline-flex items-center gap-2 border border-[#8FA67A]/30 text-[#8FA67A] px-4 py-2 mb-8 text-sm font-nunito font-semibold rounded-full">
          Contact
        </div>
        <h2 className="text-4xl md:text-5xl font-cormorant italic text-[#444444] mb-6 animate-fade-up">Get in Touch</h2>
        <p className="text-[#444444]/40 text-lg mb-12 max-w-md mx-auto font-nunito animate-fade-up-delayed">
          Reach out to {authorInfo.firstName} directly
        </p>
        <div className="bg-[#F8F6F1] p-10 shadow-2xl border border-[#8FA67A]/10 rounded-2xl animate-fade-up-delayed-2 hover-lift">
          <div className="w-16 h-16 mx-auto mb-6 bg-[#A8D5E5] rounded-full flex items-center justify-center">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
            </svg>
          </div>
          <a href={`mailto:${contactInfo.email}`} className="inline-flex items-center gap-3 px-10 py-5 bg-[#8FA67A] text-white font-nunito font-bold hover:bg-[#7A8F6A] transition-all text-lg w-full justify-center rounded-full">
            {contactInfo.email}
          </a>
        </div>
      </div>
    </section>
  )
}