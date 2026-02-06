import './style.css'

const app = document.querySelector('#app')

app.innerHTML = `
  <div class="page">
    <div class="hearts" aria-hidden="true">
      <span style="--x:6; --y:8; --size:20px; --delay:-1s;">♥</span>
      <span style="--x:18; --y:22; --size:26px; --delay:-4s;">♥</span>
      <span style="--x:30; --y:10; --size:18px; --delay:-2s;">♥</span>
      <span style="--x:42; --y:26; --size:30px; --delay:-6s;">♥</span>
      <span style="--x:55; --y:12; --size:22px; --delay:-3s;">♥</span>
      <span style="--x:68; --y:20; --size:28px; --delay:-5s;">♥</span>
      <span style="--x:80; --y:8; --size:20px; --delay:-1.5s;">♥</span>
      <span style="--x:92; --y:24; --size:24px; --delay:-2.5s;">♥</span>
      <span style="--x:12; --y:56; --size:18px; --delay:-3.5s;">♥</span>
      <span style="--x:34; --y:66; --size:26px; --delay:-6.5s;">♥</span>
      <span style="--x:58; --y:62; --size:22px; --delay:-4.5s;">♥</span>
      <span style="--x:84; --y:70; --size:30px; --delay:-5.5s;">♥</span>
      <span style="--x:74; --y:44; --size:18px; --delay:-2.2s;">♥</span>
      <span style="--x:46; --y:46; --size:20px; --delay:-1.2s;">♥</span>
    </div>

    <header class="hero panel">
      <div class="hero-text">
        <p class="eyebrow">Happy Valentine's Day</p>
        <h1>For Arianna</h1>
        <p class="subhead">
          Every little moment with you feels like a soft glow. You are my favorite
          place to be, my calm in the rush, and the sweetest reason for every smile.
        </p>
        <div class="hero-actions">
          <button class="primary" type="button">Open My Heart</button>
          <button class="ghost" type="button">Keep This Moment</button>
        </div>
      </div>
      <div class="hero-art" aria-hidden="true">
        <div class="heart-stack">
          <span class="heart jumbo">♥</span>
          <span class="heart mid">♥</span>
          <span class="heart mini">♥</span>
        </div>
        <div class="tag">With all my love</div>
      </div>
    </header>

    <section class="panel message">
      <h2>A Love Note</h2>
      <p>
        Arianna, you make ordinary days feel like a celebration. Your kindness,
        your laugh, the way you see the world with such warmth, all of it makes me
        fall in love with you again and again.
      </p>
    </section>

    <section class="grid">
      <article class="panel">
        <h3>Reasons I Adore You</h3>
        <ul class="list">
          <li>Your heart is tender and strong all at once.</li>
          <li>You notice the small things that make life beautiful.</li>
          <li>You turn any moment into an adventure.</li>
          <li>Your smile makes everything feel lighter.</li>
        </ul>
      </article>
      <article class="panel">
        <h3>Moments I Cherish</h3>
        <ul class="list">
          <li>The first time you looked at me like I was home.</li>
          <li>The quiet pauses where we do nothing and it feels perfect.</li>
          <li>The way you laugh with your whole soul.</li>
          <li>Every time you reach for my hand.</li>
        </ul>
      </article>
    </section>

    <section class="panel gift">
      <div>
        <p class="eyebrow">Special Delivery</p>
        <h2>Gift Card</h2>
        <p>
          Redeem anytime for <strong>unlimited kisses and rubs</strong>. No
          expiration. Unlimited refills. Always valid for Arianna.
        </p>
      </div>
      <div class="gift-card">
        <span class="gift-label">Balance</span>
        <span class="gift-amount">Unlimited</span>
        <span class="gift-detail">Kisses + Rubs</span>
      </div>
    </section>

    <section class="panel vow">
      <div>
        <h2>My Promise</h2>
        <p>
          I will keep choosing you, showing up with patience and joy, cheering for
          your dreams, and making room for all of your hopes. Today, tomorrow, and
          every little day after.
        </p>
      </div>
      <div class="vow-badge">Always + Forever</div>
    </section>

    <section class="panel finale">
      <h2>Today, Tomorrow, Always</h2>
      <p>
        Happy Valentine's Day, Arianna. Thank you for being my favorite person and
        my sweetest surprise. I love you more than words can hold.
      </p>
      <div class="signature">
        <span>All my love,</span>
        <strong>Your Valentine</strong>
      </div>
    </section>
  </div>
`
