// const btns = ['all', 'bag', 'shoe', 'watch', 'camera', 'headphone'];

const btnChars = ['all', 'bag', 'shoe', 'watch', 'camera', 'headphone'];
const btnsWrapper = document.querySelector('.filter-btns');

// btns.map(function (btn) {
//   const btnElement = `<button class = "filter-btn" data-filter="${btn}">${
//     btn.charAt(0).toUpperCase() + btn.slice(1)
//   }</button> `;
//   console.log(btnElement);
// });

btnChars.map(function (btnChar) {
  const modifiedChar = btnChar.charAt(0).toUpperCase() + btnChar.slice(1);

  const btnElement = `<button class="filter-btn" data-filter="${btnChar}">${modifiedChar}</button>`;

  btnsWrapper.insertAdjacentHTML('beforeend', btnElement);
});

// First button add active class
const btns = document.querySelectorAll('.filter-btn');
btns[0].classList.add('active');

// const btns2 = document.querySelectorAll('.submenu > li > a');
// btns2[0].classList.add('active');

// Create images Element

const images = [
  'bag-1.jpg',
  'camera-1.jpg',
  'camera-2.jpg',
  'headphone-1.jpg',
  'headphone-2.jpg',
  'shoe-1.jpg',
  'shoe-2.jpg',
  'watch-1.jpg',
];
const imagesWrapper = document.querySelector('.filter-images');

images.map(function (image) {
  //   console.log(image.split('-')[0]); // {shoe, 1.jpg}
  const imageElement = `
          <div class="filter-image" data-filter="${image.split('-')[0]}">
            <span><img src="images/${image}" alt="" ></span></div>
 `;

  imagesWrapper.insertAdjacentHTML('beforeend', imageElement);
});

const imageElements = document.querySelectorAll('.filter-image');
console.log(imageElements);

// // Filter images

function activateFilter() {
  btns.forEach((btn) => {
    btn.classList.remove('active');
  });
  this.classList.add('active');

  const selectedBtn = this.getAttribute('data-filter');

  // map, filter, reduce 함수는 DOM 요소에 사용할 수 없다.
  // 그래서 array.form()을 사용하여 배열로 전환한다.\

  Array.from(imageElements).filter((imageElement) => {
    imageElement.classList.add('hide');
    // imageElement.classList.remove('show');

    setTimeout(() => {
      if (
        imageElement.getAttribute('data-filter') === selectedBtn ||
        selectedBtn === 'all'
      ) {
        imageElement.classList.remove('hide');
        imageElement.classList.add('show');
      } else {
        imageElement.classList.remove('show');
        imageElement.classList.add('hide');
      }
    }, 100); // 시간 지연함수(promise) : 첫번째 파라미터 = callback function , 두번째 파라미터 = 시간(ms단위)
  });
}

btns.forEach(function (btn) {
  btn.addEventListener('click', activateFilter);
});

// activate light box when click each image

const lightBox = document.querySelector('.light-box');
const overlay = document.querySelector('.overlay');
const showLightBox = (e) => {
  const target = e.currentTarget;
  const selectedImage = target.children[0].children[0].getAttribute('src');
  const categoryName = target.getAttribute('data-filter');
  console.log(categoryName);

  const lightBoxImage = document.querySelector('.light-box-image img');
  const categoryElement = document.querySelector('.title p');

  lightBoxImage.setAttribute('src', selectedImage);
  categoryElement.textContent = categoryName;
  lightBox.style.display = 'block';
  overlay.style.display = 'block';
};

imageElements.forEach((imageElement) => {
  imageElement.addEventListener('click', showLightBox);
});

// close light box

const closeBtn = document.querySelector('.close');

const closeLightBox = () => {
  lightBox.style.display = 'none';
  overlay.style.display = 'none';
};

// closeBtn.addEventListener('click', closeLightBox);
// overlay.addEventListener('click', closeLightBox);

[closeBtn, overlay].forEach((element) =>
  element.addEventListener('click', closeLightBox)
);

// overlay.forEach((element) => element.addEventListener('click', closeLightBox));

// document.querySelector('.category').addEventListener('click', function () {
//   document.querySelectorAll('.lists li').style.display = 'block';
// });

// getAttribute(): 파라미서 속성 값 가져오기
// setAttribute(a, b): a: 속성 이름, b: 변경할 속성 값
// a.textContent = b: a 요소에 b 텍스트 입력

// 화면 좁아지면 카데고리라는 메뉴 나오고
// 누르면 아래로 주르륵

const category = document.querySelector('category');

category.addEventListener('click', function () {});
