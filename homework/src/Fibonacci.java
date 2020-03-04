public class Fibonacci {
    public static int of(int x)
    {
        if(x==1){
            return 1;
        }

        else if(x==2)
        {
            return 1;
        }

        else{
            int f1 = 0;
            int f2 = 1;
            int c = 0;
            for (int i = 3; i <=x; i++)
            {
                c = f1 + f2;
                f1 = f2;
                f2 = c;
            }

            return c;
        }
    }
}
