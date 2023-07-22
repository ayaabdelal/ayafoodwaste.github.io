const imageFilenames = ['images/melon.png', 'images/apple.png', 'images/banana.png', 'images/carrot.png', 'images/egg.png', 'images/fish.png', 'images/chicken.png']; // Add your image filenames here

function dropImage() {
  const droppedImage = document.createElement('img');
  const randomImageIndex = Math.floor(Math.random() * imageFilenames.length);

  droppedImage.src = imageFilenames[randomImageIndex];
  droppedImage.alt = 'Dropped Image';
  droppedImage.classList.add('dropped-image');

  // Set a random horizontal position for the dropped image
  const randomLeft = Math.random() * (window.innerWidth - droppedImage.width);
  droppedImage.style.left = randomLeft + 'px';

  // Set a random initial vertical position for the dropped image
  const randomTop = -Math.random() * (window.innerHeight * 0.5); // Adjust 0.5 for how high you want the image to start from
  droppedImage.style.top = randomTop + 'px';

  document.body.appendChild(droppedImage);

  // Delay adding the opacity and vertical position to create a smooth drop effect
  setTimeout(() => {
    droppedImage.style.opacity = '1';
    droppedImage.style.transform = `translateY(${window.innerHeight - droppedImage.height}px)`;
  }, 100);
}
