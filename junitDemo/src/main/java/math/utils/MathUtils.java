package math.utils;

public class MathUtils {
    /*public static void main(String s[]){
    System.out.println("Test");
    }*/

    public int add(int a,int b){
        return a+b;
    }

    public int substract(int a,int b){
        return a-b;
    }
    public int multiply(int a,int b){
        return a*b;
    }
    public int devide(int a,int b){
        return a/b;
    }
    //TDD
    public double computeCircleArea(double radius){
        //return 0d;
        //return 3.14* radius* radius
        return Math.PI * radius * radius;
    }
}
