const BOT_API_URL = process.env.BOT_API_URL
const BOT_API_KEY = process.env.BOT_API_KEY
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD

async function handle(request, { params }) {
  // Validate admin password
  const auth = request.headers.get('authorization') || ''
  const token = auth.replace('Bearer ', '')

  if (token !== ADMIN_PASSWORD) {
    return Response.json({ error: 'Unauthorized' }, { status: 401 })
  }

  if (!BOT_API_URL || !BOT_API_KEY) {
    return Response.json({ error: 'Bot API not configured' }, { status: 503 })
  }

  const segments = (await params).path
  const path = segments.join('/')
  const url = new URL(request.url)
  const botUrl = `${BOT_API_URL}/api/${path}${url.search}`

  const options = {
    method: request.method,
    headers: {
      'Authorization': `Bearer ${BOT_API_KEY}`,
      'Content-Type': 'application/json',
    },
  }

  if (request.method === 'POST') {
    try {
      const body = await request.json()
      options.body = JSON.stringify(body)
    } catch {
      // no body
    }
  }

  try {
    const res = await fetch(botUrl, options)
    const data = await res.json()
    return Response.json(data, { status: res.status })
  } catch {
    return Response.json({ error: 'Bot API unreachable' }, { status: 502 })
  }
}

export async function GET(request, context) {
  return handle(request, context)
}

export async function POST(request, context) {
  return handle(request, context)
}
