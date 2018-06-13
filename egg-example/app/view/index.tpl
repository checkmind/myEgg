<!DOCTYPE html>
<html>
<head>
	<title> egg 实例?? </title>
</head>
<body>
	<form action="/signIn" method="post">
			<input type="text" name="username" />
			<input type="password" name="password" />
			<input type="text" name="phoneNum" placeholder="输入手机号发送验证码" /> <button>获取验证码</button>
			<input type="text" placeholder="验证码" name="code"/>
			<button type="submit">提交{{name}}</button>
	</form>
</body>
</html> 