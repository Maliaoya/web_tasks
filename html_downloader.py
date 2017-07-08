# -*- coding: utf-8 -*-
#下载器

import urllib.request

class HtmlDownloader(object):
    
    
    def download(self, url):
        if url is None:
            return None
        response = urllib.request.urlopen(url)  #请求url的内容
        if response.getcode()!=200:  #请求失败
            return None        
        return response.read()  #返回下载内容
