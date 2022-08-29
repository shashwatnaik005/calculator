var result = "";

function backspace(){

}
function sign(){

}
function equals(){

}







var button = document.getElementsByClassName("button");
for(var i =0;i<button.length;i++){
	button[i].addEventListener('click',function(){
		
		result = result + this.id;
        document.getElementById("result").innerText = result;
		
	});
}
var operator = document.getElementsByClassName("operator");
for(var i =0;i<operator.length;i++){
	operator[i].addEventListener('click',function(){
		if(this.id == "clearall"){
			document.getElementById("result").innerText = "";
			result="";
		}
		else if(this.id == "="){
			document.getElementById("result").innerText = eval(result);
			result="";
		}
		else if(this.id == "backspace"){
			result=result.substr(0,result.length-1);
			document.getElementById("result").innerText = result;
			
		}
		
	});
}
