import React from 'react';

function Footer() {
  return (
    <footer className="bg-secondary text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-2xl font-bold">Proyecto Santa Clotilde</h2>
            <p className="text-sm">Desarrollo e Implantación de un Sistema de Gestión de Historias Clínicas Electrónicas para el Hospital Santa Clotilde en la Amazonía Peruana.</p>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-gray-300">Home</a>
            <a href="#" className="hover:text-gray-300">About</a>
            <a href="#" className="hover:text-gray-300">Services</a>
            <a href="#" className="hover:text-gray-300">Contact</a>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p className="text-sm">© 2024 Proyecto Santa Clotilde. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
