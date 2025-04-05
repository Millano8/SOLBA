import React from "react";
import Image from "next/image";
import whatsappIcon from "../../public/icons/whatsapp.svg"; // Asegúrate de que la ruta sea correcta

const WhatsAppIcon = () => {
  return (
    <a 
      href="https://wa.me/+5493388441480?text=Hola, tengo una consulta." // Cambia el número y el mensaje según sea necesario
      target="_blank" 
      rel="noopener noreferrer" 
      style={{
        position: "fixed",
        bottom: "15vh",
        right: "20px",
        zIndex: 1000,
        width: "60px", // Ajusta el tamaño según sea necesario
        height: "60px", // Ajusta el tamaño según sea necesario
        backgroundColor: "#25D366", // Color de fondo verde
        borderRadius: "50%", // Bordes redondeados
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Image 
        src={whatsappIcon} 
        alt="WhatsApp" 
        style={{ width: "50%", height: "50%" }} // Ajusta el tamaño del ícono dentro del contenedor
      />
    </a>
  );
};

export default WhatsAppIcon;