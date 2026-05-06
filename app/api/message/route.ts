import { Resend } from "resend";

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

export async function POST(req: Request) {
    try {
        const body = await req.json();

        const { name, phone, email, service, detail } = body;

        await resend.emails.send({
            from: "onboarding@resend.dev",
            to: "shayanulhaq776@gmail.com",
            subject: "Inquiry Details",
            html: `
        <div style="font-family: Arial; padding: 20px;">
          <h2>New Form Submission</h2>

          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Service:</strong> ${service}</p>

          <p><strong>Detail:</strong></p>
          <p style="background:#f5f5f5;padding:10px;">${detail}</p>
        </div>
      `,
        });

        return Response.json({ success: true });
    } catch (error) {
        return Response.json({ success: false, error });
    }
}