const Section2 = () => {
    return (
        <div className="relative h-auto py-20 px-6 overflow-hidden">
            <div
                style={{ backgroundImage: "url('/fondo-s2.jpg')" }}
                className="absolute inset-0 bg-cover bg-center bg-fixed z-0" />

            <div className="absolute inset-0  bg-green-500/90 z-10" />

            <div className="relative z-20 space-y-6 text-white max-w-4xl mx-auto text-center">
                <h4 className="text-4xl font-bold text-white-400">¿QUÉ ES EL IVP?</h4>
                <p>
                    El Instituto Vial Provincial (IVP) de Tambopata es un órgano técnico de la Municipalidad Provincial encargado de planificar,
                    coordinar y ejecutar el mantenimiento de la red vial rural y vecinal. Creado bajo el marco de la Ley N.º 27972 – Ley Orgánica
                    de Municipalidades, el IVP se articula con el Ministerio de Transportes y Comunicaciones (MTC) a través de Provías
                    Descentralizado, para mejorar la transitabilidad de caminos en zonas rurales. Su labor contribuye al desarrollo económico
                    local y mejora la calidad de vida de miles de ciudadanos al facilitar el acceso a servicios, mercados y centros poblados.
                </p>
            </div>
        </div >
    );
};

export default Section2;
