import React from 'react'
import './style.css'

export default function App() {
  return (
    <div className="page">
      <div className="hearts" aria-hidden="true">
        <span style={{ '--x': 6, '--y': 8, '--size': '20px', '--delay': '-1s' }}>♥</span>
        <span style={{ '--x': 18, '--y': 22, '--size': '26px', '--delay': '-4s' }}>♥</span>
        <span style={{ '--x': 30, '--y': 10, '--size': '18px', '--delay': '-2s' }}>♥</span>
        <span style={{ '--x': 42, '--y': 26, '--size': '30px', '--delay': '-6s' }}>♥</span>
        <span style={{ '--x': 55, '--y': 12, '--size': '22px', '--delay': '-3s' }}>♥</span>
        <span style={{ '--x': 68, '--y': 20, '--size': '28px', '--delay': '-5s' }}>♥</span>
        <span style={{ '--x': 80, '--y': 8, '--size': '20px', '--delay': '-1.5s' }}>♥</span>
        <span style={{ '--x': 92, '--y': 24, '--size': '24px', '--delay': '-2.5s' }}>♥</span>
        <span style={{ '--x': 12, '--y': 56, '--size': '18px', '--delay': '-3.5s' }}>♥</span>
        <span style={{ '--x': 34, '--y': 66, '--size': '26px', '--delay': '-6.5s' }}>♥</span>
        <span style={{ '--x': 58, '--y': 62, '--size': '22px', '--delay': '-4.5s' }}>♥</span>
        <span style={{ '--x': 84, '--y': 70, '--size': '30px', '--delay': '-5.5s' }}>♥</span>
        <span style={{ '--x': 74, '--y': 44, '--size': '18px', '--delay': '-2.2s' }}>♥</span>
        <span style={{ '--x': 46, '--y': 46, '--size': '20px', '--delay': '-1.2s' }}>♥</span>
      </div>

      <header className="hero panel">
        <div className="hero-text">
          <p className="eyebrow">Happy Valentine's Day</p>
          <h1>For Arianna</h1>
          <p className="subhead">
            To the one reason why I wake up smiling every day. 
            You're my heart's safest place.
            My wish is that this will make you feel as special as you make me feel every day.
          </p>
        </div>
        <div className="hero-art" aria-hidden="true">
          <div className="heart-stack">
            <span className="heart jumbo">♥</span>
            <span className="heart mid">♥</span>
            <span className="heart mini">♥</span>
          </div>
          <div className="tag">With all my love</div>
        </div>
      </header>

      <section className="panel gift">
        <div>
          <p className="eyebrow">Special Delivery</p>
          <h2>Gift Card</h2>
          <p>
            Redeem anytime for <strong>unlimited kisses and rubs</strong>. <br />
            No expiration. Unlimited refills. <br /> Always valid for Arianna. <br />
            If you're not Arianna, return it to Arianna immediately.
          </p>
        </div>
        <div className="gift-card">
          <span className="gift-label">Balance</span>
          <span className="gift-amount">Unlimited</span>
          <span className="gift-detail">Kisses + Rubs</span>
        </div>
      </section>

      <section className="panel vow">
        <div>
          <h2>My Promise</h2>
          <p>
            I will keep choosing you, You're the love of my life.
            I'm looking forward to building our future together.
            Today, tomorrow, and every little day after.
          </p>
        </div>
        <div className="vow-badge">Always + Forever</div>
      </section>

      <section className="panel finale">
        <h2>Today</h2>
        <p>
          Happy Valentine's Day to My Coconut. <br />
          Thank you for being my favorite person. 
          I love you more than you could ever imagine.
        </p>
        <div className="signature">
          <span>All my love,</span>
          <strong>Luca</strong>
        </div>
      </section>
    </div>
  )
}
