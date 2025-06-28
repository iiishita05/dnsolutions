namespace CustomerCommLib{
    public class CustomerCommunicator{
        private readonly IMailSender _mailSender;

        public CustomerCommunicator(IMailSender mailSender)
        {
            _mailSender = mailSender;
        }

        public bool SendMailToCustomer()
        {
            return _mailSender.SendMail("cust123@abc.com", "Some Message");
        }
    }
}
