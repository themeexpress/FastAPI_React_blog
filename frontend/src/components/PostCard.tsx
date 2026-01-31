interface PostCardProps {
  title: string;
  author: string;
  date: string;
  excerpt: string;
  imageUrl: string;
}

const PostCard = ({ title, author, date, excerpt, imageUrl }: PostCardProps) => {
  return (
    <article className="group border-b border-border pb-8 mb-8 last:border-b-0 last:pb-0 last:mb-0 animate-fade-in-up">
      {/* Title */}
      <h2 className="text-xl md:text-2xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-200 cursor-pointer leading-tight">
        {title}
      </h2>

      {/* Author & Date */}
      <div className="flex items-center gap-3 text-sm text-muted-foreground mb-4">
        <span className="font-medium">{author}</span>
        <span className="w-1 h-1 rounded-full bg-muted-foreground/50" />
        <time>{date}</time>
      </div>

      {/* Content Row */}
      <div className="flex flex-col md:flex-row gap-6">
        {/* Featured Image */}
        <div className="md:w-2/5 flex-shrink-0">
          <div className="aspect-[16/10] overflow-hidden rounded-lg bg-muted">
            <img
              src={imageUrl}
              alt={title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>

        {/* Excerpt */}
        <div className="md:w-3/5">
          <p className="text-muted-foreground leading-relaxed line-clamp-4">
            {excerpt}
          </p>
          <a
            href="#"
            className="inline-flex items-center mt-4 text-sm font-medium text-primary hover:text-primary/80 transition-colors duration-200"
          >
            Read more
            <svg
              className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </article>
  );
};

export default PostCard;
