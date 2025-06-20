using System;
public class Logger{
    public static readonly Logger log=new Logger();
    private Logger(){
        Console.WriteLine("Logger initialized");
    }
    public static Logger getLogger(){
        return log;
    }
    public void Log(string msg){
        Console.WriteLine(msg);
    }
}