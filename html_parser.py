
from bs4 import BeautifulSoup
import re
import urllib



class HtmlParser(object):
    
    
    def _get_new_urls(self, page_url, soup):
        new_urls = set()  #保存结果
        links = soup.find_all('a',href=re.compile(r"/item/."))  #获取所有链接，匹配url
        for link in links:
            new_url = link['href'] #获得链接
            new_full_url = urllib.parse.urljoin(page_url, new_url)  #的到完整的url
            new_urls.add(new_full_url) 
        
        return new_urls
            
    
    #解析数据（题目+简介）
    def _get_new_data(self, page_url, soup):
        res_data = {} #存放数据
        
        res_data['url'] = page_url
        title_node = soup.find('dd',class_="lemmaWgt-lemmaTitle-title").find("h1")  #匹配题目
        res_data['title'] = title_node.get_text()
        summary_node = soup.find('div',class_="lemma-summary")   #匹配简介
        res_data['summary'] = summary_node.get_text()
        return res_data
    
    #从html_cont解析出数据
    def parse(self, page_url, html_cont):
        if page_url is None or html_cont is None:
            return
        
        soup = BeautifulSoup(html_cont, 'html.parser')  #将html_cont加载进soup
        new_urls = self._get_new_urls(page_url, soup)   
        new_data = self._get_new_data(page_url, soup)
        
        return new_urls, new_data
    
    



