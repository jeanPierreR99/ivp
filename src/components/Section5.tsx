import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const data: any = {
    piedras: [
        { proyecto: "EMP. MD-577 - SAN MARTIN 1 - PTA. CARRETERA (KM 04+700)" },
        { proyecto: "EMP. PE-30 C (LAS PIEDRAS KM 00+620 - PLANCHON) - PTA. CARRETERA (KM 07+190)" },
        { proyecto: "EMP. R70141 - DESVIO QUEBRADA LOBOYOC - SAN MARTIN 2 - PUNTA. CARRETERA (KM 03+870" },
        { proyecto: "EMP. PE-30C (BELLO HORIZONTE)- BAJO LOBOYOC - EMP- MD-581" },
        { proyecto: "EMP. PE-30C - DV. EL TRIUNFO - VIRGEN DEL CARMEN PTA. DE CARRETERA (KM 22+070)" },
        { proyecto: "EMP.PE-30C - (NUEVA ALIANZA) - PTA. CARRETERA (KM 15+160)" },
        { proyecto: "APOCENTO (KM 27+280) EMP.PE - 30C(MAVILA) (KM44+740)" },
        { proyecto: "EMP.PE-30C - ALTO OBOYOC (KM03+450)" },
        { proyecto: "EMP. MD 578 - PUNTA CARRETERA (KM 10 + 130)" },
        { proyecto: "EMP. PE-30 C - CACHUELA – CACHUELA MARGEN - PUERTO ARTURO (KM 15+880)" },
        { proyecto: "EMP. PE-30 C (SAN FRANCISCO) - PTA. CARRETERA (KM 07+660)" },
        { proyecto: "EMP. MD-572 (BAJO SANTA TERESA) - EMP. MD-576" }
    ],
    laberinto: [
        { proyecto: "EMP. PE-30 C (FLORIDA ALTA) - PTO AGUILA - PTA. CARRETERA (RIO INAMBARI)" },
        { proyecto: "EMP. PE-30C (SANTO DOMINGO) - C.P. MONTE GRANDE (KM 10+500)" },
        { proyecto: "EMP. PE-30C (FLORIDA BAJA) - DV PROGRESO VERDE - FILADELFIA (17+945)" }
    ],
    inambari: [
        { proyecto: "EMP. MD-530 - PROGRESO VERDE - PTA. CARRETERA (KM 08+500)" },
        { proyecto: "EMP. MD-531 - (DV. PROGRESO VERDE) - PTA. CARRETERA (KM 3+050)" },
        { proyecto: "EMP.MD-101 (SANTA ROSA) - PUERTO TRUJILLO (KM 9+700)" },
    ],
};

const Section5 = () => {
    const [zona, setZona] = useState<'piedras' | 'laberinto' | 'inambari'>('piedras');

    const proyectos = data[zona].filter((item: any) => item.proyecto);

    return (
        <motion.div
            id="projects"
            className="space-y-6 mt-6 px-4 md:px-10 border-t-[15px] border-[var(--green)] pt-10"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
        >
            <motion.h4 className="text-3xl md:text-5xl text-center text-[var(--green)] font-black">
                PROYECTOS
            </motion.h4>

            <motion.p className="text-gray-500 text-center max-w-3xl mx-auto">
                Los proyectos viales vecinales de Tambopata tienen como objetivo mejorar la conectividad entre comunidades rurales y centros poblados dentro de la provincia. Estas iniciativas buscan construir, mantener o rehabilitar caminos vecinales para facilitar el transporte de personas, productos agrícolas y el acceso a servicios básicos, promoviendo así el desarrollo económico y social de las zonas más alejadas del distrito.
            </motion.p>

            <div className='flex flex-col lg:flex-row gap-20'>
                {/* Botones de zonas */}
                <motion.div
                    className='flex lg:flex-col justify-center gap-4 items-center'
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    {[
                        { zona: 'piedras', img: 'pr4.png' },
                        { zona: 'laberinto', img: 'pr2.png' },
                        { zona: 'inambari', img: 'pr3.png' },
                    ].map((z) => (
                        <img
                            key={z.zona}
                            onClick={() => setZona(z.zona as any)}
                            src={z.img}
                            className={`w-28 drop-shadow-xl sm:w-40 object-contain cursor-pointer hover:scale-105 duration-300 ${zona !== z.zona ? 'grayscale' : ''
                                }`}
                            alt={z.zona}
                        />
                    ))}
                </motion.div>

                {/* Lista de proyectos */}
                <motion.div
                    className='relative py-10 w-full pl-6 md:pl-0 '
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <motion.div
                        className="space-y-4 relative bg-white shadow-2xl rounded-2xl p-8"
                        initial="hidden"
                        animate="visible"
                        variants={{
                            hidden: {},
                            visible: {
                                transition: { staggerChildren: 0.1 },
                            },
                        }}
                    >
                        {/* Burbuja con número */}
                        <div className='absolute w-10 h-10 -top-6 -left-6 flex justify-center items-center bg-white shadow-2xl rounded-full'>
                            <motion.div
                                className='rounded-full h-8 w-8 bg-[var(--green)] flex items-center justify-center font-bold text-white text-lg'
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: 0.3 }}
                            >
                                {proyectos.length}
                            </motion.div>
                        </div>

                        <div className='absolute w-full h-full bg-[var(--yellow)] -z-10 rounded-2xl -left-8 -top-8'></div>

                        <span className='text-2xl font-black text-gray-600'>Vías:</span>

                        {proyectos.map((item: any, index: number) => (
                            <motion.p
                                key={index}
                                className="flex gap-4 text-gray-600"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.3 }}
                            >
                                <Check className='text-white h-5 w-5 font-bold bg-green-600 rounded-full shrink-0' /> {item.proyecto}
                            </motion.p>
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default Section5;
