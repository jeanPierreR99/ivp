import { motion } from "framer-motion";

const Section1 = () => {
    return (
        <div
            id="about"
            style={{ backgroundImage: "url('/fondo-s1.png')" }}
            className="h-auto grid grid-cols-1 lg:grid-cols-2 bg-cover bg-center pt-16 overflow-hidden"
        >
            <div className="flex flex-col gap-6 lg:justify-around px-6 py-4 items-end">

                {/* Título grande */}
                <motion.div
                    className="text-green-500 justify-end text-3xl md:text-7xl font-black flex gap-4 items-center"
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    <p className="relative before:content-['+'] before:absolute md:before:-top-14 before:-top-6">
                        DE
                    </p>
                    <div className="flex flex-col leading-9">
                        <span className=" text-5xl md:text-9xl">250</span>
                        <span>OBRAS</span>
                    </div>
                </motion.div>

                {/* Caja amarilla */}
                <motion.div
                    className="flex gap-4 items-center w-fit lg:w-auto bg-yellow-400 justify-center rounded-4xl shadow-xl text-2xl md:text-4xl p-6 text-yellow-900/70"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                >
                    <span className="font-bold text-5xl md:text-8xl">+ 150</span>
                    <div className="flex flex-col gap-2 text-center leading-6">
                        <span>VIAS</span>
                        <span>VECINALES</span>
                    </div>
                </motion.div>

                {/* Párrafo final */}
                <motion.p
                    className="text-orange-900/60 text-right font-bold md:text-xl"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    viewport={{ once: true }}
                >
                    Recuperación de áreas públicas, mejoramiento de
                    vías vecinales y construcción de más vías de acceso
                    a las rutas vecinales de Tambopata.
                </motion.p>
            </div>

            <div className="relative h-[500px] lg:h-auto">
                <motion.div
                    className="w-12/12 m-auto h-full"
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <img
                        src="volquete.png"
                        className="h-full w-full relative hover:scale-105 duration-500"
                        alt=""
                    />
                </motion.div>
            </div>
        </div>
    );
};

export default Section1;
