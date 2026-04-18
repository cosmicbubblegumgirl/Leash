/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx}',
    './components/**/*.{js,jsx}'
  ],
  theme: {
    extend: {
      colors: {
        ink: '#07111f',
        night: '#0b1220',
        panel: '#0f1728',
        line: 'rgba(255,255,255,0.1)',
        brand: '#8b5cf6',
        cyan: '#22d3ee',
        rose: '#fb7185',
        mint: '#34d399',
        gold: '#fbbf24'
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(255,255,255,0.06), 0 20px 60px rgba(7,17,31,0.45)',
        card: '0 12px 50px rgba(5,10,20,0.35)'
      },
      backgroundImage: {
        grid: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.08) 1px, transparent 0)'
      },
      borderRadius: {
        xl2: '1.4rem'
      }
    }
  },
  plugins: []
}
