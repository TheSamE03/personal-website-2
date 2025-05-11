// components/ContactForm.jsx
"use client";

import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const response = await fetch('/api/contact/send-email.js', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(form),
        });

        if (response.ok) {
            alert('Message sent successfully!');
            setForm({ name: '', email: '', message: '' }); // Clear the form
        } else {
            const errorData = await response.json();
            alert(`Error: ${errorData.error || 'Failed to send message.'}`);
        }
    } catch (error) {
        console.error('Error submitting form:', error);
        alert('An unexpected error occurred.');
    }
};

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-xl mx-auto">
      <input
        name="name"
        value={form.name}
        onChange={handleChange}
        placeholder="Your Name"
        className="w-full input input-bordered"
        required
      />
      <input
        name="email"
        type="email"
        value={form.email}
        onChange={handleChange}
        placeholder="you@example.com"
        className="w-full input input-bordered"
        required
      />
      <textarea
        name="message"
        value={form.message}
        onChange={handleChange}
        placeholder="Your message…"
        className="w-full textarea textarea-bordered"
        rows={6}
        required
      />
      <button type="submit" className="btn btn-primary">
        Send Message
      </button>
    </form>
  );
}
