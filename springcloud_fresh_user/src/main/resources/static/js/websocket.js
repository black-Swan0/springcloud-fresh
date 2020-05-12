function openWebSocket(id) {
	var socket;
	if (typeof(WebSocket) == undefined) {
		alert("不好意思，您的浏览器不支持WebSocket通信...");
		return;
	}
	
	// 连接websocket服务器
	socket = new WebSocket("ws://127.0.0.1:8080/websocket/" + id);
	
	socket.onopen = function() {
		console.info("Socket已经连接...");
	}
	
	socket.onclose = function() {
		console.info("Socket已经断开...");
	}
	
	socket.onerror = function() {
		console.info("Socket访问服务器失败...");
	}
	
	socket.onmessage = function(msg) {
		if (msg.data == "100") { // 规定,如果响应值是100，则说明是挤退信息
			alert("您的账号已在别处登录，如非本人操作，请及时修改密码...");
			location.href = "../../admin/loginout";
		} else {
			console.info(msg);
		}
	}
}