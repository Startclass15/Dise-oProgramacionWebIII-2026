import { Component } from '@angular/core';
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pantalla1',
  imports: [MatCardModule, MatButtonModule, CommonModule],
  templateUrl: './pantalla1.html',
  styleUrl: './pantalla1.css',
})
export class Pantalla1 {
  datos = [
  {
    titulo: "Exploración Espacial",
    subtitulo: "El futuro en Marte",
    avatar: "https://i.pravatar.cc/150?u=astronomo",
    imagen: "https://picsum.photos/seed/mars/800/450",
    descripcion: "Un análisis profundo sobre las misiones tripuladas que buscan establecer la primera colonia humana en el planeta rojo."
  },
  {
    titulo: "Gastronomía Mediterránea",
    subtitulo: "Secretos del Olivo",
    avatar: "https://i.pravatar.cc/150?u=chef1",
    imagen: "https://picsum.photos/seed/food1/800/450",
    descripcion: "Descubre por qué la dieta mediterránea sigue siendo considerada la más saludable del mundo por los expertos."
  },
  {
    titulo: "Arquitectura Moderna",
    subtitulo: "Minimalismo en la ciudad",
    avatar: "https://i.pravatar.cc/150?u=arch",
    imagen: "https://picsum.photos/seed/build1/800/450",
    descripcion: "Cómo el diseño funcional está transformando los espacios reducidos en las grandes metrópolis globales."
  },
  {
    titulo: "Inteligencia Artificial",
    subtitulo: "Redes Neuronales",
    avatar: "https://i.pravatar.cc/150?u=tech1",
    imagen: "https://picsum.photos/seed/ai/800/450",
    descripcion: "Una guía básica para entender cómo las máquinas aprenden y procesan información como el cerebro humano."
  },
  {
    titulo: "Fotografía de Paisaje",
    subtitulo: "La hora dorada",
    avatar: "https://i.pravatar.cc/150?u=photo",
    imagen: "https://picsum.photos/seed/landscape/800/450",
    descripcion: "Consejos prácticos para capturar la luz perfecta durante los últimos minutos del atardecer."
  },
  {
    titulo: "Vida Silvestre",
    subtitulo: "El León Africano",
    avatar: "https://i.pravatar.cc/150?u=safari",
    imagen: "https://picsum.photos/seed/lion/800/450",
    descripcion: "Comportamiento y jerarquías sociales dentro de las manadas en las llanuras del Serengueti."
  },
  {
    titulo: "Desarrollo Web",
    subtitulo: "React vs Vue",
    avatar: "https://i.pravatar.cc/150?u=dev1",
    imagen: "https://picsum.photos/seed/code/800/450",
    descripcion: "Comparativa técnica entre los dos frameworks de JavaScript más populares en la actualidad."
  },
  {
    titulo: "Historia Antigua",
    subtitulo: "Misterios de Egipto",
    avatar: "https://i.pravatar.cc/150?u=history",
    imagen: "https://picsum.photos/seed/pyramids/800/450",
    descripcion: "Nuevos hallazgos arqueológicos revelan técnicas de construcción desconocidas en las pirámides de Giza."
  },
  {
    titulo: "Fitness Funcional",
    subtitulo: "Entrena en casa",
    avatar: "https://i.pravatar.cc/150?u=gym",
    imagen: "https://picsum.photos/seed/fitness/800/450",
    descripcion: "Rutinas de alta intensidad que no requieren equipo especializado para mantenerte en forma."
  },
  {
    titulo: "Música Clásica",
    subtitulo: "El legado de Beethoven",
    avatar: "https://i.pravatar.cc/150?u=music",
    imagen: "https://picsum.photos/seed/piano/800/450",
    descripcion: "Un recorrido por las sinfonías que cambiaron el curso de la música occidental para siempre."
  },
  {
    titulo: "Viajes de Aventura",
    subtitulo: "Senderismo en la Patagonia",
    avatar: "https://i.pravatar.cc/150?u=travel1",
    imagen: "https://picsum.photos/seed/mountain/800/450",
    descripcion: "Guía completa para recorrer los senderos del Torres del Paine en la temporada de verano."
  },
  {
    titulo: "Ciberseguridad",
    subtitulo: "Protege tus datos",
    avatar: "https://i.pravatar.cc/150?u=secure",
    imagen: "https://picsum.photos/seed/security/800/450",
    descripcion: "Mejores prácticas para evitar el phishing y mantener tus cuentas seguras en la red."
  },
  {
    titulo: "Arte Digital",
    subtitulo: "El auge de los NFTs",
    avatar: "https://i.pravatar.cc/150?u=artist",
    imagen: "https://picsum.photos/seed/nft/800/450",
    descripcion: "Cómo la tecnología blockchain está redefiniendo el concepto de propiedad en el mundo del arte."
  },
  {
    titulo: "Jardinería Urbana",
    subtitulo: "Huertos en balcones",
    avatar: "https://i.pravatar.cc/150?u=garden",
    imagen: "https://picsum.photos/seed/plants/800/450",
    descripcion: "Aprende qué hortalizas crecen mejor en macetas y espacios con poca luz solar directa."
  },
  {
    titulo: "Economía Global",
    subtitulo: "Criptomonedas 2024",
    avatar: "https://i.pravatar.cc/150?u=money",
    imagen: "https://picsum.photos/seed/crypto/800/450",
    descripcion: "Tendencias y predicciones sobre el mercado de divisas digitales para el próximo trimestre."
  },
  {
    titulo: "Psicología",
    subtitulo: "Inteligencia Emocional",
    avatar: "https://i.pravatar.cc/150?u=psy",
    imagen: "https://picsum.photos/seed/mind/800/450",
    descripcion: "La importancia de reconocer y gestionar nuestras emociones para mejorar las relaciones personales."
  },
  {
    titulo: "Moda Sostenible",
    subtitulo: "Slow Fashion",
    avatar: "https://i.pravatar.cc/150?u=fashion",
    imagen: "https://picsum.photos/seed/clothes/800/450",
    descripcion: "Marcas que apuestan por materiales reciclados y procesos de fabricación éticos."
  },
  {
    titulo: "Astronomía",
    subtitulo: "Agujeros Negros",
    avatar: "https://i.pravatar.cc/150?u=space2",
    imagen: "https://picsum.photos/seed/blackhole/800/450",
    descripcion: "Lo que sucede cuando la luz no puede escapar de la gravedad extrema en el cosmos."
  },
  {
    titulo: "Yoga y Meditación",
    subtitulo: "Mindfulness diario",
    avatar: "https://i.pravatar.cc/150?u=zen",
    imagen: "https://picsum.photos/seed/yoga/800/450",
    descripcion: "Técnicas sencillas para reducir el estrés laboral a través de la respiración consciente."
  },
  {
    titulo: "Cine Independiente",
    subtitulo: "Joyas ocultas",
    avatar: "https://i.pravatar.cc/150?u=movie",
    imagen: "https://picsum.photos/seed/cinema/800/450",
    descripcion: "Recomendaciones de películas que no llegaron a las grandes salas pero merecen ser vistas."
  },
  {
    titulo: "Literatura",
    subtitulo: "Realismo Mágico",
    avatar: "https://i.pravatar.cc/150?u=books",
    imagen: "https://picsum.photos/seed/library/800/450",
    descripcion: "Un análisis de la obra de Gabriel García Márquez y su influencia en las letras hispanas."
  },
  {
    titulo: "Automovilismo",
    subtitulo: "Coches Eléctricos",
    avatar: "https://i.pravatar.cc/150?u=cars",
    imagen: "https://picsum.photos/seed/tesla/800/450",
    descripcion: "La autonomía de las baterías está alcanzando niveles que compiten con los motores de combustión."
  },
  {
    titulo: "Cocina Japonesa",
    subtitulo: "Más allá del Sushi",
    avatar: "https://i.pravatar.cc/150?u=ramen",
    imagen: "https://picsum.photos/seed/japan/800/450",
    descripcion: "Explora la riqueza del Ramen, el Okonomiyaki y otras delicias de la cultura nipona."
  },
  {
    titulo: "Marketing Digital",
    subtitulo: "SEO en 2024",
    avatar: "https://i.pravatar.cc/150?u=marketing",
    imagen: "https://picsum.photos/seed/seo/800/450",
    descripcion: "Cómo optimizar tu contenido para los nuevos algoritmos de búsqueda basados en IA."
  },
  {
    titulo: "Deportes Extremos",
    subtitulo: "Surf en Hawái",
    avatar: "https://i.pravatar.cc/150?u=surf",
    imagen: "https://picsum.photos/seed/wave/800/450",
    descripcion: "Los mejores surfistas del mundo se reúnen para conquistar las olas gigantes de Jaws."
  },
  {
    titulo: "Filosofía",
    subtitulo: "Estoicismo moderno",
    avatar: "https://i.pravatar.cc/150?u=philos",
    imagen: "https://picsum.photos/seed/statue/800/450",
    descripcion: "Aplicando las enseñanzas de Marco Aurelio para mantener la calma en el caos actual."
  },
  {
    titulo: "Mascotas",
    subtitulo: "Lenguaje Canino",
    avatar: "https://i.pravatar.cc/150?u=dog",
    imagen: "https://picsum.photos/seed/puppy/800/450",
    descripcion: "Entiende qué te quiere decir tu perro a través de su postura y el movimiento de su cola."
  },
  {
    titulo: "Bebidas",
    subtitulo: "El mundo del Café",
    avatar: "https://i.pravatar.cc/150?u=coffee",
    imagen: "https://picsum.photos/seed/latte/800/450",
    descripcion: "Diferencias entre los granos de Arábica y Robusta y cómo influyen en el sabor final."
  },
  {
    titulo: "Tecnología Móvil",
    subtitulo: "Pantallas Plegables",
    avatar: "https://i.pravatar.cc/150?u=mobile",
    imagen: "https://picsum.photos/seed/phone/800/450",
    descripcion: "¿Son realmente el futuro o solo una moda pasajera? Analizamos los últimos modelos."
  },
  {
    titulo: "Ecología",
    subtitulo: "Energía Solar",
    avatar: "https://i.pravatar.cc/150?u=sun",
    imagen: "https://picsum.photos/seed/solar/800/450",
    descripcion: "Cómo instalar paneles solares en tu hogar puede reducir tu factura eléctrica drásticamente."
  },
  {
    titulo: "Baile",
    subtitulo: "Tango Argentino",
    avatar: "https://i.pravatar.cc/150?u=dance",
    imagen: "https://picsum.photos/seed/tango/800/450",
    descripcion: "La pasión y la técnica detrás de uno de los bailes más icónicos del mundo."
  },
  {
    titulo: "Salud Mental",
    subtitulo: "Higiene del Sueño",
    avatar: "https://i.pravatar.cc/150?u=sleep",
    imagen: "https://picsum.photos/seed/bedroom/800/450",
    descripcion: "Hábitos nocturnos para lograr un descanso profundo y mejorar tu productividad."
  },
  {
    titulo: "Geografía",
    subtitulo: "Islandia",
    avatar: "https://i.pravatar.cc/150?u=iceland",
    imagen: "https://picsum.photos/seed/glacier/800/450",
    descripcion: "Tierra de fuego y hielo: un recorrido por los volcanes y glaciares de la isla nórdica."
  },
  {
    titulo: "Diseño Gráfico",
    subtitulo: "Teoría del Color",
    avatar: "https://i.pravatar.cc/150?u=design",
    imagen: "https://picsum.photos/seed/colors/800/450",
    descripcion: "Cómo los colores afectan la percepción del usuario en una interfaz digital."
  },
  {
    titulo: "DIY",
    subtitulo: "Carpintería Básica",
    avatar: "https://i.pravatar.cc/150?u=wood",
    imagen: "https://picsum.photos/seed/tools/800/450",
    descripcion: "Construye tu propia estantería de madera siguiendo estos sencillos pasos."
  },
  {
    titulo: "Paleontología",
    subtitulo: "Era de los Dinosaurios",
    avatar: "https://i.pravatar.cc/150?u=dino",
    imagen: "https://picsum.photos/seed/fossil/800/450",
    descripcion: "Nuevas teorías sugieren que muchos dinosaurios tenían plumas de colores brillantes."
  },
  {
    titulo: "Repostería",
    subtitulo: "Macarons Perfectos",
    avatar: "https://i.pravatar.cc/150?u=cake",
    imagen: "https://picsum.photos/seed/sweets/800/450",
    descripcion: "La guía definitiva para dominar la técnica francesa y que no se rompan al hornear."
  },
  {
    titulo: "Fotografía Urbana",
    subtitulo: "Cyberpunk City",
    avatar: "https://i.pravatar.cc/150?u=neon",
    imagen: "https://picsum.photos/seed/tokyo/800/450",
    descripcion: "Capturando las luces de neón y la lluvia en las calles de Tokio por la noche."
  },
  {
    titulo: "Cuidado de la Piel",
    subtitulo: "Rutina Coreana",
    avatar: "https://i.pravatar.cc/150?u=skin",
    imagen: "https://picsum.photos/seed/beauty/800/450",
    descripcion: "Los 10 pasos esenciales para mantener una piel radiante y saludable."
  },
  {
    titulo: "Ingeniería",
    subtitulo: "Megaestructuras",
    avatar: "https://i.pravatar.cc/150?u=bridge",
    imagen: "https://picsum.photos/seed/bridge/800/450",
    descripcion: "El desafío de construir puentes colgantes que soporten vientos huracanados."
  },
  {
    titulo: "Medio Ambiente",
    subtitulo: "Océanos Limpios",
    avatar: "https://i.pravatar.cc/150?u=ocean",
    imagen: "https://picsum.photos/seed/sea/800/450",
    descripcion: "Iniciativas globales para eliminar el plástico de nuestras costas y arrecifes."
  },
  {
    titulo: "Productividad",
    subtitulo: "Método Pomodoro",
    avatar: "https://i.pravatar.cc/150?u=work",
    imagen: "https://picsum.photos/seed/clock/800/450",
    descripcion: "Cómo trabajar en bloques de tiempo puede aumentar tu enfoque y reducir la fatiga."
  },
  {
    titulo: "Sociología",
    subtitulo: "Redes Sociales",
    avatar: "https://i.pravatar.cc/150?u=social",
    imagen: "https://picsum.photos/seed/network/800/450",
    descripcion: "El impacto de las comunidades digitales en la formación de la identidad adolescente."
  },
  {
    titulo: "Astronomía",
    subtitulo: "Auroras Boreales",
    avatar: "https://i.pravatar.cc/150?u=north",
    imagen: "https://picsum.photos/seed/aurora/800/450",
    descripcion: "Dónde y cuándo viajar para presenciar el espectáculo de luces más grande de la Tierra."
  },
  {
    titulo: "Idiomas",
    subtitulo: "Aprender Japonés",
    avatar: "https://i.pravatar.cc/150?u=kanji",
    imagen: "https://picsum.photos/seed/shrine/800/450",
    descripcion: "Consejos mnemotécnicos para memorizar los kanjis básicos de forma divertida."
  },
  {
    titulo: "Gaming",
    subtitulo: "E-Sports",
    avatar: "https://i.pravatar.cc/150?u=gamer",
    imagen: "https://picsum.photos/seed/gaming/800/450",
    descripcion: "La profesionalización de los videojuegos y su crecimiento como industria multimillonaria."
  },
  {
    titulo: "Botánica",
    subtitulo: "Plantas Carnívoras",
    avatar: "https://i.pravatar.cc/150?u=leaf",
    imagen: "https://picsum.photos/seed/flytrap/800/450",
    descripcion: "Cómo sobreviven y cazan estas fascinantes especies en suelos pobres en nutrientes."
  },
  {
    titulo: "Moda Masculina",
    subtitulo: "El Traje a Medida",
    avatar: "https://i.pravatar.cc/150?u=suit",
    imagen: "https://picsum.photos/seed/suit/800/450",
    descripcion: "La importancia del corte y la tela en la sastrería clásica contemporánea."
  },
  {
    titulo: "Bienestar",
    subtitulo: "Baños de Bosque",
    avatar: "https://i.pravatar.cc/150?u=forest",
    imagen: "https://picsum.photos/seed/forest/800/450",
    descripcion: "La práctica japonesa de Shinrin-yoku y sus beneficios para el sistema inmune."
  },
  {
    titulo: "Música Urbana",
    subtitulo: "Historia del Hip-Hop",
    avatar: "https://i.pravatar.cc/150?u=rap",
    imagen: "https://picsum.photos/seed/vinyl/800/450",
    descripcion: "Desde las fiestas en el Bronx hasta convertirse en el género dominante globalmente."
  }
];

}
