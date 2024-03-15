import PostDetailForm from "@/app/ui/post/detail/post-detail-form";

export default function Page({ params }: { params: {id: string} }) {
    const id = params.id;

    return (
        <main>
            <PostDetailForm id={Number(id)}/>
        </main>
    )
}