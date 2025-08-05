let currentIndex = 0;
let images = [];

function openLightbox(imgElement) {
  const allImages = document.querySelectorAll('.gallery .image img');
  images = Array.from(allImages);
  currentIndex = images.indexOf(imgElement);

  document.getElementById('lightbox-img').src = imgElement.src;
  document.getElementById('lightbox').style.display = 'flex';
}

function closeLightbox() {
  document.getElementById('lightbox').style.display = 'none';
}

function changeImage(step) {
  currentIndex = (currentIndex + step + images.length) % images.length;
  document.getElementById('lightbox-img').src = images[currentIndex].src;
}

function filterGallery(category) {
  const items = document.querySelectorAll('.gallery .image');
  items.forEach(item => {
    if (category === 'all' || item.classList.contains(category)) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}
