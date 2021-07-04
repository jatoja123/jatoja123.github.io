new ClipboardJS('.copy');

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

var bodyParts = ['hands','head','face','connector']
var asciiParts = {
    'hands': [[2],['↵','↵'],['√','√'],['/¯','/¯'],['و','٩'],['ᕙ','ᕗ'],['ผ','ผ'],['┐','┌'],['o','o'],['ლ','ლ'],['¯\\_','_/¯'],['_/¯','¯\\_'],['ง','ง'],['屮','屮'],['ᕦ','ᕥ'],['¯\'-','-\'¯'],['_,-','-,_'],['q','p'],['⟅','⟆'],['つ','つ'],['∩','⊃'],['づ','づ']],
    'head': [[2],['〈','〉'],['∫','∫'],['⇑','⇑'],['‹','›'],['人','人'],['(',')'],['{','}'],['<','>'],['|','|'],['[',']'],['(|','|)'],['((','))'],['<{','}>'],['(# ',' #)'],['༼ ',' ༽']],
    'face': [[1],'ด้้้้้็็็็็้้้้้็็็็็้้้้้็็็็็้้้้้็็็็็้้้้้็็็็็้้้้้็็็็็้้้้้็็็็็้้้้้дด็็็็็้้้้้็็็็้้้้้็็็็็้้้้้็็็็็้้้้้็็็็็้้้้้','⊙_ʖ⊙','´ ͡༎ຶ ͜ʖ ͡༎ຶ ','(-(-.(-.(-.-).-).-)-)','❍ᴥ❍','╥﹏╥','╥_╥','ツ','O_o','҂`_´','͡° ͜ʖ ͡°','●_●',' ̅°̅ ੪ ̅°̅ ','╯°□°','╯°□°╯','°□°',' ͡° ͡°','°>°','ಠ_ಠ','⌐■_■','•_•','^.^','ↈ_ↈ','$-$','owo','*o*','*_*',';-;',';o;','⨕ﾛ⨕','ႎ≏ႎ','စ㐃ဖ','◉⩊◉','⪴╰╯⪳',' ߯ _ ߱'],
    'connector':[[3],' ','-',' - ','=',' = ','~',' ~ ','--','==','=-','-=','=<','>=','/','\\',':','~~','𒉼','⫗','═']
}
var standardEmote=['face','head','hands']
var finalEmoteArray=[];

function GetBodyPart(hasHead, midPos, currBP){
    bodyPartIndex = getRandomInt(1,asciiParts[currBP].length)

    if(asciiParts[currBP][0][0]==2){
        finalEmoteArray.unshift( asciiParts[currBP][bodyPartIndex][0] );
        finalEmoteArray.push( asciiParts[currBP][bodyPartIndex][1] );
    } else if(asciiParts[currBP][0][0]==1){
        finalEmoteArray.splice( midPos,0,asciiParts[currBP][bodyPartIndex])

        if(hasHead){
            finalEmoteArray.splice( midPos-1,0,asciiParts[currBP][bodyPartIndex])
        }
        else { hasHead=true; }
    } else if(asciiParts[currBP][0][0]==3){
        finalEmoteArray.unshift( asciiParts[currBP][bodyPartIndex])
        finalEmoteArray.push( asciiParts[currBP][bodyPartIndex])
    }

    return [hasHead,midPos+1]
}

function GetEmote(standard, bodyPartsMultiplier){

    finalEmoteArray=[];

    if(standard) {
        var midPos=0;
        var hasHead=false;

        for(var i=0;i<standardEmote.length;i++){
            var currBP= standardEmote[i];
            var part = GetBodyPart(hasHead,midPos, currBP);
            hasHead= part[0];
            midPos= part[1];
        }
    }
    else {
        var bodyPartsUsed = getRandomInt(2*bodyPartsMultiplier, (bodyParts.length+1)*bodyPartsMultiplier);

        var midPos=0;
        var hasHead=false;

        for(var i=0;i<bodyPartsUsed;i++){
            var rnd = getRandomInt(0,bodyParts.length);
            var currBP = bodyParts[rnd];
            
            var part = GetBodyPart(hasHead,midPos, currBP);
            hasHead= part[0];
            midPos= part[1];
        }
    }

    return finalEmoteArray.join('');
}

function GenerateNew(){
    var emoteHolder = document.getElementById('yourEmoteHolder');
    var emote = document.getElementById('yourEmote');

    var emoteType = document.getElementById('emoteTypeDropdown').value;

    emoteHolder.style='display:block;';

    if(emoteType==0){
        emote.value = GetEmote(true, 1);
    } else {
        emote.value = GetEmote(false, emoteType);
    }
    
}

