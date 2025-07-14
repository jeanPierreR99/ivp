const Section1 = () => {
    return (
        <div
            id="about"
            style={{ backgroundImage: "url('/fondo-s1.png')" }}
            className="h-auto grid grid-cols-1 lg:grid-cols-2 bg-cover bg-center pt-6"
        >
            <div className="relative h-[500px] lg:h-auto">
                <img src="./fondo-s2.png" className="absolute left-0 bottom-0 h-8/12 w-full" alt="" />
                <div className="w-6/12 m-auto h-full">
                    <img src="./alcalde-s1.png" className="h-full w-full relative" alt="" />
                </div>
            </div>
            <div className="flex flex-col gap-6 lg:justify-around px-6 py-4 items-end">
                <div className="text-green-500 justify-end text-3xl md:text-7xl font-black flex gap-4 items-center">
                    <p className="relative before:content-['+'] before:absolute md:before:-top-14 before:-top-6">
                        DE
                    </p>
                    <div className="flex flex-col leading-9">
                        <span className=" text-5xl md:text-9xl">250</span>
                        <span>OBRAS</span>
                    </div>
                </div>
                <div className="flex gap-4 items-center w-fit lg:w-auto bg-yellow-400 justify-center rounded-4xl shadow-xl text-2xl md:text-4xl p-6 text-yellow-900/70">
                    <span className="font-bold text-5xl md:text-8xl">+ 150</span>
                    <div className="flex flex-col gap-2 text-center leading-6">
                        <span>VIAS</span>
                        <span>VECINALES</span>
                    </div>
                </div>
                <p className="text-orange-900/60 text-right font-bold md:text-xl">
                    Recuperación de áreas públicas, mejoramiento de
                    vías vecinales y construcción de más vías de acceso
                    a las rutas vecinales de Tambopata.
                </p>
            </div>
        </div>
    );
};

export default Section1;
