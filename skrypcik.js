var howManyFalse = 0;
var password1 = "";
var yes =new Audio("yes.wav");
var no= new Audio("no.wav");
var password = "";
var pass = new Array("Bez pracy nie ma kołaczy", "Budować zamki na piasku", "Czuć się jak ryba w wodzie", "Dla chcącego nic trudnego", "Gdzie dwóch się bije, tam trzeci korzysta");
var random=Math.floor(Math.random()*pass.length);
password=pass[random];
password = password.toUpperCase();
var howLong = password.length;

for(i=0;i<howLong; i++){
    if(password.charAt(i)==" ") password1=password1+" ";
    else password1 = password1 + "-";
}

function printPassword()
{
    document.getElementById("board").innerHTML=password1;
}

window.onload = start;

var letters = new Array(35);
letters[0]="A";
letters[1]="Ą";
letters[2]="B";
letters[3]="C";
letters[4]="Ć";
letters[5]="D";
letters[6]="E";
letters[7]="Ę";
letters[8]="F";
letters[9]="G";
letters[10]="H";
letters[11]="I";
letters[12]="J";
letters[13]="K";
letters[14]="L";
letters[15]="Ł";
letters[16]="M";
letters[17]="N";
letters[18]="Ń";
letters[19]="O";
letters[20]="Ó";
letters[21]="P";
letters[22]="Q";
letters[23]="R";
letters[24]="S";
letters[25]="Ś";
letters[26]="T";
letters[27]="U";
letters[28]="V";
letters[29]="W";
letters[30]="X";
letters[31]="Y";
letters[32]="Z";
letters[33]="Ż";
letters[34]="Ź";

function start()
{
    var alpha = "";
    for (i=0; i<=34;i++){
        var element = "let"+i;
        if ( (i+1) % 7 == 0){

            alpha = alpha + '<div class="letter" onclick="check('+i+')" id="'+element+'">'+letters[i]+'</div> <div style="clear:both;"></div>';
        }
        else {
            alpha = alpha + '<div class="letter" onclick="check('+i+')" id="'+element+'">'+letters[i]+'</div>';
        }
    }
    document.getElementById("alphabet").innerHTML = alpha;
    printPassword();
}

 String.prototype.changeSign = function(gdzie, znak)
 {
    if(gdzie > this.length-1) return this.toString();
    else return this.substr(0, gdzie)+znak+this.substr(gdzie+1);
 }

function check(nr){
    var checked =false;

    for (i=0; i<howLong; i++){
        if(password.charAt(i)==letters[nr])
        {
            password1 = password1.changeSign(i,letters[nr]);
            checked=true;
        }
    }
    if(checked==true){
        yes.play();
        var element = "let"+nr;
        document.getElementById(element).style.background="#003300";
        document.getElementById(element).style.cursor="default";
        printPassword();
    }


    else{
        no.play();
        var element = "let"+nr;
        document.getElementById(element).style.background="#C00000";
        document.getElementById(element).style.cursor="default";
        document.getElementById(element).setAttribute("onclick",";");
        //ile skuch
        howManyFalse++;
        var picture="img/s"+howManyFalse+".jpg";
        document.getElementById("gallows").innerHTML = '<img src="'+picture+'" alt="gallows"/>'
    }

    if (password==password1){
        document.getElementById("alphabet").innerHTML='Brawo! Prawidłowe hasło!'+'<br/> <br/>'+password+'<br/> <br/> <span class="reset" onclick="location.reload()">Zagraj ponownie<span>';
    }
    if (howManyFalse>=9){
        document.getElementById("alphabet").innerHTML='Nieprawidłowe hasło :('+'<br/> <br/> <span class="reset" onclick="location.reload()">Zagraj ponownie<span>';
    }
    
}

