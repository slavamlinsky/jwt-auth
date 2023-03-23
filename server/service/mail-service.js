require('dotenv').config();

const nodeMailer = require('nodemailer');

class MailService{
    constructor(){
        this.transporter = nodeMailer.createTransport({
            //host: process.env.SMTP_HOST,
            //port: process.env.SMTP_PORT,
            //secure: false,
            //auth: {
            //    user: process.env.SMTP_USER,
            //    pass: process.env.SMTP_PASSWORD
            //}
            /*  ---------*/
            // pool: true,
            // service: 'Gmail',            
            // auth: {
            //     type: 'OAuth2',
            //     user: 'ally.odessa@gmail.com',                
            //     accessToken: 'ya29.A0AVA9y1tdBZNdz2Aq-ZCXGyWJyqbPn01_f6JK6a-6pAVwKjcn765rBeBNHMHgu3pfF6s_xdNSvudh6g9eTEnmfizHY9I2MOPP3xStKrSzh6lN6eyhMc6Xoie56m5BsEQ83bLF86jlU0DtUkVqTqs_VWHN5TmtYUNnWUtBVEFTQVRBU0ZRRTY1ZHI4MW14bC02TVJEN1E0Y25FdWlGTGFsdw0163',
            //     expires: 1659005484060 + 60000,
            //     refreshToken: '1//04N4Oqk43Wq4kCgYIARAAGAQSNwF-L9IrBRwpqK1Ka7jVRvdxQv86emyE50mJZ5fJeFhw_Vd5YLBHI8tqEHSxGYjhyLS08-Lr3TA',
            //     clientId: '914260796583-35v052ebb0g81mjg22gmm5shk0adqirc.apps.googleusercontent.com',
            //     clientSecret: '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',
            //     accessUrl: 'https://oauth2.googleapis.com/token'
            // }

            host: 'smtp.ethereal.email',
            port: 587,
            secure: false,
            auth: {
                user: 'rubie.heller@ethereal.email',
                pass: 'Bg7P4DFDs9SZ5DPswR'
            }
        })
    }
    async sendActivationMail(to, link){
        //console.log(link);
        //console.log(process.env.API_URL);
        await this.transporter.sendMail({
            from: process.env.SMTP_USER,
            to,
            subject: 'Аткивация аккаунта на ' + process.env.API_URL,
            text: '',
            html: 
                `
                <div style="padding: 30px; background: linear-gradient(45deg, #e3ffe7 0%, #d9e7ff 100%); font-family: Candara;">
                    <div style="margin:1em auto"><img src='https://www.polygraph-rubicon.com/img/logo.png' alt="Rubicon Logo" width="200px" /></div>
                    <div style="padding: 15px 25px; background-color: #EEE; border-radius:10px;">
                    <h1>Активируйте учётную запись</h1>
                    Добрый день...<br>
                    Благодарим Вас за регистрацию в нашей системе.<br>
                    Чтобы активировать Вашу учётную запись, нажмите на кнопку ниже.<br><br><br>
                    <a target="_blank" style="padding: 10px 20px; margin: 2em; color: #FFF; text-decoration: none; background: linear-gradient(180deg, #9ebd13 0%, #6db608 100%); border-radius:5px" href="${link}">Подтверждаю Email адрес</a><br><br><br>
                    Если Вы не регистрировались, то просто ничего не делайте.<br><br><br><br>
                    С уважением,<br>
                    Команда проекта Rubicon<br><br>
                    <hr>
                    <h4>Если возникли какие-то проблемы во время активации учётной записи, пожалуйста, скопируйте и вставьте эту ссылку в адресную строку вашего браузера.</h4>
                    <a target="_blank" href="${link}">${link}</a>
                    </div>
                    <br>
                    <p style='text-align:center'>© ${new Date().getFullYear()} Polygraph-Rubicon.com | Все права защищены.</p>
                </div>
                `
        })
        //console.log("_+_+_");
    }
}

module.exports = new MailService();