using System;
class Forecast
{
    static double GetfutureValue(double val, double rate, double year)
    {
        if (year == 0)
        {
            return val;
        }
        else
        {
            return GetfutureValue(val, rate, year - 1) * (1 + rate);
        }
    }
    static void Main()
    {
        Console.WriteLine("Enter starting amount:");
        double amount = Convert.ToDouble(Console.ReadLine());
        Console.WriteLine("Enter the rate:");
        double rate = Convert.ToDouble(Console.ReadLine());
        Console.WriteLine("Enter the year:");
        double year = Convert.ToInt32(Console.ReadLine());
        Console.WriteLine("The future value is:" + GetfutureValue(amount, rate, year));
    }
}