const Section4 = () => {
    return (
        <div
            style={{ backgroundImage: "url('/fondo-s3-2s.png')" }}
            id="functions" className="relative bg-cover bg-center">
            <div className="absolute inset-0 bg-blue-500 opacity-80"></div>

            <div className="relative grid grid-cols-1 md:grid-cols-2 items-center px-4 py-12 gap-6 max-w-7xl mx-auto">
                <div>
                    <img
                        src="./fondo-s4.png"
                        className="w-full h-full object-contain"
                        alt="Ilustración IVP"
                    />
                </div>

                <div className="relative text-white space-y-6">
                    <h4 className="text-3xl md:text-4xl font-bold">Funciones del IVP</h4>

                    <ul className="space-y-4">
                        {[
                            'Recuperar, mejorar, incrementar y mantener la infraestructura de Transporte Vecinal.',
                            'Consolidar la capacidad institucional en materia de gestión de infraestructura Vial Rural.',
                            'Planificar, programar, concertar, ejecutar, supervisar y evaluar la ejecución de estudios, obras y actividades de Infraestructura Vial Rural.',
                            'Actualizar periódicamente la relación en orden de prioridad de los caminos rurales que precisan de rehabilitación y mantenimiento, abarcando a todos los distritos.',
                            'Participar en otras actividades vinculadas con el desarrollo integral de Infraestructura Vial Rural, Básica Rural y Urbano Marginal.',
                            'Brindar apoyo, asistencia técnica y capacitación a las microempresas y ciudadanía involucrada en el mantenimiento de la Red Vial Rural de la Provincia.',
                            'Supervisión de Obras Viales.',
                        ].map((item, index) => (
                            <li key={index} className="flex items-start">
                                <img src="./medalla.png" className='h-8 w-8 shir' alt="" />
                                <span className="text-sm md:text-base">{item}</span>
                            </li>
                        ))}
                    </ul>

                    <div className="w-10/12 float-right border-2 border-dashed border-white mt-6" />
                </div>
            </div>
        </div>
    );
};

export default Section4;
