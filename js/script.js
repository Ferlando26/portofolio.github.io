//event pada saat link di klik
$('.page-scroll').on('click', function () {
    // ambil isi  href
    var tujuan = $(this).attr('href');
    // tangkap elemen
    var elemenTujuan = $(tujuan);
    // pindahkan scorll
    $('body').animate({
        scrollTop: elemenTujuan.offset().top:
    });
    e.preventDefault();

});