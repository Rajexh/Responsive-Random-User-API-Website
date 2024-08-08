var randomname, randomlocation,randomemail,randomdob,randompassword,randomphone;
var img=document.getElementById("image");
var nameElement=document.getElementById("random-name");
var descElement=document.getElementById("ran-name");
var iconElement=document.querySelectorAll(".fa-regular");
var iconpartElement=document.querySelectorAll(".fa-solid");


document.addEventListener("DOMContentLoaded",generateUser);
function generateUser() {
    fetch("https://randomuser.me/api/")
        .then((response) => response.json())
        .then((data) => {
            const user = data.results[0];
            img.src = user.picture.large;
            randomname=`${user.name.first} ${user.name.last}`;
            randomemail=`${user.email}`;
            randomdob=`${user.dob.date}`;
            randomlocation=`${user.location.street.number} ${user.location.street.name}`;
            randomphone=`${user.phone}`;
            randompassword=`${user.login.password}`;
            nameElement.innerText="Hi, My name is";
            descElement.innerText=randomname;
            iconElement[0].style.color="green";
            
        })
        .catch((error) => {
            console.error("Error fetching user:", error);
        });
}
iconElement[1].addEventListener('mouseover',generateemail)

function generateemail(){
            nameElement.innerText="My email address is"
            descElement.innerText=randomemail;
            iconElement[0].style.color="rgba(128, 128, 128, 0.503)";
            iconElement[2].style.color="rgba(128, 128, 128, 0.503)";
            iconElement[1].style.color="green";
    iconpartElement[0].style.color="rgba(128, 128, 128, 0.503)";
    iconpartElement[1].style.color="rgba(128, 128, 128, 0.503)";
    iconpartElement[2].style.color="rgba(128, 128, 128, 0.503)";



}

iconElement[2].addEventListener('mouseover',generatedob)

function generatedob(){
    nameElement.innerText="My birthday is";
    descElement.innerText=randomdob;
    iconElement[0].style.color="rgba(128, 128, 128, 0.503)";
    iconElement[1].style.color="rgba(128, 128, 128, 0.503)";
    iconElement[2].style.color="green";
    iconpartElement[0].style.color="rgba(128, 128, 128, 0.503)";
    iconpartElement[1].style.color="rgba(128, 128, 128, 0.503)";
    iconpartElement[2].style.color="rgba(128, 128, 128, 0.503)";


}

iconpartElement[0].addEventListener('mouseover',generatelocation)

function generatelocation(){
    nameElement.innerText="My address is";
    descElement.innerText=randomlocation;
    iconpartElement[0].style.color="green";
    iconElement[0].style.color="rgba(128, 128, 128, 0.503)";
    iconElement[1].style.color="rgba(128, 128, 128, 0.503)";
    iconElement[2].style.color="rgba(128, 128, 128, 0.503)";

    iconpartElement[1].style.color="rgba(128, 128, 128, 0.503)";
    iconpartElement[2].style.color="rgba(128, 128, 128, 0.503)";


    
}

iconpartElement[1].addEventListener('mouseover',generatePhone)

function generatePhone(){
    nameElement.innerText="My phone number is";
    descElement.innerText=randomphone;
    iconpartElement[1].style.color="green";
    iconpartElement[0].style.color="rgba(128, 128, 128, 0.503)";
    iconpartElement[2].style.color="rgba(128, 128, 128, 0.503)";
    iconElement[0].style.color="rgba(128, 128, 128, 0.503)";
    iconElement[1].style.color="rgba(128, 128, 128, 0.503)";
    iconElement[2].style.color="rgba(128, 128, 128, 0.503)";


}

iconpartElement[2].addEventListener('mouseover',generatePassword)

function generatePassword(){
    nameElement.innerText="My password is";
    descElement.innerText=randompassword;
    iconpartElement[2].style.color="green";
    iconpartElement[1].style.color="rgba(128, 128, 128, 0.503)";
    iconElement[0].style.color="rgba(128, 128, 128, 0.503)";
    iconElement[1].style.color="rgba(128, 128, 128, 0.503)";
    iconElement[2].style.color="rgba(128, 128, 128, 0.503)";

}

iconElement[0].addEventListener('mouseover',generateName)

function generateName(){
    nameElement.innerText="Hi, My name is";
    descElement.innerText=randomname;
    iconElement[0].style.color="green";
    iconElement[1].style.color="rgba(128, 128, 128, 0.503)";
    iconElement[2].style.color="rgba(128, 128, 128, 0.503)";
    iconpartElement[0].style.color="rgba(128, 128, 128, 0.503)";
    iconpartElement[1].style.color="rgba(128, 128, 128, 0.503)";
    iconpartElement[2].style.color="rgba(128, 128, 128, 0.503)";

}