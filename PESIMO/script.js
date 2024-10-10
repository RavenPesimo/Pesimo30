function toggleImages(id) {
    const imagesDivs = document.querySelectorAll('.images');
    imagesDivs.forEach(div => {
        if (div.id === id) {
            div.style.display = (div.style.display === 'none' || div.style.display === "") ? "block" : "none";
        } else {
            div.style.display = "none";
        }
    });
}

