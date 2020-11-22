计();
近();
setInterval('计()',1000);
setInterval('近()',3600000);
function 计(){
    var 终 = new Date('2021/06/07 09:00:00');
    var 今 = new Date();
    var 差 = 终.getTime() - 今.getTime();
    var 日 = Math.floor(差 / 86400000);
    var 时 = Math.floor(差 % 86400000 / 3600000);if(时 < 10){时 = '0'+时};
    var 分 = Math.floor(差 % 86400000 % 3600000 / 60000);if(分 < 10){分 = '0'+分};
    var 秒 = Math.floor(差 % 86400000 % 3600000 % 60000 / 1000);if(秒 < 10){秒 = '0'+秒};
    console.log(日)
    console.log(时)
    console.log(分)
    console.log(秒)
    
    document.getElementById('日').innerHTML=日;
    document.getElementById('时').innerHTML=时;
    document.getElementById('分').innerHTML=分;
    document.getElementById('秒').innerHTML=秒;    
}

function 近(){
    var 终 = new Date('2020/12/01 00:00:00');
    var 今 = new Date();
    var 差 = 终.getTime() - 今.getTime();
    var 距 = Math.floor(差 / 86400000);
    var 出 = '离化一模'+距+'天';
    if(距<0){
        var 终 = new Date('2021/02/12 00:00:00');
    	var 今 = new Date();
    	var 差 = 终.getTime() - 今.getTime();
    	var 距 = Math.floor(差 / 86400000);
    	var 出 = '离春节'+距+'天';
    }
	document.getElementById('备').className='备';
    document.getElementById('备').innerHTML=出;
    
    言();
    诗();
}

function 言(){
    var url = "https://api.btstu.cn/yan/api.php?encode=json"
    var request = new XMLHttpRequest();
    request.open("get", url);//设置请求方法与路径
    request.send(null);//不发送数据到服务器
    request.onload = function (){
        var 言 = JSON.parse(request.responseText).text;
        document.getElementById("言").innerHTML=言;
    }
}

function 诗(){
    if(Math.round(Math.random())){
    	var url = '文';
    }else{
        var url = 'https://v1.jinrishici.com/all.json';
    }
    var request = new XMLHttpRequest();
    request.open("get", url);//设置请求方法与路径
    request.send(null);//不发送数据到服务器
    request.onload = function (){
        var 诗 = JSON.parse(request.responseText);
        var 句 = 诗.content+'（&ensp;'+诗.author+'《'+诗.origin+'》）';
        document.getElementById('诗').innerHTML=句;
    }
}