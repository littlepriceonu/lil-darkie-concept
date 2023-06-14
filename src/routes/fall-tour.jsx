import { useEffect } from "react";
import { Link } from "react-router-dom";
import useStore from "../store";
import title from "../images/tour/fall-tour-title.png";
import end from "../images/tour/end.png";
import bottom from "../images/tour/bottom.png";
import tourDates from "../data/fall-tour-dates.json";
import "../styles/fall-tour.scss";

export default function FallTour() {
  const { setLightMode } = useStore();

  useEffect(() => {
    setLightMode(true);

    return () => setLightMode(false);
  }, [setLightMode]);

  return (
    <div className="fall-tour">
      <img className="end" src={end} alt="" />
      <img className="title" src={title} alt="" />
      <img className="bottom" src={bottom} alt="" />
      <div className="panel">
        <div className="grid">
          {tourDates.map(({ date, city, venue, ticketLink }) => {
            return (
              <div className="tour-date" key={date}>
                <div className="city">{city}</div>
                <div>{date}</div>
                <div>@ {venue}</div>
                <Link className="buy" to={ticketLink}>
                  Buy Tickets
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
