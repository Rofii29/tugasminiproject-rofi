const pengirimNama = document.getElementById('pengirim-nama');
const penerimaNama = document.getElementById('penerima-nama');
const judulPesan = document.getElementById('judul-pesan');
const isiPesan = document.getElementById('isi-pesan');

const messageURL = 'data.json'; // Replace with actual file path

fetch(messageURL)
    .then(response => response.json())
    .then(data => {
        pengirimNama.textContent = data.from;
        penerimaNama.textContent = data.to;
        judulPesan.textContent = data.heading;
        isiPesan.textContent = data.body;
    });
