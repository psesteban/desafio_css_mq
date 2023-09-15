function filterCards(tag) {
    // Obtener todas las tarjetas
    var cards = document.querySelectorAll('.card');

    // Iterar sobre cada tarjeta
    cards.forEach(function(card) {
        if (tag === 'all') {
            // Si la etiqueta es 'all', mostramos todas las tarjetas
            card.style.display = 'flex';
        } else if (card.getAttribute('data-tag') === tag) {
            // Si la tarjeta tiene la etiqueta seleccionada, la mostramos
            card.style.display = 'flex';
        } else {
            // Si no, ocultamos la tarjeta
            card.style.display = 'none';
        }
    });
}
