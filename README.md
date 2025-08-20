# WeatherApp

WeatherApp on Node.js:llä ja Expressillä toteutettu sääsovellus, joka hakee ajankohtaiset säätiedot OpenWeatherMap-rajapinnasta. Sovellus on tehty harjoitustyönä Node.js- ja web-kehityksen perusteiden opiskeluun.

## Ominaisuudet

- Käyttäjä voi hakea sään syöttämällä kaupungin nimen.
- Sää näytetään selkeässä kortissa, jossa näkyy myös sääikoni.
- Taustalla käytetään Unsplashista ladattua kuvaa ja responsiivista ulkoasua.
- API-avainta ei paljasteta selaimelle, vaan se säilytetään palvelimella ympäristömuuttujana.

## Teknologiat

- Node.js & Express
- EJS (templating)
- Axios (HTTP-pyynnöt)
- OpenWeatherMap API
- CSS (oma tyyli + Unsplash-taustakuva)

Sovellus löytyy Render linkistä: https://weatherapp-9n1u.onrender.com/


## Käyttöönotto paikallisesti

1. Kloonaa repositorio:
   ```
   git clone https://github.com/wilsq/weatherApp.git
   cd weatherApp
   ```

2. Asenna riippuvuudet:
   ```
   npm install
   ```

3. Luo `.env`-tiedosto ja lisää oma OpenWeatherMap API-avaimesi:
   ```
   API_KEY=your_openweathermap_api_key
   ```

4. Käynnistä sovellus:
   ```
   npm start
   ```
   Sovellus löytyy osoitteesta [http://localhost:3000](http://localhost:3000)
