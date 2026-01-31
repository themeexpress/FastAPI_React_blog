import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ImagePlus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [content, setContent] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Create post:", { title, excerpt, content, imageUrl, category });
  };

  return (
    <div className="min-h-screen bg-background">
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
          <div className="w-24" /> {/* Spacer for centering */}
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <Card className="max-w-3xl mx-auto animate-fade-in">
          <CardHeader>
            <CardTitle className="text-2xl md:text-3xl">Create New Post</CardTitle>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="title">Post Title</Label>
                <Input
                  id="title"
                  type="text"
                  placeholder="Enter your post title..."
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="category">Category</Label>
                <Input
                  id="category"
                  type="text"
                  placeholder="e.g., Technology, Design, Development"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="imageUrl">Featured Image URL</Label>
                <div className="flex gap-2">
                  <Input
                    id="imageUrl"
                    type="url"
                    placeholder="https://example.com/image.jpg"
                    value={imageUrl}
                    onChange={(e) => setImageUrl(e.target.value)}
                  />
                  <Button type="button" variant="outline" size="icon">
                    <ImagePlus size={20} />
                  </Button>
                </div>
                {imageUrl && (
                  <div className="mt-3 rounded-lg overflow-hidden border border-border">
                    <img
                      src={imageUrl}
                      alt="Preview"
                      className="w-full h-48 object-cover"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = "none";
                      }}
                    />
                  </div>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="excerpt">Excerpt</Label>
                <Textarea
                  id="excerpt"
                  placeholder="Write a brief summary of your post..."
                  value={excerpt}
                  onChange={(e) => setExcerpt(e.target.value)}
                  rows={3}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="content">Content</Label>
                <Textarea
                  id="content"
                  placeholder="Write your post content here..."
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  rows={12}
                  required
                />
              </div>

              <div className="flex gap-4 pt-4">
                <Button type="submit" className="flex-1">
                  Publish Post
                </Button>
                <Button type="button" variant="outline">
                  Save Draft
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default CreatePost;
