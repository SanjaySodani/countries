window.onload = () => {
    const task2 = document.querySelector("ul");

    fetch("https://restcountries.eu/rest/v2/all")
        .then(
            function (response) {
                if (response.status == 200) {
                    response.json().then(function (data) {
                        let names = data.filter(value => value.population > 200000000);
                        names.map(value => task2.innerHTML += "<h3>" + value.name + " => " + value.population + "</h3>");
                    })
                }
            }
        )
        .catch(
            task2.innerHTML = "<p style='color:red;'>Something went wrong!</p>"
        )

    var obj1 = { name: "Person 1", age: 5 };
    var obj2 = { age: 5, name: "Person 1" };

    console.log(_.isEqual(obj1, obj2));
}