const Section3 = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2">
            <div>
                <img src="./fondo-s3.png" className="w-full h-full object-cover" alt="" />
            </div>
            <div
                style={{ backgroundImage: "url('/fondo-s3-2s.png')" }}
                className="relative bg-cover bg-center px-4 py-10">
                <div className="absolute inset-0 bg-blue-500 opacity-80"></div>
                <div className="relative space-y-6 text-white">
                    <h4 className="text-3xl md:text-4xl font-bold text-white">Objetivo General</h4>
                    <p className="text-justify text-sm md:text-base">
                        Incrementar, Mejorar y mantener la infraestructura Vial, Básica
                        Rural y Urbano Marginal (Caminos, sistemas de agua, desagüe, riego,
                        electrificación, educación, salud y otros) de la Provincia, a través de la
                        realización de Proyectos y Actividades con participación financiera
                        e institucional de los propios Gobiernos Locales, consolidando sus
                        Capacidades.
                    </p>
                    <div className="flex flex-col lg:flex-row gap-6 lg:-ml-40">
                        <div className="bg-yellow-400 p-4 shadow-xl flex-1">
                            <h4 className="text-2xl font-bold text-center text-gray-800">Misión</h4>
                            <p className="text-sm text-justify text-gray-800">
                                Desarrollar la infraestructura Vial, Básica Rural y
                                Urbano Marginal de la Provincia, mediante la
                                implementación de mecanismos institucionales
                                y financieros para una gestión adecuada de las
                                mismas, a fin de contribuir al desarrollo Económico
                                y Social de calidad de vida de las Poblaciones
                                Rurales de menores ingresos.
                            </p>
                        </div>
                        <div className="bg-green-500 p-4 shadow-xl flex-1">
                            <h4 className="text-2xl font-bold text-center text-white">Visión</h4>
                            <p className="text-sm text-justify text-white">
                                Disponer de una infraestructura Vial Rural
                                transitable e integrada a la Red Departamental
                                y Nacional, así como una Infraestructura Básica
                                Rural y Urbano Marginal de alta calidad, bajo la
                                responsabilidad de los Gobiernos Locales en el
                                marco de las políticas Nacionales y sectoriales
                                para contribuir al desarrollo integral sostenible
                                de la Región.
                            </p>
                        </div>
                    </div>
                    <div className="w-10/12 float-right border-2 border-dashed border-white mt-6"></div>
                </div>
            </div>
        </div>
    );
};

export default Section3;
