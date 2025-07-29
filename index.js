// Js 

var weather=prompt(`Select any one weather
    a) Winter 
    b) Summer 
    c) Autumn
    d) Spring 
    e) Rainy `);

    if (weather === "Winter") {
  document.writeln(
    ` <div class="bg-img1">
        <div class="card1">
            <img src="https://cdn-icons-png.flaticon.com/512/4151/4151022.png" alt="Snowflake">
            <h2>Winter Weather</h2>
            <div class="temp1">-3°C</div>
            <div class="desc">❄️ Snowfall & Freezing Breeze</div>
            <div class="details">
                <p>Humidity: 92%</p>
                <p>Wind: 12 km/h</p>
                <p>Location: Swat, Pakistan</p>
            </div>
        </div>
    </div> `
  )
    }
     
    else if (weather === "Summer") {
  document.writeln(
    `   <div class="bg-img2">
        <div class="card2">
            <img src="https://cdn-icons-png.flaticon.com/512/869/869869.png" alt="Sun">
            <h2>Summer Weather</h2>
            <div class="temp2">38°C</div>
            <div class="desc">🌞 Hot & Sunny with Warm Breeze</div>
            <div class="details">
                <p>Humidity: 45%</p>
                <p>Wind: 10 km/h</p>
                <p>Location: Karachi, Pakistan</p>
            </div>
        </div>
    </div>`
  )
}

else if(weather ==="Autumn"){
    document.write(
        ` <div class="bg-img3">
        <div class="card3">
            <img src="https://cdn-icons-png.flaticon.com/512/3504/3504615.png" alt="Autumn Leaf">
            <h2>Autumn Weather</h2>
            <div class="temp3">17°C</div>
            <div class="desc">🍂 Cool & Windy with Falling Leaves</div>
            <div class="details">
                <p>Humidity: 60%</p>
                <p>Wind: 15 km/h</p>
                <p>Location: Murree, Pakistan</p>
            </div>
        </div>
    </div>`
    )
}

else if(weather ==="Spring"){
    document.write(
        `<div class="bg-img4">
        <div class="card4">
            <img src="https://cdn-icons-png.flaticon.com/512/9997/9997682.png" alt="Spring Flower">
            <h2>Spring Weather</h2>
            <div class="temp4">24°C</div>
            <div class="desc">🌼 Mild & Bloomy with Fresh Air</div>
            <div class="details">
                <p>Humidity: 55%</p>
                <p>Wind: 8 km/h</p>
                <p>Location: Islamabad, Pakistan</p>
            </div>
        </div>
    </div>`
    )
}

else if(weather === "Rainy"){
    document.write(
        `<div class="bg-img5">
        <div class="card5">
            <img src="https://cdn-icons-png.flaticon.com/512/1779/1779940.png" alt="Rain Icon">
            <h2>Rainy Weather</h2>
            <div class="temp5">25°C</div>
            <div class="desc">🌧️ Light Showers with Cool Breeze</div>
            <div class="details">
                <p>Humidity: 88%</p>
                <p>Wind: 12 km/h</p>
                <p>Location: Lahore, Pakistan</p>
            </div>
        </div>
    </div>`
    )
}
else{
    document.write(
        `<div class="wrong">
  <div class="error-container">
    <img src="https://cdn-icons-png.flaticon.com/512/6195/6195700.png" alt="Error Icon">
    <h1>Something Went Wrong</h1>
    <p>Sorry, an unexpected error has occurred.<br>Please try again or go back.</p>
    <a href="#index" class="btn">Go Back</a>
  </div>
</div>`
    )
}
