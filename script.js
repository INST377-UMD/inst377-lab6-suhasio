function getRandomInRange(from, to, fixed) {
    return (Math.random() * (to - from) + from).toFixed(fixed) * 1;
    // .toFixed() returns string, so ' * 1' is a trick to convert to number
}

function createMap() {
    var map = L.map("map").setView([38.79, -100.53], 4);

    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19,
        attribution:
            '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(map);

    var marker1 = L.marker([
        getRandomInRange(30, 35, 3),
        getRandomInRange(-90, -100, 3),
    ]).addTo(map);
    var marker2 = L.marker([
        getRandomInRange(30, 35, 3),
        getRandomInRange(-90, -100, 3),
    ]).addTo(map);
    var marker3 = L.marker([
        getRandomInRange(30, 35, 3),
        getRandomInRange(-90, -100, 3),
    ]).addTo(map);

    document.getElementById(
        "marker1"
    ).innerHTML = `Marker 1: Latitude: ${marker1._latlng.lat}, Longitude: ${marker1._latlng.lng}`;
    document.getElementById(
        "marker2"
    ).innerHTML = `Marker 2: Latitude: ${marker2._latlng.lat}, Longitude: ${marker2._latlng.lng}`;
    document.getElementById(
        "marker3"
    ).innerHTML = `Marker 3: Latitude: ${marker3._latlng.lat}, Longitude: ${marker3._latlng.lng}`;

    fetch(
        `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${marker1._latlng.lat}&longitude=${marker1._latlng.lng}&localityLanguage=en`
    )
        .then((res) => res.json())
        .then((resJson) => {
            document.getElementById(
                "local1"
            ).innerHTML = `Locality: ${resJson.locality}`;
        });

    fetch(
        `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${marker2._latlng.lat}&longitude=${marker2._latlng.lng}&localityLanguage=en`
    )
        .then((res) => res.json())
        .then((resJson) => {
            document.getElementById(
                "local2"
            ).innerHTML = `Locality: ${resJson.locality}`;
        });

    fetch(
        `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${marker3._latlng.lat}&longitude=${marker3._latlng.lng}&localityLanguage=en`
    )
        .then((res) => res.json())
        .then((resJson) => {
            document.getElementById(
                "local3"
            ).innerHTML = `Locality: ${resJson.locality}`;
        });
}

window.onload = createMap;
