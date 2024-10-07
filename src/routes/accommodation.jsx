import { useLoaderData } from "react-router-dom";
import { getAccommodationById } from "../data/fetch-data";
import Carousel from "../components/carousel";
import "./../styles/pages/_accommodation.scss";
import { Dropdown } from "../components/dropdown";
import StarIcon from "../components/star-icon";

export async function accommodationPageLoader({ params }) {
  const accommodationId = params.id;
  const accommodation = await getAccommodationById(accommodationId);
  //throw an error if the accommodation is not found
  if (!accommodation) {
    throw new Response("", {
      status: 404,
      statusText: "Not Found",
    });
  }
  return { accommodation };
}

export default function AccommodationPage() {
  const { accommodation } = useLoaderData();

  return (
    <>
      <Carousel images={accommodation.pictures} title={accommodation.title} />
      <section className="accommodation-info">
        <div>
          <div>
            <h1>{accommodation.title}</h1>
            <h4>{accommodation.location}</h4>
          </div>
          <div className="host-info">
            <h4>{accommodation.host.name}</h4>
            <img
              src={accommodation.host.picture}
              alt={accommodation.host.name}
            />
          </div>
        </div>
        <div>
          <div className="tags">
            {accommodation.tags.map((tag, index) => (
              <span key={index} className="tag">
                {tag}
              </span>
            ))}
          </div>
          <div className="rating" title={accommodation.rating ?? 0 + "/5"}>
            {[...Array(parseInt(accommodation.rating ?? 0))].map((_, index) => (
              <StarIcon full key={index} />
            ))}
            {[...Array(5 - parseInt(accommodation.rating ?? 0))].map(
              (_, index) => (
                <StarIcon key={index} />
              )
            )}
          </div>
        </div>
        <div className="dropdowns-wrapper">
          <Dropdown title="Description" content={accommodation.description} />
          <Dropdown
            title="Équipements"
            content={accommodation.equipments?.join("\r\n")}
          />
        </div>
      </section>
    </>
  );
}
