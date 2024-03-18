import Link from 'next/link';
import Image from 'next/image'
import { Post } from '@/app/lib/definitions';

interface CardProps  {
    post: Post;
  }

export default function Card({ post } : CardProps) {
    return (
      <Link
        href={`/post/${post.id}/detail`}>
        <Image 
            src={post.image}
            width={400}
            height={300}
            className="aspect-[4/3] hover:opacity-50"
            alt="image"
            />
      </Link>
    )
}