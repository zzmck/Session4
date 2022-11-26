function initMap() {
    const selector = document.getElementById("map")
    const center = { lat: 45.46, lng: 4.49 }
    const options = {
        center: center,
        zoom: 8,
    }

    const map = new google.maps.Map(selector, options);
}