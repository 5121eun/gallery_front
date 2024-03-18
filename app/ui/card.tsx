import Link from 'next/link';
import Image from 'next/image'
import { Post } from '@/app/lib/definitions';

interface CardProps  {
    post: Post;
  }

export default function Card({ post } : CardProps) {
    return (
      <Link
        className='relative aspect-[6/4]'
        href={`/post/${post.id}/detail`}>
        <Image 
            fill
            src={post.image}
            className=" hover:opacity-50"
            alt="image"
            />
      </Link>
    )
}