
	function l1()
{
	var name = document.getElementById("input-1").value;
	var pass = document.getElementById("input-2").value;
	if(name.length==0&&pass.length==0)
	{
		alert("输入不能为空");
	}else{
		alert("登录成功");
	}
}
