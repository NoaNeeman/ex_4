
var aDiv, atext, aImage;

/*classes*/
class Animal {
    constructor(pX, pY) {
        aDiv = document.createElement("div");
        aDiv.style.position = "fixed";
        aDiv.style.top = pX + "px";
        aDiv.style.left = pY + "px";
        atext = document.createElement("p");
        aImage = document.createElement("img");
    }
}

class Elephant extends Animal {
    constructor(pX, pY, pWeight) {   
        super(pX, pY);       
        atext.innerHTML = "The Elephant Weight is: " + pWeight + " kg";
        aImage.src = "./images/img01.jpg";
        aDiv.className = "nonPenguin";
        aDiv.appendChild(aImage);
        aDiv.appendChild(atext);
        document.body.appendChild(aDiv);
	}
}

class Rabbit extends Animal{
    constructor(pX, pY, pSpeed) {
        super(pX, pY);
        atext.innerHTML = "The Rabbit speed is: " + pSpeed + " km/h";
        aImage.src = "./images/img02.jpg";
        aDiv.className = "nonPenguin";
        aDiv.appendChild(aImage);
        aDiv.appendChild(atext);
        document.body.appendChild(aDiv);
    }
}

class Penguin extends Animal{
    constructor(pX, pY, pSwimmingSpeed) {
        super(pX, pY);
        atext.innerHTML = "The Penguin swimming speed is: " + pSwimmingSpeed + " km/h";
        aImage.src = "./images/img03.jpg";
        aDiv.appendChild(aImage);
        aDiv.appendChild(atext);
        document.body.appendChild(aDiv);
    }
}

class ListAnimals {
    constructor(arrA) {
        arrA.forEach((item) => {
            switch (item.type) {
                case "elephant":
                    new Elephant(item.locX, item.locY, item.weight);
                    break;
                case "rabbit":
                    new Rabbit(item.locX, item.locY, item.speed);
                    break;
                case "penguin":
                    new Penguin(item.locX, item.locY, item.swimmingSpeed)
            }
        })
    }
}
/*end of classes*/

new Elephant(5, 10, 780);
new Elephant(200, 280, 660);
new Elephant(260, 10, 660);

let aData = [{"locX":220,"locY":40,"type":"elephant","weight":660},{"locX":20,"locY":240,"type":"rabbit","speed":44},{"locX":410,"locY":40,"type":"penguin","swimmingSpeed":660},{"locX":20,"locY":440,"type":"elephant","weight":660},{"locX":20,"locY":440,"type":"penguin","swimmingSpeed":660}];
console.log(aData);

let animals = new ListAnimals(aData);

//hide all animals except penguin
$("#btn_hide").click(function () {
    $(".nonPenguin").hide();
});

//return hidden animals
$("#btn_show").click(function () {
    $(".nonPenguin").show();
})