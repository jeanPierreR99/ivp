import { motion } from "framer-motion";

const allies = [
    { name: 'Aliado 1', logo: './al1.png', path: "https://www.gob.pe/munitambopata" },
    { name: 'Aliado 2', logo: './al2.png', path: "https://www.gob.pe/munitambopata" },
    { name: 'Aliado 3', logo: './al3.png', path: "https://www.gob.pe/munitambopata" },
    { name: 'Aliado 5', logo: './al4.png', path: "https://www.gob.pe/munitambopata" },
];

const Aliance = () => {
    return (
        <section className="py-20 bg-gradient-to-b from-white via-white-100 to-white">
            <motion.div
                className="max-w-[1425px] mx-auto px-4 text-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                <h2 className="text-4xl font-light text-[var(--green)] mb-2">
                    Aliados <span className="font-bold text-[var(--green)]">Estratégicos</span>
                </h2>
                <p className="text-gray-500 mb-12 max-w-xl mx-auto">
                    Gracias a estas instituciones aliadas, el IVP fortalece su impacto en la región.
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 items-center justify-center">
                    {allies.map((ally, index) => (
                        <motion.a
                            href={ally.path} target="_blank"
                            key={index}
                            className="bg-white shadow-md p-4 rounded-lg flex items-center justify-center transition-transform duration-300 hover:scale-105"
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1, duration: 0.4 }}
                            viewport={{ once: true }}
                        >
                            <div>
                                <img
                                    src={ally.logo}
                                    alt={ally.name}
                                    className="h-25 object-contain"
                                />
                            </div>
                        </motion.a>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default Aliance;
