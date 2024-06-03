// toggle class active hamburger menu
const menuBar = document.querySelector('.menu-bar');
//toggle class active search
// ketika hamburger menu diklik
document.querySelector('#hamburger_menu').onclick = () => {
    menuBar.classList.toggle('active');
};
const searchForm = document.querySelector('.search_form');
const searchBox = document.querySelector('#search-box');
// ketika search-button diklik
document.querySelector('#search-button').onclick = () => {
    searchForm.classList.toggle('active');
    searchBox.focus();
};
//klik diluar elemen
const hm = document.querySelector('#hamburger_menu');
const sb = document.querySelector('#search-button');

document.addEventListener('click', function(e) {
    if(!hm.contains(e.target) && !menuBar.contains(e.target)){
        menuBar.classList.remove('active');
    }
    if(!sb.contains(e.target) && !searchForm.contains(e.target)){
        searchForm.classList.remove('active');
    }
});

function angka(e) {
    if (!/^[0-9]+$/.test(e.value)) {
       e.value = e.value.substring(0,e.value.length-1);
    }
 }

function val(){
    let name = document.getElementById("name")
    let email = document.getElementById("email")
    let phone = document.getElementById("phone")
    let option= document.getElementById("option")
    let newslatter = document.getElementById("newslatter")

    if(name.value == ""){
        alert("name coloum must be filled!")
    }
    else if(name.value.length <= 5){
        alert("name must be more than just five characters!")
    }
    else if(email.value == ""){
        alert("email coloumn must be filled!")
    }
    else if(!email.value.endsWith("@gmail.com")){
        alert("the content must be an email address format!")
    }
    else if(phone.value == ""){
        alert("number coloumn must be filled!")
    }
    // || !phone.value.startsWith("08")
    else if(!phone.value.startsWith("62")){
        alert("Please use 62 at first!")
    }
    else if(option.selectedIndex < 1){
        alert("Please kindly choose one of option!")
    }
    else if(!newslatter.checked){
        alert("the checkbox must be agreed")
    }
    else {
        alert("Data has been saved sucessfully!")
    }

}
