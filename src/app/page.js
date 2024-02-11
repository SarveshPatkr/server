
import { utapi } from "@/utils/uploadthing";
import Btn from "@/components/Btn";

export default async function Home() {

    const files = await utapi.listFiles();
    console.log(files)
    
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            {
                files.map((video, i) => {
                    return (
                        <Btn key={video.id} videoKey={video.key}/>
                    );
                })
            }
        </main>
    );
}
