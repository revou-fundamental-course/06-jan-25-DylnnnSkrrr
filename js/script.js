let currentIndex = 0;
const slides = document.querySelector('.slides');
const totalSlides = slides.children.length;

function showNextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides; // Loop kembali ke slide pertama
    const offset = currentIndex * -100;
    slides.style.transform = `translateX(${offset}%)`;
}

// Panggil fungsi setiap 3 detik
setInterval(showNextSlide, 3000);


document.getElementById('message-form').addEventListener('submit', function (e) {
    console.log('Form submitted!'); // Debug log
    e.preventDefault();

    // Ambil nilai input
    const name = document.getElementById('name').value;
    const birthdate = document.getElementById('birthdate').value;
    const gender = document.querySelector('input[name="gender"]:checked')?.value || "Tidak diketahui";
    const message = document.getElementById('message').value;

    // Debug log untuk memeriksa nilai
    console.log({ name, birthdate, gender, message });

    // Tampilkan data di div hasil
    document.getElementById('submitted-info').innerHTML = `
        <p><strong>Nama:</strong> ${name}</p>
        <p><strong>Tanggal Lahir:</strong> ${birthdate}</p>
        <p><strong>Jenis Kelamin:</strong> ${gender}</p>
        <p><strong>Pesan:</strong> ${message}</p>
    `;
});
