import './globals.css'

export const metadata = {
  title: 'Permit — AI Agent Governance',
  description: 'A premium landing page for governing what autonomous AI agents can do on your behalf.'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
