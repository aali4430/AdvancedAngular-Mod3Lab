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
          
            long n=1000;
            long []fib = new long[n+1];
            long f=0;
            //Your code goes here
            
            //f=Fibnocci_Loop(n);
            //f=Fibnocci_DividenConquer(n);
            f=Fibnocci_DynamicProgramming(n,ref fib);
            
            Console.WriteLine(f);
            
        }
        private static long Fibnocci_Loop(long number)
        {
             if (number <= 1) 
            { 
                return number; 
            } 
            else
            { 
                return Fibnocci_Loop(number - 1) + Fibnocci_Loop(number - 2); 
            } 
        
        }
        private static long Fibnocci_DividenConquer(long number)
        {
             //Console.WriteLine("input:"+number.ToString());
            long result=0;
            if(number<=1)
            {
                result= number;
            }
            else
            {
                result=Fibnocci_DividenConquer(number-2)+Fibnocci_DividenConquer(number-1);
            }
            return result;
        }
        private static long Fibnocci_DynamicProgramming(long number,ref long[] fib)
        {
         //Console.WriteLine("input:"+number.ToString());
            long result=0;
            if(fib[number]>0)
                 return fib[number]; 
            else if(number<=1)
            {
                result=number;
                fib[number]=result;
            }
            else
            {
                result=Fibnocci_DynamicProgramming(number-2,ref fib)+Fibnocci_DynamicProgramming(number-1,ref fib);
                fib[number]=result;
            }
            return result;   
        }
    }
}
