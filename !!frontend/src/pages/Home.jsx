import { useEffect, useState } from "react"
import api from "../api/api"
import PostCard from "../components/PostCard"

export default function Home() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    api.get("/posts/").then(res => setPosts(res.data))
  }, [])

  return (
    <div className="space-y-6">
      {posts.map(post => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  )
}
