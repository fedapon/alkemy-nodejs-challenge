// using Twilio SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs
import sgMail from '@sendgrid/mail'

class mailService {
    constructor(to, subject, text = '', html = '') {
        sgMail.setApiKey(process.env.SENDGRID_API_KEY)
        this.msg = {
            to: to, // Change to your recipient
            from: process.env.SENDGRID_FROM, // Change to your verified sender
            subject: subject,
            text: text,
            html: html
        }
    }

    async sendMail() {
        sgMail
            .send(this.msg)
            .then(() => {
                return true
            })
            .catch((error) => {
                throw new Error(error)
            })
    }
}

export default mailService
