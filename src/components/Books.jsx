import { useState } from 'react'
import { book } from '../data'

export default function Books() {
  const [selectedBook, setSelectedBook] = useState(null)
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
      <div className="absolute inset-0 watercolor-bg"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-up">
          <div className="inline-flex items-center gap-2 border border-[#8FA67A]/30 text-[#8FA67A] px-4 py-2 mb-4 text-sm font-nunito font-semibold rounded-full">
            The Book
          </div>
          <h2 className="text-4xl md:text-5xl font-cormorant italic text-[#444444] mb-4">Featured Work</h2>
          <div className="w-20 h-[3px] bg-gradient-to-r from-[#8FA67A] to-[#D6C38A] mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-5 gap-10 max-w-5xl mx-auto animate-fade-up">
          <div className="md:col-span-2 flex justify-center md:justify-end">
            <div className="relative group">
              <div className="absolute -inset-6 bg-[#A8D5E5]/10 rounded-2xl blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative bg-white border border-[#8FA67A]/10 hover:border-[#8FA67A]/30 transition-all shadow-md hover:shadow-lg hover-lift rounded-2xl overflow-hidden">
                <div className="absolute top-4 left-4 z-20 px-3 py-1.5 bg-[#8FA67A] text-white text-sm font-nunito font-bold rounded-full">
                  {bookItem.statusText}
                </div>
                
                {bookItem.coverBack && (
                  <button
                    onClick={toggleFlip}
                    className="absolute top-4 right-4 z-20 px-3 py-1.5 bg-[#D6C38A] text-white text-sm font-nunito font-bold rounded-full hover:bg-[#8FA67A] transition-colors"
                  >
                    {flippedCards[bookItem.id] ? 'Front Cover' : 'Back Cover'}
                  </button>
                )}

                <div className="relative w-80 md:w-96 h-[28rem] md:h-[32rem]" style={{ perspective: '1200px' }}>
                  <div 
                    className="relative w-full h-full transition-transform duration-700"
                    style={{ 
                      transformStyle: 'preserve-3d',
                      transform: flippedCards[bookItem.id] ? 'rotateY(180deg)' : 'rotateY(0deg)'
                    }}
                  >
                    <div className="absolute inset-0 flex items-center justify-center p-6" style={{ backfaceVisibility: 'hidden' }}>
                      <img src={bookItem.coverImage} alt={bookItem.title} className="w-full h-full object-contain"
                        onError={(e) => {
                          e.target.style.display = 'none'
                          e.target.parentElement.innerHTML = `<div class="text-center"><div class="text-4xl font-cormorant italic text-[#444444]">${bookItem.title.split(' ').map(w => w[0]).join('')}</div></div>`
                        }}
                      />
                    </div>
                    
                    {bookItem.coverBack && (
                      <div className="absolute inset-0 flex items-center justify-center p-6" style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}>
                        <img src={bookItem.coverBack} alt={`${bookItem.title} - Back`} className="w-full h-full object-contain"
                          onError={(e) => { e.target.style.display = 'none' }}
                        />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="md:col-span-3 flex flex-col justify-center space-y-6">
            <div>
              {bookItem.subtitle && (
                <p className="text-[#8FA67A] text-sm font-nunito font-semibold uppercase tracking-wider mb-2">{bookItem.subtitle}</p>
              )}
              <h3 className="text-3xl md:text-4xl font-cormorant italic text-[#444444] mb-3">{bookItem.title}</h3>
              <div className="w-16 h-[3px] bg-gradient-to-r from-[#8FA67A] to-[#D6C38A] rounded-full"></div>
            </div>
            <p className="text-[#444444]/60 leading-relaxed font-nunito">{bookItem.description}</p>
            {bookItem.description2 && <p className="text-[#444444]/40 leading-relaxed font-nunito text-sm">{bookItem.description2}</p>}
            {bookItem.description3 && (
              <p className="text-[#444444]/30 leading-relaxed font-nunito text-sm italic border-l-2 border-[#A8D5E5]/50 pl-4">{bookItem.description3}</p>
            )}
            <div className="flex flex-wrap gap-2">
              {bookItem.themes.map((theme, i) => (
                <span key={i} className="px-3 py-1.5 bg-white text-[#8FA67A] text-xs font-nunito font-semibold rounded-full border border-[#8FA67A]/15">{theme}</span>
              ))}
            </div>
            <div className="flex flex-wrap gap-3 pt-2">
              {bookItem.status === 'published' && bookItem.purchaseLinks && (
                bookItem.purchaseLinks.map((link, i) => (
                  <a key={i} href={link.url} target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-[#8FA67A] text-white font-nunito font-bold text-sm rounded-full hover:bg-[#7A8F6A] transition-all hover-lift">
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