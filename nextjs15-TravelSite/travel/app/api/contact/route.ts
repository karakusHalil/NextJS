import { NextResponse } from "next/server";
import { Resend } from "resend";

if (!process.env.RESEND_API_KEY) {
  throw new Error("Missing RESEND_API_KEY in environment variables");
}
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    const emailResponse = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "halilkkus42@gmail.com",
      subject: "New Contact Message",
      html: `
        <h2>Mail</h2>
        <h1><strong>
        New Message from
        </strong>
         ${name}</h1>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
        `,
    });

    console.log("Email sent successfully:", emailResponse);
    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    // handle error
    console.log("Error", error);
    return NextResponse.json(
      { message: "Failed to send email" },
      { status: 500 }
    );
  }
}
