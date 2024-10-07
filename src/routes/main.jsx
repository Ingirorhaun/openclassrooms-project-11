import { Thumbnail } from "../components/thumbnail";
import { useEffect, useState } from "react";
import "./../styles/pages/_main.scss";
import { getAccommodations } from "../data/fetch-data";

export default function HomePage() {
  const [accommodations, setAccommodations] = useState([]);

  useEffect(() => {
    const populateAccommodationsList = async () => {
      const data = await getAccommodations();
      setAccommodations(data);
    };

    populateAccommodationsList();
  }, [accommodations]);

  return (
    <>
      <section className="hero">
        <h1>Chez vous, partout et ailleurs</h1>
      </section>
      <section className="gallery">
        {!!accommodations?.length &&
          accommodations.map((accommodation) => (
            <Thumbnail
              key={accommodation.id}
              id={accommodation.id}
              cover={accommodation.cover}
              title={accommodation.title}
            />
          ))}
      </section>
    </>
  );
}
