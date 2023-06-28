import './footer.css'


const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 flex-shrink-0">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="col-span-1">
          <h2 className="text-lg font-bold mb-4">Sobre Nosotros</h2>
          <p className="text-sm">Breve descripción de la empresa y sus valores.</p>
        </div>
        <div className="col-span-1">
          <h2 className="text-lg font-bold mb-4">Enlaces</h2>
          <ul className="list-none">
            <li className="mb-2">
              <a href="#" className="text-sm">
                Consultas y sugerencias
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-sm">
                Preguntas frecuentes
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-sm">
                Reclamos
              </a>
            </li>
          </ul>
        </div>
        <div className="col-span-1">
          <h2 className="text-lg font-bold mb-4">Contacto</h2>
          <p className="text-sm">deltastore@delta.com</p>
          <p className="text-sm">atencionalcliente@delta.com</p>
        </div>
        <div className="col-span-1">
          <h2 className="text-lg font-bold mb-4">Redes Sociales</h2>
          <div className="flex space-x-4">
            <a href="#" className="text-sm">
              Facebook
            </a>
            <a href="#" className="text-sm">
              Twitter
            </a>
            <a href="#" className="text-sm">
              Instagram
            </a>
            <a href="#" className="text-sm">
              Youtube
            </a>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center mt-8">
        <img src="./imgs/logo.png" alt="Logo" className="h-8 mr-2" />
        <p className="text-sm">
          &copy; 2023 <strong>Delta Tactical Gear</strong>. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
