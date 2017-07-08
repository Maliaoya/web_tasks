# -*- coding: utf-8 -*-


class HtmlOutputer(object):
    def __init__(self):  #初始化
        self.datas = []
    
    def collect_data(self, data):  #收集数据
        if data is None:
            return
        self.datas.append(data)

    
    def output_html(self):   #将收集的数据写入到HTML文件中
        fout = open('output.html', 'w')
        
        fout.write("<html>")
        fout.write("<body>")
        fout.write("<table>")
        
        for data in self.datas:
            fout.write("<tr>")
            fout.write("<td>%s</td>"%data['url'])
            fout.write("<td>%s</td>"%data['title'])
            fout.write("<td>%s</td>"%data['summary'])
            fout.write("</tr>")
        
        fout.write("</table>")
        fout.write("</body>")
        fout.write("</html")
        
        fout.close()
    
    
    
    



