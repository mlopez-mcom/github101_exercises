// Dog model
function Hamster (name, age, sound, imgUrl) {
    this.name = name;
    this.age = age;
    this.sound = sound;
    this.imgUrl = imgUrl;
}

// Hamster Instances
var hamtaro = new Hamster('Hamtaro', 14, 'squeeeeeeeek','http://vignette3.wikia.nocookie.net/hamtaro/images/4/49/Hamtaro_1.gif/revision/latest?cb=20131213011144');
var snakefood = new Hamster('Snakefood', 7, 'munch munch!','http://eagnews.org/wp-content/uploads/2015/05/scared-hamster.jpg' );


// Hamster Array
var hamsterArray = [hamtaro, snakefood];

//Output to HTML
for (i=0;i < hamsterArray.length; i++) {
        name = hamsterArray[i].name,
        img = hamsterArray[i].imgUrl,
        sound = hamsterArray[i].sound;
        var animalDiv = document.createElement('div');
        animalDiv.className = 'animalContainer'
        animalDiv.innerHTML = '<div class="animalContent"><img class="animalImg" src="'+img+'" /><p class="name">'+name+'</p><p class="sound">'+sound+'</p></div>';
        var sectionContainer = document.getElementById('hamsters');
        sectionContainer.appendChild(animalDiv);
}

