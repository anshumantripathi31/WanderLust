document.querySelectorAll('.star').forEach(star => {
    star.addEventListener('click', function () {
        const rating = parseInt(this.getAttribute('data-index'));
         document.getElementById('rating').value = rating;
        highlightStars(rating);
    });
});

function highlightStars(index) {
    document.querySelectorAll('.star i').forEach((star,i ) => {
        if (i< index) {
            star.classList.remove('text-gray-400');
            star.classList.add('text-yellow-400');
        } else {
            star.classList.remove('text-yellow-400');
            star.classList.add('text-gray-400');
        }
    });
}