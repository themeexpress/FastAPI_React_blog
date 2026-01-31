const Footer = () => {
  const footerLinks = ["Privacy Policy", "Terms of Service", "RSS Feed", "Sitemap"];

  return (
    <footer className="bg-card border-t border-border mt-16">
      <div className="container mx-auto px-4 py-12">
        {/* Main Text */}
        <div className="text-center mb-6">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} MinimalBlog. Crafted with passion for simplicity.
          </p>
        </div>

        {/* Footer Menu */}
        <nav className="flex flex-wrap justify-center gap-6">
          {footerLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              {link}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
