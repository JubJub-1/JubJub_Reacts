export default function JubImage() {
  var element = document.getElementById("image_location");
  var images = [
    "/images/JubJub_1.webp",
    "/images/JubJub_2.webp",
    "/images/JubJub_3.webp",
    "/images/JubJub_4.webp",
    "/images/JubJub_5.webp",
    "/images/JubJub_6.webp",
    "/images/JubJub_7.webp",
    "/images/JubJub_8.webp",
    "/images/JubJub_9.webp",
    "/images/JubJub_10.webp",
    "/images/JubJub_11.webp",
    "/images/JubJub_12.webp",
    "/images/JubJub_13.webp",
    "/images/JubJub_14.webp",
    "/images/JubJub_15.webp",
    "/images/JubJub_16.webp",
    "/images/JubJub_17.webp",
  ];

  var size = images.length;
  var x = Math.floor(size * Math.random());

  return <img id="image_location" src={images[x]} alt="JubJub" />;
}
