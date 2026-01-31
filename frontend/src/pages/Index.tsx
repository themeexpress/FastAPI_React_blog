import Header from "@/components/Header";
import PostCard from "@/components/PostCard";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";
import { posts, recentPosts } from "@/data/posts";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Main Content - Posts */}
          <section className="lg:w-2/3">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
              Latest Articles
            </h1>
            <p className="text-muted-foreground mb-10">
              Thoughts, stories, and ideas about modern web development.
            </p>

            <div className="space-y-0">
              {posts.map((post, index) => (
                <div
                  key={post.id}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <PostCard
                    title={post.title}
                    author={post.author}
                    date={post.date}
                    excerpt={post.excerpt}
                    imageUrl={post.imageUrl}
                  />
                </div>
              ))}
            </div>
          </section>

          {/* Sidebar */}
          <aside className="lg:w-1/3">
            <Sidebar recentPosts={recentPosts} />
          </aside>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
