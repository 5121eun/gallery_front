import ImageSkeleton from "./image-skeleton";

export default function GallerySkeleton() {
    
    const image = () => {
        const result = []
        for (let i = 0; i < 4; i++) {
            result.push(
                <div key={i} className="grid gap-4">
                    <ImageSkeleton className="aspect-[5/3]"/>
                    <ImageSkeleton className="aspect-[5/3]"/>
                    <ImageSkeleton className="aspect-[5/3]"/>
                    <ImageSkeleton className="aspect-[5/3]"/>
                </div>
            )
        }
        return result
    }
    
    return (
        <div className="flex w-full grid gap-4 grid-cols-1 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 m-5">
            {image()}
        </div>
    )
}