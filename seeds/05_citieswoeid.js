exports.seed = function(knex, Promise) {
  return knex("citieswoeid")
    .del()
    .then(function() {
      return knex("citieswoeid").insert([
        {
          id: 1,
          WOE_ID: "2352824",
          ISO: "US",
          Name: "Albuquerque",
          Language: "ENG",
          PlaceType: "Town",
          Parent_ID: "12589279"
        },
        {
          id: 2,
          WOE_ID: "2357024",
          ISO: "US",
          Name: "Atlanta",
          Language: "ENG",
          PlaceType: "Town",
          Parent_ID: "12587929"
        },
        {
          id: 3,
          WOE_ID: "2357536",
          ISO: "US",
          Name: "Austin",
          Language: "ENG",
          PlaceType: "Town",
          Parent_ID: "12590233"
        },
        {
          id: 4,
          WOE_ID: "2358820",
          ISO: "US",
          Name: "Baltimore",
          Language: "ENG",
          PlaceType: "Town",
          Parent_ID: "12588679"
        },
        {
          id: 5,
          WOE_ID: "2367105",
          ISO: "US",
          Name: "Boston",
          Language: "ENG",
          PlaceType: "Town",
          Parent_ID: "12588712"
        },
        {
          id: 6,
          WOE_ID: "2378426",
          ISO: "US",
          Name: "Charlotte",
          Language: "ENG",
          PlaceType: "Town",
          Parent_ID: "12589433"
        },
        {
          id: 7,
          WOE_ID: "2379574",
          ISO: "US",
          Name: "Chicago",
          Language: "ENG",
          PlaceType: "Town",
          Parent_ID: "12588093"
        },
        {
          id: 8,
          WOE_ID: "2381475",
          ISO: "US",
          Name: "Cleveland",
          Language: "ENG",
          PlaceType: "Town",
          Parent_ID: "12589544"
        },
        {
          id: 9,
          WOE_ID: "2383489",
          ISO: "US",
          Name: "Colorado Springs",
          Language: "ENG",
          PlaceType: "Town",
          Parent_ID: "12587747"
        },
        {
          id: 10,
          WOE_ID: "2388929",
          ISO: "US",
          Name: "Dallas",
          Language: "ENG",
          PlaceType: "Town",
          Parent_ID: "12590063"
        },
        {
          id: 11,
          WOE_ID: "2391279",
          ISO: "US",
          Name: "Denver",
          Language: "ENG",
          PlaceType: "Town",
          Parent_ID: "12587743"
        },
        {
          id: 12,
          WOE_ID: "2391585",
          ISO: "US",
          Name: "Detroit",
          Language: "ENG",
          PlaceType: "Town",
          Parent_ID: "12588795"
        },
        {
          id: 13,
          WOE_ID: "2424766",
          ISO: "US",
          Name: "Houston",
          Language: "ENG",
          PlaceType: "Town",
          Parent_ID: "12590107"
        },
        {
          id: 14,
          WOE_ID: "2436704",
          ISO: "US",
          Name: "Las Vegas",
          Language: "ENG",
          PlaceType: "Town",
          Parent_ID: "12589233"
        },
        {
          id: 15,
          WOE_ID: "2442047",
          ISO: "US",
          Name: "Los Angeles",
          Language: "ENG",
          PlaceType: "Town",
          Parent_ID: "12590145"
        },
        {
          id: 16,
          WOE_ID: "2450022",
          ISO: "US",
          Name: "Miami",
          Language: "ENG",
          PlaceType: "Town",
          Parent_ID: "12587815"
        },
        {
          id: 17,
          WOE_ID: "2452078",
          ISO: "US",
          Name: "Minneapolis",
          Language: "ENG",
          PlaceType: "Town",
          Parent_ID: "12588823"
        },
        {
          id: 18,
          WOE_ID: "2457170",
          ISO: "US",
          Name: "Nashville",
          Language: "ENG",
          PlaceType: "Town",
          Parent_ID: "12589930"
        },
        {
          id: 19,
          WOE_ID: "2458833",
          ISO: "US",
          Name: "New Orleans",
          Language: "ENG",
          PlaceType: "Town",
          Parent_ID: "12588631"
        },
        {
          id: 20,
          WOE_ID: "2459115",
          ISO: "US",
          Name: "New York",
          Language: "ENG",
          PlaceType: "Town",
          Parent_ID: "2347591"
        },
        {
          id: 21,
          WOE_ID: "2471217",
          ISO: "US",
          Name: "Philadelphia",
          Language: "ENG",
          PlaceType: "Town",
          Parent_ID: "12589778"
        },
        {
          id: 22,
          WOE_ID: "2471390",
          ISO: "US",
          Name: "Phoenix",
          Language: "ENG",
          PlaceType: "Town",
          Parent_ID: "12587587"
        },
        {
          id: 23,
          WOE_ID: "2475687",
          ISO: "US",
          Name: "Portland",
          Language: "ENG",
          PlaceType: "Town",
          Parent_ID: "12589717"
        },
        {
          id: 24,
          WOE_ID: "2478307",
          ISO: "US",
          Name: "Raleigh",
          Language: "ENG",
          PlaceType: "Town",
          Parent_ID: "12589465"
        },
        {
          id: 25,
          WOE_ID: "2487610",
          ISO: "US",
          Name: "Salt Lake City",
          Language: "ENG",
          PlaceType: "Town",
          Parent_ID: "12590278"
        },
        {
          id: 26,
          WOE_ID: "2487956",
          ISO: "US",
          Name: "San Francisco",
          Language: "ENG",
          PlaceType: "Town",
          Parent_ID: "12587707"
        },
        {
          id: 27,
          WOE_ID: "2490383",
          ISO: "US",
          Name: "Seattle",
          Language: "ENG",
          PlaceType: "Town",
          Parent_ID: "12590456"
        },
        {
          id: 28,
          WOE_ID: "2486982",
          ISO: "US",
          Name: "St. Louis",
          Language: "ENG",
          PlaceType: "Town",
          Parent_ID: "12589067"
        },
        {
          id: 29,
          WOE_ID: "2514815",
          ISO: "US",
          Name: "Washington DC",
          Language: "ENG",
          PlaceType: "Town",
          Parent_ID: "12587802"
        }
      ]);
    });
};
