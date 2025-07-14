import { NextResponse } from 'next/server'
import { Resend } from 'resend'

// const resend = new Resend(process.env.RESEND_API_KEY)
const resend = new Resend('re_XfEhyQ5M_M46bGFKpbEAMXcoZNuaB4KHU')

export async function POST(request: Request) {
	try {
		const { email, subject, message } = await request.json()

		const emailToAdmin = await resend.emails.send({
			from: 'onboarding@resend.dev',
			to: 'srigotest@gmail.com',

			subject: 'Warpoint',
			html: `<p>Имя: ${subject}</p>
			<p>Номер: ${message}</p>
			<p>Email: ${email}</p>
			`,
		})

		return NextResponse.json({
			admin: emailToAdmin,
		})
	} catch (error) {
		console.log(error)
		return NextResponse.json({ error: 'Ошибка отправки' }, { status: 500 })
	}
}
