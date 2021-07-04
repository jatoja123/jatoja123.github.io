function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}
function generate(){
  text = document.getElementById('char').value;

  chaos=document.getElementById('height').value 
  final="";

  min=768
  max=879
  diacritics=['']

  for(var j=0;j<text.length;j++){
      var ch=text[j]

    for(i=0;i<Math.ceil(chaos);i++){ 
      if(chaos<1){
        var r=Math.random()
        console.log(r)
        if(r>chaos){
          console.log("c! ",chaos)
          continue;
        }
      }

      ch = ch + "&#x"+ getRandomInt(min,max).toString(16)
    }
    
    final+=ch
    }

  document.getElementById("demo").innerHTML = final;

}//draw
function copyTextToClipboard(text) {
  var textArea = document.createElement("textarea");

 
  textArea.style.position = 'fixed';
  textArea.style.top = 0;
  textArea.style.left = 0;
  textArea.style.width = '2em';
  textArea.style.height = '2em';
  textArea.style.padding = 0;
  textArea.style.border = 'none';
  textArea.style.outline = 'none';
  textArea.style.boxShadow = 'none';
  textArea.style.background = 'transparent';
  textArea.value = text;
  document.body.appendChild(textArea);
  textArea.select();
  try {
    var successful = document.execCommand('copy');
    var msg = successful ? 'successful' : 'unsuccessful';
    console.log('Copying text command was ' + msg);
    alert("Successfuly copied the text");
  } catch (err) {
    console.log('Oops, unable to copy');
    alert("Error copying.");
  }

  document.body.removeChild(textArea);
}


var copyBobBtn = document.querySelector('.js-copy-bob-btn');

copyBobBtn.addEventListener('click', function(event) {
  copyTextToClipboard(document.getElementById('demo').innerHTML);
});
window.onload=generate()