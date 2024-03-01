let cl = console.log;

const carGallery = document.getElementById('filterCargallery');
const allCar = [...document.querySelectorAll('.car')];

const onSelectCarGallery = (eve) => {
    let selectCar = eve.target.value;
    cl(selectCar);
    allCar.forEach(car => {
        car.classList.add('d-none');
    });
    const carImg = document.querySelectorAll('.'+selectCar);
    carImg.forEach(car => {
        car.classList.remove('d-none')
    });
}

carGallery.addEventListener('change',onSelectCarGallery)