// x,y = where the round photo sits on the map. pics = photo numbers. cover = photo shown on the pin.
const places = [
  { name: "France", lat: 48.86, lon: 2.35, x: 452, y: 135, cover: 1, pics: [1, 2, 3, 4, 6],
    text: "I made it to Paris, France on New Years, and was able to see the fireworks over the Louvre celebrating the new year. I saw the Mona Lisa in the Louvre, French castles, and the Eiffel Tower at night (and even went to the top of it!" },
  { name: "London", lat: 51.51, lon: -0.13, x: 450, y: 58, cover: 7, pics: [5, 7, 8],
    text: "London is full of historical landmarks, castles, and temples. In the 4 days that I was there, I visited the royal palace, Big Ben, museums, saw my cousins, and lived in a castle (see the first picture)." },
  { name: "Turks and Caicos", lat: 21.79, lon: -72.27, x: 350, y: 85, cover: 9, pics: [9, 10, 11, 12],
    text: "I went here for my grandparent's 50th aniversary, and was treated with a massive all-inclusive resort. My favorite part was getting milkshakes and italian food and steak every day, and swimming in the ocean." },
  { name: "Puerto Rico", lat: 18.45, lon: -66.1, x: 345, y: 250, cover: 14, pics: [13, 14, 15],
    text: "I went to Puerto Rico with family, and it was one of the first places I went out of the country. I don't remember much besides the beautiful blue waves and beating my uncle at scrabble." },
  { name: "Puerto Vallarta", lat: 20.65, lon: -105.25, x: 140, y: 200, cover: 20, pics: [16, 17, 18, 19, 20],
    text: "Puerto Vallarta taught me to stop and watch the sky, because every evening the bay turned orange and purple behind the trees.I saw turtles hatch and make their way to the ocean, boogie boarded on massive waves during a light storm, and had great all-inclusive food." },
  { name: "Cancún", lat: 21.16, lon: -86.85, x: 270, y: 112, cover: 22, pics: [21, 22, 23, 24],
    text: "I came here with my mom's side of the family, and spent most of my time at the pool as the beach was filled with rocks. Still, this place has some of the best food I've ever had." },
  { name: "Pisté", lat: 20.7, lon: -88.59, x: 224, y: 262, cover: 27, pics: [25, 26, 27, 28],
    text: "I went here as part of the Cancun trip, and visited Chiken Itza, a chocolate museum (where I got chocolate smelling soap!), and got to swim inside an underwater cave." },
  { name: "Dominican Republic", lat: 19.8, lon: -70.7, x: 395, y: 152, cover: 31, pics: [29, 30, 31, 32, 33],
    text: "I've actually been here twice: once during July 4th weekend (they set of fireworks for us!), and another during the winter. Both times, it was amazing. I slid down a waterfall, jumped into a cave, and had dragonfruit for the first time." },
  { name: "British Virgin Islands", lat: 18.43, lon: -64.62, x: 440, y: 225, cover: 36, pics: [34, 35, 36, 37],
    text: "I went here as part of a cruise excursion, and it didn't disappoint, we hiked through the wilderness and a cave system until we were met with a beautiful clear blue beach. " },
];

const PHOTOS = {"1": "images/travel/1.jpg", "2": "images/travel/2.jpg", "3": "images/travel/3.jpg", "4": "images/travel/4.jpg", "5": "images/travel/5.jpg", "6": "images/travel/6.jpg", "7": "images/travel/7.jpg", "8": "images/travel/8.jpg", "9": "images/travel/9.jpg", "10": "images/travel/10.jpg", "11": "images/travel/11.jpg", "12": "images/travel/12.jpg", "13": "images/travel/13.jpg", "14": "images/travel/14.jpg", "15": "images/travel/15.jpg", "16": "images/travel/16.jpg", "17": "images/travel/17.jpg", "18": "images/travel/18.jpg", "19": "images/travel/19.jpg", "20": "images/travel/20.jpg", "21": "images/travel/21.jpg", "22": "images/travel/22.jpg", "23": "images/travel/23.jpg", "24": "images/travel/24.jpg", "25": "images/travel/25.jpg", "26": "images/travel/26.jpg", "27": "images/travel/27.jpg", "28": "images/travel/28.jpg", "29": "images/travel/29.jpg", "30": "images/travel/30.jpg", "31": "images/travel/31.jpg", "32": "images/travel/32.jpg", "33": "images/travel/33.jpg", "34": "images/travel/34.jpg", "35": "images/travel/35.jpg", "36": "images/travel/36.jpg", "37": "images/travel/37.jpg"};
