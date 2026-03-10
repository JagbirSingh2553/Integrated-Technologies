export default function WhatsAppButton() {
  const phoneNumber = "919811075930";
  const message = encodeURIComponent(
    "Hello, I want to enquire about your IT and office infrastructure services."
  );

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      className="whatsapp-button"
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
    >
      WhatsApp
    </a>
  );
}