#include <stdio.h>
#include <string.h>
#include <stdlib.h>
char* add(char*a1,char* a2)
{
	int length1,length2,length;  //�����������ַ����ĳ��� 
	length1 = strlen(a1);
	length2 = strlen(a2);
	length = length1>length2?length1:length2;  //ȡ��ӵ��������нϴ����ĳ��� 
	char* result = (char*)malloc(length+2);   //Ϊ����������ռ� 
	memset(result,'0',(length+1)*sizeof(char));  //��ʼ�� 
	length1 = length1 - 1;
	length2 = length2 - 1;
	result[length+1] = '\0';   //���������'\0'���γ��ַ��� 
	for(int i=length;i>0;i--,length1--,length2--)
	{
		if( length1<0&&length2>=0 )  //��a1�е����ӵ����λʱ(a1��С)  
		{
			result[i] = a2[length2] + result[i] - '0'; 
		
		}else if( length2<0&&length1>=0 )  //��a2�е����ӵ����λʱ(a2��С)
		{
			result[i] = a1[length1] + result[i] - '0'; 
		}else if( length1<0&&length2<0 )  //��a1,a2�е����λ���û�н�λʱ 
		{
			result[i] = '0';
		
		}
		else  //��� 
		{
			result[i] = result[i] = a1[length1]+a2[length2]+result[i]-'0'-'0';
			
		}
		if( result[i]>57 )  //���н�λʱ����λ+1 
		{
			result[i-1] = '1';
			result[i] = result[i] - 10;
				}
		
	}
	if( result[0]=='0') //���λû�н�λʱ��������һλ��0 
	{
		result = result+1;
		printf("%23s",result);
	}else  //�н�λʱ�������� 
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
 	num1=(char*)malloc(1);  //��ʼ�����е�ǰ��λ 
 	num2=(char*)malloc(1);
 	num1 = strcpy(num1,"1");
 	num2 = strcpy(num2,"1");
	printf("쳲���������ǰ100����Ϊ��\n");
 	for( count=1;count<=100;count++)  //ѭ�����ǰ100λ�� 
 	{
 		if( count==1||count==2 )  //ǰ��λֱ����� 
 		{
 			printf("%23s",num1);
 			continue;
		 } 
		//���� 
		num = (char*)malloc(strlen(num2)+1); 
		num = strcpy(num,num2);
 		num2 = add(num1,num2);
 		num1 = (char*)malloc(strlen(num)+1);
 		num1 = strcpy(num1,num);
 		if( count%5==0 ) //5λ������ 
 		{
 			printf("\n");
		 }
	 }
	 return 0;
 }
 
 
 
 
 
 
 
 
 
