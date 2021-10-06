let imgElement = document.getElementById('imageSrc');
let inputElement = document.getElementById('fileInput');
let canvasElement = document.getElementById('canvasOutput')

inputElement.addEventListener('change', (e) => {
  imgElement.src = URL.createObjectURL(e.target.files[0]);
}, false);

imgElement.onload = function () {
  let img = cv.imread(imgElement);
  let startPoint = new cv.Point(180, 265);
  let endPoint = new cv.Point(270, 335);
  let color = [255, 0, 0, 255];
  let text = 'Nariz';
  let font = cv.FONT_HERSHEY_COMPLEX;

  cv.rectangle(img, startPoint, endPoint, color, 2);
  cv.putText(img, text, endPoint, font, 0.7, color, 1)
  // cv.cvtColor(img, img, cv.COLOR_RGB2GRAY)

  console.log('IMG DATA', img.length, img.height, img.width)

  cv.imshow(canvasElement, img);
  img.delete();
};
