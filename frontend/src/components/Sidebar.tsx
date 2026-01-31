interface RecentPost {
  title: string;
  date: string;
}

interface SidebarProps {
  recentPosts: RecentPost[];
}

const Sidebar = ({ recentPosts }: SidebarProps) => {
  return (
    <aside className="lg:sticky lg:top-24 animate-fade-in">
      <div className="bg-card rounded-xl p-6 border border-border">
        <h3 className="text-lg font-semibold text-foreground mb-6 pb-3 border-b border-border">
          Recent Posts
        </h3>
        <ul className="space-y-4">
          {recentPosts.map((post, index) => (
            <li
              key={index}
              className="group cursor-pointer"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <a href="#" className="block">
                <h4 className="text-sm font-medium text-foreground group-hover:text-primary transition-colors duration-200 leading-snug mb-1">
                  {post.title}
                </h4>
                <time className="text-xs text-muted-foreground">{post.date}</time>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
