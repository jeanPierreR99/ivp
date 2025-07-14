const Banner = () => {
    return (
        <div id="home" className="relative max-w-[1225px] h-[250px] md:h-[500px] mx-auto overflow-hidden">
            <img className="w-full h-full object-fill" src="./banner.png" alt="Banner" />
            <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-black/40 to-transparent"></div>
        </div>
    );
};

export default Banner;
