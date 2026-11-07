// =============================================================================
// BANCO PEDAGÓGICO DE DATOS · LENGUA CASTELLANA 4.º DE PRIMARIA · TEMA 2
// Proyecto CLAVES / Construyendo Mundos (Grazalema–Santillana)
// Diseñado para Olivia · Preguntas conceptuales, enriquecidas y originales
// =============================================================================

const TEMA_2_DATA = {
  meta: {
    unit: 2,
    title: "El Campo Léxico, las Palabras Agudas y los Pronombres Personales",
    student: "Olivia",
    subject: "Lengua Castellana y Literatura",
    grade: "4.º de Educación Primaria",
    editorial: "Grazalema–Santillana (Proyecto CLAVES)",
    version: "2.0.0"
  },

  // ---------------------------------------------------------------------------
  // FICHAS DE ESTUDIO VISUAL (CHULETA DE ORO IMPRIMIBLE)
  // ---------------------------------------------------------------------------
  resumenOro: [
    {
      id: "instructivo",
      icon: "📋",
      title: "1. El Texto Instructivo",
      summary: "Explica paso a paso cómo fabricar o realizar algo de forma ordenada.",
      points: [
        "**Finalidad:** Guiar al lector para completar una tarea o fabricar un objeto.",
        "**Estructura fundamental:** Título claro + Lista de materiales o ingredientes + Pasos ordenados.",
        "**Conectores de tiempo obligatorios:** *En primer lugar / Primero*, *Después*, *A continuación*, *Por último / Finalmente*.",
        "**Relaciones temporales:** Distinguir con precisión qué hay que hacer **antes de** y qué se hace **después de** cada paso."
      ],
      examTip: "¡Ojo en el examen! Te pedirán ordenar 4 pasos cronológicamente y contestar qué se hace justo antes o después de una acción."
    },
    {
      id: "campo_lexico",
      icon: "🌿",
      title: "2. El Campo Léxico vs. Campo Semántico",
      summary: "¡La diferencia más importante del examen que siempre preguntan!",
      points: [
        "**Campo Léxico:** Conjunto de palabras de **DIFERENTES categorías gramaticales** (sustantivos, verbos, adjetivos...) relacionadas con un mismo tema.",
        "**Ejemplo de Campo Léxico (Las Aves):** *gorrión* (sustantivo), *volar* (verbo), *salvaje* (adjetivo), *nido* (sustantivo), *piar* (verbo).",
        "**Campo Semántico:** Conjunto de palabras de la **MISMA categoría gramatical** (todos sustantivos, todos adjetivos o todos verbos).",
        "**Ejemplo de Campo Semántico (Pájaros):** *gorrión, jilguero, golondrina, canario, águila* (¡todos son sustantivos!)."
      ],
      examTip: "Si te preguntan por qué forman un campo léxico, responde: «Porque son palabras de diferentes clases (sustantivos, verbos y adjetivos) que tratan sobre el mismo tema»."
    },
    {
      id: "agudas",
      icon: "⚡",
      title: "3. Regla de Acentuación de las Palabras Agudas",
      summary: "La sílaba tónica (la que suena más fuerte) es la ÚLTIMA sílaba.",
      points: [
        "**Regla de Oro (Regla V-N-S):** Las palabras agudas llevan tilde **SÍ Y SOLO SÍ** terminan en:",
        "1. **Vocal** (-a, -e, -i, -o, -u): *café, colibrí, sofá, dominó, bambú, ojalá, champú*.",
        "2. Consonante **-n**: *jardín, melocotón, patín, camión, tiburón, sartén, campeón*.",
        "3. Consonante **-s**: *comerás, compás, autobús, ciempiés, arnés, revés, anís, jamás*.",
        "**Sin tilde:** Si acaban en cualquier otra consonante distinta de n o s (*-l, -r, -d, -z, -j...*): *natural, caracol, corral, tambor, pared, feliz, reloj, papel, cristal, tenedor, disfraz*."
      ],
      examTip: "Justificación de examen: «Lleva tilde porque es aguda y termina en vocal / en -n / en -s». «No lleva tilde porque es aguda y termina en una consonante distinta de -n y -s»."
    },
    {
      id: "pronombres",
      icon: "🦸‍♀️",
      title: "4. Los Pronombres Personales",
      summary: "Palabras que sustituyen a los nombres y nombran a personas, animales o cosas sin decir su nombre.",
      points: [
        "**1.ª persona (quien habla):** Singular: *yo, me, mí, conmigo*. Plural: *nosotros, nosotras, nos*.",
        "**2.ª persona (a quien se habla):** Singular: *tú, te, ti, contigo, usted*. Plural: *vosotros, vosotras, os, ustedes*.",
        "**3.ª persona (de quien se habla):** Singular: *él, ella, ello, lo, la, le, se, sí, consigo*. Plural: *ellos, ellas, los, las, les, se, sí, consigo*.",
        "**¡Tildes Diacríticas Importantes!:**",
        "• **Tú** (con tilde) = pronombre personal (*Tú cantas*). **Tu** (sin tilde) = posesivo (*Tu abrigo*).",
        "• **Él** (con tilde) = pronombre personal (*Él leyó*). **El** (sin tilde) = artículo (*El libro*)."
      ],
      examTip: "Recuerda: «Mateo y yo» = nosotros (1.ª plur.). «Lucía y tú» = vosotros (2.ª plur.). «Las niñas» = ellas (3.ª plur.)."
    },
    {
      id: "nota_agradecimiento",
      icon: "💌",
      title: "5. La Nota de Agradecimiento",
      summary: "Texto breve para dar las gracias a alguien por su ayuda, un favor o un regalo.",
      points: [
        "**1. Saludo / Destinatario:** A quién va dirigida (*Querido abuelo,* / *Hola, Carmen:* / *Estimada profesora,*).",
        "**2. Motivo del agradecimiento:** Explicar claramente qué favor o regalo te hizo y cómo te sentiste.",
        "**3. Despedida cariñosa:** Cierre afectuoso (*Un abrazo muy fuerte,* / *Con mucho cariño,*).",
        "**4. Firma:** Tu nombre (*Olivia*)."
      ],
      examTip: "No olvides incluir las 4 partes. Escribe con buena caligrafía, cuida las mayúsculas al inicio y tras los dos puntos o coma del saludo."
    }
  ],

  // ---------------------------------------------------------------------------
  // MISIONES TEMÁTICAS INTERACTIVAS
  // ---------------------------------------------------------------------------
  misiones: [
    {
      id: "mision1",
      badge: "Misión 1",
      title: "El Inspector de Textos Instructivos",
      icon: "📋",
      color: "from-sky-500 to-blue-600",
      description: "Aprende a analizar instrucciones, reconocer materiales y ordenar los pasos en el tiempo.",
      textoPrincipal: {
        titulo: "¡Construye un Hotel para Mariquitas y Abejas Solitarias!",
        cuerpo: `Las mariquitas y las abejas solitarias son unos pequeños insectos muy beneficiosos y trabajadores que ayudan a cuidar las plantas del jardín y del campo. Si quieres observar a estos simpáticos habitantes de cerca y darles cobijo durante el frío invierno, lo más divertido es fabricarles un hotel de insectos. Se trata de un proyecto muy entretenido que tú podrás realizar fácilmente con la ayuda de una persona adulta. ¡Manos a la obra!

En primer lugar, hay que conseguir una caja de madera sin tapa (como una caja de fresas) y lijar suavemente las esquinas para evitar astillas peligrosas. ¡Ojo! No utilices pinturas químicas ni barnices fuertes: el olor espantaría a los bichitos.

Después, se hace un orificio en la parte superior de la caja y se pasa una cuerda resistente de esparto para poder colgar la estructura de una rama soleada.

A continuación, se rellena bien el interior con cañas huecas de bambú cortadas a la misma medida, piñas secas de pino y pedacitos de corteza de árbol, apretándolo todo para que no se caiga con el viento.

Por último, cuando todo esté colocado con cuidado, se cuelga el hotel en lo alto de un árbol orientado al sur, y ya está lista tu casita ecológica. ¡Ahora solo queda esperar a que lleguen las primeras huéspedes!`
      },
      ejercicios: [
        {
          id: "m1_e1",
          tipo: "opcion_multiple",
          pregunta: "¿Qué pretende el texto que acabas de leer?",
          opciones: [
            "Dar información científica sobre la vida y reproducción de las abejas.",
            "Explicar paso a paso las instrucciones para construir un hotel de insectos.",
            "Contar un cuento de aventuras sobre una mariquita perdida."
          ],
          correcta: 1,
          explicacion: "Es un **texto instructivo** porque su finalidad principal es enseñarnos a construir algo mediante pasos guiados y ordenados."
        },
        {
          id: "m1_e2",
          tipo: "seleccion_multiple",
          pregunta: "¿Cuáles de estos materiales son indispensables según el texto? (Selecciona los correctos)",
          opciones: [
            "Caja de madera sin tapa",
            "Pintura con purpurina y barniz químico",
            "Cañas huecas de bambú",
            "Piñas secas y trozos de corteza",
            "Cuerda resistente de esparto"
          ],
          correctas: [0, 2, 3, 4],
          explicacion: "La pintura y el barniz químico están expresamente desaconsejados porque su fuerte olor ahuyentaría a los insectos."
        },
        {
          id: "m1_e3",
          tipo: "ordenar",
          pregunta: "Numera en orden cronológico (del 1 al 4) los pasos para hacer el hotel de insectos:",
          pasos: [
            { id: "p1", texto: "Conseguir la caja de madera y lijar las esquinas para quitar astillas.", ordenCorrecto: 1 },
            { id: "p2", texto: "Hacer un orificio en la parte superior y pasar una cuerda de esparto.", ordenCorrecto: 2 },
            { id: "p3", texto: "Rellenar el interior con cañas huecas, piñas secas y cortezas.", ordenCorrecto: 3 },
            { id: "p4", texto: "Colgar el hotel en lo alto de un árbol orientado al sur.", ordenCorrecto: 4 }
          ],
          explicacion: "Los conectores temporales del texto (*En primer lugar, Después, A continuación, Por último*) marcan la secuencia exacta."
        },
        {
          id: "m1_e4",
          tipo: "relacion_temporal",
          pregunta: "Comprensión temporal de examen: ¿Qué hay que haber hecho ANTES de rellenar el interior con cañas y piñas?",
          opciones: [
            "Colgar el hotel en la rama del árbol.",
            "Lijar la caja de madera y pasar la cuerda resistente por el orificio superior.",
            "Esperar a que lleguen las primeras mariquitas."
          ],
          correcta: 1,
          explicacion: "Antes de colocar el relleno, la caja debe estar lijada y con la cuerda ya pasada para poder sujetarla luego sin que se caiga el contenido."
        },
        {
          id: "m1_e5",
          tipo: "relacion_temporal",
          pregunta: "¿Y qué se debe hacer DESPUÉS de rellenar y asegurar el interior con las cañas y piñas?",
          opciones: [
            "Pintar la caja con purpurina de colores.",
            "Lijar de nuevo la madera.",
            "Colgar el hotel en lo alto de un árbol orientado al sol y esperar a los insectos."
          ],
          correcta: 2,
          explicacion: "El paso final (*Por último*) es colgar el hotel en lo alto orientado al sur y aguardar la llegada de los insectos."
        }
      ]
    },

    {
      id: "mision2",
      badge: "Misión 2",
      title: "El Laboratorio de los Campos Léxicos",
      icon: "🌿",
      color: "from-emerald-500 to-teal-600",
      description: "Domina el concepto de campo léxico (diferentes categorías) frente a campo semántico (misma categoría).",
      ejercicios: [
        {
          id: "m2_e1",
          tipo: "analisis_campo",
          tituloCaso: "Caso 1: Las Maravillas del Espacio Exterior",
          palabras: ["cohete", "orbitar", "estelar", "telescopio", "alunizar", "espacial"],
          pregunta: "¿A qué campo léxico pertenecen estas palabras y por qué?",
          opcionesTema: ["Los deportes acuáticos", "La exploración espacial / El espacio", "Las comidas del restaurante"],
          correctaTema: 1,
          preguntaRazon: "¿Por qué decimos que forman un campo LÉXICO y no un campo semántico?",
          opcionesRazon: [
            "Porque todas las palabras son sustantivos femeninos.",
            "Porque pertenecen a DIFERENTES categorías gramaticales (sustantivos, verbos y adjetivos) pero tratan sobre un mismo tema.",
            "Porque todas riman entre sí al final."
          ],
          correctaRazon: 1,
          clasificacion: {
            sustantivos: ["cohete", "telescopio"],
            verbos: ["orbitar", "alunizar"],
            adjetivos: ["estelar", "espacial"]
          },
          explicacion: "¡Pregunta estrella del examen! Es un campo léxico porque agrupa palabras de diferentes clases: sustantivos (*cohete, telescopio*), verbos (*orbitar, alunizar*) y adjetivos (*estelar, espacial*) relacionados con el espacio."
        },
        {
          id: "m2_e2",
          tipo: "ampliar_campo",
          tituloCaso: "Caso 2: Campo léxico de la Cocina y la Repostería",
          palabrasIniciales: ["sartén", "hornear", "delicioso", "amasar"],
          pregunta: "Añade otras 4 palabras que pertenezcan al campo léxico de la COCINA Y REPOSTERÍA:",
          palabrasDisponibles: [
            { texto: "batidora", pertenece: true, cat: "Sustantivo" },
            { texto: "crujiente", pertenece: true, cat: "Adjetivo" },
            { texto: "freír", pertenece: true, cat: "Verbo" },
            { texto: "delantal", pertenece: true, cat: "Sustantivo" },
            { texto: "alunizaje", pertenece: false, cat: "Sustantivo" },
            { texto: "semáforo", pertenece: false, cat: "Sustantivo" },
            { texto: "portería", pertenece: false, cat: "Sustantivo" }
          ],
          explicacion: "*Batidora, delantal* (sustantivos), *freír* (verbo) y *crujiente* (adjetivo) pertenecen de lleno a la cocina y gastronomía."
        },
        {
          id: "m2_e3",
          tipo: "discriminador_semantico_lexico",
          pregunta: "¿Cuál de estos dos grupos es un CAMPO SEMÁNTICO y cuál es un CAMPO LÉXICO?",
          grupoA: {
            nombre: "Grupo A: médico, curar, hospitalario, enfermera, vacunar, dolorido",
            tipoCorrecto: "lexico",
            justificacion: "Tiene sustantivos (*médico, enfermera*), verbos (*curar, vacunar*) y adjetivos (*hospitalario, dolorido*)."
          },
          grupoB: {
            nombre: "Grupo B: manzana, plátano, fresa, naranja, pera, melocotón",
            tipoCorrecto: "semantico",
            justificacion: "¡Todas son de la misma categoría gramatical! Son todas sustantivos (nombres de frutas)."
          },
          explicacion: "Recuerda la regla de oro: Si tienen la misma clase gramatical -> **Campo Semántico**. Si tienen diferentes clases (nombres, verbos, adjetivos) -> **Campo Léxico**."
        },
        {
          id: "m2_e4",
          tipo: "caza_intruso",
          pregunta: "Encuentra la palabra intrusa en este campo léxico de la MÚSICA:",
          palabras: ["guitarra", "cantar", "sonoro", "partitura", "lechuga", "afinar"],
          intrusa: "lechuga",
          explicacion: "*Lechuga* es un vegetal y no tiene relación con el arte musical."
        }
      ]
    },

    {
      id: "mision3",
      badge: "Misión 3",
      title: "El Radar de las Palabras Agudas",
      icon: "⚡",
      color: "from-amber-500 to-orange-600",
      description: "Aprende a localizar la sílaba tónica al final y aplica sin dudar la regla de las tildes: V-N-S.",
      reglaOro: "Las palabras agudas tienen la sílaba tónica en la ÚLTIMA sílaba y llevan tilde SÍ Y SOLO SÍ terminan en VOCAL (-a, -e, -i, -o, -u), en -N o en -S.",
      ejercicios: [
        {
          id: "m3_e1",
          tipo: "clasificar_con_sin_tilde",
          pregunta: "Clasifica estas palabras agudas según deban llevar tilde o no:",
          palabras: [
            { palabra: "colibri", conTilde: true, correctaConTilde: "colibrí", terminaEn: "vocal (i)" },
            { palabra: "natural", conTilde: false, correctaConTilde: "natural", terminaEn: "consonante l (distinta de n o s)" },
            { palabra: "jardin", conTilde: true, correctaConTilde: "jardín", terminaEn: "consonante n" },
            { palabra: "corral", conTilde: false, correctaConTilde: "corral", terminaEn: "consonante l" },
            { palabra: "melocoton", conTilde: true, correctaConTilde: "melocotón", terminaEn: "consonante n" },
            { palabra: "caracol", conTilde: false, correctaConTilde: "caracol", terminaEn: "consonante l" },
            { palabra: "comeras", conTilde: true, correctaConTilde: "comerás", terminaEn: "consonante s" },
            { palabra: "ojala", conTilde: true, correctaConTilde: "ojalá", terminaEn: "vocal (a)" },
            { palabra: "bambu", conTilde: true, correctaConTilde: "bambú", terminaEn: "vocal (u)" },
            { palabra: "japones", conTilde: true, correctaConTilde: "japonés", terminaEn: "consonante s" },
            { palabra: "tambor", conTilde: false, correctaConTilde: "tambor", terminaEn: "consonante r" },
            { palabra: "pared", conTilde: false, correctaConTilde: "pared", terminaEn: "consonante d" },
            { palabra: "feliz", conTilde: false, correctaConTilde: "feliz", terminaEn: "consonante z" },
            { palabra: "reloj", conTilde: false, correctaConTilde: "reloj", terminaEn: "consonante j" },
            { palabra: "sofa", conTilde: true, correctaConTilde: "sofá", terminaEn: "vocal (a)" },
            { palabra: "balon", conTilde: true, correctaConTilde: "balón", terminaEn: "consonante n" }
          ],
          explicacion: "Las agudas solo se acentúan cuando terminan en vocal, en -n o en -s. Si terminan en -l, -r, -d, -z, -j... ¡nunca llevan tilde!"
        },
        {
          id: "m3_e2",
          tipo: "escribir_tres_casos",
          pregunta: "Entrenamiento para el ejercicio estrella del examen: Selecciona 3 palabras agudas con tilde para cada caso:",
          grupos: [
            {
              terminacion: "Terminan en vocal (-a, -e, -i, -o, -u)",
              opcionesCorrectas: ["café", "colibrí", "bambú"],
              distractores: ["camión", "compás", "papel"]
            },
            {
              terminacion: "Terminan en -n",
              opcionesCorrectas: ["jardín", "volcán", "melocotón"],
              distractores: ["sofá", "arnés", "tambor"]
            },
            {
              terminacion: "Terminan en -s",
              opcionesCorrectas: ["compás", "japonés", "autobús"],
              distractores: ["corral", "botón", "tabú"]
            }
          ],
          explicacion: "En el examen te pedirán escribir tres de cada una. ¡Memorizar estas parejas te asegurará los puntos completos!"
        },
        {
          id: "m3_e3",
          tipo: "justificar_regla",
          pregunta: "¿Cuál es la JUSTIFICACIÓN OFICIAL de por qué la palabra «campeón» lleva tilde?",
          opciones: [
            "Lleva tilde porque es una palabra llana que termina en vocal.",
            "Lleva tilde porque es una palabra aguda y termina en la consonante -n.",
            "Lleva tilde porque es una palabra esdrújula muy larga."
          ],
          correcta: 1,
          explicacion: "Su sílaba tónica es «pión» (la última) y termina en «n», por lo que cumple estrictamente la regla de las agudas."
        },
        {
          id: "m3_e4",
          tipo: "justificar_regla",
          pregunta: "¿Por qué la palabra «reloj» es aguda pero NO lleva tilde?",
          opciones: [
            "Porque termina en la consonante -j, que no es ni -n ni -s ni vocal.",
            "Porque es una palabra monosílaba.",
            "Porque la fuerza de voz está en la primera sílaba."
          ],
          correcta: 0,
          explicacion: "«Re-loj»: la sílaba tónica es «loj» (última, por tanto es aguda), pero al terminar en «j» no puede llevar tilde gráfica."
        }
      ]
    },

    {
      id: "mision4",
      badge: "Misión 4",
      title: "El Escuadrón de Pronombres Personales",
      icon: "🦸‍♀️",
      color: "from-purple-500 to-indigo-600",
      description: "Aprende a identificar personas (1.ª, 2.ª, 3.ª), número (singular/plural) y sustituir grupos de palabras.",
      tablaPronombres: {
        primera: {
          singular: ["yo", "me", "mí", "conmigo"],
          plural: ["nosotros", "nosotras", "nos"],
          significado: "La persona o personas que hablan"
        },
        segunda: {
          singular: ["tú", "te", "ti", "contigo", "usted"],
          plural: ["vosotros", "vosotras", "os", "ustedes"],
          significado: "La persona o personas a quienes se habla"
        },
        tercera: {
          singular: ["él", "ella", "ello", "lo", "la", "le", "se", "sí", "consigo"],
          plural: ["ellos", "ellas", "los", "las", "les", "se", "sí", "consigo"],
          significado: "La persona, animal o cosa de quien se habla"
        }
      },
      ejercicios: [
        {
          id: "m4_e1",
          tipo: "analisis_pronombre",
          pregunta: "Encuentra el pronombre personal en esta oración e indica su persona y número:",
          oracion: "«Las crías del carbonero van contentas tras él».",
          pronombre: "él",
          persona: "3.ª persona",
          numero: "singular",
          explicacion: "«Él» sustituye al carbonero macho: se refiere a de quién se habla (3.ª persona) y es uno solo (singular). ¡Lleva tilde por ser pronombre!"
        },
        {
          id: "m4_e2",
          tipo: "analisis_pronombre",
          pregunta: "Analiza el pronombre personal de esta oración:",
          oracion: "«Elena y Marcos viajarán con vosotros en tren».",
          pronombre: "vosotros",
          persona: "2.ª persona",
          numero: "plural",
          explicacion: "«Vosotros» se refiere a las personas que escuchan (2.ª persona) y son varias (plural)."
        },
        {
          id: "m4_e3",
          tipo: "sustitucion_sujeto",
          pregunta: "¿Por qué pronombre personal sustituirías el sujeto subrayado?",
          casos: [
            { sujeto: "Manu y yo", resto: "subimos a la copa de un castaño.", opcionCorrecta: "Nosotros", opciones: ["Nosotros", "Vosotros", "Ellos"] },
            { sujeto: "Vega, Claudia y tú", resto: "sois unas grandes observadoras de aves.", opcionCorrecta: "Vosotras", opciones: ["Vosotras", "Ellas", "Nosotras"] },
            { sujeto: "Las leonas", resto: "cazan en grupo al anochecer.", opcionCorrecta: "Ellas", opciones: ["Ellas", "Vosotras", "Ustedes"] },
            { sujeto: "Mi padre y el abuelo", resto: "construyeron una mesa de madera.", opcionCorrecta: "Ellos", opciones: ["Ellos", "Nosotros", "Vosotros"] }
          ],
          explicacion: "Cuando te incluyes tú con alguien («X y yo»), el resultado siempre es **Nosotros / Nosotras** (1.ª plur.). Cuando te diriges a alguien con otro («X y tú»), es **Vosotros / Vosotras** (2.ª plur.)."
        },
        {
          id: "m4_e4",
          tipo: "completar_huecos",
          pregunta: "Completa las siguientes oraciones con el pronombre personal adecuado según la persona del verbo:",
          oraciones: [
            { textoAntes: "", textoDespues: "sois unos grandes amantes de la naturaleza y los animales.", correcta: "Vosotros", pista: "2.ª persona del plural" },
            { textoAntes: "Ayer Mateo y", textoDespues: "vimos una bandada de gaviotas volando hacia el mar.", correcta: "yo", pista: "1.ª persona del singular" },
            { textoAntes: "", textoDespues: "llegaron muy cansadas de su largo viaje en autobús.", correcta: "Ellas", pista: "3.ª persona del plural femenino" }
          ],
          explicacion: "La terminación del verbo nos da la pista clave: *sois* concuerda con *vosotros/as*, *vimos* con *nosotros* (Mateo y yo), y *llegaron cansadas* con *ellas*."
        },
        {
          id: "m4_e5",
          tipo: "trampa_examen",
          pregunta: "¡Pregunta trampa de examen! ¿En cuál de estas dos oraciones la palabra subrayada es un PRONOMBRE PERSONAL?",
          opciones: [
            "«El pájaro cantor se posó en la rama del abeto».",
            "«No te preocupes, él sabe exactamente el camino de vuelta»."
          ],
          correcta: 1,
          explicacion: "En «él sabe», «él» es un **pronombre personal** (sustituye a una persona o animal) y lleva tilde. En «El pájaro», «El» es un **artículo determinado** (va delante de un sustantivo) y no lleva tilde."
        }
      ]
    },

    {
      id: "mision5",
      badge: "Misión 5",
      title: "El Taller de Notas de Agradecimiento",
      icon: "💌",
      color: "from-rose-500 to-pink-600",
      description: "Aprende a redactar una nota de agradecimiento completa con sus 4 partes obligatorias.",
      partes: [
        { num: 1, nombre: "Saludo / Destinatario", ejemplo: "Querida abuela Sofía:" },
        { num: 2, nombre: "Motivo concreto del agradecimiento", ejemplo: "Muchísimas gracias por ayudarme a preparar la maqueta del volcán..." },
        { num: 3, nombre: "Despedida afectuosa", ejemplo: "Te mando un abrazo enorme y muchos besos." },
        { num: 4, nombre: "Firma", ejemplo: "Olivia" }
      ],
      casosPractica: [
        {
          id: "caso1",
          destinatario: "A tu amiga Daniela, que te prestó su libro favorito cuando estabas enferma en casa",
          plantilla: {
            saludo: "¡Hola, Daniela!",
            motivo: "Te escribo esta nota para darte las gracias de corazón por prestarme tu novela de detectives cuando estuve malita en la cama. Me encantó leerla y me hizo pasar unos días muy entretenidos.",
            despedida: "¡Nos vemos mañana en el recreo! Un abrazo muy fuerte,",
            firma: "Olivia"
          }
        },
        {
          id: "caso2",
          destinatario: "A tu abuelo Manuel, que te enseñó a construir un comedero para pájaros",
          plantilla: {
            saludo: "Querido abuelo Manuel:",
            motivo: "Muchas gracias por dedicar toda la tarde de ayer a enseñarme cómo vaciar el coco y colgar el comedero en el jardín. ¡Esta mañana ya han venido dos carboneros a comer semillas!",
            despedida: "Eres el mejor abuelo del mundo. Con todo mi cariño,",
            firma: "Olivia"
          }
        },
        {
          id: "caso3",
          destinatario: "A tu compañero Marcos, que te explicó pacientemente un problema difícil de matemáticas",
          plantilla: {
            saludo: "Hola, Marcos:",
            motivo: "Quiero agradecerte lo bien que me explicaste las operaciones combinadas con paréntesis. Gracias a ti lo entendí todo a la primera y saqué una nota estupenda en el ejercicio.",
            despedida: "¡Eres un gran compañero de equipo! Un saludo,",
            firma: "Olivia"
          }
        }
      ]
    }
  ],

  // ---------------------------------------------------------------------------
  // MODELOS OFICIALES DE EXAMEN (SIMULACRO 360 COMPLETO CON NOTA SOBRE 10)
  // ---------------------------------------------------------------------------
  simulacros: [
    {
      id: "modelo_b",
      nombre: "Prueba Oficial de Evaluación · Modelo B (Estándar)",
      descripcion: "Examen oficial de 9 preguntas con textos instructivos alternativos, palabras agudas y pronombres.",
      tiempoRecomendadoMinutos: 30,
      preguntas: [
        {
          id: "p1",
          puntos: 1,
          bloque: "Comprensión Lectora",
          enunciado: "1. ¿Qué pretende principalmente el texto instructivo sobre el comedero o el hotel de insectos?",
          tipo: "test",
          opciones: [
            "Contar una leyenda antigua de pájaros.",
            "Explicar con instrucciones ordenadas cómo fabricar un objeto útil.",
            "Describir el aspecto físico de las aves del bosque."
          ],
          correcta: 1,
          solucion: "Explicar cómo se hace un comedero o casita mediante pasos ordenados."
        },
        {
          id: "p2",
          puntos: 1,
          bloque: "Comprensión Lectora",
          enunciado: "2. Señala el orden correcto de estos tres pasos para la elaboración de una mezcla para pájaros:",
          tipo: "test",
          opciones: [
            "1. Colgarlo en la rama -> 2. Mezclar semillas con miga -> 3. Vaciar el coco.",
            "1. Vaciar medio coco -> 2. Preparar la mezcla de semillas y miga de pan -> 3. Rellenar la cáscara y colgar en alto.",
            "1. Rellenar la cáscara -> 2. Limpiar el coco -> 3. Colgarlo sin secar."
          ],
          correcta: 1,
          solucion: "Primero vaciar la cáscara, luego preparar la masa y finalmente rellenar y colgar."
        },
        {
          id: "p3",
          puntos: 1,
          bloque: "Vocabulario",
          enunciado: "3. ¿A qué campo léxico crees que pertenecen estas palabras: «gorrión, nido, salvaje, volar, pico, plumas»? ¿Por qué?",
          tipo: "test",
          opciones: [
            "Al campo semántico del colegio, porque son palabras que se estudian allí.",
            "Al campo léxico de LAS AVES / PÁJAROS, porque son palabras de diferentes clases (sustantivos, verbos y adjetivos) que tratan sobre las aves.",
            "Al campo léxico de los reptiles, porque tienen plumas."
          ],
          correcta: 1,
          solucion: "Pertenecen al campo léxico de las aves porque tratan sobre ese tema y pertenecen a distintas categorías gramaticales."
        },
        {
          id: "p4",
          puntos: 1,
          bloque: "Vocabulario",
          enunciado: "4. Añade cuatro palabras que pertenezcan al campo léxico de LAS MANUALIDADES:",
          tipo: "test",
          opciones: [
            "Tijeras, colorear, pegamento, recortar.",
            "León, selva, rugir, fiero.",
            "Coche, autopista, frenar, veloz."
          ],
          correcta: 0,
          solucion: "Tijeras, colorear, recortar, pegamento, cartulina, pincel..."
        },
        {
          id: "p5",
          puntos: 1,
          bloque: "Ortografía",
          enunciado: "5. ¿Cuál de estos grupos contiene ÚNICAMENTE palabras agudas CON TILDE correctas?",
          tipo: "test",
          opciones: [
            "colibrí, melocotón, comerás, ojalá, bambú, japonés.",
            "natural, corral, caracol, reloj, papel, tambor.",
            "árbol, mármol, lápiz, cómic, azúcar."
          ],
          correcta: 0,
          solucion: "Todas terminan en vocal, -n o -s y tienen su fuerza en la última sílaba."
        },
        {
          id: "p6",
          puntos: 1,
          bloque: "Ortografía",
          enunciado: "6. Escribe correctamente con tilde las palabras que deban llevarla en esta lista: «natural, jardin, corral, comeras, reloj, sofa»:",
          tipo: "test",
          opciones: [
            "naturál, corrál, relój.",
            "jardín, comerás, sofá (las demás no llevan tilde porque acaban en -l y en -j).",
            "Todas deben llevar tilde obligatoria."
          ],
          correcta: 1,
          solucion: "Jardín (acaba en n), comerás (acaba en s), sofá (acaba en vocal)."
        },
        {
          id: "p7",
          puntos: 1,
          bloque: "Gramática",
          enunciado: "7. Copia el pronombre personal del siguiente texto e indica su persona y número: «Se trata de un trabajo original que tú podrás realizar fácilmente con ayuda».",
          tipo: "test",
          opciones: [
            "trabajo (sustantivo singular).",
            "tú (2.ª persona del singular).",
            "podrás (verbo futuro)."
          ],
          correcta: 1,
          solucion: "El pronombre es «tú», que corresponde a la 2.ª persona del singular."
        },
        {
          id: "p8",
          puntos: 1,
          bloque: "Gramática",
          enunciado: "8. Completa con los pronombres personales correspondientes: «[___] sois unos grandes amantes de los pájaros», «Vega y [___] vimos una bandada» y «[___] llegaron muy cansadas».",
          tipo: "test",
          opciones: [
            "Vosotros / yo / Ellas",
            "Nosotros / tú / Ellos",
            "Ellos / él / Vosotras"
          ],
          correcta: 0,
          solucion: "«Vosotros sois...», «Vega y yo vimos...», «Ellas llegaron...»."
        },
        {
          id: "p9",
          puntos: 2,
          bloque: "Expresión Escrita",
          enunciado: "9. ¿Cuáles son los 4 componentes indispensables que debe tener una buena nota de agradecimiento de 4.º de Primaria?",
          tipo: "test",
          opciones: [
            "Título en verso, rima consonante, índice y fecha de nacimiento.",
            "Saludo/Destinatario + Motivo concreto del agradecimiento + Despedida cariñosa + Firma.",
            "Solo la firma al final de la hoja en blanco."
          ],
          correcta: 1,
          solucion: "Destinatario, motivo claro del agradecimiento, despedida afectuosa y firma."
        }
      ]
    },

    {
      id: "modelo_a",
      nombre: "Prueba Oficial de Evaluación · Modelo A (Avanzado)",
      descripcion: "Modelo de alta exigencia con explicaciones teóricas completas, justificación de reglas y análisis morfológico.",
      tiempoRecomendadoMinutos: 35,
      preguntas: [
        {
          id: "pa1",
          puntos: 1,
          bloque: "Comprensión Lectora",
          enunciado: "1. ¿Qué materiales concretos se citan para fabricar un comedero de pájaros artesano?",
          tipo: "test",
          opciones: [
            "Medio coco limpio, cuerda resistente, semillas, miga de pan, frutos secos y caldo de carne.",
            "Ladrillos de obra, cemento rápido y pegamento de contacto.",
            "Un tarro de cristal cerrado herméticamente."
          ],
          correcta: 0,
          solucion: "Cáscara de medio coco, cuerda, semillas variadas, miga, frutos secos y caldo."
        },
        {
          id: "pa2",
          puntos: 1,
          bloque: "Comprensión Lectora",
          enunciado: "2. ¿Qué hay que haber hecho ANTES de preparar la mezcla de semillas? ¿Y DESPUÉS de rellenar el coco?",
          tipo: "test",
          opciones: [
            "Antes: vaciar el coco y hacer los agujeros con la cuerda. Después: dejar secar bien la masa y colgar en alto.",
            "Antes: colgar el coco vacío. Después: volver a limpiarlo.",
            "Antes: comerse las semillas. Después: quitar la cuerda."
          ],
          correcta: 0,
          solucion: "Antes se vacía y se prepara la cáscara perforada con la cuerda; después se espera a que seque y se cuelga."
        },
        {
          id: "pa3",
          puntos: 1,
          bloque: "Vocabulario",
          enunciado: "3. Explica qué es un campo léxico y pon ejemplos del campo léxico de LAS AVES:",
          tipo: "test",
          opciones: [
            "Es un grupo de palabras que riman todas en -ión. Ejemplos: avión, camión.",
            "Es un conjunto de palabras de diferentes categorías (sustantivos, verbos, adjetivos) sobre un tema. Ej: gorrión (sust.), volar (verbo), rapaz (adj.).",
            "Es una lista de nombres de árboles donde anidan los pájaros."
          ],
          correcta: 1,
          solucion: "Palabras de diferentes categorías gramaticales relacionadas con las aves."
        },
        {
          id: "pa4",
          puntos: 1,
          bloque: "Vocabulario",
          enunciado: "4. Escribe palabras del campo léxico de las manualidades clasificadas en Sustantivo, Verbo y Adjetivo:",
          tipo: "test",
          opciones: [
            "Sustantivo: cartulina, pegamento. Verbo: recortar, pintar. Adjetivo: creativo, colorido.",
            "Sustantivo: coche. Verbo: correr. Adjetivo: veloz.",
            "Todas son adjetivos sin excepción."
          ],
          correcta: 0,
          solucion: "Sustantivos (cartulina, pincel), verbos (colorear, pegar), adjetivos (original, creativo)."
        },
        {
          id: "pa5",
          puntos: 1,
          bloque: "Ortografía",
          enunciado: "5. ¿Por qué llevan tilde palabras como «jardín», «comerás» y «bambú»?",
          tipo: "test",
          opciones: [
            "Porque son agudas y terminan respectivamente en consonante -n, consonante -s y en vocal.",
            "Porque son llanas y no terminan en vocal.",
            "Porque son esdrújulas con tilde siempre."
          ],
          correcta: 0,
          solucion: "Son palabras agudas y cumplen la regla de terminar en -n, en -s o en vocal."
        },
        {
          id: "pa6",
          puntos: 1,
          bloque: "Ortografía",
          enunciado: "6. Escribe tres palabras agudas con tilde que terminen en -n, tres en -s y tres en vocal:",
          tipo: "test",
          opciones: [
            "En -n: camión, capitán, patín. En -s: compás, interés, detrás. En vocal: café, sofá, rubí.",
            "En -n: árbol, mármol. En -s: paraguas, virus. En vocal: mesa, silla.",
            "En -n: examen, joven. En -s: crisis, dosis. En vocal: cielo, agua."
          ],
          correcta: 0,
          solucion: "Todas las propuestas del primer grupo son agudas con tilde correctas."
        },
        {
          id: "pa7",
          puntos: 1,
          bloque: "Gramática",
          enunciado: "7. Analiza morfológicamente los pronombres personales de estas oraciones: «Manu y yo subimos a un árbol» y «Las crías van tras él»:",
          tipo: "test",
          opciones: [
            "«yo» es 1.ª persona del singular; «él» es 3.ª persona del singular.",
            "«yo» es 2.ª persona del plural; «él» es 1.ª persona.",
            "Ambos son adjetivos determinativos posesivos."
          ],
          correcta: 0,
          solucion: "«yo» = 1.ª pers. singular; «él» = 3.ª pers. singular masculino."
        },
        {
          id: "pa8",
          puntos: 1,
          bloque: "Gramática",
          enunciado: "8. En la frase «Elena va con vosotros en coche», ¿a quién sustituye el pronombre «vosotros» y qué persona gramatical es?",
          tipo: "test",
          opciones: [
            "Sustituye a las personas con las que se habla (los oyentes) y es 2.ª persona del plural.",
            "Sustituye a una sola persona que habla y es 1.ª persona.",
            "Sustituye a cosas inanimadas y no tiene persona."
          ],
          correcta: 0,
          solucion: "«vosotros» representa a los interlocutores: 2.ª persona del plural."
        },
        {
          id: "pa9",
          puntos: 2,
          bloque: "Expresión Escrita",
          enunciado: "9. ¿Qué tono y fórmulas son más adecuadas para redactar una nota de agradecimiento a alguien que te prestó un libro?",
          tipo: "test",
          opciones: [
            "Un tono hostil y exigiendo más cosas.",
            "Un saludo afectuoso («Hola, [Nombre]»), mención al libro prestado y lo mucho que te gustó, agradecimiento sincero («Muchísimas gracias por...»), despedida y tu firma («Olivia»).",
            "Una lista de la compra sin firmar."
          ],
          correcta: 1,
          solucion: "Saludo, agradecimiento sincero y detallado del libro, despedida afectuosa y firma."
        }
      ]
    }
  ],

  // ---------------------------------------------------------------------------
  // BANCO DINÁMICO DE PREGUNTAS (DESAFÍO EXPRESS INFINITO)
  // ---------------------------------------------------------------------------
  bancoExpress: [
    {
      id: "exp1",
      categoria: "Ortografía",
      pregunta: "¿Cuál de las siguientes palabras agudas DEBE llevar tilde?",
      opciones: ["reloj", "huracan", "papel", "pared"],
      correcta: 1,
      explicacion: "«Huracán» es aguda (su fuerza está en «cán») y termina en consonante -n. ¡Lleva tilde obligatoria!"
    },
    {
      id: "exp2",
      categoria: "Ortografía",
      pregunta: "¿Por qué «caracol» NO lleva tilde si su sílaba tónica es la última?",
      opciones: [
        "Porque es una palabra esdrújula.",
        "Porque es aguda pero termina en -l, que no es ni vocal, ni -n, ni -s.",
        "Porque es un animal que vive en el jardín."
      ],
      correcta: 1,
      explicacion: "Solo se acentúan las agudas terminadas en vocal, -n o -s. Al terminar en «l», no lleva tilde."
    },
    {
      id: "exp3",
      categoria: "Gramática",
      pregunta: "¿Qué persona y número tiene el pronombre «nosotras»?",
      opciones: [
        "1.ª persona del plural (femenino)",
        "2.ª persona del plural",
        "3.ª persona del singular"
      ],
      correcta: 0,
      explicacion: "«Nosotras» nombra a las personas que hablan (1.ª persona) y son varias (plural femenino)."
    },
    {
      id: "exp4",
      categoria: "Vocabulario",
      pregunta: "¿Por qué «tenedor, cuchara, cuchillo» forman un CAMPO SEMÁNTICO y no léxico?",
      opciones: [
        "Porque todas las palabras pertenecen a la MISMA categoría gramatical (son todas sustantivos).",
        "Porque son palabras de diferentes clases: verbos y adjetivos.",
        "Porque están hechas de metal."
      ],
      correcta: 0,
      explicacion: "Misma categoría gramatical (todos sustantivos) = Campo Semántico."
    },
    {
      id: "exp5",
      categoria: "Vocabulario",
      pregunta: "¿A qué campo léxico pertenecen las palabras «recetar, médico, hospitalario, curar, venda»?",
      opciones: ["La música", "La salud y la medicina", "La astronomía"],
      correcta: 1,
      explicacion: "Tratan sobre la salud con sustantivos (*médico, venda*), verbos (*recetar, curar*) y adjetivos (*hospitalario*)."
    },
    {
      id: "exp6",
      categoria: "Gramática",
      pregunta: "¿Cómo sustituirías el sujeto subrayado: «Sara y tú hacéis un puzzle»?",
      opciones: [
        "Nosotros hacéis un puzzle.",
        "Vosotros hacéis un puzzle.",
        "Ellos hacéis un puzzle."
      ],
      correcta: 1,
      explicacion: "Cualquier persona unida a «tú» se convierte en «vosotros» o «vosotras» (2.ª persona del plural)."
    },
    {
      id: "exp7",
      categoria: "Ortografía",
      pregunta: "¿Cuál de estas palabras es AGUDA?",
      opciones: ["árbol", "mágica", "compás", "ventana"],
      correcta: 2,
      explicacion: "«Com-pás» tiene la sílaba tónica en la última posición. Es aguda y lleva tilde por terminar en -s."
    },
    {
      id: "exp8",
      categoria: "Gramática",
      pregunta: "Completa la oración: «Ayer Lucía y ___ fuimos a patinar sobre hielo».",
      opciones: ["yo", "tú", "él"],
      correcta: 0,
      explicacion: "«Lucía y yo» equivale a «nosotras», que concuerda con el verbo «fuimos» (1.ª persona del plural)."
    },
    {
      id: "exp9",
      categoria: "Texto Instructivo",
      pregunta: "¿Cuál de estos conectores se utiliza habitualmente para introducir el ÚLTIMO paso de unas instrucciones?",
      opciones: ["En primer lugar", "Por último", "A continuación"],
      correcta: 1,
      explicacion: "«Por último» o «Finalmente» indican el cierre de la secuencia temporal."
    },
    {
      id: "exp10",
      categoria: "Ortografía",
      pregunta: "Señala la palabra que tiene una falta de ortografía por faltarle la tilde:",
      opciones: ["tambor", "sofa", "cristal", "arroz"],
      correcta: 1,
      explicacion: "«Sofá» es aguda terminada en vocal: ¡debe escribirse obligatoriamente con tilde en la a!"
    },
    {
      id: "exp11",
      categoria: "Gramática",
      pregunta: "En la oración «Tú tienes un libro precioso», ¿qué es la palabra «Tú»?",
      opciones: [
        "Un pronombre personal de 2.ª persona del singular (lleva tilde).",
        "Un determinante posesivo (no lleva tilde).",
        "Un sustantivo común."
      ],
      correcta: 0,
      explicacion: "«Tú» sustituye a la persona a la que se habla y lleva tilde diacrítica para diferenciarlo del posesivo «tu estuche»."
    },
    {
      id: "exp12",
      categoria: "Vocabulario",
      pregunta: "¿Cuál de estas palabras es el VERBO en el campo léxico del espacio?",
      opciones: ["cohete", "orbitar", "estelar", "astronauta"],
      correcta: 1,
      explicacion: "«Orbitar» es el verbo (acción). «Cohete» y «astronauta» son sustantivos y «estelar» es un adjetivo."
    }
  ],

  // ---------------------------------------------------------------------------
  // MINIJUEGOS ARCADE RÁPIDOS
  // ---------------------------------------------------------------------------
  arcade: {
    acentuador: [
      { palabra: "volcan", tilde: true, correcta: "volcán", termina: "-n" },
      { palabra: "tambor", tilde: false, correcta: "tambor", termina: "-r" },
      { palabra: "cafe", tilde: true, correcta: "café", termina: "vocal" },
      { palabra: "cristal", tilde: false, correcta: "cristal", termina: "-l" },
      { palabra: "compas", tilde: true, correcta: "compás", termina: "-s" },
      { palabra: "reloj", tilde: false, correcta: "reloj", termina: "-j" },
      { palabra: "bambu", tilde: true, correcta: "bambú", termina: "vocal" },
      { palabra: "pared", tilde: false, correcta: "pared", termina: "-d" },
      { palabra: "patin", tilde: true, correcta: "patín", termina: "-n" },
      { palabra: "feliz", tilde: false, correcta: "feliz", termina: "-z" },
      { palabra: "autobus", tilde: true, correcta: "autobús", termina: "-s" },
      { palabra: "mantel", tilde: false, correcta: "mantel", termina: "-l" }
    ],
    pronombres: [
      { pronombre: "yo", persona: "1.ª persona", numero: "singular" },
      { pronombre: "vosotros", persona: "2.ª persona", numero: "plural" },
      { pronombre: "ella", persona: "3.ª persona", numero: "singular" },
      { pronombre: "nosotras", persona: "1.ª persona", numero: "plural" },
      { pronombre: "tú", persona: "2.ª persona", numero: "singular" },
      { pronombre: "ellos", persona: "3.ª persona", numero: "plural" },
      { pronombre: "usted", persona: "2.ª persona", numero: "singular" },
      { pronombre: "él", persona: "3.ª persona", numero: "singular" }
    ],
    campoLexico: [
      { palabra: "sartén", categoria: "Sustantivo", campo: "Cocina" },
      { palabra: "hornear", categoria: "Verbo", campo: "Cocina" },
      { palabra: "sabroso", categoria: "Adjetivo", campo: "Cocina" },
      { palabra: "cohete", categoria: "Sustantivo", campo: "Espacio" },
      { palabra: "despegar", categoria: "Verbo", campo: "Espacio" },
      { palabra: "ingrávido", categoria: "Adjetivo", campo: "Espacio" },
      { palabra: "médica", categoria: "Sustantivo", campo: "Salud" },
      { palabra: "curar", categoria: "Verbo", campo: "Salud" },
      { palabra: "dolorido", categoria: "Adjetivo", campo: "Salud" }
    ]
  }
};

// Exponer globalmente
window.TEMA_2_DATA = TEMA_2_DATA;
