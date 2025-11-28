function tampilkanGambar() {
  const url = document.getElementById("imageUrl").value;
  const output = document.getElementById("output");
  output.innerHTML = ""; // hapus gambar sebelumnya

  if (url) {
    const img = document.createElement("img");
    img.src = url;
    img.alt = "Gambar dari internet";
    img.onerror = function() {
      output.innerHTML = "<p style='color: red;'>URL gambar tidak valid atau gagal dimuat.</p>";
    };
    output.appendChild(img);
  }
}sc
