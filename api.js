function apiTemp(){
        let key = "9c8e94a6b2b0db6beb038ab604e5913a";
        let city = "Porto Alegre";
        let lang ="pt_br";
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=${lang}`;

        fetch(url)
        .then(function (response){
                return response.json();

        })
        .then(function (data){
                let nome = document.getElementById("temp")
                nome = data.main.temp_max;
                console.log(nome);
                document.getElementById("temp").value = nome;
                console.log(data);
                console.log(data.main);
                console.log(data.main.temp_max);
                console.log(data.main.temp_min);
        })
}

apiTemp();