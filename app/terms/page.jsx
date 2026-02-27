export const metadata = {
  title: 'Terms of Service — Hubix',
}

export default function Terms() {
  return (
    <div className="min-h-[100svh] bg-[#0b0d10] py-20">
      <div className="max-w-3xl mx-auto px-5 sm:px-6">
        <a href="/" className="inline-flex items-center gap-2 text-sm text-[#6b7084] hover:text-[#5865F2] transition-colors mb-8">
          ← Back to Home
        </a>

        <h1 className="text-3xl font-display font-bold text-[#eaecf2] mb-2">Terms of Service</h1>
        <p className="text-sm text-[#6b7084] mb-10">Last updated: February 27, 2026</p>

        <div className="space-y-8 text-[#c4c9d4] text-sm leading-relaxed">
          <section>
            <h2 className="text-lg font-semibold text-[#eaecf2] mb-3">1. Acceptance of Terms</h2>
            <p>By using Hubix (&quot;the Bot&quot;), you agree to these Terms of Service. If you do not agree, do not use the Bot. We reserve the right to update these terms at any time. Continued use after changes constitutes acceptance of the new terms.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#eaecf2] mb-3">2. Description of Service</h2>
            <p>Hubix is a Discord bot providing moderation, ticket management, giveaways, invite tracking, shop/order management, and other utility features. The Bot operates within Discord&apos;s platform and is subject to Discord&apos;s own Terms of Service.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#eaecf2] mb-3">3. User Eligibility</h2>
            <p>You must be at least 13 years old to use the Bot, in accordance with Discord&apos;s minimum age requirement. You must have the authority to add the Bot to any server you manage.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#eaecf2] mb-3">4. Subscription Plans</h2>
            <ul className="list-disc list-inside space-y-1.5 ml-1">
              <li>Hubix offers Free, Basic ($8/mo), Premium ($15/mo), and Business ($25/mo) plans.</li>
              <li>Paid plans are activated via license keys after payment confirmation.</li>
              <li>Subscriptions are non-transferable between servers unless on the Business plan.</li>
              <li>Features are limited based on your active plan as described on our pricing page.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#eaecf2] mb-3">5. Payments & Refunds</h2>
            <ul className="list-disc list-inside space-y-1.5 ml-1">
              <li>We accept PayPal and Litecoin (LTC) as payment methods.</li>
              <li>All payments are processed manually through our Discord server.</li>
              <li>Refunds may be issued within 7 days of purchase if the service has not been substantially used.</li>
              <li>Refund requests must be submitted via a ticket in our Discord server.</li>
              <li>Cryptocurrency payments are non-refundable due to the nature of blockchain transactions.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#eaecf2] mb-3">6. Subscription Expiration</h2>
            <p>When a paid subscription expires, your server will automatically be downgraded to the Free plan. No data is deleted upon expiration. If you renew your subscription, all previously configured settings and data will be restored.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#eaecf2] mb-3">7. Acceptable Use</h2>
            <p className="mb-2">You agree not to:</p>
            <ul className="list-disc list-inside space-y-1.5 ml-1">
              <li>Use the Bot for any illegal activities.</li>
              <li>Attempt to exploit, abuse, or find vulnerabilities in the Bot.</li>
              <li>Use the Bot to harass, spam, or harm other users.</li>
              <li>Resell or redistribute license keys without authorization.</li>
              <li>Reverse engineer, decompile, or modify the Bot.</li>
              <li>Use the Bot in violation of Discord&apos;s Terms of Service.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#eaecf2] mb-3">8. Service Availability</h2>
            <p>We strive for 99.9% uptime but do not guarantee uninterrupted service. The Bot may experience downtime for maintenance, updates, or unforeseen technical issues. We are not liable for any losses resulting from service interruptions.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#eaecf2] mb-3">9. Termination</h2>
            <p>We reserve the right to terminate or suspend access to the Bot at any time, with or without cause, including but not limited to violation of these terms. Upon termination, your right to use the Bot ceases immediately.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#eaecf2] mb-3">10. Limitation of Liability</h2>
            <p>Hubix is provided &quot;as is&quot; without warranties of any kind. We are not responsible for any damages, data loss, or issues arising from the use of the Bot. Our total liability shall not exceed the amount paid by you in the last 30 days.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#eaecf2] mb-3">11. Changes to Terms</h2>
            <p>We may modify these terms at any time. Significant changes will be announced through our Discord server. Your continued use of the Bot after modifications constitutes acceptance of the updated terms.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#eaecf2] mb-3">12. Contact</h2>
            <p>For questions about these terms, contact us through our <a href="https://discord.gg/UBqbzEXXcQ" target="_blank" rel="noopener noreferrer" className="text-[#5865F2] hover:underline">Discord server</a>.</p>
          </section>
        </div>
      </div>
    </div>
  )
}