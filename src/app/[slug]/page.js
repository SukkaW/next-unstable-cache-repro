import { use } from "react"
import { getData, getPages } from "./data"

export default function DynamicPage({ params }) {
  const data = use(getData());

  return (
    <div>{JSON.stringify(params)}, {JSON.stringify(data)}</div>
  )
}

export async function generateStaticParams() {
  return (await getPages()).map(slug => ({ slug }));
}
