public class TestLogger {
    public static void main(String[] args) {
        Logger logger1= Logger.getLogger();
        Logger logger2= Logger.getLogger();
        logger1.log("test1");
        logger2.log("test2");
        if(logger1==logger2){
            System.out.println("Singelton verified");
        }
        else{
            System.out.println("Singelton not verified");
        }
    }
}
