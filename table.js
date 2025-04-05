function toggleRow(index) {
    var detailsRow = document.getElementsByClassName('details-row')[index];
    var toggleBtn = detailsRow.previousElementSibling.getElementsByClassName('toggle-btn')[0];

    if (detailsRow.style.display === 'none') {
        detailsRow.style.display = 'table-row';
        toggleBtn.innerText = 'Ocultar Informacion';
    } else {
        detailsRow.style.display = 'none';
        toggleBtn.innerText = 'Mostrar Informacion';
    }
}

    