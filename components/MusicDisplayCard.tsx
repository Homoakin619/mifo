export default function MusicDisplayCard({
    id,
    title,
    description,
    image,
    singer,
    date_released,
  }: MusicProps) {
    return (
      <div className="card shadow ">
        <div
          className="bg-image hover-overlay ripple rounded-0"
          data-mdb-ripple-color="light"
        >
          <img className="img-fluid border" src={image} alt="Card image cap" />
          <a href="#">
            <div
              className="mask"
              style={{ background: "rgba(251, 251, 251, 0.15)" }}
            ></div>
          </a>
        </div>
        <div className="card-body">
          <span className="fw-bold fs-5" style={{ display: "block" }}>
            {title}
          </span>
          <span className="card-text" id="collapseContent">
            {description}
          </span>
        </div>
      </div>
    );
  }
  
  