//Rextester.Program.Main is the entry point for your code. Don't change it.
//Compiler version 4.0.30319.17929 for Microsoft (R) .NET Framework 4.5

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.RegularExpressions;

namespace Rextester
{
    public class Program
    {
        public static void Main(string[] args)
        {
          
            int n=10;
            int []fib = new int[n+1];
            //Your code goes here
            
            Fibnocci_DividenConquer(n);
            Console.WriteLine("---------------");
            Fibnocci_DynamicProgramming(n,ref fib);
            
        }
        private static int Fibnocci_DividenConquer(int number)
        {
             //Console.WriteLine("input:"+number.ToString());
            int result=0;
            if(number<=1)
            {
                result= number;
            }
            else
            {
                result=Fibnocci_DividenConquer(number-2)+Fibnocci_DividenConquer(number-1);
            }
            
            Console.WriteLine(result);
            return result;
        }
        private static int Fibnocci_DynamicProgramming(int number,ref int[] fib)
        {
         //Console.WriteLine("input:"+number.ToString());
            int result=0;
            if(fib[number]>0)
                 return fib[number]; 
            else if(number<=1)		
            {
                result=number;
                fib[number]=result;
            }
            else
            {
                Console.WriteLine("input2:"+number.ToString());
                result=Fibnocci_DynamicProgramming(number-2,ref fib)+Fibnocci_DynamicProgramming(number-1,ref fib);
                fib[number]=result;
            }
            return result;   
        }
    }
}
