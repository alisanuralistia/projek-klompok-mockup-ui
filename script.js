function ubahDeskripsi() {
    const deskripsi = document.getElementById("deskripsi");
    deskripsi.textContent = "Aku suka ngoding dan ingin jadi web developer profesional!";
}

function ubahBackground() {
    const warna = ["#f5f5f5", "#d0f0c0", "#ffe4e1", "#f0f8ff", "#fffacd"];
    const randomWarna = warna[Math.floor(Math.random() * warna.length)];
    document.body.style.backgroundColor = randomWarna;
}
