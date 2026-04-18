const submissions = []

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export async function POST(request) {
  try {
    const body = await request.json()
    const name = String(body?.name || '').trim()
    const email = String(body?.email || '').trim().toLowerCase()
    const team = String(body?.team || '').trim()

    if (!name || !email) {
      return Response.json({ message: 'Please share your name and email so I know where to write back.' }, { status: 400 })
    }

    if (!isValidEmail(email)) {
      return Response.json({ message: 'That email does not look quite right yet.' }, { status: 400 })
    }

    submissions.push({ name, email, team, createdAt: new Date().toISOString() })

    return Response.json({
      message: `Thanks, ${name}. You’re on the list. We’ll be in touch when Permit is ready for curious humans.`
    })
  } catch {
    return Response.json({ message: 'Something glitched on our side. Please try again.' }, { status: 500 })
  }
}