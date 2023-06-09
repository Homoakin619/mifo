import { fetchAllMusics } from "@/utils/utilities";
import { Suspense } from "react";
import Songs from "@/components/Musics";

export default async function Home() {
  const data = await fetchAllMusics();
  const music = JSON.parse(data)
  return (
    <>
    <div className="d-flex align-items-center justify-content-center banner" style={{background: "#e3f2fd"}} >
      <div className="d-flex justify-content-center flex-column">
        <h1 className="banner-head text-center">Mahbub Islamic Foundation</h1>
        <p className="banner-sub text-center">Your sure plug for the best religious and spiritual musics</p>
      </div>
    </div>
    <div className="container mt-5 mb-4 ">
      <div className="d-flex justify-content-center mt-3 mb-3 ">
        
        <h3 className="banner-head">Our Music Collection</h3>
      </div>
      <div className="row content">
        <Suspense fallback={<h3>Loading ...</h3>}>
          <Songs promise={music} />
        </Suspense>
      </div>
    </div>
    </>
  );
}
