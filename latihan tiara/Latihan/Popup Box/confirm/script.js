alert('selamat datang');
var lagi = true;

while( lagi === true ){
    var nama = prompt('masukkan nama: ');
    alert('Halo ' + nama);

    lagi = confirm('Coba lagi??');
}

alert('Terimakasih..');