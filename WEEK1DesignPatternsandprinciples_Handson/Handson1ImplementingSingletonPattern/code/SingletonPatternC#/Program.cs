using System;

class Program
{
    static void Main(string[] args)
    {
        Logger logger1 = Logger.getLogger();
        Logger logger2 = Logger.getLogger();

        logger1.Log("test1");
        logger2.Log("test2");

        if (logger1 == logger2)
        {
            Console.WriteLine("Singleton verified");
        }
        else
        {
            Console.WriteLine("Singleton not verified");
        }
    }
}
