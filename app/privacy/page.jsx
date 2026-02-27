export const metadata = {
  title: 'Privacy Policy — Hubix',
}

export default function Privacy() {
  return (
    <div className="min-h-[100svh] bg-[#0b0d10] py-20">
      <div className="max-w-3xl mx-auto px-5 sm:px-6">
        <a href="/" className="inline-flex items-center gap-2 text-sm text-[#6b7084] hover:text-[#5865F2] transition-colors mb-8">
          ← Back to Home
        </a>

        <h1 className="text-3xl font-display font-bold text-[#eaecf2] mb-2">Privacy Policy</h1>
        <p className="text-sm text-[#6b7084] mb-10">Last updated: February 27, 2026</p>

        <div className="space-y-8 text-[#c4c9d4] text-sm leading-relaxed">
          <section>
            <h2 className="text-lg font-semibold text-[#eaecf2] mb-3">1. Introduction</h2>
            <p>This Privacy Policy explains how Hubix (&quot;the Bot&quot;, &quot;we&quot;, &quot;us&quot;) collects, uses, and protects your information when you use our Discord bot and related services.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#eaecf2] mb-3">2. Information We Collect</h2>
            <p className="mb-3">We collect only the minimum data necessary for bot functionality:</p>

            <h3 className="text-sm font-semibold text-[#eaecf2] mb-2">Automatically Collected</h3>
            <ul className="list-disc list-inside space-y-1.5 ml-1 mb-4">
              <li><strong>Server IDs</strong> — To store per-server settings and configurations.</li>
              <li><strong>User IDs</strong> — To track invites, tickets, orders, and moderation actions.</li>
              <li><strong>Channel IDs</strong> — To manage ticket channels, log channels, and order channels.</li>
              <li><strong>Message Content</strong> — Only processed in real-time for AutoMod filtering. Not stored permanently.</li>
              <li><strong>Invite Data</strong> — Invite codes and usage counts for invite tracking.</li>
            </ul>

            <h3 className="text-sm font-semibold text-[#eaecf2] mb-2">User-Provided</h3>
            <ul className="list-disc list-inside space-y-1.5 ml-1">
              <li><strong>Ticket Messages</strong> — Stored for transcript generation (Premium/Business plans).</li>
              <li><strong>Order Information</strong> — Product selections, payment methods, delivery notes.</li>
              <li><strong>Reviews</strong> — Star ratings and comment text.</li>
              <li><strong>Custom Settings</strong> — AutoMod rules, bad words, blocked links, welcome messages.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#eaecf2] mb-3">3. How We Use Your Information</h2>
            <ul className="list-disc list-inside space-y-1.5 ml-1">
              <li>To provide and maintain bot functionality.</li>
              <li>To manage subscriptions and license keys.</li>
              <li>To process orders and track customer profiles.</li>
              <li>To enforce server rules through AutoMod.</li>
              <li>To generate ticket transcripts.</li>
              <li>To track and display invite statistics.</li>
              <li>To log moderation actions and audit events.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#eaecf2] mb-3">4. Data Storage & Security</h2>
            <ul className="list-disc list-inside space-y-1.5 ml-1">
              <li>All data is stored locally in an SQLite database on our secured server.</li>
              <li>We do not use third-party analytics or tracking services.</li>
              <li>Data is not shared with, sold to, or disclosed to any third parties.</li>
              <li>We implement reasonable security measures to protect your data.</li>
              <li>Access to the database is restricted to bot administrators only.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#eaecf2] mb-3">5. Data Retention</h2>
            <ul className="list-disc list-inside space-y-1.5 ml-1">
              <li><strong>Server Settings</strong> — Retained until the bot is removed from the server.</li>
              <li><strong>Ticket Data</strong> — Retained until manually deleted by server administrators.</li>
              <li><strong>Order Data</strong> — Retained indefinitely for record-keeping.</li>
              <li><strong>Invite Data</strong> — Retained until reset by server administrators.</li>
              <li><strong>AutoMod Warns</strong> — Automatically expire based on server configuration (default 30 days).</li>
              <li><strong>Audit Logs</strong> — Retained for up to 90 days.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#eaecf2] mb-3">6. Your Rights</h2>
            <p className="mb-2">You have the right to:</p>
            <ul className="list-disc list-inside space-y-1.5 ml-1">
              <li><strong>Access</strong> — Request a copy of your stored data.</li>
              <li><strong>Deletion</strong> — Request complete deletion of all your data.</li>
              <li><strong>Correction</strong> — Request correction of inaccurate data.</li>
              <li><strong>Portability</strong> — Request your data in a machine-readable format.</li>
            </ul>
            <p className="mt-3">To exercise these rights, open a ticket in our <a href="https://discord.gg/UBqbzEXXcQ" target="_blank" rel="noopener noreferrer" className="text-[#5865F2] hover:underline">Discord server</a>.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#eaecf2] mb-3">7. Children&apos;s Privacy</h2>
            <p>Our services are not directed to individuals under 13 years of age. We do not knowingly collect personal information from children under 13. If we become aware that a child under 13 has provided us with personal information, we will take steps to delete such information.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#eaecf2] mb-3">8. Third-Party Services</h2>
            <p>Hubix operates within Discord&apos;s platform and is subject to <a href="https://discord.com/privacy" target="_blank" rel="noopener noreferrer" className="text-[#5865F2] hover:underline">Discord&apos;s Privacy Policy</a>. We do not integrate with any other third-party services that collect user data.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#eaecf2] mb-3">9. Changes to This Policy</h2>
            <p>We may update this Privacy Policy from time to time. Changes will be announced through our Discord server. The &quot;Last updated&quot; date at the top of this policy indicates when it was last revised.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#eaecf2] mb-3">10. Contact Us</h2>
            <p>If you have any questions about this Privacy Policy or our data practices, please contact us through our <a href="https://discord.gg/UBqbzEXXcQ" target="_blank" rel="noopener noreferrer" className="text-[#5865F2] hover:underline">Discord server</a>.</p>
          </section>
        </div>
      </div>
    </div>
  )
}