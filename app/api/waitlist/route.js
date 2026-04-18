const submissions = []

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export async function POST(request) {
  try {
    const body = await request.json()
    const email = String(body?.email || '').trim().toLowerCase()
    const source = String(body?.source || '').trim() || 'leash-site'

    if (!email) {
      return Response.json({ ok: false, message: 'Please enter a valid email address.' }, { status: 400 })
    }

    if (!isValidEmail(email)) {
      return Response.json({ ok: false, message: 'Please enter a valid email address.' }, { status: 400 })
    }

    if (submissions.some((submission) => submission.email === email)) {
      return Response.json({ ok: false, message: 'You are already on the list.' }, { status: 409 })
    }

    submissions.push({ email, source, createdAt: new Date().toISOString() })

    return Response.json({ ok: true, message: 'You’re on the list.' })
  } catch {
    return Response.json({ ok: false, message: 'Something went wrong. Please try again.' }, { status: 500 })
  }
}