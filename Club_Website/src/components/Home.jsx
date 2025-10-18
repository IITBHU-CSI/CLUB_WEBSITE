const Home = () => {
  return (
    <div className="w-full pr-4 sm:pr-6 md:pr-10 lg:pr-20 ">
      
      {/* About Heading */}
      <h3 className="text-[clamp(1.5rem,4vw,2.5rem)] font-bold mb-4 bg-gradient-to-r text-[#ae0080d3] bg-clip-text ">
        About Us
      </h3>
      
      {/* About Text */}
      <p className="text-black leading-relaxed text-[clamp(1rem,2.5vw,1.25rem)]">
        The CSI Club of Sustainability aims to promote balance in economic, social, 
        and environmental aspects. The club encourages students to understand that 
        true development is not limited to economic growth, but also includes 
        social responsibility and environmental protection.
      </p>
      
    </div>
  );
}

export default Home;
