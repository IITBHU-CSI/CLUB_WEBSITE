const Home = () => {
    return (
        <div className="w-full max-w-4xl backdrop-blur-md p-0">
            <h3 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-700 to-pink-600 bg-clip-text text-transparent">
                About Us
            </h3>
            <p className="text-black leading-relaxed text-2xl">
                {/* The Club of Sustainability and Innovation is a student-led community that
                combines creativity with responsibility. We work on eco-friendly ideas,
                impactful projects, and awareness campaigns to build a better and
                sustainable tomorrow. */}
                The CSI Club of Sustainability aims to promote balance in economic, social, 
                and environmental aspects. The club encourages students to understand that 
                true development is not limited to economic growth, but also includes 
                social responsibility and environmental protection.
            </p>
            <p className="text-2xl mt-3 text-black leading-relaxed">
                {/* Our mission is to inspire students to think beyond conventional boundaries
                and develop solutions that address real-world environmental and social
                challenges. Through workshops, research-driven initiatives, and hands-on
                projects, we encourage innovation that creates meaningful impact. */}
            </p>
            <p className="mt-3 text-gray-700 leading-relaxed">
                {/* By bringing together young minds passionate about technology, sustainability,
                and change-making, we aim to build a platform where ideas turn into actions
                and students contribute towards shaping a greener, smarter, and more sustainable future. */}
            </p>
        </div>
    );
}
export default Home;

``