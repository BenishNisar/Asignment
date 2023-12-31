
let bd=document.body;
bd.style.margin = "0px";
bd.style.padding = "0px";
function setuppage(what,bd="red"){
    what.style.background=bd;
    what.style.fontSize="2em";

}



// first class






let headone=document.createElement("headone");
headone.innerHTML="Fruit Name ";
headone.style.color="white";
class Fruit{
    constructor(fav,vit,secf,vitt,thd,fou){
        this.fav=fav
        this.vit=vit
        this.secf=secf
        this.vitt=vitt
        this.thd=thd
        this.fou=fou
        

    }
}

const benish=new Fruit("Apple","VitaminC","banana","VitaminC");


// Second Class

let headtwo=document.createElement("headtwo");
headtwo.innerHTML="Vegetable Names";
headtwo.style.color="white";

class Veg{

constructor(vege,veget,vegeth,vegef){
    this.vege=vege
    this.veget=veget
    this.vegeth=vegeth
    this.vegef=vegef

}

}

const vegetable=new Veg("Parrot","Carrot","Bringal","tomato","onion");


let headthree=document.createElement("headthree");
headthree.innerHTML="Players";
headthree.style.color="white";


// third
class  Play{
    constructor(playone,playtwo,playthree,playfour){
        this.playone=playone
        this.playtwo=playtwo
        this.playthree=playthree
        this.playfour=playfour

}
}


const player=new Play("Messi","Ronadlo","pele","johan");


let headfour=document.createElement("headfour");
headfour.innerHTML="Sports";
headfour.style.color="white";

class  Spor{
    constructor(sportone,sporttwo,sportthree,sportfour){
        this.sportone=sportone
        this.sporttwo=sporttwo
        this.sportthree=sportthree
        this.sportfour=sportfour

}
}


const sport=new Spor("Cricket","Football","Batminton","Wrestling");



let headfive=document.createElement("headtwo");
headfive.innerHTML="Education";
headfive.style.color="white";

class  Education{
    constructor(education,passingyear){
        this.education=education
        this.passingyear=passingyear
        


}
}


const edu=new Education("MA",2023);

// fifth

bd.appendChild(headfive);
document.write("<br/>",edu.education,"  " ,edu.passingyear,"<br/> ")
bd.appendChild(headfour);
// fourth
document.write("<br/>",sport.sportone," " ,"<br/>",sport.sporttwo,"<br/> ")
bd.appendChild(headthree);
// third
document.write("<br/>",player.playone," " ,"<br/>",player.playtwo,"<br/> ")
bd.appendChild(headtwo);
// second
document.write("<br/>",vegetable.vege,"<br/> ",vegetable.veget,"<br/>")


bd.appendChild(headone);




// first
document.write("<br/>",benish.fav," " ,benish.vit,"<br/> ",benish.secf," ",benish.vitt,"<br/>")


setuppage(bd);
