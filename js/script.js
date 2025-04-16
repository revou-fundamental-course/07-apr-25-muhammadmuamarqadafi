function validateForm() {
  const forms = document.forms["contact-us"];
  const nama = forms["nama"].value;
  const tanggalLahir = forms["tanggal-lahir"].value;
  const jenisKelamin = forms["jenis-kelamin"].value;
  const pesan = forms["pesan"].value;

if(!nama || !tanggalLahir || !jenisKelamin || !pesan ){
  alert('input tidak boleh kosong')
  return
}

  const hasil = document.getElementById("hasil");
  console.log(hasil);
  hasil.innerHTML = `
<p>nama:${nama}</p>
<p>tanggal lahir:${tanggalLahir}</p>
<p>jenis kelamin:${jenisKelamin}</p>
<p>pesan:${pesan}</p>
`;
}

document.getElementById("form").addEventListener("submit", (e) => {
  e.preventDefault();
  validateForm();
});
