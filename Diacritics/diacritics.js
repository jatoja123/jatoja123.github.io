function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

function copyDiaText() {
  var text = document.getElementById("yourDia").innerText;
  var elem = document.createElement("textarea");
  document.body.appendChild(elem);
  elem.value = text;
  elem.select();
  document.execCommand("copy");
  document.body.removeChild(elem);
}

//those go UP
var diacriticsTop = [
  '\u030d', /*     ̍     */		'\u030e', /*     ̎     */		'\u0304', /*     ̄     */		'\u0305', /*     ̅     */
  '\u033f', /*     ̿     */		'\u0311', /*     ̑     */		'\u0306', /*     ̆     */		'\u0310', /*     ̐     */
  '\u0352', /*     ͒     */		'\u0357', /*     ͗     */		'\u0351', /*     ͑     */		'\u0307', /*     ̇     */
  '\u0308', /*     ̈     */		'\u030a', /*     ̊     */		'\u0342', /*     ͂     */		'\u0343', /*     ̓     */
  '\u0344', /*     ̈́     */		'\u034a', /*     ͊     */		'\u034b', /*     ͋     */		'\u034c', /*     ͌     */
  '\u0303', /*     ̃     */		'\u0302', /*     ̂     */		'\u030c', /*     ̌     */		'\u0350', /*     ͐     */
  '\u0300', /*     ̀     */		'\u0301', /*     ́     */		'\u030b', /*     ̋     */		'\u030f', /*     ̏     */
  '\u0312', /*     ̒     */		'\u0313', /*     ̓     */		'\u0314', /*     ̔     */		'\u033d', /*     ̽     */
  '\u0309', /*     ̉     */		'\u0363', /*     ͣ     */		'\u0364', /*     ͤ     */		'\u0365', /*     ͥ     */
  '\u0366', /*     ͦ     */		'\u0367', /*     ͧ     */		'\u0368', /*     ͨ     */		'\u0369', /*     ͩ     */
  '\u036a', /*     ͪ     */		'\u036b', /*     ͫ     */		'\u036c', /*     ͬ     */		'\u036d', /*     ͭ     */
  '\u036e', /*     ͮ     */		'\u036f', /*     ͯ     */		'\u033e', /*     ̾     */		'\u035b', /*     ͛     */
  '\u0346', /*     ͆     */		'\u031a' /*     ̚     */
];

//those go DOWN
var diacriticsBot = [
  '\u0316', /*     ̖     */		'\u0317', /*     ̗     */		'\u0318', /*     ̘     */		'\u0319', /*     ̙     */
  '\u031c', /*     ̜     */		'\u031d', /*     ̝     */		'\u031e', /*     ̞     */		'\u031f', /*     ̟     */
  '\u0320', /*     ̠     */		'\u0324', /*     ̤     */		'\u0325', /*     ̥     */		'\u0326', /*     ̦     */
  '\u0329', /*     ̩     */		'\u032a', /*     ̪     */		'\u032b', /*     ̫     */		'\u032c', /*     ̬     */
  '\u032d', /*     ̭     */		'\u032e', /*     ̮     */		'\u032f', /*     ̯     */		'\u0330', /*     ̰     */
  '\u0331', /*     ̱     */		'\u0332', /*     ̲     */		'\u0333', /*     ̳     */		'\u0339', /*     ̹     */
  '\u033a', /*     ̺     */		'\u033b', /*     ̻     */		'\u033c', /*     ̼     */		'\u0345', /*     ͅ     */
  '\u0347', /*     ͇     */		'\u0348', /*     ͈     */		'\u0349', /*     ͉     */		'\u034d', /*     ͍     */
  '\u034e', /*     ͎     */		'\u0353', /*     ͓     */		'\u0354', /*     ͔     */		'\u0355', /*     ͕     */
  '\u0356', /*     ͖     */		'\u0359', /*     ͙     */		'\u035a', /*     ͚     */		'\u0323' /*     ̣     */
];

//those always stay in the middle
var diacriticsMid = [
  '\u0315', /*     ̕     */		'\u031b', /*     ̛     */		'\u0340', /*     ̀     */		'\u0341', /*     ́     */
  '\u0358', /*     ͘     */		'\u0321', /*     ̡     */		'\u0322', /*     ̢     */		'\u0327', /*     ̧     */
  '\u0328', /*     ̨     */		'\u0334', /*     ̴     */		'\u0335', /*     ̵     */		'\u0336', /*     ̶     */
  '\u034f', /*     ͏     */		'\u035c', /*     ͜     */		'\u035d', /*     ͝     */		'\u035e', /*     ͞     */
  '\u035f', /*     ͟     */		'\u0360', /*     ͠     */		'\u0362', /*     ͢     */		'\u0338', /*     ̸     */
  '\u0337', /*     ̷     */		'\u0361', /*     ͡     */		'\u0489' /*     ҉_     */		
];

function GenerateDiacritics(){
  var base = document.getElementById("base").value;
  var top = document.getElementById("top").value;
  var mid = document.getElementById("mid").value;
  var bot = document.getElementById("bot").value;

  var final="";

  /*var diacriticsTop=['0300','0301','0302','0303','0363','0364','0365','0366','0367','0368','0369','036A','036B','036C','036D','036E','036F','0304','0305','0306','0307','0308','0309','030A','030B','030C','030D','034A','0350','0360','0361','035D','035E','035B','0351','0357','0358','0352','034B','034C','030E','030F','0310','0311','0312','0313','0314','0346','0315','031A','031B','033D','033E','033F','0340','0341','0342','0343','0344'];
  var diacriticsBot=['0316','0317','0318','0319','031C','031E','031D','031F','0320','0321','0322','0323','0324','0325','034D','035F','0362','034E','0347','035C','0348','0359','035A','0353','0354','0355','0356','0349','0326','0327','0345','0328','0329','032A','032B','032C','032D','032E','032F','0330','0331','0332','0333','0339','033A','033B','033C'];
  var diacriticsMid=['0334','0335','0336','0337','0338','033F','0363','0360'];*/

  for(var j=0;j<base.length;j++){
    var ch=base[j];

    //top
    for(i=top;i>0;i--){ 
      if(i<1){
        var r=Math.random()
        if(r>i){
          continue;
        }
      }

      ch = ch /*+ '&#x'*/ + diacriticsTop[getRandomInt(0,diacriticsTop.length)];
    }

    //bot
    for(i=bot;i>0;i--){ 
      if(i<1){
        var r=Math.random()
        if(r>i){
          continue;
        }
      }

      ch = ch /*+ '&#x'*/ + diacriticsBot[getRandomInt(0,diacriticsBot.length)];
    }

    //mid
    for(i=mid;i>0;i--){ 
      if(i<1){
        var r=Math.random()
        if(r>i){
          continue;
        }
      }

      ch = ch /*+ '&#x'*/ + diacriticsMid[getRandomInt(0,diacriticsMid.length)];
    }


    final+=ch;
  }

  document.getElementById("yourDiaHolder").style = "display:block;";
  document.getElementById("yourDia").innerHTML = final;
}