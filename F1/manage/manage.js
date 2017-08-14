// 载入所有存储在localStorage的数据
window.onload=function(){ 
	loadAll();
} 	
	
//保存数据  
function save(){  
	var name = document.getElementById("name").value;
	var id = document.getElementById("id").value;
	var sex = document.getElementById("sex").value;
	var grade = document.getElementById("grade").value;
	var major = document.getElementById("major").value;
	var value = name+'&'+sex+'&'+grade+'&'+major+'&';
	localStorage.setItem(id,value);
	alert("添加成功");
}
//查找数据  
function find(){  
	var search_site = document.getElementById("search_site").value;  
	var sitename = localStorage.getItem(search_site);
	var find_result = document.getElementById("find_result");
	if(sitename==null)
	{
		find_result.innerHTML = "不存在";
	}else{
		var result = '';
		var strs= new Array(); //定义一数组
		strs=sitename.split("&"); //字符分割
		for ( var i=0;i<strs.length-1 ;i++ )
		{
			result += "<td>"+ strs[i]+ "</td>";
		}  
		find_result.innerHTML = "<table border='1'>"+"<tr><td>学号</td><td>姓名</td><td>性别</td><td>年级</td><td>专业</td></tr>"+
								"<tr><td>"+search_site+"</td>" + result + "</tr>"+"</table>"; 
	}
}

//删除数据
function del(){
	if(confirm('真的要删除吗？')){
		var search_site = document.getElementById("search_site").value;
		localStorage.removeItem(search_site);
		alert("删除成功");
	}
}
	
//修改数据
function change(){
	var set_id  = document.getElementById("set_id").value;
	if(localStorage.getItem(set_id)==null){
		alert("不存在该用户");
	}else{
		localStorage.removeItem(set_id);
		var set_name = document.getElementById("set_name").value;
		var set_sex = document.getElementById("set_sex").value;
		var set_grade = document.getElementById("set_grade").value;
		var set_major = document.getElementById("set_major").value;
		var value = set_name+'&'+set_sex+'&'+set_grade+'&'+set_major+'&';
		localStorage.setItem(set_id,value);
		alert("修改成功");
	}
}	

function table(strs){
	var result;
	for(var i=0;i<strs.length-1 ;i++ ){	
		result += "<td>"+strs[i]+"</td>"; 
	}
	return result;
}
	

//将所有存储在localStorage中的对象提取出来，并展现到界面上
function loadAll(){  
	var list = document.getElementById("list");  
	if(localStorage.length>0){ 
		var strs= new Array(); //定义一数组
		var result = "<table border='1'>";  
		result += "<tr><td>学号</td><td>姓名</td><td>性别</td><td>年级</td><td>专业</td></tr>";  
		for(var i=0;i<localStorage.length;i++){  
			var sitename = localStorage.key(i);  
			var siteurl = localStorage.getItem(sitename);
			strs=siteurl.split("&"); //字符分割
			result += "<tr><td>"+sitename+"</td>";
			result += table(strs);
			result += "</tr>";
		}
		result += "</table>";  
		list.innerHTML = result;  
	}else{  
		list.innerHTML = "数据为空……";  
	}  
}  
