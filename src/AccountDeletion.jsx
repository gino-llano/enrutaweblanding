import React from "react";

export default function AccountDeletionPage() {
  return (
    <div
      className="min-h-screen bg-cover bg-center text-black p-6 md:p-12 font-sans"
      // style={{ backgroundImage: 'url("/logo_tienda.png")' }}
    >
        <img
          src="/logo_tienda.png"
          alt=""
          className="w-1/4 max-w-[500px] rounded-full mx-auto mb-6"
          style={{
            width: "25%",
            maxWidth: "500px",
            borderRadius: "50%"
          }}
        />
      <div className="max-w-3xl mx-auto bg-white bg-opacity-80 p-6 rounded-xl shadow-md">
        <h1 className="text-3xl font-bold mb-2">EnRuta</h1>
        <p className="text-base mb-6">
          Esta aplicación fue desarrollada por <strong>Mauricio Arenales</strong> y publicada bajo el nombre <strong>EnRuta</strong> en la Play Store.
        </p>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">¿Cómo solicitar la eliminación de tu cuenta?</h2>
          <p className="text-base leading-relaxed">
            Para solicitar la eliminación de tu cuenta, envía un correo electrónico a
            <strong> enruta.revision@gmail.com</strong> con el asunto "Eliminar cuenta" y desde el correo
            asociado a tu cuenta en EnRuta.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">Datos eliminados y periodos de retención</h2>
          <p className="text-base leading-relaxed mb-2">
            Al eliminar tu cuenta, los siguientes datos serán eliminados de manera permanente:
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>Nombre de usuario</li>
            <li>Dirección de correo electrónico</li>
            <li>Historial de rutas</li>
          </ul>
          <p className="text-base leading-relaxed">
            Podemos conservar ciertos datos durante un periodo adicional si son necesarios para cumplir
            obligaciones legales o resolver disputas. Estos datos se eliminarán automáticamente una vez
            finalizado el periodo de retención obligatorio.
          </p>
        </section>
      </div>
    </div>
  );
}
