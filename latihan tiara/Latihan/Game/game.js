var tanya = true;
while( tanya ){
var p = prompt('pilih : Gajah, Semut, Orang');

var comp = Math.random();

if(comp < 0.34) {
    comp = 'gajah';
} else if(comp >= 0.34 && comp < 0.67) {
    comp = 'orang';
} else {
    comp = 'semut';
}

var hasil = '';
if(p == comp) {
    hasil = 'SERI';
} else if(p == 'gajah') {
    if(comp == 'orang'){
        hasil = 'MENANG';
    } else {
        hasil = 'KALAH';
    }
} else if(p == 'orang') {
    if(comp == 'gajah') {
        hasil = 'KALAH';
    } else {
        hasil = 'MENANG';
    }
} else if(p == 'semut') {
    hasil = (comp == 'orang') ? 'KALAH' : 'MENANG';
} else {
    hasil = 'memasukan pilihan yang salah!!';
}

alert('Kamu memilih : ' + p + ' dan komputer memilih ' + comp + '\n maka hasilnya kamu ' + hasil);
tanya = confirm('lagi?');
}

alert('terimakasih sudah bermain');