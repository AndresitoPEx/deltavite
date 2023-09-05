import './footer.css'
//materialUI
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Container from '@mui/material/Container';


const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 flex-shrink-0 w-full">
      <Container maxWidth="lg">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
          <div className="col-span-1">
            <h2 className="text-lg font-bold mb-4">Sobre Nosotros</h2>
            <p className="text-sm">Somos fabricantes de mochilas, chalecos y demas accesorios tácticos.</p>
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
            <div className="flex justify-center md:justify-start space-x-4">
              <a href="https://www.facebook.com/urbansurvivorstore" target="_blank" className="text-sm">
                <FacebookIcon />
              </a>
              <a href="https://www.instagram.com/deltatacticagear/" target="_blank" className="text-sm">
                <InstagramIcon />
              </a>
              <a href="https://www.youtube.com/@SRDELTA100" target="_blank" className="text-sm">
                <YouTubeIcon />
              </a>
              <a className='whatsapp-icon-container text-sm' href="https://wa.link/kptufa" target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon />
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center text-center md:text-left mt-8">
          <img src="https://i.postimg.cc/8C7qsb5M/LogoDelta_500px.png" alt="Logo" className="h-8 mb-2 md:mb-0 md:mr-2" />
          <p className="text-sm">
            &copy; 2023 <strong>Delta Tactical Gear</strong>. Todos los derechos reservados.
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
