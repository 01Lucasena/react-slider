import './App.css'
import React, { useState, useEffect } from 'react'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import Logo from '../src/assets/images/logo.png'

import tenisImg from '../src/assets/images/tenis.png'
import camisetaImg from '../src/assets/images/camiseta.webp'
import calcaImg from '../src/assets/images/jeans.png'
import jaquetaImg from '../src/assets/images/jaqueta.png'
import boneImg from '../src/assets/images/bone.png'
import relogioImg from '../src/assets/images/relogio.webp'

const cardData = [
  { id: 1, title: 'Tênis', preco: 'R$ 150,00', description: 'Confortável para o dia a dia', imgUrl: tenisImg },
  { id: 2, title: 'Camiseta', preco: 'R$ 50,00', description: 'Estilo e conforto', imgUrl: camisetaImg },
  { id: 3, title: 'Calça Jeans', preco: 'R$ 120,00', description: 'Durável e estilosa', imgUrl: calcaImg },
  { id: 4, title: 'Jaqueta', preco: 'R$ 200,00', description: 'Perfeita para o inverno', imgUrl: jaquetaImg },
  { id: 5, title: 'Boné', preco: 'R$ 30,00', description: 'Proteção contra o sol', imgUrl: boneImg },
  { id: 6, title: 'Relógio', preco: 'R$ 80,00', description: 'Estilo e funcionalidade', imgUrl: relogioImg }
]

function getConfig() {
  if (window.matchMedia('(max-width: 400px)').matches) {
    return { cardWidth: 160, gap: 30, visible: 1 }
  }
  if (window.matchMedia('(max-width: 600px)').matches) {
    return { cardWidth: 180, gap: 30, visible: 1 }
  }
  if (window.matchMedia('(max-width: 900px)').matches) {
    return { cardWidth: 200, gap: 30, visible: 2 }
  }
  return { cardWidth: 200, gap: 30, visible: 4 }
}

function App() {
  const [config, setConfig] = useState(getConfig())
  const [showPopup, setShowPopup] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState(null)
  const step = config.cardWidth + config.gap

  const originalLength = cardData.length
  const cards = [...cardData, ...cardData, ...cardData]

  const [index, setIndex] = useState(originalLength)
  const [transition, setTransition] = useState(true)

  const next = () => setIndex(i => i + 1)
  const prev = () => setIndex(i => i - 1)

  useEffect(() => {
    const resize = () => setConfig(getConfig())
    window.addEventListener('resize', resize)
    return () => window.removeEventListener('resize', resize)
  }, [])

  useEffect(() => {
    if (index >= originalLength * 2) {
      setTimeout(() => {
        setTransition(false)
        setIndex(originalLength)
      }, 500)
    }

    if (index <= originalLength - config.visible) {
      setTimeout(() => {
        setTransition(false)
        setIndex(originalLength + (originalLength - config.visible))
      }, 500)
    }
  }, [index, config.visible, originalLength])

  useEffect(() => {
    if (!transition) {
      requestAnimationFrame(() => setTransition(true))
    }
  }, [transition])

  const handleBuyClick = (product) => {
    setSelectedProduct(product)
    setShowPopup(true)
  }

  const Popup = ({ product, onClose }) => {
    if (!showPopup) return null
    
    return (
      <div className="popup-overlay" onClick={onClose}>
        <div className="popup-content" onClick={e => e.stopPropagation()}>
          <h2>Adicionar ao Carrinho</h2>
          <p>Deseja adicionar {product?.title} ao carrinho?</p>
          <div className="popup-buttons">
            <button 
              className="popup-button confirm" 
              onClick={() => {
                alert(`${product.title} adicionado ao carrinho!`)
                onClose()
              }}
            >
              Confirmar
            </button>
            <button className="popup-button cancel" onClick={onClose}>
              Cancelar
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="App">
      <div className="carousel-page">
        <img src={Logo} className="logo" alt="Logo" />

        <div className="carousel-container">
          <button className="left-button" onClick={prev}>
            <FaArrowLeft />
          </button>

          <div className="card-viewport">
            <div
              className="card-list"
              style={{
                transform: `translateX(-${index * step}px)`,
                transition: transition ? 'transform 0.5s ease' : 'none'
              }}
            >
              {cards.map((card, i) => (
                <div className="card-item" key={`${card.id}-${i}`}>
                  <div className="card-img-container">
                    <img src={card.imgUrl} className="card-img" alt={card.title} />
                  </div>
                  <h2 className="card-title">{card.title}</h2>
                  <p className="card-price">{card.preco}</p>
                  <p className="card-description">{card.description}</p>
                  <button 
                    className="buy-button" 
                    onClick={() => handleBuyClick(card)}
                  >
                    Comprar
                  </button>
                </div>
              ))}
            </div>
          </div>

          <button className="right-button" onClick={next}>
            <FaArrowRight />
          </button>
        </div>
      </div>

      <footer className="footer">
        <p className="footer-text">Feito com ❤️ por Lucas Sena</p>
      </footer>
      
      <Popup 
        product={selectedProduct} 
        onClose={() => setShowPopup(false)} 
      />
    </div>
  )
}

export default App
