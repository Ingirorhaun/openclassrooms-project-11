import { useLoaderData } from "react-router-dom";
import { getAccommodationById } from "../data/fetch-data";

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
    <div>
      <h1>Accommodation {accommodation.title}</h1>
    </div>
  );
}
