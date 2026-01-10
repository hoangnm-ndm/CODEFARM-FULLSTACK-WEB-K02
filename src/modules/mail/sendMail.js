import { EMAIL_USER } from "../../shared/configs/dotenvConfig.js";
import { transporter } from "../../shared/configs/nodeMailer.js";

export const sendMail = async (to, subject, html) => {
  try {
    const info = await transporter.sendMail({
      from: EMAIL_USER,
      to,
      subject,
      html,
      replyTo: null,
    });
    console.log(info.messageId);
  } catch (error) {
    console.error("ERROR_SENDMAIL", error.message);
  }
};
