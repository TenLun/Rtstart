var gpt = document.getElementById('gpt')
var websocket = new WebSocket('wss://chatnio.net/chat');
var jsons = { token: 'anonymous', id: '-1', message: 'hello!', model: 'gpt-3.5-turbo' }
var jsonstr = JSON.stringify(jsons)
websocket.send(jsonstr);
websocket.onmessage = function(event) {
    var msg = event.data;
    gpt.innerHTML = '收到消息：' + msg;
};
