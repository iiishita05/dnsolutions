class Logger{
    private static Logger log = new Logger();
    private Logger(){
        System.out.println("Logger is intialized");
    };
    public static Logger getLogger(){
        return log;
    }
    public void log(String msg){
        System.out.println(msg);
    }
}