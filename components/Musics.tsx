"use client";
import { useEffect, useState } from "react";
import MusicCard from "./MusicCard";
import AdminMusicCard from "./AdminMusicCard";


type Param = {
  promise: Promise<MusicProps[]>;
  user: string
};

export default async function Songs({ promise,user }: Param) {

  const [musics,setMusics] = useState<MusicProps[]>([])
    useEffect(() => {
    const fetchData = async()=> {
       let query = await promise;
       setMusics(query)
    }
    fetchData()
  },[])
  const content = musics.map((music) => {
    return (
      <div key={music.id} className="col-md-3 d-flex mb-3 align-items-stretch">
        { user == "admin" ?
         <AdminMusicCard
         id={music.id}
         audio={music.audio}
         title={music.title}
         description={music.description}
         singer={music.singer}
         date_released={music.date_released}
         image={music.image}
         slug={music.slug}
       />:
       <MusicCard
       id={music.id}
       audio={music.audio}
       title={music.title}
       description={music.description}
       singer={music.singer}
       date_released={music.date_released}
       image={music.image}
       slug={music.slug}
     />
        }
      </div>
    );
  });
  return musics.length ? content : <h3>There are no Music to show</h3>;
}

// 2111870097
