// x,y = where the round photo sits on the (cropped) map. pics = photo numbers. cover = photo shown on the pin.
const places = [
  { name: "Paris, France", lat: 48.86, lon: 2.35, x: 880, y: 165, cover: 1, pics: [1, 2, 3, 4, 6],
    text: "I made it to Paris on New Year's and saw the fireworks over the Louvre celebrating the new year. I also saw the Mona Lisa in the Louvre, French castles, and the Eiffel Tower at night (and even went to the top of it!)." },
  { name: "London, UK", lat: 51.51, lon: -0.13, x: 770, y: 75, cover: 7, pics: [5, 7, 8],
    text: "London is full of historical landmarks, castles, and temples. In the four days I was there, I visited the royal palace, Big Ben, and museums, saw my cousins, and stayed in a castle (see the first picture)." },
  { name: "Turks and Caicos", lat: 21.79, lon: -72.27, x: 330, y: 190, cover: 9, pics: [9, 10, 11, 12],
    text: "I went here for my grandparents' 50th anniversary, and we stayed at a massive all-inclusive resort. My favorite parts were getting milkshakes, Italian food, and steak every day, and swimming in the ocean." },
  { name: "Puerto Rico", lat: 18.45, lon: -66.1, x: 380, y: 355, cover: 14, pics: [13, 14, 15],
    text: "I went to Puerto Rico with family, and it was one of the first places I traveled outside the country. I don't remember much besides the beautiful blue waves and beating my uncle at Scrabble." },
  { name: "Puerto Vallarta, Mexico", lat: 20.65, lon: -105.25, x: 80, y: 300, cover: 20, pics: [16, 17, 18, 19, 20],
    text: "Puerto Vallarta taught me to stop and watch the sky, because every evening the bay turned orange and purple behind the trees. I saw turtles hatch and make their way to the ocean, boogie-boarded on massive waves during a light storm, and had great all-inclusive food." },
  { name: "Cancún, Mexico", lat: 21.16, lon: -86.85, x: 230, y: 195, cover: 22, pics: [21, 22, 23, 24],
    text: "I came here with my mom's side of the family and spent most of my time at the pool, since the beach was full of rocks. Still, this place has some of the best food I've ever had." },
  { name: "Pisté, Mexico", lat: 20.7, lon: -88.59, x: 185, y: 350, cover: 27, pics: [25, 26, 27, 28],
    text: "I went here as part of the Cancún trip and visited Chichén Itzá and a chocolate museum (where I got chocolate-smelling soap!), and I got to swim inside an underwater cave." },
  { name: "Dominican Republic", lat: 19.8, lon: -70.7, x: 440, y: 230, cover: 31, pics: [29, 30, 31, 32, 33],
    text: "I've actually been here twice: once over July 4th weekend (they set off fireworks for us!) and once during the winter. Both trips were amazing. I slid down a waterfall, jumped into a cave, and had dragon fruit for the first time." },
  { name: "British Virgin Islands", lat: 18.43, lon: -64.62, x: 500, y: 330, cover: 36, pics: [34, 35, 36, 37],
    text: "I went here on a cruise excursion, and it didn't disappoint. We hiked through the wilderness and a cave system until we reached a beautiful, clear blue beach." },
];

const PHOTO = n => `images/travel/${n}.jpg`;

