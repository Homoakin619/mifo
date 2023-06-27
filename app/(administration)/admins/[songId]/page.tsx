import { Metadata } from "next";
import { notFound } from "next/navigation";
import { fetchAllMusics, fetchMusicBySlug } from "@/utils/utilities";
import MusicDisplayCard from "@/components/MusicDisplayCard";


type Param = {
  params: {
    songId: string;
  };
};

export async function generateMetadata({
  params: { songId },
}: Param): Promise<Metadata> {
  const music: Promise<any> = fetchMusicBySlug(songId);
  const mus = await music;
  const song = JSON.parse(mus)
  if (!song?.id) return { title: "Music not Found" };

  return {
    title: `MIFO | ${song.title}`,
    description: `${song.description}`,
  };
}


export async function generateStaticParams() {
  const data = fetchAllMusics();
  const musicData: MusicProps[] = await data;
  return musicData.map((music) => ({ songId: music.slug }));
  
}

export default async function AdminMusicPage({ params: { songId } }: Param) {
  const productData: Promise<any> = fetchMusicBySlug(songId);
  const musc = await productData;
  const music = JSON.parse(musc)

  let audioUrl = music.audio.replace("upload/","upload/fl_attachment/")
  
  if (!music?.id) notFound();

  return (
    <div className="item-detail d-flex align-items-center flex-column justify-content-center">
      <div className="col-md-3 align-items-stretch mb-3">
        
        <MusicDisplayCard
          id={music.id}
          audio={music.audio}
          title={music.title}
          description={music.description}
          singer={music.singer}
          date_released={music.date_released}
          image={music.image}
          slug={music.slug}
        />
      </div>
      <div>
      <a className="btn btn-secondary" href={audioUrl} download>Download file here</a>
      </div>
    </div>
  );
}
