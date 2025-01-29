import { useEffect, useState } from "react";
import { Card } from "./ui/card";
import { Skeleton } from "./ui/skeleton";

interface InstagramPost {
  id: string;
  media_url: string;
  permalink: string;
  caption?: string;
}

export const InstagramFeed = () => {
  const [posts, setPosts] = useState<InstagramPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        // For now, we'll use a mock fetch - this will be replaced with actual Instagram API integration
        const mockPosts = [
          {
            id: "1",
            media_url: "https://via.placeholder.com/300x300",
            permalink: "https://instagram.com/mbcasualfootball",
            caption: "Vintage football jersey",
          },
          // Add more mock posts as needed
        ];
        setPosts(mockPosts);
      } catch (error) {
        console.error("Failed to fetch Instagram posts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) {
    return (
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {[...Array(8)].map((_, i) => (
          <Skeleton key={i} className="aspect-square rounded-lg" />
        ))}
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-montserrat font-bold text-jersey-green">
        Follow Us @mbcasualfootball
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {posts.map((post) => (
          <Card
            key={post.id}
            className="group overflow-hidden rounded-lg hover:shadow-xl transition-shadow duration-300"
          >
            <a
              href={post.permalink}
              target="_blank"
              rel="noopener noreferrer"
              className="block aspect-square"
            >
              <img
                src={post.media_url}
                alt={post.caption || "Instagram post"}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
              />
            </a>
          </Card>
        ))}
      </div>
    </div>
  );
};