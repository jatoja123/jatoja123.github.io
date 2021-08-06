function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

function copyEpiText() {
    var copyText = document.querySelector("#yourEpi");
    copyText.select();
    document.execCommand("copy");
}

function getFromDict(dict,pierwsze=false,ostatnie=false,czyEpitet=false){
    var sum=0;
    for(var i=0;i<dict.length;i++){
        sum+=dict[i][1];
    }

    var rnd = getRandomInt(0,sum);
    var indx=0;

    if(sum<=rnd){
        return dict[indx][0];
    }
    while(sum>0){
        sum-=dict[indx][1];
        if(sum<=rnd){
            var final = dict[indx][0];

            if(czyEpitet){
                if(pierwsze){
                    var r = getRandomInt(0,100);
                    
                    if(r<=80 && final != "Moja"){                    
                        final="Ma "+final;
                    } else if(r<=80 && final == "Moja"){
                        final=final+" ty";
                    }

                    //console.log("first, "+r);
                }
                else if(ostatnie==false){
                    var chnc=40;
                    var r = getRandomInt(0,100);

                    //console.log("not last\n - r1 "+r);

                    if(r<=chnc){                    
                        final += " ty"
                    } else {
                        r = getRandomInt(0,100);
                        //console.log(" - r2 "+r);

                        if(r<=chnc){                    
                            final = "ty "+final
                        } else {
                            r = getRandomInt(0,100);
                            //console.log(" - r3 "+r);
    
                            if(r<=chnc){                    
                                final = "bardzo "+final
                            }
                        }
                    }
                }
            } 

            return final;
        }
        indx++;
    }
    return "ERRROORRRRR!!!!";
}

var listy={
"Godnosc" : [
    ['Pani' , 1],
    ['Panno' , 2],
    ['Panienko' , 2],
    ['Damo' , 1],
    ['Dameczko' , 1]
],
"Imie" : [
    ['Maju' , 2],
    ['Majo' , 3],
    ['Majcio',3],
    ['Majeńko' , 4],
    ['Majeczko' , 4],
    ['Majusio' , 2],
    ['Majunio' , 2],
    ['Mayeczko' , 1],
    ['Mayo' , 1],
    ['Majko', 1],
],
"Animizacja" : [
    ['Pszczółko' , 3],
    ['Pszczółeczko' , 3],
    ['Pszczółeńko' , 3],
    ['Pszczółunio' , 2],
    ['Pszczółusio' , 2],
    ['Dziewczyneczko' , 2],
    ['Dziewczyko' , 1],
],
"Epitet" : [
    ['Moja' , 11],
    ['Miła' , 6],
    ['Mała' , 6],
    ['Malutka' , 4],
    ['Malusia' , 1],
    ['Milutka' , 3],
    ['Miłusia' , 1],
    ['Mądra' , 2],
    ['Mądrutka' , 2],
    ['Mądrusia' , 1],
    ['Młoda', 1],
    ['Młodziutka' , 1],
    ['Młodziusia' , 1],
    ['Słodka', 2],
    ['Słodziutka', 1],
    ['Słodziusia', 1],
    ['Urocza', 2],
    ['Niziutka', 1],
    ['Nie za wysoka', 1],
    ['Całkiem Przyjemna', 2],
    ['Fajna', 1],
    ['Fajniutka', 2]
],
}

var Zyczenia = {
    0: 
    [
        ['',1],
    ],
    1: 
    [
        ['Dobranoc 😴, ' , 4],
        ['Dobrej nocy 🌃, ' , 2],
        ['Słodkich snów 💤, ' , 1],
        ['Kolorowych snów 🌉, ' , 1],
    ],
    2: [
        ['Dzień dobry 🌇, ' , 6],
        ['Pobudka 😴, ' , 1],
        ['Ciepłego poranka ☀️, ' , 2],
    ],
    3: [
        ['Smacznego 🍯, ' , 3],
        ['Pysznego jedzonka 🥣, ' , 1],
    ],
}

  
function GenerateEpitet(){
    var wynik= "";
    var iloscSkladowych = getRandomInt(1,5);
    var Skladowe = ['Godnosc','Imie','Animizacja','Epitet','Epitet']

    // 0 brak, 1 dobranoc, 2 dzień dobry, 3 smacznego
    var epitetType = document.getElementById('epiTypeDropdown').value;  

    //console.log('--------');
    //console.log(iloscSkladowych);

    wynik += getFromDict(Zyczenia[epitetType],false,false,false);     

    for(var i=0;i<iloscSkladowych;i++){
        currS = Skladowe[getRandomInt(0,Skladowe.length)];

        //console.log(currS+" i: "+i);

        if(i==0) var pierwsze = true;
        else var pierwsze = false;
        if(i==iloscSkladowych-1) var ostatnie=true;
        else var ostatnie=false;
        if(currS=="Epitet") var czyEpitet=true;
        else var czyEpitet=false;

        wynik+=getFromDict(listy[currS],pierwsze,ostatnie,czyEpitet)+" ";

        //delete item
        const index = Skladowe.indexOf(currS);
        if (index > -1) {
            Skladowe.splice(index, 1);
        }
    }

    wynik+="🐝";

    document.getElementById("yourEpiHolder").style = "display,block;";
    document.getElementById("yourEpi").value = wynik;
}