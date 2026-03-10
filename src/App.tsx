/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  MessageCircle, 
  CircleCheckBig, 
  Star, 
  Award, 
  Users, 
  Heart, 
  Sparkles, 
  TrendingUp, 
  Palette, 
  Clock, 
  MousePointerClick, 
  MailCheck, 
  Rocket, 
  Flame, 
  ShieldCheck, 
  CreditCard, 
  Mail, 
  CircleHelp, 
  ChevronDown,
  ArrowRight,
  X,
  Gift,
  PartyPopper
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 30,
    seconds: 0
  });

  const [showPopup, setShowPopup] = useState(false);
  const [hasShownPopup, setHasShownPopup] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasShownPopup) {
          setShowPopup(true);
          setHasShownPopup(true);
        }
      },
      { threshold: 0.2 }
    );

    const target = document.getElementById('comprar');
    if (target) observer.observe(target);

    return () => {
      if (target) observer.unobserve(target);
    };
  }, [hasShownPopup]);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { days, hours, minutes, seconds } = prev;
        if (seconds > 0) {
          seconds--;
        } else {
          seconds = 59;
          if (minutes > 0) {
            minutes--;
          } else {
            minutes = 59;
            if (hours > 0) {
              hours--;
            } else {
              hours = 23;
              if (days > 0) days--;
            }
          }
        }
        return { days, hours, minutes, seconds };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    { q: "¿Es seguro el pago?", a: "Sí, utilizamos Hotmart, la plataforma de productos digitales más segura y grande de Latinoamérica. Tus datos están 100% protegidos." },
    { q: "¿Cómo realizar el pago?", a: "Puedes pagar con tarjeta de crédito, débito, PayPal, o en efectivo (según tu país: OXXO, Sencillito, PagoEfectivo, etc.)." },
    { q: "¿Cuánto tiempo tengo para ver el curso?", a: "El acceso es de por vida. Puedes verlo a tu ritmo, las veces que quieras, desde cualquier dispositivo." },
    { q: "¿Cómo voy a recibir mi ebook y los bonos?", a: "Inmediatamente después del pago, recibirás un correo electrónico de Hotmart con los enlaces de descarga." },
    { q: "¿Funciona en mi país?", a: "Sí, el curso está disponible para todo el mundo. El precio se convertirá automáticamente a tu moneda local al momento del pago." },
    { q: "¿Necesito experiencia previa?", a: "No, el curso está diseñado para llevarte de la mano desde lo más básico hasta convertirte en una experta." },
    { q: "¿Cuánto necesito invertir en materiales?", a: "Puedes empezar con una inversión mínima de entre $10 y $15 dólares para tus primeros materiales básicos." },
    { q: "¿Qué pasa si no me gusta?", a: "Tienes 7 días de garantía. Si no estás satisfecha, solicitas el reembolso y te devolvemos el 100% de tu dinero." }
  ];

  return (
    <div className="min-h-screen bg-background font-body text-foreground">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] md:min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center blur-[3px] scale-110" 
          style={{ backgroundImage: 'url("https://picsum.photos/seed/soaps/1920/1080")' }}
        ></div>
        <div className="absolute inset-0" style={{ background: 'var(--gradient-hero)' }}></div>
        <div className="relative z-10 text-center px-5 md:px-4 max-w-4xl mx-auto py-12">
          <div className="inline-flex items-center gap-2 bg-secondary/90 backdrop-blur-sm text-secondary-foreground text-xs md:text-base font-bold px-4 md:px-6 py-2 rounded-full mb-4 md:mb-6 animate-bounce-subtle">
            ⭐⭐⭐⭐⭐ Más de 2,347 personas ya descargaron este ebook
          </div>
          <div className="relative">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-5xl md:text-7xl mb-4">💰</div>
              <h1 className="font-display text-3xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight mb-4 md:mb-6">
                Aprende a crear y vender jabones artesanales y <span className="text-gradient-gold">genera ingresos desde casa</span> con más de 30 recetas paso a paso
              </h1>
            </motion.div>
          </div>
          <p className="text-primary-foreground/90 text-base md:text-xl font-body max-w-2xl mx-auto mb-3 md:mb-4 mt-6">
            Descubre cómo muchas personas están convirtiendo esto en una fuente de ingresos desde casa
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <span className="bg-destructive/80 text-primary-foreground text-xs md:text-sm font-bold px-4 py-1.5 rounded-full">⚠ Antes $17</span>
            <span className="bg-secondary/90 text-secondary-foreground text-xs md:text-sm font-bold px-4 py-1.5 rounded-full">🔥 Hoy solo $4.90</span>
            <span className="bg-primary-foreground/20 text-primary-foreground text-xs md:text-sm font-bold px-4 py-1.5 rounded-full">⏳ Por tiempo limitado</span>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-10 md:py-16 bg-foreground text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-8">
            <p className="text-secondary font-bold text-sm uppercase tracking-widest mb-2">📦 Lo que recibirás hoy</p>
            <h2 className="font-display text-2xl md:text-4xl font-bold">Con este ebook podrás:</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto mb-8">
            {[
              "Crear jabones artesanales desde cero, sin experiencia",
              "Vender tus jabones y ganar dinero extra cada mes",
              "Dominar más de 30 recetas para diferentes tipos de piel",
              "Empezar un pequeño negocio desde casa con menos de $15",
              "Crear jabones exfoliantes, decorativos y temáticos",
              "Calcular costos y precios para maximizar ganancias"
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <CircleCheckBig className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <span className="text-primary-foreground/90 font-body text-sm md:text-base">{item}</span>
              </div>
            ))}
          </div>
          <div className="text-center">
            <div className="inline-flex items-center gap-3 bg-primary-foreground/10 rounded-full px-6 py-3">
              <span className="text-primary-foreground/60 line-through text-lg">$17</span>
              <span className="text-gradient-gold font-display font-bold text-3xl">$4.90</span>
              <span className="bg-destructive text-primary-foreground text-xs font-bold px-3 py-1 rounded-full">-71% HOY</span>
            </div>
            <p className="text-primary-foreground/50 text-xs mt-3 font-body">⏳ Descuento disponible solo por tiempo limitado</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 md:py-24 bg-gradient-warm">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">Lo que dicen estudiantes que ya tomaron el curso</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {[
              { text: "Mi segundo pedido, estoy muy emocionada. Apenas dos semanas desde que lo compré y sé que puedo hacer más, pero no me queda mucho tiempo. Por ahora solo publico por WhatsApp, pronto haré mis páginas para tener más clientes.", time: "4:39p. m.", img: "whbQNhsT" },
              { text: "Avena, arroz y café, y solo compré la glicerina. A todos les puse aceite esencial de lavanda y es todo. Feliz con mis avances. Mi hija dice que me va a ayudar a vender 😊", time: "4:39p. m.", img: "2YCd2WWs" },
              { text: "Mis jabones listos para entregar 🧼 Me ha ido muy bien, pero me falta perfeccionar otras técnicas y también quiero comprar más moldes con las ganancias de estos para ampliar más diseños.", time: "4:29p. m.", img: "hxw4b753" },
              { text: "En proceso para mi tercera feria... Vuelvo y digo, si continúo así creo que sí voy a poder renunciar y dedicarme solo a esto y poder cuidar de mi hija, que es lo que más deseo.", time: "4:49p. m.", img: "Pzj7zgVk" },
              { text: "Estoy tomando fotos para hacer mi catálogo. Esta clase me quedé 😍 porque no pensé encontrarme algo tan completo y fácil de entender.", time: "3:15p. m.", img: "VYpDt75X" },
              { text: "El domingo me leí hasta la última página del libro y estoy súper satisfecha. Es muy completo y aún no veo los bonos ni las clases adicionales, lo más importante es que tiene videos.", time: "4:24p. m.", img: "pvjPYLKP" },
              { text: "Sinceramente yo pensaba que no iba a aprender, pero está tan bien explicado que ya tengo mis primeros jabones y estoy feliz con el resultado.", time: "5:12p. m.", img: "ksxHwKwc" },
              { text: "Gracias por compartir sus habilidades. Por ahora solo tengo este que me vino en el kit que compré, pero ya estoy practicando con las recetas del ebook.", time: "4:31p. m.", img: "k6vTbpT9" },
              { text: "¡Increíble! Ya vendí mis primeros 10 jabones en la oficina. El ebook es súper práctico y las recetas huelen delicioso. ¡Gracias Lucía!", time: "6:15p. m.", img: "jv3try0B" }
            ].map((t, idx) => (
              <div key={idx} className="bg-card rounded-xl shadow-card border border-border overflow-hidden hover:shadow-soft transition-shadow duration-300">
                <div className="relative">
                  <img 
                    src={`https://i.ibb.co/${t.img}/image.jpg`} 
                    alt="Jabones artesanales decorados" 
                    className="w-full h-40 sm:h-48 object-cover" 
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute bottom-2 right-2 bg-foreground/60 rounded-full w-8 h-8 flex items-center justify-center">
                    <span className="text-primary-foreground text-xs">▶</span>
                  </div>
                </div>
                <div className="p-4">
                  <div className="bg-[hsl(120,40%,95%)] rounded-lg p-3 relative">
                    <p className="text-foreground text-sm font-body leading-relaxed">{t.text}</p>
                    <span className="text-muted-foreground text-[10px] float-right mt-1">{t.time}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mentora Section */}
      <section className="py-12 md:py-24">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="flex justify-center">
              <div className="relative">
                <img 
                  src="https://i.ibb.co/93SyQ96d/image.jpg" 
                  alt="Creadora del curso" 
                  className="rounded-2xl shadow-soft w-72 h-72 object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute -bottom-4 -right-4 bg-gradient-gold text-gold-foreground text-sm font-bold px-4 py-2 rounded-full shadow-gold">+2,000 alumnas 🎓</div>
              </div>
            </div>
            <div>
              <span className="text-secondary font-bold text-sm uppercase tracking-widest">Conoce a tu mentora</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">¡Hola! Soy Lucía Gómez</h2>
              <div className="space-y-4 text-muted-foreground font-body leading-relaxed">
                <p>Hace unos años, yo estaba exactamente donde tú estás ahora: buscando una forma de generar ingresos extra sin dejar mi trabajo ni descuidar a mi familia.</p>
                <p>Descubrí los jabones de glicerina casi por accidente, y lo que empezó como un hobby se convirtió en un negocio que me genera entre <span className="text-foreground font-bold">$500 y $1,000 dólares mensuales</span>.</p>
                <p>Hoy, después de enseñar a más de <span className="text-foreground font-bold">2,000 mujeres</span> en toda Latinoamérica, creé este curso para que tú también puedas lograrlo, paso a paso, sin complicaciones.</p>
              </div>
              <div className="flex flex-wrap gap-4 mt-6">
                <div className="flex items-center gap-2 bg-accent text-accent-foreground text-xs font-bold px-3 py-2 rounded-full"><Award className="w-4 h-4" />+5 años de experiencia</div>
                <div className="flex items-center gap-2 bg-accent text-accent-foreground text-xs font-bold px-3 py-2 rounded-full"><Users className="w-4 h-4" />+2,000 alumnas</div>
                <div className="flex items-center gap-2 bg-accent text-accent-foreground text-xs font-bold px-3 py-2 rounded-full"><Heart className="w-4 h-4" />Comunidad activa</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Esto es para ti si... */}
      <section className="py-12 md:py-24 bg-accent/50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-secondary font-bold text-sm uppercase tracking-widest">🔊 Atención 🔊</span>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mt-3">Esto es para ti si...</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Eres una mujer trabajadora, con poco tiempo para dedicar a un emprendimiento.",
              "Necesitas un método sencillo y rápido para generar ingresos que no sea costoso.",
              "No tienes tiempo o dinero para asistir a cursos con clases presenciales.",
              "Buscas una actividad que te ayude a liberarte del estrés."
            ].map((text, idx) => (
              <div key={idx} className="flex items-start gap-4 bg-card rounded-xl p-5 shadow-card border border-border">
                <span className="text-2xl">🧼</span>
                <p className="text-foreground font-body">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Transformaciones Reales */}
      <section className="py-12 md:py-24 bg-gradient-warm">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">Transformaciones Reales ✨</h2>
            <p className="text-muted-foreground mt-3 text-lg font-body">Mira lo que lograron nuestras alumnas</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "María José", age: "32 años", location: "Medellín, Colombia", img: "p66W0jgv", before: "Empleada de tiempo completo, sin ingresos extra, estresada por las deudas.", after: "Vende jabones los fines de semana y gana $600/mes extra. Pagó todas sus deudas." },
              { name: "Carolina", age: "28 años", location: "Ciudad de México, México", img: "YBXcFYGy", before: "Mamá ama de casa, sin experiencia en negocios, dependía 100% de su esposo.", after: "Tiene su propia marca de jabones y genera $800/mes desde casa." },
              { name: "Valentina", age: "21 años", location: "Santiago, Chile", img: "PsHk7Pnn", before: "Estudiante universitaria sin dinero para sus gastos personales.", after: "Vende en ferias y por Instagram. Ya genera $400/mes con investment mínima." },
              { name: "Daniela", age: "35 años", location: "Lima, Perú", img: "tMKyjhKh", before: "Buscaba algo para desestresarme y terminó siendo mi negocio principal.", after: "Hoy factura más de $700 mensuales vendiendo kits de regalo por redes sociales." },
              { name: "Sofia", age: "24 años", location: "Buenos Aires, Argentina", img: "RpQvZZWP", before: "Empecé con 10 dólares y mucha duda de si alguien compraría mis jabones.", after: "Ya tengo mi propia tienda online y clientes fijos que aman mis diseños." },
              { name: "Isabella", age: "41 años", location: "Quito, Ecuador", img: "qMMHH4xP", before: "Nunca pensé que a mi edad podría aprender algo nuevo y tan rentable.", after: "Mis jabones son el éxito en las ferias locales. ¡Me siento realizada!" }
            ].map((item, idx) => (
              <div key={idx} className="bg-card rounded-xl p-6 shadow-card border border-border">
                <div className="flex items-center gap-4 mb-6">
                  <img src={`https://i.ibb.co/${item.img}/image.jpg`} alt={item.name} className="w-16 h-16 rounded-full object-cover border-2 border-secondary/20 shadow-soft" referrerPolicy="no-referrer" />
                  <div className="text-left">
                    <p className="font-display font-bold text-foreground text-lg leading-tight">{item.name}, {item.age}</p>
                    <p className="text-muted-foreground text-sm font-body">{item.location}</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="bg-destructive/10 rounded-lg p-4">
                    <span className="text-xs font-bold text-destructive uppercase tracking-wider">❌ Antes</span>
                    <p className="text-muted-foreground text-sm font-body mt-1">{item.before}</p>
                  </div>
                  <div className="flex justify-center">
                    <ArrowRight className="w-5 h-5 text-secondary rotate-90" />
                  </div>
                  <div className="bg-secondary/10 rounded-lg p-4">
                    <span className="text-xs font-bold text-secondary uppercase tracking-wider">✅ Después</span>
                    <p className="text-muted-foreground text-sm font-body mt-1">{item.after}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <a href="#comprar" className="group inline-flex flex-col items-center gap-1 bg-gradient-gold text-gold-foreground font-bold text-base md:text-xl px-8 md:px-14 py-4 md:py-5 rounded-full shadow-gold hover:scale-105 active:scale-95 transition-all duration-300 animate-pulse-slow w-full sm:w-auto max-w-sm">
              <span className="tracking-wide">¡QUIERO MI TRANSFORMACIÓN!</span>
              <span className="text-xs md:text-sm font-body font-normal opacity-80">Únete a +2,000 alumnas exitosas</span>
            </a>
          </div>
        </div>
      </section>

      {/* Qué obtendrás Section */}
      <section className="py-12 md:py-24">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">¿Qué obtendrás con el curso?</h2>
            <p className="text-muted-foreground mt-3 text-lg font-body">"Hacer y Vender Jabones Artesanales"</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: <Sparkles className="w-6 h-6" />, title: "Nueva Habilidad", desc: "Diseñarás jabones únicos con formas, colores y aromas personalizados." },
              { icon: <TrendingUp className="w-6 h-6" />, title: "Negocio Fácil", desc: "Genera ingresos sin salir de casa con inversión baja y materiales fáciles." },
              { icon: <Heart className="w-6 h-6" />, title: "Relajación Total", desc: "Disfruta los diferentes aromas mientras elaboras tus jabones." },
              { icon: <Palette className="w-6 h-6" />, title: "Domina Técnicas", desc: "Jabones exfoliantes, decorativos, temáticos y mucho más." },
              { icon: <Clock className="w-6 h-6" />, title: "Resultados Rápidos", desc: "Construye un negocio sin esperar meses para ver las ganancias." },
              { icon: <Users className="w-6 h-6" />, title: "Sobresale en el Mercado", desc: "Genera clientes leales por tu calidad y exclusividad." }
            ].map((item, idx) => (
              <div key={idx} className="bg-card rounded-xl p-6 shadow-card border border-border hover:shadow-soft transition-all duration-300 group">
                <div className="bg-accent w-12 h-12 rounded-lg flex items-center justify-center text-accent-foreground mb-4 group-hover:bg-gradient-rose group-hover:text-primary-foreground transition-colors duration-300">
                  {item.icon}
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground font-body text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mira todo lo que aprenderás */}
      <section className="py-12 md:py-24 bg-accent/50">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-14">
            <span className="text-secondary font-bold text-sm uppercase tracking-widest">📖 Contenido completo</span>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mt-3">Mira todo lo que aprenderás</h2>
            <p className="text-muted-foreground mt-3 text-lg font-body">+200 páginas de contenido práctico y fácil de seguir</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div className="flex justify-center">
              <div className="relative">
                <img src="https://i.ibb.co/fY5hqtGs/image.jpg" alt="Ebook Jabones Artesanales" className="rounded-2xl shadow-soft max-w-sm w-full" referrerPolicy="no-referrer" />
                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-gradient-gold text-gold-foreground text-xs font-bold px-5 py-2 rounded-full shadow-gold whitespace-nowrap">📱 Acceso inmediato al correo</div>
              </div>
            </div>
            <div className="space-y-4">
              {[
                { title: "Primeros Pasos", icon: "🧪", items: ["Qué es el jabón de glicerina", "Beneficios y usos", "Cuánto dura un jabón artesanal"] },
                { title: "Guía de Aceites Esenciales", icon: "🌿", items: ["Su uso en jabones", "Usos según el tipo de piel"] },
                { title: "Guía de Extractos Naturales", icon: "🍃", items: ["Qué son los extractos", "Beneficios y propiedades"] },
                { title: "De Cero a Experta", icon: "⭐", popular: true, items: ["Lista de materiales", "Cómo hacer tu primer jabón", "Ingredientes e instrucciones clave"] },
                { title: "Recetario Natural (+30 recetas)", icon: "📋", popular: true, items: ["Más de 30 recetas paso a paso", "Jabones para distintos tipos de piel"] },
                { title: "Técnicas Avanzadas", icon: "🎨", items: ["Jabones decorativos", "Diferentes técnicas y diseños"] }
              ].map((section, idx) => (
                <div key={idx} className={`rounded-xl p-5 border transition-all duration-300 hover:shadow-soft bg-card border-border ${section.popular ? 'bg-gradient-gold/10 border-secondary/30' : ''}`}>
                  <h4 className="font-display font-bold text-foreground flex items-center gap-2 text-lg">
                    <span className="text-xl">{section.icon}</span>
                    {section.title}
                    {section.popular && <span className="bg-secondary text-secondary-foreground text-[10px] font-bold px-2 py-0.5 rounded-full ml-auto">⭐ POPULAR</span>}
                  </h4>
                  <ul className="mt-2 space-y-1.5 ml-8">
                    {section.items.map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-muted-foreground text-sm font-body">
                        <CircleCheckBig className="w-4 h-4 text-secondary flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Bonuses Section */}
      <section id="bonos" className="py-12 md:py-24 bg-gradient-warm">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-14">
            <div className="inline-block bg-secondary/10 text-secondary text-sm font-bold px-5 py-2 rounded-full mb-4">🔥 Valorados en más de $68.00 — HOY GRATIS</div>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">5 Bonos Exclusivos de Regalo</h2>
            <p className="text-muted-foreground mt-3 text-lg font-body">Solo por comprar hoy, te llevas todo esto GRATIS</p>
          </div>
          <div className="space-y-5">
            {[
              { id: 1, icon: "📊", title: "Plantilla para Calcular Aditivos", desc: "Calcula la cantidad correcta para cualquier tamaño de jabón. No desperdicies insumos y logra jabones perfectos desde el primer intento.", value: "$10.00" },
              { id: 2, icon: "💰", title: "Plantilla de Costos y Precios", desc: "Calcula exactamente qué precio colocar a tu jabón con este archivo preciso y fácil de usar. ¡Maximiza tus ganancias!", value: "$8.00" },
              { id: 3, icon: "🌿", title: "Guía de Champú Sólido de Romero", desc: "Paso a paso con video instructivo. Un producto extra exclusivo que tus clientes van a amar.", value: "$15.00" },
              { id: 4, icon: "🕯️", title: "Guía de Velas Artesanales", desc: "Aprende a elaborar un nuevo producto con video instructivo. ¡Duplica tu catálogo de productos!", value: "$15.00" },
              { id: 5, icon: "🎓", title: "Acceso a Clases Exclusivas", desc: "Más tutoriales, consejos y tips sobre jabones artesanales. Acceso inmediato e ilimitado de por vida.", value: "$20.00" }
            ].map((bono) => (
              <div key={bono.id} className="bg-card rounded-2xl p-6 shadow-card border border-border hover:shadow-soft hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-gold"></div>
                <div className="flex items-start gap-4">
                  <div className="relative">
                    <div className="bg-gradient-gold w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-gold group-hover:scale-110 transition-transform duration-300">
                      <span className="text-2xl">{bono.icon}</span>
                    </div>
                    <div className="absolute -top-2 -left-2 bg-primary text-primary-foreground w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shadow-soft">{bono.id}</div>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-display text-lg font-bold text-foreground mt-1">{bono.title}</h4>
                    <p className="text-muted-foreground text-sm mt-2 font-body leading-relaxed">{bono.desc}</p>
                    <div className="mt-3 flex items-center gap-3">
                      <span className="text-muted-foreground line-through text-sm">{bono.value}</span>
                      <span className="bg-gradient-gold text-gold-foreground text-xs font-bold px-4 py-1.5 rounded-full shadow-gold flex items-center gap-1">
                        <Flame className="w-3 h-3" /> GRATIS HOY
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cómo funciona Section */}
      <section className="py-12 md:py-20 bg-accent/50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">¿Cómo funciona? Es muy fácil</h2>
            <p className="text-muted-foreground mt-3 text-lg font-body">En solo 3 pasos tendrás todo en tus manos</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <MousePointerClick className="w-8 h-8" />, title: "Haz clic en comprar", desc: "Elige tu método de pago favorito. El proceso es rápido, seguro y en tu moneda local." },
              { icon: <MailCheck className="w-8 h-8" />, title: "Revisa tu correo", desc: "En segundos recibirás el ebook + los 5 bonos directamente en tu bandeja de entrada." },
              { icon: <Rocket className="w-8 h-8" />, title: "¡Empieza hoy mismo!", desc: "Abre el ebook, sigue las recetas paso a paso y haz tus primeros jabones para vender." }
            ].map((step, idx) => (
              <div key={idx} className="text-center">
                <div className="relative mx-auto w-20 h-20 rounded-full bg-gradient-gold flex items-center justify-center text-gold-foreground mb-4 shadow-gold">
                  {step.icon}
                  <div className="absolute -top-2 -right-2 bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center font-display font-bold text-sm shadow-soft">{idx + 1}</div>
                </div>
                <h4 className="font-display text-xl font-bold text-foreground mb-2">{step.title}</h4>
                <p className="text-muted-foreground font-body text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Offer Section */}
      <section id="comprar" className="py-12 md:py-24 bg-foreground text-primary-foreground">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-destructive/20 text-destructive-foreground border border-destructive/30 text-sm font-bold px-5 py-2 rounded-full animate-pulse-slow">
            🔥 ¡Solo quedan <span className="text-lg tabular-nums">38</span> cupos a este precio!
          </div>
          <div className="mb-6"></div>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-2">🔥 OFERTA HOY 🔥</h2>
          <p className="text-primary-foreground/70 text-lg font-body mb-8">Todo lo que necesitas para empezar tu negocio de jabones</p>
          
          <div className="bg-card text-foreground rounded-2xl p-6 md:p-12 shadow-soft mb-8">
            <div className="space-y-3 mb-8 text-left max-w-md mx-auto">
              {[
                { name: "Ebook \"Hacer y Vender Jabones Artesanales\"", price: "$47.00" },
                { name: "Bono #1: Plantilla para Calcular Aditivos", price: "$10.00" },
                { name: "Bono #2: Plantilla de Costos y Precios", price: "$8.00" },
                { name: "Bono #3: Guía de Champú Sólido de Romero", price: "$15.00" },
                { name: "Bono #4: Guía de Velas Artesanales", price: "$15.00" },
                { name: "Bono #5: Acceso a Clases Exclusivas", price: "$20.00" }
              ].map((item, idx) => (
                <div key={idx} className="flex items-center justify-between gap-3 py-2 border-b border-border last:border-b-0">
                  <div className="flex items-center gap-2">
                    <CircleCheckBig className="w-4 h-4 text-secondary flex-shrink-0" />
                    <span className="text-sm font-body text-foreground">{item.name}</span>
                  </div>
                  <span className="text-muted-foreground line-through text-sm font-bold whitespace-nowrap">{item.price}</span>
                </div>
              ))}
            </div>

            <div className="bg-accent/50 rounded-xl p-5 mb-6">
              <div className="flex items-center justify-center gap-2 mb-1">
                <span className="text-muted-foreground font-body text-sm">De</span>
                <span className="text-muted-foreground line-through text-xl font-bold">$17</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <span className="text-foreground font-body font-bold text-sm">Hoy por solo:</span>
              </div>
              <div className="mt-2">
                <span className="bg-gradient-gold text-gold-foreground text-5xl md:text-7xl font-display font-bold px-6 py-2 rounded-xl shadow-gold inline-block">$4.90</span>
              </div>
              <p className="text-xs text-destructive font-bold mt-3 uppercase tracking-wider">⚠ Precio promocional por tiempo limitado</p>
            </div>

            <p className="text-muted-foreground text-sm mb-2 uppercase">UN ÚNICO PAGO · ACCESO INMEDIATO POR CORREO</p>

            <div className="my-8">
              <p className="text-sm text-muted-foreground font-bold uppercase tracking-wider mb-4">Oferta válida hasta</p>
              <div className="flex items-center gap-2 md:gap-4 justify-center">
                {[
                  { val: timeLeft.days, label: "días" },
                  { val: timeLeft.hours, label: "horas" },
                  { val: timeLeft.minutes, label: "minutos" },
                  { val: timeLeft.seconds, label: "segundos" }
                ].map((unit, idx) => (
                  <React.Fragment key={idx}>
                    <div className="flex flex-col items-center">
                      <div className="bg-foreground text-primary-foreground font-display text-2xl md:text-5xl font-bold w-14 h-14 md:w-20 md:h-20 rounded-lg flex items-center justify-center shadow-soft">
                        {unit.val.toString().padStart(2, '0')}
                      </div>
                      <span className="text-muted-foreground text-[10px] md:text-sm mt-1 font-body uppercase tracking-wider">{unit.label}</span>
                    </div>
                    {idx < 3 && <span className="text-foreground text-2xl md:text-5xl font-bold mt-[-1.5rem]">:</span>}
                  </React.Fragment>
                ))}
              </div>
            </div>

            <a 
              href="https://pay.hotmart.com/L104840971X?checkoutMode=10" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="group inline-flex flex-col items-center gap-1 bg-gradient-gold text-gold-foreground font-bold text-base md:text-xl px-8 md:px-14 py-4 md:py-5 rounded-full shadow-gold hover:scale-105 active:scale-95 transition-all duration-300 animate-pulse-slow w-full sm:w-auto max-w-sm mt-2"
            >
              <span className="tracking-wide">👇 QUIERO EL EBOOK AHORA</span>
              <span className="text-xs md:text-sm font-body font-normal opacity-80">Acceso inmediato + 5 bonos GRATIS</span>
            </a>

            <div className="mt-8 mb-4 flex justify-center">
              <div className="bg-secondary/10 border-2 border-secondary/30 rounded-2xl p-5 flex items-center gap-4 max-w-sm">
                <div className="bg-gradient-gold w-16 h-16 rounded-full flex items-center justify-center text-3xl flex-shrink-0 shadow-gold">🛡️</div>
                <div className="text-left">
                  <p className="font-display font-bold text-foreground text-sm uppercase">GARANTÍA DE 7 DÍAS</p>
                  <p className="text-muted-foreground text-xs font-body mt-1">Si no te gusta, te devolvemos el 100% de tu dinero. Sin preguntas.</p>
                </div>
              </div>
            </div>

            <div className="mt-6 flex flex-col items-center gap-3">
              <div className="flex items-center gap-2 text-muted-foreground text-sm">
                <ShieldCheck className="w-4 h-4" />
                <span>Pago seguro y envío al instante</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground text-sm">
                <CreditCard className="w-4 h-4" />
                <span>Paga en tu moneda local · Conversión inmediata</span>
              </div>
              <div className="flex items-center justify-center gap-3 flex-wrap mt-2">
                {["VISA", "MasterCard", "PayPal", "Amex", "Discover"].map(brand => (
                  <div key={brand} className="bg-background border border-border rounded-md px-3 py-1.5 text-xs font-bold text-muted-foreground">{brand}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 md:py-24">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground text-center mb-12">Preguntas Frecuentes</h2>
          <div className="space-y-3">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-card rounded-xl border border-border px-6 shadow-card overflow-hidden">
                <button 
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="flex w-full items-center justify-between py-4 font-display font-bold text-foreground text-left hover:no-underline"
                >
                  {faq.q}
                  <ChevronDown className={`h-4 w-4 shrink-0 transition-transform duration-200 ${openFaq === idx ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {openFaq === idx && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="pb-4 text-sm text-muted-foreground font-body leading-relaxed">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 bg-foreground text-primary-foreground/70">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-6">
            <p className="font-display text-lg font-bold text-primary-foreground">Jabones de Glicerina</p>
            <div className="flex items-center gap-6 text-sm font-body">
              <a href="#" className="hover:text-primary-foreground transition-colors">Política de Privacidad</a>
              <a href="#" className="hover:text-primary-foreground transition-colors">Términos y Condiciones</a>
            </div>
          </div>
          <div className="border-t border-primary-foreground/10 pt-6 text-center space-y-2">
            <p className="text-xs">© 2026 — Emprende con Jabones de Glicerina. Todos los derechos reservados.</p>
            <p className="text-xs opacity-60">Este sitio no es parte de Facebook ni de Meta Platforms, Inc. Después de salir de Facebook, la responsabilidad es del sitio.</p>
          </div>
        </div>
      </footer>

      {/* Bonus Popup */}
      <AnimatePresence>
        {showPopup && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowPopup(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative bg-white rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-10 max-w-md w-full shadow-2xl overflow-y-auto max-h-[90vh]"
            >
              <button 
                onClick={() => setShowPopup(false)}
                className="absolute top-4 right-4 md:top-6 md:right-6 text-muted-foreground hover:text-foreground transition-colors z-10"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="text-center">
                <div className="flex justify-center mb-3 md:mb-4">
                  <div className="relative">
                    <PartyPopper className="w-12 h-12 md:w-16 md:h-16 text-secondary animate-bounce-subtle" />
                    <div className="absolute -top-2 -right-2 text-2xl md:text-3xl">🎉</div>
                  </div>
                </div>

                <h3 className="font-serif text-3xl md:text-4xl font-bold text-[#4A3728] mb-1 md:mb-2">¡Felicidades!</h3>
                <p className="font-serif text-xl md:text-2xl font-bold text-[#4A3728] mb-4 md:mb-6">¡Ganaste 5 Bonos de Regalo!</p>

                <div className="space-y-2 md:space-y-3 mb-6 md:mb-8">
                  {[
                    "Bono #1: Plantilla para Calcular Aditivos",
                    "Bono #2: Plantilla de Costos y Precios",
                    "Bono #3: Guía de Champú Sólido de Romero",
                    "Bono #4: Guía de Velas Artesanales",
                    "Bono #5: Acceso a Clases Exclusivas"
                  ].map((bono, idx) => (
                    <div key={idx} className="bg-[#FDF2F8] rounded-xl md:rounded-2xl py-2.5 md:py-3.5 px-4 md:px-5 flex items-center gap-3 md:gap-4 text-left border border-pink-100/50">
                      <Gift className="w-4 h-4 md:w-5 md:h-5 text-[#F3CE6D] flex-shrink-0" />
                      <span className="text-[#4A3728] font-body font-medium text-xs md:text-base">{bono}</span>
                    </div>
                  ))}
                </div>

                <p className="text-muted-foreground text-xs md:text-sm font-body mb-6 md:mb-8">
                  Todos incluidos GRATIS con tu compra hoy ⏳
                </p>

                <button 
                  onClick={() => {
                    setShowPopup(false);
                    document.getElementById('comprar')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="block w-full bg-[#F3CE6D] hover:bg-[#EBC15A] text-[#4A3728] font-bold py-4 md:py-5 rounded-full shadow-lg hover:scale-[1.02] active:scale-95 transition-all duration-300"
                >
                  <div className="text-lg md:text-xl tracking-tight uppercase">¡Quiero mis 5 bonos!</div>
                  <div className="text-[10px] md:text-xs font-normal opacity-80 mt-0.5">Oferta por tiempo limitado 🎁</div>
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
