using System.Net;
using System.Net.Mail;

namespace CustomerCommLib
{
    public class MailSender : IMailSender
    {
        public bool SendMail(string toAdd, string message)
        {
            MailMessage mail = new MailMessage();
            SmtpClient smtpServer = new SmtpClient("smtp.gmail.com");

            mail.From = new MailAddress("my_mail@gmail.com");
            mail.To.Add(toAdd);
            mail.Subject = "Testing Mail";
            mail.Body = message;

            smtpServer.Port = 587;
            smtpServer.Credentials = new NetworkCredential("username", "password");
            smtpServer.EnableSsl = true;

            smtpServer.Send(mail);
            return true;
        }
    }
}
