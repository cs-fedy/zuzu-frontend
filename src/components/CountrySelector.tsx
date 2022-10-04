import { DownChevron } from "./icons";
import USAFlag from "../assets/usa-flag.svg";

function CountrySelector() {
  return (
    <div className="flex items-center gap-1">
      <div>
        <img src={USAFlag} alt="usa flag" />
      </div>
      <DownChevron />
    </div>
  );
}

export default CountrySelector;
