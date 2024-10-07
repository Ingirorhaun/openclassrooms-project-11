import "./../styles/components/_thumbnail.scss";

export const Thumbnail = ({ id, cover, title }) => {
  const backgroundStyle = {
    background: `linear-gradient(180deg, rgba(255, 255, 255, 0) 0%,
        rgba(10, 10, 10, 0) 42%,
        rgba(4, 4, 4, 0.205) 99.99%,
        rgba(0, 0, 0, 0.5) 100%),
        url(${cover})`,
  };

  return (
    <a href={"/accommodations/" + id} alt={title}>
      <div className="thumbnail" style={backgroundStyle}>
        <h3 className="title">{title}</h3>
      </div>
    </a>
  );
};
