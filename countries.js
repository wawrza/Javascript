var countryList = [
    "Afghanistan",
    "Aland",
    "Albania",
    "Algeria",
    "Angola",
    "Argentina",
    "Armenia",
    "Australia",
    "Austria",
    "Azerbaijan",
    "Bahrain",
    "Bangladesh",
    "Barbados",
    "Belarus",
    "Belgium",
    "Belize",
    "Benin",
    "Bermuda",
    "Bhutan",
    "Bolivia",
    "Bosnia",
    "Brazil",
    "Bulgaria",
    "Cameroon",
    "Canada",
    "Chad",
    "Chile",
    "China",
    "Colombia",
    "Congo",
    "Croatia",
    "Cuba",
    "Cyprus",
    "Czech Republic",
    "Denmark",
    "Egypt",
    "Estonia",
    "Fiji",
    "Finland",
    "France",
    "Gabon",
    "Cambia",
    "Germany",
    "Ghana",
    "Gibraltar",
    "Greece",
    "Greenland",
    "Grenada",
    "Guam",
    "Guatemala",
    "Guemsey",
    "Guinea",
    "Guyana",
    "Haiti",
    "Honduras",
    "Hungary",
    "Iceland",
    "India",
    "Indonesia",
    "Iran",
    "Iraq",
    "Ireland",
    "Israel",
    "Italy",
    "Jamaica",
    "Japan",
    "Jersey",
    "Jordan",
    "Kazakhstan",
    "Kenya",
    "Kiribati",
    "North Korea",
    "South Korea",
    "Kosovo",
    "Kuwait",
    "Laos",
    "Latvia",
    "Lesotho",
    "Liberia",
    "Libya",
    "Liechtenstein",
    "Lithuania",
    "Luxembourg",
    "Macedonia",
    "Madagascar",
    "Malawi",
    "Malaysia",
    "Malta",
    "Mexico",
    "Moldova",
    "Monaco",
    "Mongolia",
    "Morocco",
    "Mozambique",
    "Myanmar",
    "Namibia",
    "Nepal",
    "Netherlands",
    "New Zealand",
    "Niger",
    "Nigeria",
    "Niue",
    "Norway",
    "Oman",
    "Pakistan",
    "Palau",
    "Panama",
    "Paraguay",
    "Peru",
    "Philippines",
    "Poland",
    "Portugal",
    "Qatar",
    "Romania",
    "Russia",
    "Saudi Arabia",
    "Senegal",
    "Serbia",
    "Seychelles",
    "Singapore",
    "Slovakia",
    "Slovenia",
    "Somalia",
    "South Africa",
    "Spain",
    "Sri Lanka",
    "Sudan",
    "Swaziland",
    "Sweden",
    "Switzerland",
    "Syria",
    "Tajikistan",
    "Tanzania",
    "Thailand",
    "Tunisia",
    "Turkey",
    "Turkmenistan",
    "Tuvalu",
    "Uganda",
    "Ukraine",
    "United Arab Emirates",
    "United Kingdom",
    "United States",
    "Uruguay",
    "Uzbekistan",
    "Venezuela",
    "Vietnam",
    "Yemen",
    "Zambia",
    "Zimbabwe"
],
    random = countryList[Math.floor(Math.random() * countryList.length)];

var url = 'https://restcountries.eu/rest/v1/name/';
var countriesList = $('#countries');
$('#search').click(searchCountries);
$('#random').click(randomCountries);

$(document).bind("keydown", function (event) {
    if (event.which === "13") {
        $("#search").click(searchCountries);
    }
});

function searchCountries() {
    var countryName = $('#country-name').val();
	$.ajax ({
		url : url + countryName,
		methoud: 'GET',
		success: showCountriesList
	});
}

function randomCountries() {
    var countryName = countryList[Math.floor(Math.random() * countryList.length)];
   

	$.ajax ({
		url : url + countryName,
		methoud: 'GET',
		success: showCountriesList
	});
}

function showCountriesList(resp) {
    countriesList.empty();
    resp.forEach(function (item) {
        var flagImg = 'http://www.geognos.com/api/en/countries/flag/' + item.alpha2Code + '.png';
        
        $('<div class="about">').appendTo(countriesList)
        .append($('<h3>').text(item.name))
        .append($('<img class="flag" src=' + flagImg + '>'))
        .append($('<p>').text('Capital: ' + item.capital))
        .append($('<p>').text('Population: '+ item.population))
        .append($('<p>').text('Native name: ' + item.nativeName))
        .append($('<p>').text('Time zone: ' + item.timezones))
        .append($('<p>').text('Currencies: ' + item.currencies))
        
    });
}

randomCountries();


