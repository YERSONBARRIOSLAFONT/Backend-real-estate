(function(){
    const lat = 20.67444163271174;
    const lng = -103.38739216304566;
    const mapa = L.map('mapa-inicio').setView([lat, lng ], 16);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(mapa);
    
})()