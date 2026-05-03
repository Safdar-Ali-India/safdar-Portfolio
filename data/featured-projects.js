import mapmyrecipe from "../assets/mapmyrecipe.png";
import hadith from "../assets/hadith.png";
import restaurant from "../assets/restaurant.png";

/** Shown on the homepage; full grid lives on /projects */
export const featuredProjects = [
  {
    title: "Map My Recipe",
    subT: "React recipe book — search, browse, and open recipe details with a clean UI.",
    imgLink: mapmyrecipe,
    liveLink: "https://map-my-recipe.vercel.app/",
    codeLink: "https://github.com/Safdar-Ali-India/Recipe-Book-application-using-React",
  },
  {
    title: "Hadith Generator",
    subT: "Read hadiths from major books, track progress, and explore teachings in one place.",
    imgLink: hadith,
    liveLink: "https://hadith-generator-alpha.vercel.app/",
    codeLink: "https://github.com/Safdar-Ali-India/Hadith-Generator",
  },
  {
    title: "Safdar Restaurant",
    subT: "React menu that filters by meal time — interactive ordering-style experience.",
    imgLink: restaurant,
    liveLink: "https://safdar-restaurant.vercel.app/",
    codeLink: "https://github.com/Safdar-Ali-India/Safdar-restaurant",
  },
];
