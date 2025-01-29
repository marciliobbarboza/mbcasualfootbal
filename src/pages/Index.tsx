import { InstagramFeed } from "@/components/InstagramFeed";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-jersey-cream">
      <main className="container mx-auto px-4 py-8 space-y-12">
        {/* Hero Section */}
        <section className="text-center space-y-4">
          <h1 className="text-4xl md:text-6xl font-montserrat font-bold text-jersey-green">
            Vintage Football Jerseys
          </h1>
          <p className="text-lg md:text-xl font-inter text-gray-600 max-w-2xl mx-auto">
            Discover our collection of classic football jerseys, featuring timeless designs
            and legendary moments from the beautiful game.
          </p>
        </section>

        {/* Featured Products Section - To be implemented */}
        <section className="py-8">
          {/* Product grid will go here */}
        </section>

        {/* Instagram Feed Section */}
        <section className="py-8">
          <InstagramFeed />
        </section>
      </main>
    </div>
  );
};

export default Index;