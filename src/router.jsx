import Root from "./routes/root";
import ErrorPage from "./routes/error-page";
import { createBrowserRouter } from "react-router-dom";
import AboutUs from "./routes/about-us";
import AccommodationPage, {
  accommodationPageLoader,
} from "./routes/accommodation";
import HomePage from "./routes/main";
import Header from "./components/header";
import Footer from "./components/footer";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: (
      <>
        <Header />
        <ErrorPage />
        <Footer />
      </>
    ),
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          { index: true, element: <HomePage /> },
          {
            path: "/about",
            element: <AboutUs />,
          },
          {
            path: "/accommodations/:id",
            loader: accommodationPageLoader,
            element: <AccommodationPage />,
          },
        ],
      },
    ],
  },
]);

export default router;
