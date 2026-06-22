import { createFileRoute } from '@tanstack/react-router'
import { useState, useEffect } from 'react'

export const Route = createFileRoute('/')({
  component: InayaEnterprises,
})

const RATES = {
  USD_BDT: { buy: 109.50, sell: 110.20 },
  USD_INR: { buy: 83.75, sell: 84.30 },
  INR_BDT: { buy: 1.29, sell: 1.31 },
  BDT_USD: { buy: 0.0091, sell: 0.0092 },
  INR_USD: { buy: 0.0119, sell: 0.0120 },
  BDT_INR: { buy: 0.76, sell: 0.78 },
}

const CURRENCIES = ['USD', 'BDT', 'INR'] as const
type Currency = typeof CURRENCIES[number]

function getRate(from: Currency, to: Currency): number {
  if (from === to) return 1
  const key = `${from}_${to}` as keyof typeof RATES
  return RATES[key]?.sell ?? 1
}

function InayaEnterprises() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [amount, setAmount] = useState('1000')
  const [fromCurrency, setFromCurrency] = useState<Currency>('USD')
  const [toCurrency, setToCurrency] = useState<Currency>('BDT')
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', service: '', message: '' })
  const [formSent, setFormSent] = useState(false)

  const rate = getRate(fromCurrency, toCurrency)
  const converted = (parseFloat(amount || '0') * rate).toFixed(2)

  function swapCurrencies() {
    setFromCurrency(toCurrency)
    setToCurrency(fromCurrency)
  }

  function handleFormChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  function handleFormSubmit(e: React.FormEvent) {
    e.preventDefault()
    setFormSent(true)
  }

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      const target = e.target as HTMLElement
      if (!target.closest('nav')) setMenuOpen(false)
    }
    document.addEventListener('click', handleClick)
    return () => document.removeEventListener('click', handleClick)
  }, [])

  return (
    <div style={{ fontFamily: "'Inter', sans-serif", background: '#f0f4f8', color: '#0f172a' }}>

      {/* ===== NAVBAR ===== */}
      <nav style={{
        position: 'fixed', top: 0, width: '100%', zIndex: 1000,
        background: 'rgba(255,255,255,0.97)', backdropFilter: 'blur(12px)',
        borderBottom: '1px solid #e2e8f0', boxShadow: '0 2px 12px rgba(0,0,0,0.04)',
      }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '14px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: '1.35rem', fontWeight: 900, color: '#1e40af' }}>
            <i className="fas fa-exchange-alt" style={{ fontSize: '1.7rem', color: '#2563eb' }}></i>
            INAYA ENTERPRISES
          </div>

          {/* Desktop Nav */}
          <ul style={{ display: 'flex', gap: 28, listStyle: 'none', alignItems: 'center', margin: 0 }} className="desktop-nav">
            {['Home', 'Rates', 'Converter', 'Services', 'About', 'Contact'].map(item => (
              <li key={item}>
                <a href={`#${item.toLowerCase()}`} style={{ fontWeight: 500, color: '#475569', fontSize: '0.95rem', transition: '0.2s' }}
                  onMouseEnter={e => (e.target as HTMLElement).style.color = '#2563eb'}
                  onMouseLeave={e => (e.target as HTMLElement).style.color = '#475569'}>
                  {item}
                </a>
              </li>
            ))}
            <li>
              <a href="#contact" style={{
                padding: '10px 24px', fontSize: '0.9rem',
                background: 'linear-gradient(135deg, #2563eb, #1e40af)',
                color: '#fff', borderRadius: 50, fontWeight: 600, display: 'inline-block', transition: '0.3s',
              }}
                onMouseEnter={e => { (e.target as HTMLElement).style.transform = 'translateY(-2px)'; (e.target as HTMLElement).style.boxShadow = '0 6px 20px rgba(37,99,235,0.35)' }}
                onMouseLeave={e => { (e.target as HTMLElement).style.transform = ''; (e.target as HTMLElement).style.boxShadow = '' }}>
                Get Started
              </a>
            </li>
          </ul>

          {/* Hamburger */}
          <button onClick={() => setMenuOpen(!menuOpen)} style={{ display: 'none', background: 'none', border: 'none', fontSize: '1.6rem', cursor: 'pointer', color: '#0f172a' }} className="hamburger-btn">
            <i className={menuOpen ? 'fas fa-times' : 'fas fa-bars'}></i>
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div style={{ background: '#fff', borderTop: '1px solid #e2e8f0', padding: '16px 24px', display: 'flex', flexDirection: 'column', gap: 16 }}>
            {['Home', 'Rates', 'Converter', 'Services', 'About', 'Contact'].map(item => (
              <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMenuOpen(false)}
                style={{ fontWeight: 500, color: '#475569', fontSize: '1rem' }}>
                {item}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* ===== HERO ===== */}
      <section id="home" style={{
        marginTop: 68,
        background: 'linear-gradient(135deg, #0f172a 0%, #1e3a8a 50%, #0f172a 100%)',
        color: '#fff', padding: '100px 0 80px', position: 'relative', overflow: 'hidden',
      }}>
        {/* decorative blobs */}
        <div style={{ position: 'absolute', top: -60, right: -60, width: 400, height: 400, borderRadius: '50%', background: 'rgba(37,99,235,0.15)', filter: 'blur(80px)' }}></div>
        <div style={{ position: 'absolute', bottom: -80, left: -80, width: 500, height: 500, borderRadius: '50%', background: 'rgba(96,165,250,0.08)', filter: 'blur(100px)' }}></div>

        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'center' }} className="hero-grid">
          <div>
            <div style={{ fontSize: '1.6rem', fontWeight: 800, color: '#93c5fd', marginBottom: 12, letterSpacing: 1 }}>INAYA ENTERPRISES</div>
            <h1 style={{ fontSize: '3rem', fontWeight: 900, lineHeight: 1.15, marginBottom: 16 }}>
              Your Trusted <span style={{ color: '#60a5fa' }}>Currency Exchange</span> Partner
            </h1>
            <p style={{ fontSize: '1.05rem', color: '#cbd5e1', marginBottom: 28, maxWidth: 480 }}>
              Fast, secure, and transparent currency exchange for USD, BDT, and INR. Best market rates guaranteed with zero hidden fees.
            </p>
            <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
              <a href="#converter" style={{
                padding: '14px 34px', borderRadius: 50, fontWeight: 600, fontSize: '1rem',
                background: 'linear-gradient(135deg, #2563eb, #1d4ed8)', color: '#fff', display: 'inline-block', transition: '0.3s',
              }}>
                <i className="fas fa-calculator" style={{ marginRight: 8 }}></i>Convert Now
              </a>
              <a href="#rates" style={{
                padding: '14px 34px', borderRadius: 50, fontWeight: 600, fontSize: '1rem',
                background: 'transparent', color: '#fff', border: '2px solid rgba(255,255,255,0.3)', display: 'inline-block', transition: '0.3s',
              }}>
                <i className="fas fa-chart-line" style={{ marginRight: 8 }}></i>Live Rates
              </a>
            </div>
          </div>

          {/* Rate Cards */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }} className="hero-rates">
            {[
              { flag: '🇺🇸🇧🇩', label: 'USD → BDT', buy: RATES.USD_BDT.buy, sell: RATES.USD_BDT.sell },
              { flag: '🇺🇸🇮🇳', label: 'USD → INR', buy: RATES.USD_INR.buy, sell: RATES.USD_INR.sell },
              { flag: '🇮🇳🇧🇩', label: 'INR → BDT', buy: RATES.INR_BDT.buy, sell: RATES.INR_BDT.sell },
              { flag: '🇧🇩🇺🇸', label: 'BDT → USD', buy: RATES.BDT_USD.buy, sell: RATES.BDT_USD.sell },
            ].map(card => (
              <div key={card.label} style={{
                background: 'rgba(255,255,255,0.07)', backdropFilter: 'blur(14px)',
                border: '1px solid rgba(255,255,255,0.12)', borderRadius: 24, padding: '26px 20px',
                textAlign: 'center', transition: '0.3s',
              }}>
                <div style={{ fontSize: '1.8rem', marginBottom: 8 }}>{card.flag}</div>
                <div style={{ fontSize: '0.78rem', fontWeight: 600, color: '#93c5fd', textTransform: 'uppercase', letterSpacing: 2, marginBottom: 8 }}>{card.label}</div>
                <div style={{ fontSize: '2.2rem', fontWeight: 900, color: '#60a5fa', marginBottom: 2 }}>{card.sell.toFixed(2)}</div>
                <div style={{ display: 'flex', justifyContent: 'center', gap: 16, marginTop: 12, fontSize: '0.8rem', color: '#94a3b8' }}>
                  <span>Buy {card.buy.toFixed(2)}</span>
                  <span>|</span>
                  <span>Sell {card.sell.toFixed(2)}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TRUST BADGES ===== */}
      <div style={{ background: '#fff', borderBottom: '1px solid #e2e8f0', padding: '20px 0' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px', display: 'flex', justifyContent: 'center', gap: 48, flexWrap: 'wrap', alignItems: 'center' }}>
          {[
            { icon: 'fa-shield-alt', text: 'Secure & Licensed' },
            { icon: 'fa-bolt', text: 'Instant Transfer' },
            { icon: 'fa-hand-holding-usd', text: 'Best Rates' },
            { icon: 'fa-headset', text: '24/7 Support' },
          ].map(b => (
            <div key={b.text} style={{ display: 'flex', alignItems: 'center', gap: 10, color: '#475569' }}>
              <i className={`fas ${b.icon}`} style={{ color: '#2563eb', fontSize: '1.2rem' }}></i>
              <span style={{ fontWeight: 600, fontSize: '0.95rem' }}>{b.text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ===== LIVE RATES TABLE ===== */}
      <section id="rates" style={{ padding: '80px 0', background: '#fff' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
          <h2 style={{ fontSize: '2.2rem', fontWeight: 800, textAlign: 'center', marginBottom: 8 }}>Live Exchange Rates</h2>
          <p style={{ textAlign: 'center', color: '#64748b', marginBottom: 48, fontSize: '1.05rem' }}>
            Updated daily — competitive rates for USD, BDT &amp; INR
          </p>
          <div style={{ background: '#f8fafc', borderRadius: 20, overflow: 'hidden', boxShadow: '0 4px 24px rgba(0,0,0,0.04)', border: '1px solid #e2e8f0' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead style={{ background: 'linear-gradient(135deg, #1e3a8a, #2563eb)', color: '#fff' }}>
                <tr>
                  {['Currency Pair', 'Buy Rate', 'Sell Rate', 'Change', 'Type'].map(h => (
                    <th key={h} style={{ padding: '18px 20px', textAlign: 'left', fontWeight: 600, fontSize: '0.85rem', letterSpacing: 0.5 }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  { pair: '🇺🇸 USD → 🇧🇩 BDT', buy: RATES.USD_BDT.buy, sell: RATES.USD_BDT.sell, change: '+0.15', positive: true, type: 'International' },
                  { pair: '🇺🇸 USD → 🇮🇳 INR', buy: RATES.USD_INR.buy, sell: RATES.USD_INR.sell, change: '+0.08', positive: true, type: 'International' },
                  { pair: '🇮🇳 INR → 🇧🇩 BDT', buy: RATES.INR_BDT.buy, sell: RATES.INR_BDT.sell, change: '-0.01', positive: false, type: 'Regional' },
                  { pair: '🇧🇩 BDT → 🇺🇸 USD', buy: RATES.BDT_USD.buy, sell: RATES.BDT_USD.sell, change: '+0.0001', positive: true, type: 'International' },
                  { pair: '🇮🇳 INR → 🇺🇸 USD', buy: RATES.INR_USD.buy, sell: RATES.INR_USD.sell, change: '-0.0002', positive: false, type: 'International' },
                  { pair: '🇧🇩 BDT → 🇮🇳 INR', buy: RATES.BDT_INR.buy, sell: RATES.BDT_INR.sell, change: '+0.01', positive: true, type: 'Regional' },
                ].map((row, i) => (
                  <tr key={row.pair} style={{ borderBottom: '1px solid #e2e8f0', background: i % 2 === 0 ? '#fff' : '#f8fafc' }}>
                    <td style={{ padding: '16px 20px', fontWeight: 600, fontSize: '0.95rem' }}>{row.pair}</td>
                    <td style={{ padding: '16px 20px' }}>
                      <span style={{ background: '#dcfce7', color: '#166534', padding: '4px 14px', borderRadius: 50, fontSize: '0.75rem', fontWeight: 600 }}>{row.buy}</span>
                    </td>
                    <td style={{ padding: '16px 20px' }}>
                      <span style={{ background: '#fee2e2', color: '#991b1b', padding: '4px 14px', borderRadius: 50, fontSize: '0.75rem', fontWeight: 600 }}>{row.sell}</span>
                    </td>
                    <td style={{ padding: '16px 20px', color: row.positive ? '#16a34a' : '#dc2626', fontWeight: 600 }}>
                      <i className={`fas fa-arrow-${row.positive ? 'up' : 'down'}`} style={{ marginRight: 4 }}></i>
                      {row.change}
                    </td>
                    <td style={{ padding: '16px 20px', color: '#64748b', fontSize: '0.9rem' }}>{row.type}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div style={{ textAlign: 'center', padding: 14, fontSize: '0.85rem', color: '#64748b', background: '#fff', borderTop: '1px solid #e2e8f0' }}>
              <i className="fas fa-clock" style={{ marginRight: 6, color: '#2563eb' }}></i>
              Rates last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })} — For large transactions, contact us directly for a custom rate.
            </div>
          </div>
        </div>
      </section>

      {/* ===== CONVERTER ===== */}
      <section id="converter" style={{ padding: '80px 0', background: '#f0f4f8' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
          <h2 style={{ fontSize: '2.2rem', fontWeight: 800, textAlign: 'center', marginBottom: 8 }}>Currency Converter</h2>
          <p style={{ textAlign: 'center', color: '#64748b', marginBottom: 48, fontSize: '1.05rem' }}>Calculate your exchange instantly using our live rates</p>

          <div style={{ maxWidth: 620, margin: '0 auto', background: '#fff', padding: '40px 36px', borderRadius: 24, boxShadow: '0 8px 32px rgba(0,0,0,0.06)', border: '1px solid #e2e8f0' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr auto 1fr', gap: 12, alignItems: 'end', marginBottom: 20 }} className="conv-row">
              <div>
                <label style={{ display: 'block', fontWeight: 600, marginBottom: 6, color: '#334155', fontSize: '0.85rem' }}>Amount</label>
                <input
                  type="number" min="0" value={amount} onChange={e => setAmount(e.target.value)}
                  style={{ width: '100%', padding: '14px 16px', border: '1px solid #d1d5db', borderRadius: 12, fontFamily: 'inherit', fontSize: '1rem', background: '#f9fafb', outline: 'none' }}
                />
              </div>
              <button onClick={swapCurrencies} style={{
                width: 48, height: 48, background: 'linear-gradient(135deg, #2563eb, #1d4ed8)',
                color: '#fff', border: 'none', borderRadius: 12, cursor: 'pointer', fontSize: '1.2rem',
                display: 'flex', alignItems: 'center', justifyContent: 'center', transition: '0.3s',
              }}>
                <i className="fas fa-exchange-alt"></i>
              </button>
              <div>
                <label style={{ display: 'block', fontWeight: 600, marginBottom: 6, color: '#334155', fontSize: '0.85rem' }}>To</label>
                <select value={toCurrency} onChange={e => setToCurrency(e.target.value as Currency)}
                  style={{ width: '100%', padding: '14px 16px', border: '1px solid #d1d5db', borderRadius: 12, fontFamily: 'inherit', fontSize: '1rem', background: '#f9fafb', outline: 'none' }}>
                  {CURRENCIES.filter(c => c !== fromCurrency).map(c => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
              </div>
            </div>

            <div style={{ marginBottom: 20 }}>
              <label style={{ display: 'block', fontWeight: 600, marginBottom: 6, color: '#334155', fontSize: '0.85rem' }}>From</label>
              <select value={fromCurrency} onChange={e => setFromCurrency(e.target.value as Currency)}
                style={{ width: '100%', padding: '14px 16px', border: '1px solid #d1d5db', borderRadius: 12, fontFamily: 'inherit', fontSize: '1rem', background: '#f9fafb', outline: 'none' }}>
                {CURRENCIES.map(c => (
                  <option key={c} value={c}>{c} — {c === 'USD' ? 'US Dollar' : c === 'BDT' ? 'Bangladeshi Taka' : 'Indian Rupee'}</option>
                ))}
              </select>
            </div>

            <div style={{ background: '#eff6ff', padding: 20, borderRadius: 16, textAlign: 'center', border: '1px solid #bfdbfe' }}>
              <p style={{ fontSize: '0.9rem', color: '#64748b', marginBottom: 4 }}>Converted Amount</p>
              <div style={{ fontSize: '2rem', fontWeight: 800, color: '#1e40af' }}>
                {parseFloat(converted).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} {toCurrency}
              </div>
              <div style={{ fontSize: '0.8rem', color: '#6b7280', marginTop: 4 }}>
                Rate: 1 {fromCurrency} = {rate} {toCurrency} (sell rate)
              </div>
            </div>

            <p style={{ textAlign: 'center', fontSize: '0.8rem', color: '#94a3b8', marginTop: 16 }}>
              <i className="fas fa-info-circle" style={{ marginRight: 4 }}></i>
              Rates shown are indicative. Contact us for exact rates on large amounts.
            </p>
          </div>
        </div>
      </section>

      {/* ===== SERVICES ===== */}
      <section id="services" style={{ padding: '80px 0', background: '#fff' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
          <h2 style={{ fontSize: '2.2rem', fontWeight: 800, textAlign: 'center', marginBottom: 8 }}>Our Services</h2>
          <p style={{ textAlign: 'center', color: '#64748b', marginBottom: 48, fontSize: '1.05rem' }}>
            Comprehensive currency solutions tailored for individuals and businesses
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 24 }}>
            {[
              { icon: 'fa-money-bill-wave', title: 'Cash Exchange', desc: 'Physical currency exchange with the best market rates for USD, BDT, and INR.' },
              { icon: 'fa-paper-plane', title: 'Remittance Transfer', desc: 'Send money abroad quickly and securely to family or business partners.' },
              { icon: 'fa-university', title: 'Wire Transfer', desc: 'International bank-to-bank transfers with competitive exchange rates.' },
              { icon: 'fa-building', title: 'Business FX', desc: 'Specialized foreign exchange solutions for importers, exporters, and SMEs.' },
              { icon: 'fa-mobile-alt', title: 'Mobile Banking', desc: 'Seamless digital transfers via bKash, Nagad, Rocket, and UPI platforms.' },
              { icon: 'fa-headset', title: 'Expert Consultation', desc: 'Get personalized advice to maximize your currency exchange savings.' },
            ].map(s => (
              <div key={s.title} style={{
                background: '#f8fafc', padding: '32px 24px', borderRadius: 20,
                textAlign: 'center', border: '1px solid #e2e8f0', transition: '0.3s', cursor: 'default',
              }}
                onMouseEnter={e => { const el = e.currentTarget; el.style.transform = 'translateY(-6px)'; el.style.boxShadow = '0 12px 40px rgba(37,99,235,0.08)'; el.style.borderColor = '#2563eb' }}
                onMouseLeave={e => { const el = e.currentTarget; el.style.transform = ''; el.style.boxShadow = ''; el.style.borderColor = '#e2e8f0' }}>
                <i className={`fas ${s.icon}`} style={{ fontSize: '2.6rem', color: '#2563eb', marginBottom: 16 }}></i>
                <h4 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: 8 }}>{s.title}</h4>
                <p style={{ color: '#64748b', fontSize: '0.9rem' }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== ABOUT ===== */}
      <section id="about" style={{ padding: '80px 0', background: '#f0f4f8' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'center' }} className="about-grid">
          <div>
            <div style={{ fontSize: '0.85rem', fontWeight: 600, color: '#2563eb', textTransform: 'uppercase', letterSpacing: 2, marginBottom: 12 }}>About Us</div>
            <h2 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: 16 }}>A Decade of Trust in Currency Exchange</h2>
            <p style={{ color: '#475569', marginBottom: 16 }}>
              INAYA ENTERPRISES has been serving individuals, families, and businesses with reliable foreign exchange services since 2014. Based in Dhaka, Bangladesh, we specialize in USD, BDT, and INR transactions with a commitment to transparency and speed.
            </p>
            <p style={{ color: '#475569', marginBottom: 24 }}>
              Our licensed and regulated operations ensure every transaction is fully compliant with Bangladesh Bank regulations and international best practices.
            </p>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {[
                'Licensed by Bangladesh Bank (Money Changer License)',
                'Zero hidden fees — transparent pricing always',
                'Same-day processing for all transactions',
                'End-to-end encrypted and secure transfers',
                'Dedicated relationship managers available',
              ].map(item => (
                <li key={item} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '8px 0', fontWeight: 500 }}>
                  <i className="fas fa-check-circle" style={{ color: '#2563eb', fontSize: '1.1rem', flexShrink: 0 }}></i>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
            {[
              { num: '10+', label: 'Years in Business' },
              { num: '50K+', label: 'Happy Customers' },
              { num: '৳2B+', label: 'Volume Processed' },
              { num: '99.8%', label: 'Satisfaction Rate' },
            ].map(stat => (
              <div key={stat.label} style={{ background: '#fff', padding: 28, borderRadius: 16, textAlign: 'center', border: '1px solid #e2e8f0' }}>
                <div style={{ fontSize: '2.2rem', fontWeight: 800, color: '#2563eb' }}>{stat.num}</div>
                <p style={{ color: '#64748b', fontSize: '0.9rem', marginTop: 4 }}>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section style={{ padding: '80px 0', background: '#fff' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
          <h2 style={{ fontSize: '2.2rem', fontWeight: 800, textAlign: 'center', marginBottom: 8 }}>What Our Clients Say</h2>
          <p style={{ textAlign: 'center', color: '#64748b', marginBottom: 48, fontSize: '1.05rem' }}>Trusted by thousands across Bangladesh and beyond</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
            {[
              { name: 'Rafiq Ahmed', role: 'Importer, Dhaka', text: 'INAYA ENTERPRISES has been our go-to for USD/BDT exchange for 5 years. The rates are always competitive and the service is incredibly fast.', stars: 5 },
              { name: 'Priya Sharma', role: 'NRI, Kolkata', text: 'Sending INR to BDT has never been easier. Transparent rates and the money arrives the same day. Highly recommend!', stars: 5 },
              { name: 'John Williams', role: 'Expat, Dhaka', text: 'Best USD rates I\'ve found in Dhaka. The team is professional and the process is completely hassle-free. Five stars!', stars: 5 },
            ].map(t => (
              <div key={t.name} style={{ background: '#f8fafc', padding: '28px 24px', borderRadius: 20, border: '1px solid #e2e8f0' }}>
                <div style={{ color: '#f59e0b', marginBottom: 12 }}>
                  {'★'.repeat(t.stars)}
                </div>
                <p style={{ color: '#475569', marginBottom: 16, lineHeight: 1.7, fontStyle: 'italic' }}>"{t.text}"</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <div style={{ width: 44, height: 44, borderRadius: '50%', background: 'linear-gradient(135deg, #2563eb, #1e40af)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 700, fontSize: '1.2rem' }}>
                    {t.name[0]}
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: '0.95rem' }}>{t.name}</div>
                    <div style={{ color: '#64748b', fontSize: '0.8rem' }}>{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CONTACT ===== */}
      <section id="contact" style={{ padding: '80px 0', background: '#f0f4f8' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
          <h2 style={{ fontSize: '2.2rem', fontWeight: 800, textAlign: 'center', marginBottom: 8 }}>Contact Us</h2>
          <p style={{ textAlign: 'center', color: '#64748b', marginBottom: 48, fontSize: '1.05rem' }}>
            We're here to help — reach out for rates, inquiries, or custom solutions
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'start' }} className="contact-grid">
            <div>
              <h3 style={{ fontSize: '1.6rem', fontWeight: 700, marginBottom: 12 }}>Get in Touch</h3>
              <p style={{ color: '#475569', marginBottom: 28 }}>Whether you need a quick exchange or a long-term business solution, our team is ready to assist you 6 days a week.</p>
              {[
                { icon: 'fa-map-marker-alt', title: 'Office Address', value: 'Motijheel C/A, Dhaka-1000, Bangladesh' },
                { icon: 'fa-phone-alt', title: 'Phone / WhatsApp', value: '+880 1700-000000' },
                { icon: 'fa-envelope', title: 'Email', value: 'info@inayaenterprises.com' },
                { icon: 'fa-clock', title: 'Business Hours', value: 'Sat–Thu: 9:00 AM – 6:00 PM' },
              ].map(item => (
                <div key={item.title} style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 20 }}>
                  <div style={{ width: 48, height: 48, background: '#2563eb', color: '#fff', borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem', flexShrink: 0 }}>
                    <i className={`fas ${item.icon}`}></i>
                  </div>
                  <div>
                    <div style={{ fontWeight: 600, marginBottom: 2 }}>{item.title}</div>
                    <span style={{ color: '#64748b', fontSize: '0.9rem' }}>{item.value}</span>
                  </div>
                </div>
              ))}
              <div style={{ marginTop: 20 }}>
                <div style={{ fontWeight: 600, marginBottom: 12 }}>Follow Us</div>
                <div style={{ display: 'flex', gap: 12 }}>
                  {[
                    { icon: 'fa-facebook-f', color: '#1877f2' },
                    { icon: 'fa-whatsapp', color: '#25d366' },
                    { icon: 'fa-telegram-plane', color: '#0088cc' },
                    { icon: 'fa-instagram', color: '#e1306c' },
                  ].map(s => (
                    <a key={s.icon} href="#" style={{
                      width: 40, height: 40, borderRadius: '50%', background: s.color,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      color: '#fff', fontSize: '1rem', transition: '0.2s',
                    }}>
                      <i className={`fab ${s.icon}`}></i>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div style={{ background: '#fff', padding: 32, borderRadius: 20, border: '1px solid #e2e8f0', boxShadow: '0 4px 16px rgba(0,0,0,0.04)' }}>
              {formSent ? (
                <div style={{ textAlign: 'center', padding: '40px 20px' }}>
                  <i className="fas fa-check-circle" style={{ fontSize: '3rem', color: '#16a34a', marginBottom: 16 }}></i>
                  <h4 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: 8 }}>Message Sent!</h4>
                  <p style={{ color: '#64748b' }}>Thank you for reaching out. We'll get back to you within 24 hours.</p>
                  <button onClick={() => setFormSent(false)} style={{ marginTop: 20, padding: '10px 24px', background: '#2563eb', color: '#fff', border: 'none', borderRadius: 10, cursor: 'pointer', fontWeight: 600 }}>
                    Send Another
                  </button>
                </div>
              ) : (
                <>
                  <h4 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: 20 }}>Send Us a Message</h4>
                  <form onSubmit={handleFormSubmit}>
                    {[
                      { name: 'name', placeholder: 'Your Full Name', type: 'text' },
                      { name: 'email', placeholder: 'Email Address', type: 'email' },
                      { name: 'phone', placeholder: 'Phone / WhatsApp Number', type: 'tel' },
                    ].map(f => (
                      <div key={f.name} style={{ marginBottom: 16 }}>
                        <input
                          type={f.type} name={f.name} placeholder={f.placeholder} required
                          value={formData[f.name as keyof typeof formData]} onChange={handleFormChange}
                          style={{ width: '100%', padding: '14px 18px', border: '1px solid #d1d5db', borderRadius: 12, fontFamily: 'inherit', fontSize: '0.95rem', background: '#f9fafb', outline: 'none', boxSizing: 'border-box' }}
                        />
                      </div>
                    ))}
                    <div style={{ marginBottom: 16 }}>
                      <select name="service" required value={formData.service} onChange={handleFormChange}
                        style={{ width: '100%', padding: '14px 18px', border: '1px solid #d1d5db', borderRadius: 12, fontFamily: 'inherit', fontSize: '0.95rem', background: '#f9fafb', outline: 'none', color: formData.service ? '#0f172a' : '#9ca3af' }}>
                        <option value="" disabled>Select Service</option>
                        <option>Cash Exchange</option>
                        <option>Remittance Transfer</option>
                        <option>Wire Transfer</option>
                        <option>Business FX</option>
                        <option>Mobile Banking</option>
                        <option>Expert Consultation</option>
                      </select>
                    </div>
                    <div style={{ marginBottom: 20 }}>
                      <textarea name="message" placeholder="Your message or inquiry..." rows={4} required
                        value={formData.message} onChange={handleFormChange}
                        style={{ width: '100%', padding: '14px 18px', border: '1px solid #d1d5db', borderRadius: 12, fontFamily: 'inherit', fontSize: '0.95rem', background: '#f9fafb', outline: 'none', resize: 'vertical', boxSizing: 'border-box' }}>
                      </textarea>
                    </div>
                    <button type="submit" style={{
                      width: '100%', padding: '14px', background: 'linear-gradient(135deg, #2563eb, #1d4ed8)',
                      color: '#fff', border: 'none', borderRadius: 12, fontSize: '1rem', fontWeight: 600,
                      cursor: 'pointer', transition: '0.3s',
                    }}>
                      <i className="fas fa-paper-plane" style={{ marginRight: 8 }}></i>Send Message
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer style={{ background: '#0f172a', color: '#cbd5e1', padding: '60px 0 28px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 40, marginBottom: 40 }}>
          <div>
            <div style={{ fontSize: '1.3rem', fontWeight: 800, color: '#60a5fa', marginBottom: 12 }}>
              <i className="fas fa-exchange-alt" style={{ marginRight: 8 }}></i>INAYA ENTERPRISES
            </div>
            <p style={{ color: '#94a3b8', fontSize: '0.9rem', lineHeight: 1.7, marginBottom: 16 }}>
              Your trusted partner for USD, BDT &amp; INR exchange. Licensed, transparent, and fast.
            </p>
            <div style={{ display: 'flex', gap: 12 }}>
              {['fa-facebook-f', 'fa-whatsapp', 'fa-telegram-plane', 'fa-instagram'].map(icon => (
                <a key={icon} href="#" style={{ width: 38, height: 38, borderRadius: '50%', background: 'rgba(255,255,255,0.06)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#94a3b8', transition: '0.2s' }}>
                  <i className={`fab ${icon}`}></i>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 style={{ color: '#fff', fontWeight: 700, marginBottom: 16 }}>Quick Links</h4>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {['Live Rates', 'Currency Converter', 'Our Services', 'About Us', 'Contact'].map(link => (
                <li key={link} style={{ marginBottom: 10 }}>
                  <a href={`#${link.toLowerCase().replace(/ /g, '')}`} style={{ color: '#94a3b8', transition: '0.2s', fontSize: '0.9rem' }}>
                    <i className="fas fa-chevron-right" style={{ marginRight: 6, fontSize: '0.7rem' }}></i>{link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 style={{ color: '#fff', fontWeight: 700, marginBottom: 16 }}>Services</h4>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {['Cash Exchange', 'Remittance Transfer', 'Wire Transfer', 'Business FX', 'Mobile Banking'].map(s => (
                <li key={s} style={{ marginBottom: 10 }}>
                  <span style={{ color: '#94a3b8', fontSize: '0.9rem' }}>
                    <i className="fas fa-chevron-right" style={{ marginRight: 6, fontSize: '0.7rem' }}></i>{s}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 style={{ color: '#fff', fontWeight: 700, marginBottom: 16 }}>Contact Info</h4>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {[
                { icon: 'fa-map-marker-alt', text: 'Motijheel C/A, Dhaka-1000' },
                { icon: 'fa-phone', text: '+880 1700-000000' },
                { icon: 'fa-envelope', text: 'info@inayaenterprises.com' },
                { icon: 'fa-clock', text: 'Sat–Thu: 9 AM – 6 PM' },
              ].map(item => (
                <li key={item.text} style={{ marginBottom: 12, display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                  <i className={`fas ${item.icon}`} style={{ color: '#60a5fa', marginTop: 3, flexShrink: 0 }}></i>
                  <span style={{ color: '#94a3b8', fontSize: '0.9rem' }}>{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '20px 24px 0', borderTop: '1px solid rgba(255,255,255,0.08)', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }}>
          <p style={{ color: '#64748b', fontSize: '0.85rem' }}>
            © {new Date().getFullYear()} INAYA ENTERPRISES. All rights reserved. Licensed Money Changer — Bangladesh Bank.
          </p>
          <div style={{ display: 'flex', gap: 20 }}>
            {['Privacy Policy', 'Terms of Service', 'Compliance'].map(link => (
              <a key={link} href="#" style={{ color: '#64748b', fontSize: '0.85rem', transition: '0.2s' }}>{link}</a>
            ))}
          </div>
        </div>
      </footer>

      {/* Responsive styles injected */}
      <style>{`
        @media (max-width: 768px) {
          .hero-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          .hero-rates { grid-template-columns: 1fr 1fr !important; }
          .about-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
          .contact-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
          .conv-row { grid-template-columns: 1fr !important; }
          .desktop-nav { display: none !important; }
          .hamburger-btn { display: block !important; }
          h1 { font-size: 2rem !important; }
        }
        @media (max-width: 480px) {
          .hero-rates { grid-template-columns: 1fr !important; }
        }
        table { overflow-x: auto; display: block; }
        @media (min-width: 769px) {
          table { display: table; }
        }
      `}</style>
    </div>
  )
}
