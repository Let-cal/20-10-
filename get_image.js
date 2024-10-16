// Tạo danh sách các ảnh
const images = [
  "image/album_my_koibito/MyDarling.jpg",
  "image/album_my_koibito/anh1.jpg",
  "image/album_my_koibito/anh2.jpg",
  "image/album_my_koibito/anh3.jpg",
  "image/album_my_koibito/anh4.jpg",
  "image/album_my_koibito/anh5.jpg",
  "image/album_my_koibito/anh6.jpg",
  "image/album_my_koibito/anh7.jpg",
  "image/album_my_koibito/anh8.jpg",
  "image/album_my_koibito/anh9.jpg",
  "image/album_my_koibito/anh10.jpg",
  "image/album_my_koibito/anh11.jpg",
  "image/album_my_koibito/anh12.jpg",
  "image/album_my_koibito/anh13.jpg",
  "image/album_my_koibito/anh14.jpg",
  "image/album_my_koibito/anh15.jpg",
  "image/album_my_koibito/anh16.jpg",
  "image/album_my_koibito/anh17.jpg",
  "image/album_my_koibito/anh18.jpg",
  "image/album_my_koibito/anh19.jpg",
  "image/album_my_koibito/anh20.jpg",
  "image/album_my_koibito/anh21.jpg",
  "image/album_my_koibito/anh22.jpg",
  "image/album_my_koibito/anh23.jpg",
  "image/album_my_koibito/anh24.jpg",
  "image/album_my_koibito/anh25.jpg",
  "image/album_my_koibito/anh26.jpg",
  "image/album_my_koibito/anh27.jpg",
  "image/album_my_koibito/anh28.jpg",
  "image/album_my_koibito/anh29.jpg",
  "image/album_my_koibito/anh30.jpg",
  "image/album_my_koibito/anh31.jpg",
  "image/album_my_koibito/anh32.jpg",
  "image/album_my_koibito/anh33.jpg",
  "image/album_my_koibito/anh34.jpg",
  "image/album_my_koibito/anh35.jpg",
  "image/album_my_koibito/anh36.jpg",
  "image/album_my_koibito/anh37.jpg",
  "image/album_my_koibito/anh38.jpg",
  "image/album_my_koibito/anh39.jpg",
  "image/album_my_koibito/anh40.jpg",
  "image/album_my_koibito/anh41.jpg",
  "image/album_my_koibito/anh42.jpg",
  "image/album_my_koibito/anh43.jpg",
  "image/album_my_koibito/anh44.jpg",
  "image/album_my_koibito/anh45.jpg",
  "image/album_my_koibito/anh46.jpg",
  "image/album_my_koibito/anh47.jpg",
  "image/album_my_koibito/anh48.jpg",
  "image/album_my_koibito/anh49.jpg",
  "image/album_my_koibito/anh50.jpg",
  "image/album_my_koibito/anh51.jpg",
  "image/album_my_koibito/anh52.jpg",
  "image/album_my_koibito/anh53.jpg",
  "image/album_my_koibito/anh54.jpg",
  "image/album_my_koibito/anh55.jpg",
  "image/album_my_koibito/anh56.jpg",
  "image/album_my_koibito/anh57.jpg",
  "image/album_my_koibito/anh58.jpg",
  "image/album_my_koibito/anh59.jpg",
  "image/album_my_koibito/anh60.jpg",
  "image/album_my_koibito/anh61.jpg",
  "image/album_my_koibito/anh62.jpg",
  "image/album_my_koibito/anh63.jpg",
  "image/album_my_koibito/anh64.jpg",
  "image/album_my_koibito/anh65.jpg",
  "image/album_my_koibito/anh66.jpg",
  "image/album_my_koibito/anh67.jpg",
  "image/album_my_koibito/anh68.jpg",
  "image/album_my_koibito/anh69.jpg",
  "image/album_my_koibito/anh70.jpg",
  "image/album_my_koibito/anh71.jpg",
  "image/album_my_koibito/anh72.jpg",
];

// Chọn thẻ img trong thẻ div avt
const avtImg = document.querySelector(".avt img");

// Khởi tạo chỉ số ảnh hiện tại
let currentIndex = 0;

// Hàm để thay đổi ảnh
function changeImage() {
  // Cập nhật src của ảnh
  avtImg.src = images[currentIndex];
  // Tăng chỉ số, nếu vượt quá số lượng ảnh thì quay lại ảnh đầu tiên
  currentIndex = (currentIndex + 1) % images.length;
}

// Gọi hàm changeImage mỗi 1 giây (1000ms)
setInterval(changeImage, 1500);
