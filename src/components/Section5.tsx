import { useState } from 'react';

const data: any = {
    piedras: [
        { proyecto: "EMP. MD-577 - SAN MARTIN 1 - PTA. CARRETERA (KM 0+700)" },
        { proyecto: "EMP. PE-30 C (LAS PIEDRAS KM 00+620 - PLANCHON) - PTA. CARRETERA (KM 07+190)" },
        { proyecto: "EMP. R70141 - DESVIO QUEBRADA LOBOYOC - SAN MARTIN 2 - PUNTA. CARRETERA (KM 03+870" },
        { proyecto: "EMP. PE-30C (BELLO HORIZONTE)- BAJO LOBOYOC - EMP- MD-581" },
        { proyecto: "EMP. PE-30C - DV. EL TRIUNFO - VIRGEN DEL CARMEN PTA. DE CARRETERA (KM 22+070)" },
        { proyecto: "EMP.PE-30C - (NUEVA ALIANZA) - PTA. CARRETERA (KM 15+160)" },
        { proyecto: "APOCENTO (KM 27+280) EMP.PE - 30C(MAVILA) (KM44+740)" },
        { proyecto: "EMP.PE-30C - ALTO OBOYOC (KM03+450)" },
        { proyecto: "EMP. MD 578 - PUNTA CARRETERA (KM 10 + 130)" },
        { images: ["./fondo-s3.png", "./fondo-s3.png", "./fondo-s3.png"] },
    ],
    laberinto: [
        { proyecto: "LABERINTO EMP. MD-577 - SAN MARTIN 1 - PTA. CARRETERA (KM 0+700)" },
        { proyecto: "LABERINTO EMP. PE-30 C (LAS PIEDRAS KM 00+620 - PLANCHON) - PTA. CARRETERA (KM 07+190)" },
    ],
    tambopata: [
        { proyecto: "TAMBOPATA EMP. MD-577 - SAN MARTIN 1 - PTA. CARRETERA (KM 0+700)" },
        { proyecto: "TAMBOPATA EMP. PE-30 C (LAS PIEDRAS KM 00+620 - PLANCHON) - PTA. CARRETERA (KM 07+190)" },
    ],
};

const Section5 = () => {
    const [zona, setZona] = useState<'piedras' | 'laberinto' | 'tambopata'>('piedras');

    const proyectos = data[zona].filter((item: any) => item.proyecto);
    const imagenes = data[zona].find((item: any) => item.images)?.images || [];

    return (
        <div id="projects" className=" space-y-6 mt-6 px-4 md:px-0">
            <h4 className="text-3xl md:text-4xl text-yellow-400 font-bold">Proyectos</h4>
            <p className="text-gray-500">
                Los proyectos viales vecinales de Tambopata tienen como objetivo mejorar la conectividad entre comunidades
                rurales y centros poblados dentro de la provincia. Estas iniciativas buscan construir, mantener o rehabilitar caminos
                vecinales para facilitar el transporte de personas, productos agrícolas y el acceso a servicios básicos, promoviendo
                así el desarrollo económico y social de las zonas más alejadas del distrito.
            </p>

            <div className="rounded-2xl">
                <div className="flex gap-4 flex-wrap bg-white">
                    <span className='bg-gray-50 px-4 order-4 md:order-none py-2 rounded-t-2xl font-bold text-2xl text-gray-500'>Lista de vias</span>
                    <button
                        onClick={() => setZona('piedras')}
                        className={`px-4 py-2 rounded-md my-2 font-bold transition ${zona === 'piedras' ? 'bg-yellow-400 text-white' : 'bg-green-400 text-white'}`}
                    >
                        Las Piedras
                    </button>
                    <button
                        onClick={() => setZona('laberinto')}
                        className={`px-4 py-2 rounded-md my-2 font-bold transition ${zona === 'laberinto' ? 'bg-yellow-400 text-white' : 'bg-green-400 text-white'}`}
                    >
                        Laberinto
                    </button>
                    <button
                        onClick={() => setZona('tambopata')}
                        className={`px-4 py-2 rounded-md my-2 font-bold transition ${zona === 'tambopata' ? 'bg-yellow-400 text-white' : 'bg-green-400 text-white'}`}
                    >
                        Tambopata
                    </button>
                </div>

                <div className=" space-y-2 bg-gray-50 rounded-tr-2xl rounded-b-2xl p-2">
                    {proyectos.map((item: any, index: any) => (
                        <p key={index} className="text-gray-500">
                            {index + 1}. {item.proyecto}
                        </p>
                    ))}
                </div>
            </div>
            {imagenes.length > 0 && (
                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 ">
                    {imagenes.map((src: string, index: number) => (
                        <img
                            key={index}
                            src={src}
                            alt={`Imagen ${index + 1}`}
                            className="w-full h-48 object-cover hover:scale-105 duration-300 shadow-xl shadow-yellow-500/20"
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default Section5;
