var jmlAngkot = 10;
var angkotBeroperasi = 6;

for( var noAngkot = 1; noAngkot <= jmlAngkot; noAngkot++){
    if(noAngkot <= 6){
        console.log('Angkot nomor ' + noAngkot + 'beroperasi dengan baik');
    } else if(noAngkot === 8) {
        console.log('Angkot nomor ' + noAngkot + 'sedang lembur');
    }else {
        console.log('Angkot nomor ' + noAngkot + 'sedang tidak beroperasi');
    }

}