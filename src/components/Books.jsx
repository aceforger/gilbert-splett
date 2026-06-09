import { useState } from 'react'
import { book } from '../data'

export default function Books() {
  const [flippedCards, setFlippedCards] = useState({})
  const bookItem = book[0]

  const toggleFlip = (e) => {
    e.stopPropagation()
    setFlippedCards(prev => ({
      ...prev,
      [bookItem.id]: !prev[bookItem.id]
    }))
  }

  return (
    <section id="book" className="py-24 bg-[#F8F6F1] relative overflow-hidden">
      {/* Top wave decoration */}
      <div className="absolute top-0 left-0 w-full h-16 bg-white rounded-b-[50%]"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 pt-8">
        <div className="text-center mb-16 animate-fade-up">
          <div className="inline-flex items-center gap-2 px-5 py-2 bg-white border border-[#D6C38A]/20 rounded-full mb-4 shadow-sm">
            <span className="text-sm font-nunito font-semibold text-[#8FA67A]">Featured Book</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-cormorant italic text-[#444444] mb-4">What is Tommy Thinking?</h2>
          <div className="w-20 h-[3px] bg-gradient-to-r from-[#8FA67A] to-[#D6C38A] mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Centered book display */}
        <div className="flex flex-col lg:flex-row items-center gap-12 max-w-4xl mx-auto animate-fade-up">
          {/* Book with flip */}
          <div className="relative group flex-shrink-0">
            <div className="absolute -inset-4 bg-[#A8D5E5]/10 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative bg-white rounded-3xl shadow-xl border-2 border-[#D6C38A]/15 overflow-hidden">
              <div className="absolute top-4 left-4 z-20 px-4 py-1.5 bg-[#8FA67A] text-white text-sm font-nunito font-bold rounded-full shadow-md">
                {bookItem.statusText}
              </div>
              
              {bookItem.coverBack && (
                <button
                  onClick={toggleFlip}
                  className="absolute top-4 right-4 z-20 px-4 py-1.5 bg-[#D6C38A] text-white text-sm font-nunito font-bold rounded-full hover:bg-[#8FA67A] transition-colors shadow-md"
                >
                  {flippedCards[bookItem.id] ? 'Show Front' : 'Show Back'}
                </button>
              )}

              <div className="w-72 h-96" style={{ perspective: '1200px' }}>
                <div 
                  className="relative w-full h-full transition-transform duration-700"
                  style={{ 
                    transformStyle: 'preserve-3d',
                    transform: flippedCards[bookItem.id] ? 'rotateY(180deg)' : 'rotateY(0deg)'
                  }}
                >
                  <div className="absolute inset-0 flex items-center justify-center p-6" style={{ backfaceVisibility: 'hidden' }}>
                    <img src={bookItem.coverImage} alt={bookItem.title} className="w-full h-full object-contain rounded-xl"
                      onError={(e) => {
                        e.target.style.display = 'none'
                        e.target.parentElement.innerHTML = `<div class="text-center"><div class="text-3xl font-cormorant italic text-[#444444]">${bookItem.title.split(' ').map(w => w[0]).join('')}</div></div>`
                      }}
                    />
                  </div>
                  
                  {bookItem.coverBack && (
                    <div className="absolute inset-0 flex items-center justify-center p-6" style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}>
                      <img src={bookItem.coverBack} alt={`${bookItem.title} - Back`} className="w-full h-full object-contain rounded-xl"
                        onError={(e) => { e.target.style.display = 'none' }}
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Book details */}
          <div className="flex-1 space-y-6 text-center lg:text-left">
            <p className="text-[#8FA67A] text-sm font-nunito font-semibold uppercase tracking-wider">{bookItem.subtitle}</p>
            <div className="w-16 h-[3px] bg-gradient-to-r from-[#8FA67A] to-[#D6C38A] rounded-full mx-auto lg:mx-0"></div>
            <p className="text-[#444444]/60 leading-relaxed font-nunito">{bookItem.description}</p>
            {bookItem.description2 && <p className="text-[#444444]/40 leading-relaxed font-nunito text-sm">{bookItem.description2}</p>}
            {bookItem.description3 && (
              <div className="bg-[#A8D5E5]/5 rounded-2xl p-5 border border-[#A8D5E5]/15">
                <p className="text-[#444444]/40 leading-relaxed font-nunito text-sm italic">{bookItem.description3}</p>
              </div>
            )}
            <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
              {bookItem.themes.map((theme, i) => (
                <span key={i} className="px-4 py-2 bg-white text-[#8FA67A] text-xs font-nunito font-semibold rounded-full border border-[#8FA67A]/15 shadow-sm">{theme}</span>
              ))}
            </div>
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start pt-2">
              {bookItem.status === 'published' && bookItem.purchaseLinks && (
                bookItem.purchaseLinks.map((link, i) => (
                  <a key={i} href={link.url} target="_blank" rel="noopener noreferrer" className="px-8 py-3.5 bg-[#8FA67A] text-white font-nunito font-bold rounded-2xl hover:bg-[#7A8F6A] transition-all hover-lift shadow-lg shadow-[#8FA67A]/20">
                    Buy on {link.name}
                  </a>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}