export default function MusicCard({
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
            href={"/songs/"+title}
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

{
  /* <div className="col-md-4">
<div className="card">
  <div className="card-body d-flex flex-row">
    <div>
      <h5 className="card-title font-weight-bold mb-2">{title}</h5>
      <p className="card-text"><i className="far fa-clock pe-2"></i>{date_released}</p>
    </div>
  </div>
  <div className="bg-image hover-overlay ripple rounded-0" data-mdb-ripple-color="light">
    <img className="img-fluid" src={image}
      alt="Card image cap" />
    <a href="#!">
      <div className="mask" style={{background: "rgba(251, 251, 251, 0.15)"}}></div>
    </a>
  </div>
  <div className="card-body">
    <p className="card-text collapse" id="collapseContent">
      {description}
    </p>
    <div className="d-flex justify-content-between">
      <a className="btn btn-link link-danger p-md-1 my-1" data-mdb-toggle="collapse" href="#collapseContent"
        role="button" aria-expanded="false" aria-controls="collapseContent">Read more</a>
      <div>
        <i className="fas fa-share-alt text-muted p-md-1 my-1 me-2" data-mdb-toggle="tooltip"
          data-mdb-placement="top" title="Share this post"></i>
        <i className="fas fa-heart text-muted p-md-1 my-1 me-0" data-mdb-toggle="tooltip" data-mdb-placement="top"
          title="I like it"></i>
      </div>
    </div>
  </div>
</div>
</div> */
}
