export default function SectionIntro({ eyebrow, title, body, align = 'left' }) {
  return (
    <div className={align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-2xl'}>
      <span className="soft-label">{eyebrow}</span>
      <h2 className="mt-5 text-3xl font-semibold tracking-tight text-white sm:text-4xl">{title}</h2>
      <p className="mt-4 text-base leading-8 text-white/66 sm:text-lg">{body}</p>
    </div>
  )
}
