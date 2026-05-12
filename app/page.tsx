export default function Home() {
  const faqs = [
    {
      q: 'Which services does it monitor?',
      a: 'Any service with an API key expiration date — AWS, Stripe, Twilio, SendGrid, GitHub, and dozens more. You add keys manually or via our integrations.'
    },
    {
      q: 'How early will I get alerted?',
      a: 'You choose: 30, 14, 7, or 1 day before expiry. Alerts go out via email and/or webhook so your team is never caught off guard.'
    },
    {
      q: 'Is my API key data secure?',
      a: 'We only store metadata (name, expiry date, service). We never ask for or store the actual key values — your secrets stay secret.'
    }
  ]

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-xs text-[#58a6ff] uppercase tracking-widest">
          DevOps Tool
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Get alerts before API keys<br />
          <span className="text-[#58a6ff]">expire unexpectedly</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Monitor expiration dates across all your services, receive proactive email and webhook alerts, and never suffer a production outage from a forgotten key rotation.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-8 py-3 rounded-lg transition-colors text-base"
        >
          Start monitoring — $19/mo
        </a>
        <p className="mt-4 text-sm text-[#6e7681]">Cancel anytime. No credit card required to try.</p>

        {/* Feature pills */}
        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {['Email & webhook alerts', 'Multi-service dashboard', 'Expiry predictions', 'Team access', 'Audit log'].map((f) => (
            <span key={f} className="px-4 py-1.5 rounded-full bg-[#161b22] border border-[#30363d] text-sm text-[#c9d1d9]">
              {f}
            </span>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <div className="rounded-2xl border border-[#30363d] bg-[#161b22] p-8 text-center">
          <p className="text-sm text-[#58a6ff] font-semibold uppercase tracking-widest mb-2">Pro Plan</p>
          <p className="text-5xl font-bold text-white mb-1">$19</p>
          <p className="text-[#6e7681] text-sm mb-6">per month</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              'Unlimited API keys tracked',
              'Email + webhook alerts',
              'Configurable alert windows',
              'Usage pattern analytics',
              'Up to 5 team members',
              'Priority support'
            ].map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold py-3 rounded-lg transition-colors text-sm"
          >
            Get started now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-10">Frequently asked questions</h2>
        <div className="space-y-6">
          {faqs.map(({ q, a }) => (
            <div key={q} className="border border-[#30363d] rounded-xl p-6 bg-[#161b22]">
              <p className="font-semibold text-white mb-2">{q}</p>
              <p className="text-sm text-[#8b949e] leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-8 text-xs text-[#6e7681]">
        © {new Date().getFullYear()} API Key Expiry Monitor. All rights reserved.
      </footer>
    </main>
  )
}
