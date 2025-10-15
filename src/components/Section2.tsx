import { motion } from "framer-motion";

const functions = [
    "Recuperar, mejorar, incrementar y mantener la infraestructura de Transporte Vecinal.",
    "Consolidar la capacidad institucional en materia de gestión de infraestructura Vial Rural.",
    "Planificar, programar, concertar, ejecutar, supervisar y evaluar la ejecución de estudios, obras y actividades de Infraestructura Vial Rural.",
    "Actualizar periódicamente la relación en orden de prioridad de los caminos rurales que precisan de rehabilitación y mantenimiento, abarcando a todos los distritos.",
    "Participar en otras actividades vinculadas con el desarrollo integral de Infraestructura Vial Rural, Básica Rural y Urbano Marginal.",
    "Brindar apoyo, asistencia técnica y capacitación a las microempresas y ciudadanía involucrada en el mantenimiento de la Red Vial Rural de la Provincia.",
    "Supervisión de Obras Viales.",
];

const containerVariants = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const itemVariants: any = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Section2 = () => {
    return (
        <div id="functions" className="border-t-[15px] border-[var(--yellow)] pt-16 pb-0">
            <h4 className="text-3xl md:text-5xl font-black text-center text-[var(--yellow)] mb-10">
                FUNCIONES DEL IVP
            </h4>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 px-4">
                {/* Funciones animadas */}
                <motion.div
                    className="flex flex-col text-sm md:text-base"
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={containerVariants}
                >
                    {functions.map((text, idx) => (
                        <motion.div
                            key={idx}
                            variants={itemVariants}
                            className="relative -mt-3 bg-[url('/pergamino.png')] hover:scale-105 duration-300 bg-no-repeat bg-contain bg-left-top p-6 pl-6 md:pl-16 min-h-[170px] md:min-h-[150px] text-white font-bold leading-tight"
                            style={{ backgroundSize: '100% 100%' }}
                        >
                            {text}
                        </motion.div>
                    ))}
                </motion.div>

                {/* Imágenes decorativas */}
                <div className="relative min-h-[900px]">
                    <img className="absolute w-70 md:w-100 hover:-rotate-15 hover:scale-110 duration-500 left-10 top-0" src="Recurso 7con lineas.png" alt="" />
                    <img className="absolute w-70 md:w-100 hover:rotate-15 hover:scale-110 duration-500 right-0 top-8 z-10" src="Recurso 8con lineas.png" alt="" />
                    <img className="absolute w-70 md:w-100 hover:-rotate-15 hover:scale-110 duration-500 left-10 top-[260px]" src="Recurso 10con lineas.png" alt="" />
                    <img className="absolute w-70 md:w-100 hover:rotate-15 hover:scale-110 duration-500 right-5 top-[340px] z-20" src="Recurso 9con lineas.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Section2;
