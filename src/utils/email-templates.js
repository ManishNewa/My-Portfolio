export const contactEmailContent = (name, email, message) =>
  `<h2 style="font-size: 20px; margin-bottom: 15px; color: #6245b1;">
        New Contact Form Submission
    </h2>
    <p style="font-size: 16px; color: #333; margin-bottom: 10px;">
        You have received a new message from <strong>${name}</strong> (<a href="mailto:${email}" style="color: #6245b1; text-decoration: none;">${email}</a>).
    </p>
    <div style="background: #f4f4f4; padding: 15px; border-left: 4px solid #6245b1; margin: 15px 0; font-size: 16px; color: #333;">
        <p style="margin: 0; white-space: pre-line;">${message}</p>
    </div>
    <p style="font-size: 14px; color: #777;">
        You can reply directly to this email to respond.
    </p>`;

export const contactConfirmationEmail = (name) =>
  `<h2 style="font-size: 20px; margin-bottom: 15px; color: #6245b1;">
            Thank You for Reaching Out, ${name}!
        </h2>
        <p style="font-size: 16px; color: #333; margin-bottom: 10px;">
            We have received your message and will get back to you as soon as possible.
        </p>
        <p style="font-size: 16px; color: #333;">
            If your inquiry is urgent, feel free to reply to this email.
        </p>
        <p style="font-size: 14px; color: #777; margin-top: 20px;">
            Best regards, <br>
            <strong>Your Name</strong> <br>
            Your Website or Company Name
        </p>`;
