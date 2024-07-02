import { Link } from "react-router-dom";
import { Zodiacal1 } from "./Zodiacal1";
import { Zodiacal2 } from "./Zodiacal2";
import { Zodiacal3 } from "./Zodiacal3";
import { Zodiacal4 } from "./Zodiacal4";
import { Zodiacal5 } from "./Zodiacal5";
import { Zodiacal6 } from "./Zodiacal6";

export const Navigation = () => {
  return (
    <div className="container mt-4 father">
      <Link to="/Zodiacal1" className="links">
        <figure className="image-size">
          <Zodiacal1 />
          <figcaption>Aries</figcaption>
        </figure>
      </Link>
      <Link to="/Zodiacal2" className="links">
        <figure className="image-size">
          <Zodiacal2 />
          <figcaption>Escorpion</figcaption>
        </figure>
      </Link>
      <Link to="/Zodiacal3" className="links">
        <figure className="image-size">
          <Zodiacal3 />
          <figcaption>Virgo</figcaption>
        </figure>
      </Link>
      <Link to="/Zodiacal4" className="links">
        <figure className="image-size">
          <Zodiacal4 />
          <figcaption>Tauro</figcaption>
        </figure>
      </Link>
      <Link to="/Zodiacal5" className="links">
        <figure className="image-size">
          <Zodiacal5 />
          <figcaption>Capricornio</figcaption>
        </figure>
      </Link>
      <Link to="/Zodiacal6" className="links">
        <figure className="image-size">
          <Zodiacal6 />
          <figcaption>Piscis</figcaption>
        </figure>
      </Link>
    </div>
  )
}
