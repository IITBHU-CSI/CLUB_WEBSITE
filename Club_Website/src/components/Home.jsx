const Home = () => {
    return (
        <div className="relative h-screen">
            <div className="absolute bottom-0 left-0 w-full 
                  bg-white/80 backdrop-blur-md p-8 shadow-lg">
                <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-purple-700 to-pink-600 bg-clip-text text-transparent">
                    About Us
                </h2>
                <p className="text-gray-700 leading-relaxed">
                    The Club of Sustainability and Innovation is a student-led community that
                    combines creativity with responsibility. We work on eco-friendly ideas,
                    impactful projects, and awareness campaigns to build a better and
                    sustainable tomorrow.
                </p>
                <p className="mt-3 text-gray-700 leading-relaxed">
                    Our mission is to inspire students to think beyond conventional boundaries
                    and develop solutions that address real-world environmental and social
                    challenges. Through workshops, research-driven initiatives, and hands-on
                    projects, we encourage innovation that creates meaningful impact.
                </p>
                <p className="mt-3 text-gray-700 leading-relaxed">
                    By bringing together young minds passionate about technology, sustainability,
                    and change-making, we aim to build a platform where ideas turn into actions
                    and students contribute towards shaping a greener, smarter, and more sustainable future.
                </p>
            </div>
        </div>


    );
}
export default Home;