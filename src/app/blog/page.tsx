import type { Metadata } from 'next';
import CtaSection from '../_components/CtaSection';

export const metadata: Metadata = {
  title: 'Blog - The Ruby Gore | Tattoo Tips, Stories & Resources',
  description: 'Articles about trauma-informed tattooing, scar cover-ups, vegan tattoos, aftercare, and more from Ruby Gore.',
};

export default function BlogPage() {
  const blogPosts = [
    {
      category: 'Trauma-Informed',
      title: 'My Journey With Trauma-Informed Tattooing: An Interview with The Washington Post',
      excerpt: 'How I incorporate trauma-awareness into my tattooing practice and how you can too',
      link: '/blog/trauma-informed-tattoo-interview-published-on-washington-post',
    },
    {
      category: 'Interviews',
      title: 'Interview with Frankie Lee Von of Second Skin',
      excerpt: 'Discussing the journey to becoming a tattoo artist, healing trauma, covering scars, vegan practices, and creating safe spaces.',
      link: '/blog/interview-with-frankie-lee-von-of-secondskin',
    },
    {
      category: 'Interviews',
      title: 'Philly Talks Interview',
      excerpt: 'My journey of learning boundaries by building a compassionate practice in a fierce industry.',
      link: '/blog/interview-with-philly-talks',
    },
    {
      category: 'Trauma-Informed',
      title: 'A Trauma-Informed Approach to Tattooing',
      excerpt: 'Creating a safe, understanding, and empowering environment for every client.',
      link: '/blog/a-trauma-informed-approach-to-tattooing',
    },
  ];

  return (
    <>
      <section className="page-hero page-hero--tight">
        <div className="container">
          <h1>Blog</h1>
        </div>
      </section>

      {/* Featured Article */}
      <section className="featured-article">
        <div className="container">
          <div className="article-card article-card--featured">
            <div className="article-badge">{blogPosts[0].category}</div>
            <h2 className="text-title">{blogPosts[0].title}</h2>
            <p>{blogPosts[0].excerpt}</p>
            <a href={blogPosts[0].link} className="btn btn--red-light">Read More →</a>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="blog-grid">
        <div className="container">
          <div className="blog-posts">
            {blogPosts.slice(1).map((post, index) => (
              <div key={index} className="article-card">
                <div className="article-badge">{post.category}</div>
                <h3 className="text-title">{post.title}</h3>
                <p>{post.excerpt}</p>
                <a href={post.link} className="article-link">Read More →</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaSection
        title="Ready to start your tattoo journey?"
        description="Book your consultation and let's create something beautiful together."
        buttonText="→ Book Your Session"
        buttonLink="/apply-now"
      />
    </>
  );
}

