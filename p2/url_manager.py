# -*- coding: utf-8 -*-
class UrlManager(object):  
    
    #初始化
    def __init__(self):
        self.new_urls = set()  #未爬取
        self.old_urls = set()  #已爬取
        
    #向管理器中添加新的url
    def add_new_url(self,url): 
        if url is None:
            return
        if url not in self.new_urls and url not in self.old_urls:  #可以用来爬取的url
            self.new_urls.add(url)
 
    #向管理器中添加批量的url
    def add_new_urls(self,urls): 
        if urls is None or len(urls)==0:
            return
        for url in urls:
            self.add_new_url(url)
    
    #判断管理其中是否有新的待爬取得url  
    def has_new_url(self):  
        return len(self.new_urls)!=0

    #从管理器中获取新的待爬取得url
    def get_new_url(self):  
        new_url = self.new_urls.pop()  #从新表中获取url并移除
        self.old_urls.add(new_url)  #将次url添加到已爬取的表中
        return new_url

    

    
    

    
    
    
    
    
    
    



