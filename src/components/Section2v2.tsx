import { motion } from "framer-motion";

const Section2v2 = () => {
    return (
        <motion.div
            id="about"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="overflow-hidden relative border-b-[15px] border-[var(--green)] grid grid-cols-1 md:grid-cols-3 bg-cover bg-center pt-16 pb-0 text-gray-500 gap-6 md:gap-0"
        >
            {/* Columna 1 - Nosotros */}
            <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className="flex flex-col relative"
            >
                <img
                    className="absolute -left-14 top-10 h-full -z-20  hidden md:block"
                    src="/num_2.png"
                    alt=""
                />
                <div className=" pb-10 space-y-4 md:pl-30 px-4 md:px-0">
                    <h4 className="text-[var(--yellow)] text-xl font-bold">NOSOTROS</h4>
                    <p className="text-xs md:text-sm text-justify">
                        Planificamos, coordinamos y ejecutamos el mantenimiento de la red vial rural y vecinal.
                        Creado bajo el marco de la Ley N.º 27972 – Ley Orgánica de Municipalidades, para mejorar
                        la transitabilidad de caminos en zonas rurales. Su labor contribuye al desarrollo económico
                        local y mejora la calidad de vida de miles de ciudadanos al facilitar el acceso a servicios,
                        mercados y centros poblados
                    </p>
                </div>
                <img
                    src="Recurso 3con lineas.png"
                    alt=""
                    className="w-full hover:scale-105 duration-500"
                />
            </motion.div>

            {/* Columna 2 - Misión */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
                viewport={{ once: true }}
                className="px-4 md:px-10 space-y-4 flex flex-col"
            >
                <img
                    src="n1.png"
                    className="border-l-2 hover:scale-105 duration-500 border-[var(--yellow)] mt-4 md:mt-0 order-2 md:order-none"
                    alt=""
                />
                <h4 className="text-[var(--yellow)] text-xl font-bold">MISIÓN</h4>
                <p className="text-xs md:text-sm text-justify">
                    Desarrollar la infraestructura Vial, Básica Rural y Urbano Marginal
                    de la Provincia, mediante la implementación de mecanismos
                    institucionales y financieros para una gestión adecuada de las
                    mismas, a fin de contribuir al desarrollo Económico y Social de
                    calidad de vida de las Poblaciones Rurales de menores ingresos.
                </p>
            </motion.div>

            {/* Columna 3 - Visión */}
            <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
                viewport={{ once: true }}
                className="flex flex-col space-y-4 px-4 md:px-0"
            >
                <h4 className="text-[var(--yellow)] text-xl font-bold">VISIÓN</h4>
                <p className="text-xs md:text-sm text-justify md:pr-4">
                    Planificamos, coordinamos y ejecutamos el mantenimiento de la red vial rural y vecinal.
                    Creado bajo el marco de la Ley N.º 27972 – Ley Orgánica de Municipalidades, para mejorar
                    la transitabilidad de caminos en zonas rurales. Su labor contribuye al desarrollo económico
                    local y mejora la calidad de vida de miles de ciudadanos al facilitar el acceso a servicios,
                    mercados y centros poblados
                </p>
                <img
                    src="n2.png"
                    className="w-full h-full hover:scale-105 duration-500 border-l-2 border-[var(--yellow)]"
                    alt=""
                />
            </motion.div>
        </motion.div>
    );
};

export default Section2v2;
