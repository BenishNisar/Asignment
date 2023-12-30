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

const benish=new Fruit("Apple","VitaminC","banana","VitaminC","Carrot","VitaminA");

document.write(benish.fav," " ,benish.vit,"<br/> ",benish.secf," ",benish.vitt,"<br/>",benish.thd," ",benish.fou,"<br/>")


class Veg{

constructor(vege,veget,vegeth,vegef){
    this.vege=vege
    this.veget=veget
    this.vegeth=vegeth
    this.vegef=vegef

}

}

const vegetable=new Veg("Parrot","Carrot","Bringal","tomato","onion");

document.write(vegetable.vege,vegetable.veget,vegetable.vegeth,vegetable.vegef
    )