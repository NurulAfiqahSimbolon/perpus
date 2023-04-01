{

    alert('SELAMAT DATANG DI SISTEM INFORMASI PERPUSTAKAAN !');
}


function cekform(){
    nama = document.getElementById("textnama");
    id_anggota = document.getElementById("idagt");
    alamat = document.getElementById("txtalamat");
    jenis_kelamin = document.getElementById("jenkel");
    kelas = document.getElementById("kelas");
    if (nama.value == ""){
        alert("nama tidak boleh kosong");
        nama.focus();
        return false;
    } else if(nama.value.length <= 3){
        alert("nama minimal 3 karakter");
        nama.focus();
        return false;
    } else if(jenis_kelamin.value ==""){
        alert("jenis kelamin belum dipilih");
        jenis_kelamin.focus();
        return false;
    } else if(alamat.value == ""){
        alert("mohon isi alamat anda");
        alamat.focus();
        return false;
    }else if(id_anggota.value == ""){
        alert("mohon isi ID Anggota Anda");
        id_anggota.focus();
        return false;
    }else if(kelas.value == ""){
        alert("mohon isi kelas anda");
        kelas.focus();
        return false;
    }else{
        alert("terima kasih telah mengisi Data Anggota");
        return true;
    }
}