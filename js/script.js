document.getElementById('message-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const birthdate = document.getElementById('birthdate').value;
    const gender = document.querySelector('input[name="gender"]:checked')?.value || "Tidak diketahui";
    const message = document.getElementById('message').value;
    const currentTime = new Date().toString();

    document.getElementById('current-time').innerText = `Current time: ${currentTime}`;
    document.getElementById('submitted-info').innerHTML = `
        Nama: ${name}<br>
        Tanggal Lahir: ${birthdate}<br>
        Jenis Kelamin: ${gender}<br>
        Pesan: ${message}
    `;
});
