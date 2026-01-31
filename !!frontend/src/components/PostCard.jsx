export default function PostCard({ post }) {
  return (
    <article className="bg-white rounded-xl shadow-sm hover:shadow-md transition p-6">
      <h2 className="text-xl font-semibold mb-2">
        {post.title}
      </h2>
      <p className="text-gray-600 text-sm line-clamp-3">
        {post.content}
      </p>
    </article>
  )
}
