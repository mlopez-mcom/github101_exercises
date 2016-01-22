// reptile model
function reptile (name, breed, age, sound, imgUrl) {
    this.name = name;
    this.breed = breed;
    this.age = age;
    this.sound = sound;
    this.imgUrl = imgUrl;
}

// reptile Instances
var mrSlither = new reptile('Mr.Slither', 'anaconda', 4, '"Sssss!"', 'http://www.iflscience.com/sites/www.iflscience.com/files/styles/ifls_large/public/blog/[nid]/800px-Anaconda_Loreto_Peru.jpg?itok=Fv2UBrHL');
var msWallflower = new reptile('Ms.Wallflower', 'gecko', 0,'"whatever sound geckos make"','http://bransonswildworld.com/wp-content/uploads/2013/05/Day-Gecko.jpg');
var oliver = new reptile('Oliver','lizard',0, '"noise of scurrying lizard"', 'http://www.iberianature.com/material/photos/spain_wildlife/Ocellated-Lizard.jpg');

// reptile Array
var reptileArray = [mrSlither, msWallflower, oliver];

//Output to HTML
for (i=0;i < reptileArray.length; i++) {
        name = reptileArray[i].name,
        img = reptileArray[i].imgUrl,
        breed = reptileArray[i].breed,
        sound = reptileArray[i].sound;
        var animalDiv = document.createElement('div');
        animalDiv.className = 'animalContainer';
        animalDiv.innerHTML = '<div class="animalContent"><img class="animalImg" src="'+img+'" /><p class="name">'+name+'</p><p class="breed">'+breed+'</p><p class="sound">'+sound+'</p></div>';
        var sectionContainer = document.getElementById('reptiles');
        sectionContainer.appendChild(animalDiv);
}






