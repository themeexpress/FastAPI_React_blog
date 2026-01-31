export interface Post {
  id: number;
  title: string;
  author: string;
  date: string;
  excerpt: string;
  imageUrl: string;
}

export const posts: Post[] = [
  {
    id: 1,
    title: "The Art of Minimalist Design in Modern Web Development",
    author: "Sarah Chen",
    date: "January 28, 2025",
    excerpt: "Discover how embracing simplicity can transform your web projects. In this comprehensive guide, we explore the principles of minimalist design and how they can be applied to create stunning, user-friendly websites that stand the test of time.",
    imageUrl: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&q=80",
  },
  {
    id: 2,
    title: "Building Scalable React Applications: Best Practices",
    author: "Michael Torres",
    date: "January 25, 2025",
    excerpt: "Learn the essential patterns and practices for building React applications that scale. From component architecture to state management, this guide covers everything you need to know to build maintainable codebases.",
    imageUrl: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80",
  },
  {
    id: 3,
    title: "The Future of TypeScript: What's Coming in 2025",
    author: "Emma Wilson",
    date: "January 22, 2025",
    excerpt: "TypeScript continues to evolve with exciting new features. We take a deep dive into the upcoming changes and how they will impact your development workflow, from improved type inference to new utility types.",
    imageUrl: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&q=80",
  },
  {
    id: 4,
    title: "Mastering CSS Grid: Advanced Layout Techniques",
    author: "David Park",
    date: "January 18, 2025",
    excerpt: "CSS Grid has revolutionized web layouts. In this tutorial, we explore advanced techniques for creating complex, responsive layouts with ease. Learn how to leverage grid template areas, auto-placement, and more.",
    imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
  },
  {
    id: 5,
    title: "Performance Optimization Strategies for Modern Websites",
    author: "Lisa Johnson",
    date: "January 15, 2025",
    excerpt: "Speed matters. Discover proven strategies for optimizing your website's performance, from lazy loading and code splitting to image optimization and caching strategies that will delight your users.",
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
  },
  {
    id: 6,
    title: "Introduction to Server Components in React",
    author: "Alex Morgan",
    date: "January 12, 2025",
    excerpt: "Server Components are changing how we think about React applications. Learn the fundamentals of this paradigm shift and how to leverage server-side rendering for better performance and user experience.",
    imageUrl: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=800&q=80",
  },
];

export const recentPosts = [
  { title: "Understanding React Server Actions", date: "Jan 30, 2025" },
  { title: "A Guide to Modern CSS Architecture", date: "Jan 29, 2025" },
  { title: "The Rise of Edge Computing", date: "Jan 28, 2025" },
  { title: "Accessibility Best Practices for 2025", date: "Jan 27, 2025" },
  { title: "State Management Without the Complexity", date: "Jan 26, 2025" },
  { title: "Building Design Systems from Scratch", date: "Jan 25, 2025" },
];
