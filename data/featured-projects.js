import msalonbeverlyhills from "../assets/msalonbeverlyhills.png";
import sommetbeauty from "../assets/sommetbeauty.png";
import wpstandard from "../assets/wpstandard.png";

const portfolioCode = "https://github.com/Safdar-Ali-India";

/** Shown on the homepage; full grid lives on /projects */
export const featuredProjects = [
  {
    title: "M Salon Beverly Hills",
    subT: "Architected a full custom WordPress theme for a premium Beverly Hills salon — services, gallery, booking integration, and pixel-perfect mobile UI. Site credited in client's physical marketing.",
    imgLink: msalonbeverlyhills,
    liveLink: "https://msalonbeverlyhills.com",
    codeLink: portfolioCode,
  },
  {
    title: "Sommet Beauty",
    subT: "Performance-tuned Shopify build for a luxury beauty brand — custom cart, seamless checkout, and 90+ PageSpeed score.",
    imgLink: sommetbeauty,
    liveLink: "https://sommetbeauty.com",
    codeLink: portfolioCode,
  },
  {
    title: "WP Standard",
    subT: "End-to-end Shopify build for a leather goods brand — product pages, collection templates, and storytelling-first mobile UX.",
    imgLink: wpstandard,
    liveLink: "https://wpstandard.com",
    codeLink: portfolioCode,
  },
];
