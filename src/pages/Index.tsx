import { InstagramFeed } from "@/components/InstagramFeed";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-jersey-cream">
      <main className="container mx-auto px-4 py-12 space-y-16">
        {/* Hero Section */}
        <section className="text-center space-y-6 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-montserrat font-bold text-jersey-green">
            Vintage Football Jerseys
          </h1>
          <p className="text-xl md:text-2xl font-inter text-gray-600">
            Discover our curated collection of classic football jerseys, featuring timeless designs
            and legendary moments from the beautiful game.
          </p>
        </section>

        {/* Featured Products Section - To be implemented */}
        <section className="py-8">
          {/* Product grid will go here */}
        </section>

        {/* Instagram Feed Section */}
        <section className="py-12 bg-white rounded-xl shadow-sm">
          <InstagramFeed />
        </section>
      </main>
    </div>
  );
};

export default Index;