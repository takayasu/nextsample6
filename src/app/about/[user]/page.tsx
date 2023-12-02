import { SearchQuery } from '@/api/search';
import Image from 'next/image'
import Link from 'next/link'

export default async function About({ params }: { params: { user: string } }) {

  const data = await SearchQuery(params.user);

  return (
    <div className="m-4 flex flex-col items-center">
      <div className="card w-96 bg-base-100 shadow-xl mt-2 flex flex-col items-center">
        <figure><img src={data.avatar_url} /></figure>
        <div className="card-body">
          <h2 className="card-title">{data.name}</h2>
          <div className="flex flex-row m-4">
            <p><a className="font-medium text-blue-600 dark:text-blue-500 hover:underline" href={data.html_url}>Github</a></p>
            <p>Public Repo: {data.public_repos}</p>
          </div>

        </div>
      </div>
    </div>
  )
}

export async function generateStaticParams() {
  return [{
    user: "takayasu"
  },{
    user: "abc"
  }]
}
