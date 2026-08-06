export const contact = {
  whatsappNumber: "5511999999999",
};

export const whatsappMessage =
  "Olá! Gostaria de falar com um especialista sobre Gestão de Riscos Psicossociais e apoio à NR-1.";

export const whatsappUrl = `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(
  whatsappMessage,
)}`;