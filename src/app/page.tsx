import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className='m-4'>
      <Link href="/about">About</Link>
    </div>
  )
}
