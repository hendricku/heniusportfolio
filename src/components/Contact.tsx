import { motion } from 'framer-motion';

export default function Contact() {
  const contactInfo = [
    {
      icon: "📧",
      label: "Email",
      value: "hendrickcastro017@gmail.com",
      href: "mailto:hendrickcastro017@gmail.com"
    },
    {
      icon: "📱",
      label: "Phone",
      value: "+63 977 695 5130",
      href: "tel:+639776955130"
    },
    {
      icon: "👋",
      label: "Facebook",
      value: "Hendrick Castro",
      href: "https://www.facebook.com/henius.cp"
    }
  ];

  return (
    <section className="max-w-7xl mx-auto mt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Get in Touch</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Feel free to reach out for collaborations or just a friendly hello
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {contactInfo.map((contact) => (
          <motion.a
            key={contact.label}
            href={contact.href}
            target={contact.label === "Facebook" ? "_blank" : "_self"}
            rel={contact.label === "Facebook" ? "noopener noreferrer" : ""}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.02 }}
            className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all text-center"
          >
            <span className="text-3xl mb-4 block">{contact.icon}</span>
            <h3 className="font-medium text-gray-900 mb-2">{contact.label}</h3>
            <p className="text-gray-600">{contact.value}</p>
          </motion.a>
        ))}
      </div>
    </section>
  );
}