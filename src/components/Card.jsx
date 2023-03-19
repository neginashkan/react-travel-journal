import "../CSS/styles.css";
export default function Card(props) {
  const { key, data } = props;
  const {
    title,
    description,
    coverImage,
    googleMapsUrl,
    dates,
    location,
    imageUrl,
  } = data;
  const { startDate, endDate } = dates;
  return (
    <div className="Card">
      <a
        href={imageUrl}
        target="_blank"
        rel="noopener noreferrer"
        title={title}
      >
        <img
          src={`images/${coverImage}`}
          alt={`${location} ${title}`}
          title={title}
          className="card-image"
        />
      </a>
      <div className="information">
        <div className="locations">
          <i class="fa-solid fa-location-dot location-icon"></i>{" "}
          <span className="country">{location} </span>
          <a
            href={googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            title="View on Google Maps"
            className="google-map-link"
          >
            View on Google Maps
          </a>
        </div>
        <h2 className="title">{title}</h2>
        <div className="dates">
          <span className="satrt-date">{startDate} </span> -{" "}
          <span className="end-date"> {endDate}</span>
        </div>
        <div className="description">{description}</div>
      </div>
      <hr />
    </div>
  );
}
