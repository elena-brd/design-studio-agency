const toggleBtn = document.querySelector('.toggle');
const navigation = document.querySelector('.navigation');

function displayMenu() {
    toggleBtn.classList.toggle('active');
    navigation.classList.toggle('active');
}

toggleBtn.addEventListener('click', displayMenu);