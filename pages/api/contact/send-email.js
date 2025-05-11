import nodemailer from 'nodemailer';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { name, email, message } = req.body;

        // Basic validation
        if (!name || !email || !message) {
            return res.status(400).json({ error: 'All fields are required.' });
        }

        try {
            // Create a transporter with your email service credentials
            const transporter = nodemailer.createTransport({
                service: 'yahoo',
                auth: {
                    user: process.env.EMAIL_USER,
                    pass: process.env.EMAIL_PASS,
                },
            });

            // Email options
            const mailOptions = {
                from: `"${name}" <${email}>`, // Sender details
                to: process.env.EMAIL_USER , // Your email to receive messages
                subject: 'New Contact Form Submission',
                text: `You have a new message from ${name} (${email}):\n\n${message}`,
            };

            // Send the email
            await transporter.sendMail(mailOptions);

            return res.status(200).json({ message: 'Email sent successfully!' });
        } catch (error) {
            console.error('Error sending email:', error);
            return res.status(500).json({ error: 'Failed to send email.' });
        }
    } else {
        return res.status(405).json({ error: 'Method not allowed.' });
    }
}
