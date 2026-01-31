import { Link } from "react-router-dom";
import { ArrowLeft, Users, Target, Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Footer from "@/components/Footer";

const About = () => {
  const team = [
    {
      name: "Sarah Chen",
      role: "Founder & Editor",
      bio: "Passionate about minimalist design and clean code.",
    },
    {
      name: "Michael Torres",
      role: "Lead Developer",
      bio: "Building scalable applications with modern technologies.",
    },
    {
      name: "Emma Wilson",
      role: "Content Strategist",
      bio: "Crafting compelling stories that resonate with readers.",
    },
  ];

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
          <div className="w-24" />
        </div>
      </header>

      <main className="flex-1 container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            About MinimalBlog
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We're a team of passionate writers and developers dedicated to sharing 
            knowledge about modern web development, design, and technology.
          </p>
        </div>

        {/* Values Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="animate-fade-in" style={{ animationDelay: "100ms" }}>
            <CardContent className="pt-6 text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Target className="text-primary" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Our Mission</h3>
              <p className="text-muted-foreground">
                To democratize knowledge and make complex topics accessible to everyone 
                through clear, concise, and practical content.
              </p>
            </CardContent>
          </Card>

          <Card className="animate-fade-in" style={{ animationDelay: "200ms" }}>
            <CardContent className="pt-6 text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Heart className="text-primary" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Our Values</h3>
              <p className="text-muted-foreground">
                Quality over quantity. We believe in creating thoughtful, well-researched 
                content that truly helps our readers grow.
              </p>
            </CardContent>
          </Card>

          <Card className="animate-fade-in" style={{ animationDelay: "300ms" }}>
            <CardContent className="pt-6 text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Users className="text-primary" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Our Community</h3>
              <p className="text-muted-foreground">
                Join thousands of developers and designers who trust MinimalBlog 
                for their learning journey.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Team Section */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground text-center mb-10">
            Meet Our Team
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div
                key={member.name}
                className="text-center animate-fade-in"
                style={{ animationDelay: `${(index + 4) * 100}ms` }}
              >
                <div className="w-24 h-24 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4 text-primary font-bold text-2xl">
                  {member.name.charAt(0)}
                </div>
                <h3 className="text-lg font-semibold text-foreground">{member.name}</h3>
                <p className="text-sm text-primary mb-2">{member.role}</p>
                <p className="text-sm text-muted-foreground">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;
