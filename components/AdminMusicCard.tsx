export default function AdminMusicCard({
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
          <a href="#!">
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
          <div className="d-flex justify-content-end">
            <a
              className="btn btn-link link-success p-md-1 my-1"
              href={title}
              role="button"
              aria-expanded="false"
              aria-controls="collapseContent"
            >
              Read more
            </a>
            <div>
              <i
                className="fas fa-share-alt text-muted p-md-1 my-1 me-2"
                data-mdb-toggle="tooltip"
                data-mdb-placement="top"
                title="Share this post"
              ></i>
              <i
                className="fas fa-heart text-muted p-md-1 my-1 me-0"
                data-mdb-toggle="tooltip"
                data-mdb-placement="top"
                title="I like it"
              ></i>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  