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
        // Mock data with actual jersey images
        const mockPosts = [
          {
            id: "1",
            media_url: "/jerseys/jersey1.jpg",
            permalink: "https://instagram.com/p/1",
            caption: "Classic Manchester United 1999 Champions League Final Jersey",
          },
          {
            id: "2",
            media_url: "/jerseys/jersey2.jpg",
            permalink: "https://instagram.com/p/2",
            caption: "Vintage Arsenal Invincibles Home Kit 2003-04",
          },
          {
            id: "3",
            media_url: "/jerseys/jersey3.jpg",
            permalink: "https://instagram.com/p/3",
            caption: "Real Madrid 2002 Champions League Final Jersey",
          },
          {
            id: "4",
            media_url: "/jerseys/jersey4.jpg",
            permalink: "https://instagram.com/p/4",
            caption: "Brazil 2002 World Cup Winner's Jersey",
          },
          {
            id: "5",
            media_url: "/jerseys/jersey5.jpg",
            permalink: "https://instagram.com/p/5",
            caption: "AC Milan 2007 Champions League Winner Jersey",
          },
          {
            id: "6",
            media_url: "/jerseys/jersey6.jpg",
            permalink: "https://instagram.com/p/6",
            caption: "Barcelona 2009 Treble Winner Home Jersey",
          },
          {
            id: "7",
            media_url: "/jerseys/jersey7.jpg",
            permalink: "https://instagram.com/p/7",
            caption: "Liverpool 2005 Champions League Istanbul Jersey",
          },
          {
            id: "8",
            media_url: "/jerseys/jersey8.jpg",
            permalink: "https://instagram.com/p/8",
            caption: "Juventus 1996 Champions League Winner Jersey",
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
              <div className="relative w-full h-full">
                <img
                  src={post.media_url}
                  alt={post.caption || "Instagram post"}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                {/* Watermark logo overlay */}
                <div className="absolute bottom-4 right-4 w-16 h-16 opacity-50">
                  <img
                    src="/mb-logo.png"
                    alt="MB Casual Football"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
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