const picture1 = [
  1, 0, 0, 0, 0, 0, 0, 0,
  1, 0, 0, 0, 0, 0, 0, 0,
  1, 0, 0, 0, 0, 0, 0, 0,
  1, 0, 0, 0, 0, 0, 0, 0,
  1, 0, 0, 0, 0, 0, 0, 0,
  1, 0, 0, 0, 0, 0, 0, 0,
  1, 0, 0, 0, 0, 0, 0, 0,
  1, 1, 1, 1, 1, 1, 1, 1,
];

// const picture2 = [
//   1, 1, 1, 1, 1, 1, 1, 1,
//   1, 0, 0, 0, 0, 0, 0, 1,
//   1, 0, 0, 0, 0, 0, 0, 1,
//   1, 0, 0, 0, 0, 0, 0, 1,
//   1, 0, 0, 0, 0, 0, 0, 1,
//   1, 0, 0, 0, 0, 0, 0, 1,
//   1, 0, 0, 0, 0, 0, 0, 1,
//   1, 1, 1, 1, 1, 1, 1, 1,
// ];

const picture2 = [
  1, 0, 0, 0, 0, 0, 0, 0,
  1, 0, 0, 0, 0, 0, 0, 0,
  1, 0, 0, 0, 0, 0, 0, 0,
  1, 0, 0, 0, 0, 0, 0, 0,
  1, 0, 0, 0, 0, 0, 0, 0,
  1, 0, 0, 0, 0, 0, 0, 0,
  1, 0, 0, 0, 0, 0, 0, 0,
  1, 1, 1, 1, 1, 1, 1, 1,
];

window.onload = () => {
  let wagi = new Array(64 * 64);
  let s = new Array(64);
  let wynik = new Array(64);

  // Ustawianie wartości wag
  for (let i = 0; i < 64; i++) {
    for (j = 0; j < 64; j++) {
      if (i === j) wagi[i * 64 + j] = 0;
      else wagi[i * 64 + j] = (2 * picture1[i] - 1) * (2 * picture1[j] - 1);
    }
  }

  // Ustawianie wartości s
  for (let i = 0; i < 64; i++) {
    for (j = 0; j < 64; j++) {
      s[i] = picture2[i] * wagi[i * 64 + j];
    }
  }

  // Ustawianie wartości wyniku
  for (let i = 0; i < 64; i++) {
    if (s[i] == 0) wynik[i] = picture2[i];
    else if (s[i] < 0) wynik[i] = 0;
    else if (s[i] > 0) wynik[i] = 1;
  }

  console.log(picture1, wynik);
  console.log(compareArrays(picture1, wynik));

  renderPicture(picture1, "start");
  renderPicture(wynik, "wynik");
};

const compareArrays = (a1, a2) =>
  a1.length == a2.length && a1.every((element, index) => element === a2[index]);

const renderPicture = (arr, elementId) => {
  const pictureWrapperRef = document.getElementById(elementId);
  arr.forEach((element, index) => {
    const pixel = document.createElement("div");
    if (element != 0) pixel.classList.add("black");

    if (index % 8 == 0)
      pictureWrapperRef.appendChild(document.createElement("br"));
    pictureWrapperRef.appendChild(pixel);
  });
};