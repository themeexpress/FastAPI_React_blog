import { useEffect, useState } from "react"
import api from "../api/api"

export default function Sidebar() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    api.get("/posts/").then(res => setPosts(res.data))
  }, [])

  return (
    <div className="bg-white rounded-xl shadow-sm p-6 sticky top-24">
      <h3 className="font-semibold mb-4">Recent Posts</h3>

      <ul className="space-y-2 text-sm">
        {posts.slice(0, 5).map(p => (
          <li key={p.id} className="hover:text-blue-600 cursor-pointer">
            {p.title}
          </li>
        ))}
      </ul>
    </div>
  )
}
