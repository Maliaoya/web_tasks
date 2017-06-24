#include <stdio.h>
#include <string.h>
#include <stdlib.h>
char* add(char*a1,char* a2)
{
	int length1,length2,length;  //计算数组中字符串的长度 
	length1 = strlen(a1);
	length2 = strlen(a2);
	length = length1>length2?length1:length2;  //取相加的两个数中较大数的长度 
	char* result = (char*)malloc(length+2);   //为计算结果申请空间 
	memset(result,'0',(length+1)*sizeof(char));  //初始化 
	length1 = length1 - 1;
	length2 = length2 - 1;
	result[length+1] = '\0';   //结果的最后加'\0'，形成字符串 
	for(int i=length;i>0;i--,length1--,length2--)
	{
		if( length1<0&&length2>=0 )  //当a1中的数加到最高位时(a1较小)  
		{
			result[i] = a2[length2] + result[i] - '0'; 
		
		}else if( length2<0&&length1>=0 )  //当a2中的数加到最高位时(a2较小)
		{
			result[i] = a1[length1] + result[i] - '0'; 
		}else if( length1<0&&length2<0 )  //当a1,a2中的最高位相加没有进位时 
		{
			result[i] = '0';
		
		}
		else  //相加 
		{
			result[i] = result[i] = a1[length1]+a2[length2]+result[i]-'0'-'0';
			
		}
		if( result[i]>57 )  //当有进位时，进位+1 
		{
			result[i-1] = '1';
			result[i] = result[i] - 10;
				}
		
	}
	if( result[0]=='0') //最高位没有进位时，舍弃第一位的0 
	{
		result = result+1;
		printf("%23s",result);
	}else  //有进位时正常输入 
	{
		printf("%23s",result);	
	}
	return result;
}
 
 int main()
 {
 	int count=0;
 	char* num1;
	char* num2;
	char* num;
 	num1=(char*)malloc(1);  //初始化数列的前两位 
 	num2=(char*)malloc(1);
 	num1 = strcpy(num1,"1");
 	num2 = strcpy(num2,"1");
	printf("斐波那契数列前100个数为：\n");
 	for( count=1;count<=100;count++)  //循环输出前100位数 
 	{
 		if( count==1||count==2 )  //前两位直接输出 
 		{
 			printf("%23s",num1);
 			continue;
		 } 
		//计算 
		num = (char*)malloc(strlen(num2)+1); 
		num = strcpy(num,num2);
 		num2 = add(num1,num2);
 		num1 = (char*)malloc(strlen(num)+1);
 		num1 = strcpy(num1,num);
 		if( count%5==0 ) //5位数换行 
 		{
 			printf("\n");
		 }
	 }
	 return 0;
 }
 
 
 
 
 
 
 
 
 
