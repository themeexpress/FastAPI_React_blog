import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Calendar, User, Clock, Share2, Bookmark } from "lucide-react";
import { Button } from "@/components/ui/button";
import { posts } from "@/data/posts";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";
import { recentPosts } from "@/data/posts";

const Post = () => {
  const { id } = useParams();
  const post = posts.find((p) => p.id === Number(id));

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">Post Not Found</h1>
          <p className="text-muted-foreground mb-6">The post you're looking for doesn't exist.</p>
          <Link to="/">
            <Button>Back to Home</Button>
          </Link>
        </div>
      </div>
    );
  }

  // Generate sample content for the post
  const sampleContent = `
    <p class="mb-6 text-lg leading-relaxed">${post.excerpt}</p>
    
    <h2 class="text-2xl font-bold mb-4 mt-8">Introduction</h2>
    <p class="mb-6 leading-relaxed text-muted-foreground">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    </p>
    
    <h2 class="text-2xl font-bold mb-4 mt-8">Key Concepts</h2>
    <p class="mb-6 leading-relaxed text-muted-foreground">
      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
    
    <blockquote class="border-l-4 border-primary pl-6 py-2 my-8 italic text-muted-foreground">
      "The best way to predict the future is to create it." - Peter Drucker
    </blockquote>
    
    <h2 class="text-2xl font-bold mb-4 mt-8">Implementation Details</h2>
    <p class="mb-6 leading-relaxed text-muted-foreground">
      Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
    </p>
    
    <h2 class="text-2xl font-bold mb-4 mt-8">Conclusion</h2>
    <p class="mb-6 leading-relaxed text-muted-foreground">
      Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.
    </p>
  `;

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft size={20} />
            <span className="text-sm font-medium">Back to Home</span>
          </Link>
          <Link to="/" className="text-2xl font-bold text-foreground tracking-tight">
            <span className="text-primary">Minimal</span>Blog
          </Link>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon">
              <Share2 size={20} />
            </Button>
            <Button variant="ghost" size="icon">
              <Bookmark size={20} />
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1 container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Main Content */}
          <article className="lg:w-2/3 animate-fade-in">
            {/* Featured Image */}
            <div className="rounded-xl overflow-hidden mb-8">
              <img
                src={post.imageUrl}
                alt={post.title}
                className="w-full h-64 md:h-96 object-cover"
              />
            </div>

            {/* Post Header */}
            <header className="mb-8">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
                {post.title}
              </h1>
              
              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <User size={16} />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar size={16} />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={16} />
                  <span>5 min read</span>
                </div>
              </div>
            </header>

            {/* Post Content */}
            <div
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: sampleContent }}
            />

            {/* Author Bio */}
            <div className="mt-12 p-6 bg-muted/50 rounded-xl">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-xl">
                  {post.author.charAt(0)}
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">{post.author}</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    A passionate writer and developer sharing insights about modern web development, 
                    design patterns, and best practices.
                  </p>
                </div>
              </div>
            </div>
          </article>

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

export default Post;
