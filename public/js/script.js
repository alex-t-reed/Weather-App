document.getElementsByTagName("button")[0].addEventListener("click", () => {
    let input = document.getElementById("myInput").value;
    console.log(input);
    fetch(`https://api.weatherapi.com/v1/current.json?key=9ac80f0042f94cf7b6a185734212109&q=${input}&aqi=no
    `)
        .then(function(response) {
            if (response.status !== 200) {
                console.log(
                    "Looks like there was a problem. Status Code: " + response.status
                );
                document.getElementById('data').innerHTML = '';
                return;
            }

            // Examine the text in the response
            response.json().then(function(data) {
                document.getElementById('temp').innerHTML = (`${data.current.temp_f} &#8457;`)
                document.getElementById('location').innerText = (`${data.location.name}, ${data.location.region}`);
                document.getElementById("myInput").value = '';
                document.getElementById("myInput").blur();
            });
        })
        .catch(function(err) {
            console.log("Fetch Error :-S", err);
        });
});

document.getElementById("myInput").addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        document.getElementsByTagName("button")[0].click();
    }
});