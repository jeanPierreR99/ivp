import { motion } from "framer-motion";

const Banner = () => {

    const handleScroll = (id: string) => {
        const el = document.getElementById(id);
        if (el) {
            const yOffset = -80;
            const y = el.getBoundingClientRect().top + window.scrollY + yOffset;
            window.scrollTo({ top: y, behavior: "smooth" });
        }
    };

    return (
        <motion.div
            id="home"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="relative max-w-[1425px] h-[300px] md:h-[400px] mt-20 mx-auto overflow-hidden shadow-lg border-b-15 border-b-[var(--yellow)] bg-[var(--green)] bg-cover bg-no-repeat bg-center"
            style={{ backgroundImage: "url('Recurso 5con lineas.png')" }}
        >

            {/* Texto principal */}
            <div className="absolute z-10 top-1/2 left-6 md:left-10 -translate-y-1/2 text-white flex flex-col gap-4">
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4, duration: 1 }}
                >
                    <h1 className="text-2xl sm:text-4xl md:text-5xl font-black leading-tight">
                        CON TENACIDAD, AVANZAMOS
                    </h1>
                    <h4 className="text-md sm:text-xl md:text-3xl font-bold">
                        PARA CUMPLIR CON EL PROGRESO PROMETIDO
                    </h4>
                </motion.div>

                <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                    onClick={() => handleScroll("projects")}
                    className="bg-[var(--yellow)] text-white hover:scale-105 font-bold px-5 py-2 rounded-md w-fit shadow-md hover:brightness-110 transition"
                >
                    Ver Proyectos
                </motion.button>
            </div>

            {/* Imágenes y número decorativo */}
            <div className="absolute inset-y-0 right-0 w-[50%]">
                <motion.img
                    src="Recurso 6con lineas.png"
                    alt="Decoración derecha"
                    className="relative z-20 w-full h-full object-contain"
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6, duration: 1 }}
                />
                <motion.img
                    src="Recurso 4con lineas.png"
                    alt="Decoración inferior"
                    className="absolute -bottom-10 right-40 z-30 h-[180px] md:h-[300px]"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1, duration: 1 }}
                />
                <motion.img
                    src="num_5.png"
                    alt="Decoración inferior"
                    className="absolute -bottom-0 right-0 z-10 h-[180px] md:h-[340px] top-[50%] translate-y-[-50%]"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1, duration: 1 }}
                />
            </div>
        </motion.div>
    );
};

export default Banner;
