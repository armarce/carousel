const images = [
                'https://eu2.contabostorage.com/206b9c3284cb4dabafdf5bf6ec21e929:images/carousel/1.webp',
                'https://eu2.contabostorage.com/206b9c3284cb4dabafdf5bf6ec21e929:images/carousel/2.webp',
                'https://eu2.contabostorage.com/206b9c3284cb4dabafdf5bf6ec21e929:images/carousel/3.jpg',
                'https://eu2.contabostorage.com/206b9c3284cb4dabafdf5bf6ec21e929:images/carousel/4.webp',
                'https://eu2.contabostorage.com/206b9c3284cb4dabafdf5bf6ec21e929:images/carousel/5.jpg',
                'https://eu2.contabostorage.com/206b9c3284cb4dabafdf5bf6ec21e929:images/carousel/camels-gd86999c00_1280.jpg',
                'https://eu2.contabostorage.com/206b9c3284cb4dabafdf5bf6ec21e929:images/carousel/foz-do-iguacu-g1190e905d_1280.jpg',
                'https://eu2.contabostorage.com/206b9c3284cb4dabafdf5bf6ec21e929:images/carousel/grassland-gff1701c43_1280.jpg',
                'https://eu2.contabostorage.com/206b9c3284cb4dabafdf5bf6ec21e929:images/carousel/iceland-gf4872b4df_1280.jpg',
                'https://eu2.contabostorage.com/206b9c3284cb4dabafdf5bf6ec21e929:images/carousel/netherlands-gf2ab7325d_1280.jpg',
                'https://eu2.contabostorage.com/206b9c3284cb4dabafdf5bf6ec21e929:images/carousel/norway-ge6d1df026_1280.jpg',
                'https://eu2.contabostorage.com/206b9c3284cb4dabafdf5bf6ec21e929:images/carousel/row-houses-g56486a6f6_1280.jpg',
                'https://eu2.contabostorage.com/206b9c3284cb4dabafdf5bf6ec21e929:images/carousel/village-ge2ada5f99_1280.jpg',
                'https://eu2.contabostorage.com/206b9c3284cb4dabafdf5bf6ec21e929:images/carousel/winter-landscape-g570cb6895_1280.jpg'
                ];
const total = images.length;

const img = document.getElementById('img');
const nav = document.querySelector('nav');
const back = document.querySelector('#back');
const next = document.querySelector('#next');

let getListImg = (images) => {

    let html = '';

    let i = 0;
    
    while(i < images.length){

        html += `<a href="#" onclick="getImg(${i})">${++i}</a>`;

    }

    nav.innerHTML = html;

}

let getImg = (index) => {

    localStorage.setItem('index', index);
    
    img.innerHTML = `<img class="fade-in" src="${images[index]}"/>`;

    index == 0 ? back.style.display = 'none': back.style.display = 'block';

    index == total - 1 ? next.style.display = 'none': next.style.display = 'block';
    
}

next.addEventListener('click', () => {

    let index = Number(localStorage.getItem('index')) + 1;

    getImg(index);

});

back.addEventListener('click', () => {

    let index = Number(localStorage.getItem('index')) - 1;

    getImg(index);

});

getImg(0);

getListImg(images);