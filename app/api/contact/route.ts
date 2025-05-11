import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
    try {
        const { name, email, message } = await req.json();

        // Basic validation
        if (!name || !email || !message) {
            return NextResponse.json({ error: 'All fields are required.' }, { status: 400 });
        }

        // Example: Log the data (replace with email service or database logic)
        console.log('Message received:', { name, email, message });

        // Respond with success
        return NextResponse.json({ message: 'Message sent successfully!' }, { status: 200 });
    } catch (error) {
        console.error('Error handling contact form submission:', error);
        return NextResponse.json({ error: 'Internal server error.' }, { status: 500 });
    }
}
