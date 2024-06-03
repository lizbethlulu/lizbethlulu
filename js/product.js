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

let popupContainer = document.querySelector('.food-popup');
let popupBox = popupContainer.querySelectorAll('.popup');

document.querySelectorAll('.food-box .food').forEach(food =>{
    food.onclick = () =>{
     popupContainer.style.display = 'flex';
        let name = food.getAttribute('data-name');
        popupBox.forEach(popup =>{
            let target = popup.getAttribute('data-target');
            if(name == target){
                popup.classList.add('active');
            }
        });
    };
});

popupBox.forEach(close =>{
    close.querySelector('.bx-x').onclick = () =>{
        close.classList.remove('active');
        popupContainer.style.display = 'none';
    }
});

let popupTruck = document.querySelector('.ftruck-popup');
let popupSmallTruck = popupTruck.querySelectorAll('.fpopup');

document.querySelectorAll('.food-truck .ftruck').forEach(ftruck =>{
    ftruck.onclick = () =>{
     popupTruck.style.display = 'flex';
        let name_2 = ftruck.getAttribute('data-name');
        popupSmallTruck.forEach(fpopup =>{
            let target_2 = fpopup.getAttribute('data-target');
            if(name_2 == target_2){
                fpopup.classList.add('active');
            }
        });
    };
});

popupSmallTruck.forEach(close =>{
    close.querySelector('.bx-x').onclick = () =>{
        close.classList.remove('active');
        popupTruck.style.display = 'none';
    }
});

let popupaTruck = document.querySelector('.atruck-popup');
let popupSmallaTruck = popupaTruck.querySelectorAll('.apopup');

document.querySelectorAll('.appetizer-truck .atruck').forEach(atruck =>{
    atruck.onclick = () =>{
     popupaTruck.style.display = 'flex';
        let name_3 = atruck.getAttribute('data-name');
        popupSmallaTruck.forEach(apopup =>{
            let target_3 = apopup.getAttribute('data-target');
            if(name_3 == target_3){
                apopup.classList.add('active');
            }
        });
    };
});

popupSmallaTruck.forEach(close =>{
    close.querySelector('.bx-x').onclick = () =>{
        close.classList.remove('active');
        popupaTruck.style.display = 'none';
    }
});