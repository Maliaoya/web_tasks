# -*- coding: utf-8 -*-
from baike_spider import url_manager, html_downloader, html_parser,html_outputer  


class SpiderMain(object):
    def __init__(self):  #初始化各个对象
        self.urls = url_manager.UrlManager()  #管理器
        self.downloader = html_downloader.HtmlDownloader() #下载器
        self.parser = html_parser.HtmlParser()  #解析器
        self.outputer = html_outputer.HtmlOutputer()  #输出器
    
    
    def craw(self,root_url):  
        count = 1   #计数
        self.urls.add_new_url(root_url)  
        while self.urls.has_new_url():  #当有待爬取得url时
            try:
                new_url = self.urls.get_new_url()  #获取待爬取得url
                print ('craw %d : %s' % (count,new_url))
                html_cont = self.downloader.download(new_url)  #下载
                new_urls,new_data = self.parser.parse(new_url, html_cont)  #解析
                #数据分别处理
                self.urls.add_new_urls(new_urls)  
                self.outputer.collect_data(new_data)  #输出
                if count == 3:
                    break
                count = count + 1
            except:
                print ('craw failed')
            
    
            
        
        self.outputer.output_html()
    
if __name__=="__main__":
    root_url = "http://baike.baidu.com/item/%E6%B2%B3%E6%B5%B7%E5%A4%A7%E5%AD%A6"   #入口url
    try:
        obj_spider = SpiderMain()
        obj_spider.craw(root_url) #启动爬虫
    except:
        print ("stop")
    
    
    
    
    
     