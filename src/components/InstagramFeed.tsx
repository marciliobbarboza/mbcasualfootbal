import { useEffect, useState } from "react";
import { Card } from "./ui/card";
import { Skeleton } from "./ui/skeleton";
import { ExternalLink } from "lucide-react";

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
        // Mock data - to be replaced with actual Instagram API integration
        const mockPosts = [
          {
            id: "1",
            media_url: "https://via.placeholder.com/300x300",
            permalink: "https://instagram.com/p/1",
            caption: "Classic Manchester United 1999 Champions League Final Jersey",
          },
          {
            id: "2",
            media_url: "https://via.placeholder.com/300x300",
            permalink: "https://instagram.com/p/2",
            caption: "Vintage Arsenal Invincibles Home Kit 2003-04",
          },
          {
            id: "3",
            media_url: "https://via.placeholder.com/300x300",
            permalink: "https://instagram.com/p/3",
            caption: "Real Madrid 2002 Champions League Final Jersey",
          },
          {
            id: "4",
            media_url: "https://via.placeholder.com/300x300",
            permalink: "https://instagram.com/p/4",
            caption: "Brazil 2002 World Cup Winner's Jersey",
          },
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
    <div className="space-y-8">
      <div className="text-center space-y-2">
        <h2 className="text-3xl font-montserrat font-bold text-jersey-green">
          Follow Us @mbcasualfootball
        </h2>
        <p className="text-gray-600 font-inter">
          Discover our latest vintage finds and jersey stories
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {posts.map((post) => (
          <Card
            key={post.id}
            className="group relative overflow-hidden rounded-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
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
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                <ExternalLink className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" size={24} />
              </div>
              {post.caption && (
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-sm font-medium line-clamp-2">
                    {post.caption}
                  </p>
                </div>
              )}
            </a>
          </Card>
        ))}
      </div>
    </div>
  );
};