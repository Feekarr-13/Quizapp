// Pilih elemen yang akan dianimasikan
const elementsToAnimate = document.querySelectorAll('.fade-in, .slide-up');

// Fungsi callback untuk Intersection Observer
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible'); // Tambahkan kelas 'visible' ketika elemen masuk viewport
            observer.unobserve(entry.target); // Stop observer setelah elemen terlihat
        }
    });
}, {
    threshold: 0.5 // Elemen harus 50% terlihat sebelum animasi dimulai
});

// Mulai observer untuk setiap elemen
elementsToAnimate.forEach(element => {
    observer.observe(element);
});