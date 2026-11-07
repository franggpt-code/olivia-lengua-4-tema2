// =============================================================================
// LÓGICA DE LA APLICACIÓN · LENGUA 4.º PRIMARIA · TEMA 2
// Entrenador oficial de Olivia · Grazalema-Santillana CLAVES
// =============================================================================

class App {
  constructor() {
    this.currentView = 'home';
    this.stars = parseInt(localStorage.getItem('olivia_lengua_t2_stars') || '0', 10);
    this.currentMissionId = 'mision1';
    this.currentExamModel = 'modelo_b';
    this.examAnswers = {};
    this.expressQuestions = [];
    this.arcadeActive = null;
    this.arcadeScore = 0;
    this.arcadeIndex = 0;

    // Inicializar cuando el DOM esté listo
    document.addEventListener('DOMContentLoaded', () => this.init());
  }

  init() {
    this.updateStarsUI();
    this.renderMissionSelector();
    this.renderMission('mision1');
    this.renderExam();
    this.renderChuleta();
    this.setupTaller();
    this.updateDiploma();

    // Fecha en diploma
    const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    const d = new Date();
    const fechaTexto = `${meses[d.getMonth()]} de ${d.getFullYear()}`;
    const elFecha = document.getElementById('diploma-date');
    if (elFecha) elFecha.textContent = fechaTexto;
  }

  // ---------------------------------------------------------------------------
  // NAVEGACIÓN SPA
  // ---------------------------------------------------------------------------
  navigate(viewId) {
    if (window.soundMgr) window.soundMgr.playClick();
    this.currentView = viewId;

    const views = ['home', 'misiones', 'examen', 'express', 'arcade', 'taller', 'chuleta', 'diploma'];
    views.forEach(v => {
      const el = document.getElementById(`view-${v}`);
      if (el) el.classList.add('hidden');
      const navBtn = document.getElementById(`nav-${v}`);
      if (navBtn) {
        navBtn.classList.remove('text-sky-600', 'bg-sky-50');
      }
    });

    const activeView = document.getElementById(`view-${viewId}`);
    if (activeView) activeView.classList.remove('hidden');

    const activeNav = document.getElementById(`nav-${viewId}`);
    if (activeNav) activeNav.classList.add('text-sky-600', 'bg-sky-50');

    window.scrollTo({ top: 0, behavior: 'smooth' });

    if (viewId === 'express' && this.expressQuestions.length === 0) {
      this.startExpressRound();
    }
  }

  // ---------------------------------------------------------------------------
  // ESTRELLAS Y AUDIO
  // ---------------------------------------------------------------------------
  addStars(n) {
    this.stars += n;
    localStorage.setItem('olivia_lengua_t2_stars', this.stars.toString());
    this.updateStarsUI();
    if (window.soundMgr) window.soundMgr.playBadge();
    this.updateDiploma();
  }

  updateStarsUI() {
    const el = document.getElementById('star-count');
    if (el) el.textContent = this.stars;
  }

  updateDiploma() {
    const el = document.getElementById('diploma-stars');
    if (el) el.textContent = `⭐ ${Math.max(this.stars, 10)} Estrellas`;
  }

  toggleSound() {
    if (window.soundMgr) {
      const enabled = window.soundMgr.toggleSound();
      const btn = document.getElementById('btn-sound');
      if (btn) btn.textContent = enabled ? '🔊' : '🔇';
    }
  }

  toggleVoice() {
    if (window.soundMgr) {
      const enabled = window.soundMgr.toggleVoice();
      const btn = document.getElementById('btn-voice');
      if (btn) btn.textContent = enabled ? '🗣️' : '🤐';
      if (enabled) {
        window.soundMgr.speak("Voz activada. ¡Vamos a por ese diez, Olivia!");
      }
    }
  }

  speakText(text) {
    if (window.soundMgr) {
      window.soundMgr.speak(text);
    }
  }

  // ---------------------------------------------------------------------------
  // MISIONES TEMÁTICAS
  // ---------------------------------------------------------------------------
  renderMissionSelector() {
    const container = document.getElementById('mission-selector-buttons');
    if (!container) return;

    container.innerHTML = TEMA_2_DATA.misiones.map(m => `
      <button onclick="app.startMission('${m.id}')" id="btn-m-${m.id}" class="px-3.5 py-1.5 rounded-xl font-bold text-xs border border-slate-200 transition-all flex items-center gap-1.5 ${m.id === this.currentMissionId ? 'bg-sky-600 text-white shadow-xs border-sky-600' : 'bg-slate-50 text-slate-700 hover:bg-slate-100'}">
        <span>${m.icon}</span>
        <span>${m.badge}</span>
      </button>
    `).join('');
  }

  startMission(missionId) {
    this.currentMissionId = missionId;
    this.renderMissionSelector();
    this.renderMission(missionId);
    this.navigate('misiones');
  }

  renderMission(missionId) {
    const mission = TEMA_2_DATA.misiones.find(m => m.id === missionId);
    const container = document.getElementById('mission-content');
    if (!mission || !container) return;

    let html = `
      <!-- Cabecera de Misión -->
      <div class="card-playful p-6 bg-gradient-to-r ${mission.color} text-white flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <span class="inline-flex items-center gap-1.5 bg-white/25 px-3 py-1 rounded-full text-xs font-black uppercase mb-2">
            ${mission.badge}
          </span>
          <h2 class="text-2xl sm:text-3xl font-black font-display">${mission.title}</h2>
          <p class="text-white/90 text-sm mt-1 max-w-2xl">${mission.description}</p>
        </div>
        <div class="text-5xl opacity-40 select-none">${mission.icon}</div>
      </div>
    `;

    // Si tiene texto principal (Misión 1)
    if (mission.textoPrincipal) {
      html += `
        <div class="card-playful p-6 bg-white border-sky-200">
          <div class="flex items-center justify-between mb-4 border-b border-slate-100 pb-3">
            <div class="flex items-center gap-2">
              <span class="text-2xl">📖</span>
              <h3 class="text-xl font-black text-slate-900">${mission.textoPrincipal.titulo}</h3>
            </div>
            <button onclick="app.speakText(\`${mission.textoPrincipal.cuerpo.replace(/`/g, '')}\`)" class="btn-bouncy px-3 py-1.5 rounded-xl bg-sky-100 hover:bg-sky-200 text-sky-800 text-xs font-bold flex items-center gap-1">
              <span>🗣️ Leer texto</span>
            </button>
          </div>
          <div class="prose max-w-none text-slate-700 text-sm sm:text-base leading-relaxed space-y-3 bg-sky-50/50 p-4 sm:p-6 rounded-2xl border border-sky-100">
            ${mission.textoPrincipal.cuerpo.split('\n\n').map(p => `<p>${p}</p>`).join('')}
          </div>
        </div>
      `;
    }

    // Si tiene regla de oro destacada (Misión 3)
    if (mission.reglaOro) {
      html += `
        <div class="card-playful p-5 bg-amber-50 border-amber-300 flex items-start gap-3">
          <span class="text-3xl">💡</span>
          <div>
            <h4 class="font-black text-amber-900 text-sm uppercase tracking-wide">Regla de Oro para el Examen:</h4>
            <p class="text-amber-950 font-bold text-sm sm:text-base mt-1 leading-snug">${mission.reglaOro}</p>
          </div>
        </div>
      `;
    }

    // Renderizar cada ejercicio de la misión
    html += `<div class="space-y-6">`;
    mission.ejercicios.forEach((ej, idx) => {
      html += this.renderMissionExercise(ej, idx, mission);
    });
    html += `</div>`;

    container.innerHTML = html;
  }

  renderMissionExercise(ej, idx, mission) {
    let content = '';

    if (ej.tipo === 'opcion_multiple') {
      content = `
        <div class="space-y-3 mt-4">
          ${ej.opciones.map((opc, opcIdx) => `
            <div onclick="app.checkMissionOption('${ej.id}', ${opcIdx}, ${ej.correcta}, '${encodeURIComponent(ej.explicacion)}')" id="opt-${ej.id}-${opcIdx}" class="pill-option">
              <span class="w-7 h-7 rounded-full bg-slate-100 text-slate-700 font-bold text-xs flex items-center justify-center">${String.fromCharCode(65 + opcIdx)}</span>
              <span class="text-sm font-semibold text-slate-800">${opc}</span>
            </div>
          `).join('')}
        </div>
      `;
    } else if (ej.tipo === 'seleccion_multiple') {
      content = `
        <div class="space-y-2 mt-4">
          ${ej.opciones.map((opc, opcIdx) => `
            <div onclick="app.toggleMissionMultiSelect('${ej.id}', ${opcIdx})" id="mopt-${ej.id}-${opcIdx}" class="pill-option">
              <span class="w-6 h-6 rounded-md border border-slate-300 flex items-center justify-center text-xs check-icon"></span>
              <span class="text-sm font-semibold text-slate-800">${opc}</span>
            </div>
          `).join('')}
          <div class="pt-3">
            <button onclick="app.checkMissionMultiSelect('${ej.id}', ${JSON.stringify(ej.correctas)}, '${encodeURIComponent(ej.explicacion)}')" class="btn-bouncy px-5 py-2 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs">
              Comprobar Materiales
            </button>
          </div>
        </div>
      `;
    } else if (ej.tipo === 'ordenar') {
      content = `
        <div class="space-y-3 mt-4" id="sort-container-${ej.id}">
          <p class="text-xs text-slate-500 italic">Haz clic en el número de orden que corresponde a cada paso:</p>
          ${ej.pasos.map((p, pIdx) => `
            <div class="flex items-center gap-3 p-3.5 bg-slate-50 rounded-xl border border-slate-200">
              <select onchange="app.checkOrderLive('${ej.id}')" id="sel-${ej.id}-${p.id}" class="p-2 rounded-lg border-2 border-sky-300 bg-white font-black text-sky-800 text-sm">
                <option value="">¿Paso?</option>
                <option value="1">Paso 1.º</option>
                <option value="2">Paso 2.º</option>
                <option value="3">Paso 3.º</option>
                <option value="4">Paso 4.º</option>
              </select>
              <span class="text-sm font-medium text-slate-800">${p.texto}</span>
            </div>
          `).join('')}
          <button onclick="app.checkOrderMission('${ej.id}', '${encodeURIComponent(ej.explicacion)}')" class="btn-bouncy px-5 py-2 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs mt-2">
            Verificar Orden Cronológico
          </button>
        </div>
      `;
    } else if (ej.tipo === 'relacion_temporal') {
      content = `
        <div class="space-y-3 mt-4">
          ${ej.opciones.map((opc, opcIdx) => `
            <div onclick="app.checkMissionOption('${ej.id}', ${opcIdx}, ${ej.correcta}, '${encodeURIComponent(ej.explicacion)}')" id="opt-${ej.id}-${opcIdx}" class="pill-option">
              <span class="w-7 h-7 rounded-full bg-slate-100 text-slate-700 font-bold text-xs flex items-center justify-center">${String.fromCharCode(65 + opcIdx)}</span>
              <span class="text-sm font-semibold text-slate-800">${opc}</span>
            </div>
          `).join('')}
        </div>
      `;
    } else if (ej.tipo === 'analisis_campo') {
      content = `
        <div class="mt-4 space-y-4">
          <div class="p-4 bg-emerald-50 rounded-2xl border border-emerald-200">
            <h4 class="text-xs font-black uppercase text-emerald-800 mb-2">Palabras analizadas:</h4>
            <div class="flex flex-wrap gap-2">
              ${ej.palabras.map(p => `<span class="px-3 py-1 bg-white rounded-xl border border-emerald-200 font-black text-emerald-900 text-sm">${p}</span>`).join('')}
            </div>
          </div>

          <div>
            <p class="font-bold text-sm text-slate-800 mb-2">1. ¿A qué tema común pertenecen?</p>
            <div class="space-y-2">
              ${ej.opcionesTema.map((t, tIdx) => `
                <div onclick="app.checkSubStep('${ej.id}-tema', ${tIdx}, ${ej.correctaTema})" id="opt-${ej.id}-tema-${tIdx}" class="pill-option">
                  <span class="text-xs font-bold">${t}</span>
                </div>
              `).join('')}
            </div>
          </div>

          <div>
            <p class="font-bold text-sm text-slate-800 mb-2">2. ${ej.preguntaRazon}</p>
            <div class="space-y-2">
              ${ej.opcionesRazon.map((r, rIdx) => `
                <div onclick="app.checkSubStep('${ej.id}-razon', ${rIdx}, ${ej.correctaRazon}, '${encodeURIComponent(ej.explicacion)}')" id="opt-${ej.id}-razon-${rIdx}" class="pill-option">
                  <span class="text-xs font-bold">${r}</span>
                </div>
              `).join('')}
            </div>
          </div>
        </div>
      `;
    } else if (ej.tipo === 'ampliar_campo') {
      content = `
        <div class="mt-4 space-y-4">
          <div class="p-3.5 bg-slate-50 rounded-xl border border-slate-200 flex flex-wrap gap-2 items-center">
            <span class="text-xs font-black uppercase text-slate-500">Palabras iniciales:</span>
            ${ej.palabrasIniciales.map(p => `<span class="px-2.5 py-1 bg-sky-100 text-sky-800 rounded-lg font-bold text-xs">${p}</span>`).join('')}
          </div>
          <p class="text-xs font-bold text-slate-600">Haz clic en 4 palabras que SÍ pertenezcan al campo de la cocina:</p>
          <div class="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
            ${ej.palabrasDisponibles.map((p, pIdx) => `
              <div onclick="app.togglePalabraCampo('${ej.id}', ${pIdx}, ${p.pertenece})" id="pcampo-${ej.id}-${pIdx}" class="pill-option justify-between text-xs">
                <span>${p.texto}</span>
                <span class="text-[10px] uppercase font-black opacity-60">${p.cat}</span>
              </div>
            `).join('')}
          </div>
          <div id="feedback-${ej.id}" class="hidden p-3.5 rounded-xl text-xs font-bold mt-2"></div>
        </div>
      `;
    } else if (ej.tipo === 'discriminador_semantico_lexico') {
      content = `
        <div class="mt-4 space-y-4">
          <div class="p-4 bg-sky-50 rounded-xl border border-sky-200">
            <p class="font-bold text-sm text-slate-800 mb-2">${ej.grupoA.nombre}</p>
            <div class="flex gap-2">
              <button onclick="app.checkDiscrim('${ej.id}-a', 'semantico', '${ej.grupoA.tipoCorrecto}')" id="btn-${ej.id}-a-sem" class="pill-option py-1.5 px-3 text-xs font-bold">Es Campo Semántico</button>
              <button onclick="app.checkDiscrim('${ej.id}-a', 'lexico', '${ej.grupoA.tipoCorrecto}')" id="btn-${ej.id}-a-lex" class="pill-option py-1.5 px-3 text-xs font-bold">Es Campo Léxico</button>
            </div>
            <p id="msg-${ej.id}-a" class="hidden text-xs mt-2 font-bold text-emerald-700">${ej.grupoA.justificacion}</p>
          </div>

          <div class="p-4 bg-purple-50 rounded-xl border border-purple-200">
            <p class="font-bold text-sm text-slate-800 mb-2">${ej.grupoB.nombre}</p>
            <div class="flex gap-2">
              <button onclick="app.checkDiscrim('${ej.id}-b', 'semantico', '${ej.grupoB.tipoCorrecto}')" id="btn-${ej.id}-b-sem" class="pill-option py-1.5 px-3 text-xs font-bold">Es Campo Semántico</button>
              <button onclick="app.checkDiscrim('${ej.id}-b', 'lexico', '${ej.grupoB.tipoCorrecto}')" id="btn-${ej.id}-b-lex" class="pill-option py-1.5 px-3 text-xs font-bold">Es Campo Léxico</button>
            </div>
            <p id="msg-${ej.id}-b" class="hidden text-xs mt-2 font-bold text-emerald-700">${ej.grupoB.justificacion}</p>
          </div>
        </div>
      `;
    } else if (ej.tipo === 'caza_intruso') {
      content = `
        <div class="mt-4">
          <p class="text-xs text-slate-500 mb-3">Toca la palabra que NO encaja con las demás:</p>
          <div class="flex flex-wrap gap-2.5">
            ${ej.palabras.map(p => `
              <button onclick="app.checkIntruso('${ej.id}', '${p}', '${ej.intrusa}', '${encodeURIComponent(ej.explicacion)}')" id="btn-intruso-${ej.id}-${p}" class="pill-option text-sm font-bold">
                ${p}
              </button>
            `).join('')}
          </div>
        </div>
      `;
    } else if (ej.tipo === 'clasificar_con_sin_tilde') {
      content = `
        <div class="mt-4 space-y-3">
          <p class="text-xs text-slate-600 font-bold">Selecciona para cada palabra si debe llevar tilde según la regla V-N-S:</p>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-96 overflow-y-auto pr-1">
            ${ej.palabras.map((p, pIdx) => `
              <div class="flex items-center justify-between p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs">
                <span class="font-black text-sm text-slate-900 tracking-wide">${p.palabra}</span>
                <div class="flex gap-1.5" id="group-tilde-${ej.id}-${pIdx}">
                  <button onclick="app.checkTildeDirect('${ej.id}', ${pIdx}, true, ${p.conTilde}, '${p.correctaConTilde}', '${p.terminaEn}')" class="px-2.5 py-1 rounded-lg bg-white border border-slate-300 font-black hover:bg-amber-100 hover:border-amber-400">Con tilde</button>
                  <button onclick="app.checkTildeDirect('${ej.id}', ${pIdx}, false, ${p.conTilde}, '${p.correctaConTilde}', '${p.terminaEn}')" class="px-2.5 py-1 rounded-lg bg-white border border-slate-300 font-black hover:bg-slate-200">Sin tilde</button>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      `;
    } else if (ej.tipo === 'justificar_regla' || ej.tipo === 'trampa_examen') {
      content = `
        <div class="space-y-3 mt-4">
          ${ej.opciones.map((opc, opcIdx) => `
            <div onclick="app.checkMissionOption('${ej.id}', ${opcIdx}, ${ej.correcta}, '${encodeURIComponent(ej.explicacion)}')" id="opt-${ej.id}-${opcIdx}" class="pill-option">
              <span class="w-7 h-7 rounded-full bg-slate-100 text-slate-700 font-bold text-xs flex items-center justify-center">${String.fromCharCode(65 + opcIdx)}</span>
              <span class="text-sm font-semibold text-slate-800">${opc}</span>
            </div>
          `).join('')}
        </div>
      `;
    } else if (ej.tipo === 'analisis_pronombre') {
      content = `
        <div class="mt-4 space-y-4">
          <div class="p-4 bg-purple-50 rounded-xl border border-purple-200 text-base font-bold text-slate-900">
            ${ej.oracion}
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label class="block text-xs font-black uppercase text-slate-600 mb-1">Persona gramatical:</label>
              <select id="sel-persona-${ej.id}" class="w-full p-2.5 rounded-xl border border-slate-300 font-bold text-sm bg-white">
                <option value="">¿Qué persona es?</option>
                <option value="1.ª persona">1.ª persona (quien habla)</option>
                <option value="2.ª persona">2.ª persona (a quien se habla)</option>
                <option value="3.ª persona">3.ª persona (de quien se habla)</option>
              </select>
            </div>
            <div>
              <label class="block text-xs font-black uppercase text-slate-600 mb-1">Número gramatical:</label>
              <select id="sel-numero-${ej.id}" class="w-full p-2.5 rounded-xl border border-slate-300 font-bold text-sm bg-white">
                <option value="">¿Qué número es?</option>
                <option value="singular">Singular (uno solo)</option>
                <option value="plural">Plural (varios)</option>
              </select>
            </div>
          </div>
          <button onclick="app.checkPronombreAnalisis('${ej.id}', '${ej.persona}', '${ej.numero}', '${encodeURIComponent(ej.explicacion)}')" class="btn-bouncy px-5 py-2 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs">
            Verificar Análisis Morfológico
          </button>
        </div>
      `;
    } else if (ej.tipo === 'sustitucion_sujeto') {
      content = `
        <div class="mt-4 space-y-3">
          ${ej.casos.map((c, cIdx) => `
            <div class="p-3.5 bg-slate-50 rounded-xl border border-slate-200">
              <p class="text-sm text-slate-800 mb-2">
                <span class="underline decoration-purple-500 decoration-2 font-black">${c.sujeto}</span> ${c.resto}
              </p>
              <div class="flex gap-2" id="group-sust-${ej.id}-${cIdx}">
                ${c.opciones.map(opc => `
                  <button onclick="app.checkSustitucion('${ej.id}', ${cIdx}, '${opc}', '${c.opcionCorrecta}')" class="pill-option py-1 px-3 text-xs font-black">
                    ${opc}
                  </button>
                `).join('')}
              </div>
            </div>
          `).join('')}
        </div>
      `;
    } else if (ej.tipo === 'completar_huecos') {
      content = `
        <div class="mt-4 space-y-3">
          ${ej.oraciones.map((o, oIdx) => `
            <div class="p-3.5 bg-slate-50 rounded-xl border border-slate-200 flex flex-col sm:flex-row items-start sm:items-center gap-2">
              <span class="text-xs text-purple-700 font-bold">[${o.pista}]:</span>
              <div class="flex items-center gap-2 flex-1">
                ${o.textoAntes ? `<span>${o.textoAntes}</span>` : ''}
                <input type="text" id="input-cloze-${ej.id}-${oIdx}" placeholder="Pronombre..." class="w-32 p-1.5 rounded-lg border-2 border-purple-300 font-black text-sm text-center">
                <span>${o.textoDespues}</span>
              </div>
              <button onclick="app.checkCloze('${ej.id}', ${oIdx}, '${o.correcta}')" class="btn-bouncy px-3 py-1 rounded-lg bg-purple-600 text-white font-bold text-xs">
                Comprobar
              </button>
            </div>
          `).join('')}
        </div>
      `;
    }

    return `
      <div class="card-playful p-5 sm:p-6 bg-white border-slate-200" id="card-${ej.id}">
        <div class="flex items-start justify-between gap-3">
          <div>
            <span class="badge-tag bg-slate-100 text-slate-700">Ejercicio ${idx + 1}</span>
            <h3 class="text-base sm:text-lg font-bold text-slate-900 mt-1">${ej.pregunta || ej.enunciado}</h3>
          </div>
          <button onclick="app.speakText(\`${(ej.pregunta || ej.enunciado || '').replace(/`/g, '')}\`)" class="p-2 rounded-xl text-slate-400 hover:text-slate-600 hover:bg-slate-50" title="Escuchar">
            🗣️
          </button>
        </div>

        ${content}

        <!-- Caja de Explicación y Feedback -->
        <div id="feedback-${ej.id}" class="hidden mt-4 p-4 rounded-xl border text-xs sm:text-sm leading-relaxed"></div>
      </div>
    `;
  }

  // ---------------------------------------------------------------------------
  // INTERACTIVIDAD DE MISIONES (CHECKERS)
  // ---------------------------------------------------------------------------
  checkMissionOption(ejId, selectedIdx, correctIdx, encExp) {
    const isCorrect = selectedIdx === correctIdx;
    const card = document.getElementById(`card-${ejId}`);
    const feedbackBox = document.getElementById(`feedback-${ejId}`);
    const explanation = decodeURIComponent(encExp);

    // Sonido
    if (isCorrect) {
      if (window.soundMgr) window.soundMgr.playCorrect();
      this.addStars(1);
    } else {
      if (window.soundMgr) window.soundMgr.playError();
    }

    // Estilos de pills
    const allPills = card.querySelectorAll('.pill-option');
    allPills.forEach((p, idx) => {
      p.classList.remove('selected', 'correct', 'incorrect');
      if (idx === correctIdx) {
        p.classList.add('correct');
      } else if (idx === selectedIdx && !isCorrect) {
        p.classList.add('incorrect');
      }
    });

    // Mostrar feedback
    if (feedbackBox) {
      feedbackBox.classList.remove('hidden', 'bg-emerald-50', 'border-emerald-200', 'text-emerald-900', 'bg-rose-50', 'border-rose-200', 'text-rose-900');
      if (isCorrect) {
        feedbackBox.classList.add('bg-emerald-50', 'border-emerald-200', 'text-emerald-900');
        feedbackBox.innerHTML = `<strong>¡Fantástico, Olivia! ⭐</strong> ${explanation}`;
      } else {
        feedbackBox.classList.add('bg-rose-50', 'border-rose-200', 'text-rose-900');
        feedbackBox.innerHTML = `<strong>¡Cuidado!</strong> Fíjate bien: la respuesta correcta era la opción ${String.fromCharCode(65 + correctIdx)}. ${explanation}`;
      }
    }
  }

  toggleMissionMultiSelect(ejId, opcIdx) {
    if (window.soundMgr) window.soundMgr.playClick();
    const pill = document.getElementById(`mopt-${ejId}-${opcIdx}`);
    if (pill) pill.classList.toggle('selected');
  }

  checkMissionMultiSelect(ejId, correctas, encExp) {
    const explanation = decodeURIComponent(encExp);
    const feedbackBox = document.getElementById(`feedback-${ejId}`);
    let allRight = true;

    for (let i = 0; i < 5; i++) {
      const pill = document.getElementById(`mopt-${ejId}-${i}`);
      if (!pill) continue;
      const isSelected = pill.classList.contains('selected');
      const shouldBe = correctas.includes(i);

      if (isSelected === shouldBe) {
        if (shouldBe) pill.classList.add('correct');
      } else {
        allRight = false;
        pill.classList.add(isSelected ? 'incorrect' : 'correct');
      }
    }

    if (allRight) {
      if (window.soundMgr) window.soundMgr.playCorrect();
      this.addStars(2);
      if (feedbackBox) {
        feedbackBox.className = 'mt-4 p-4 rounded-xl border text-xs sm:text-sm bg-emerald-50 border-emerald-200 text-emerald-900';
        feedbackBox.innerHTML = `<strong>¡Perfecto! Has identificado todos los materiales válidos.</strong> ${explanation}`;
      }
    } else {
      if (window.soundMgr) window.soundMgr.playError();
      if (feedbackBox) {
        feedbackBox.className = 'mt-4 p-4 rounded-xl border text-xs sm:text-sm bg-rose-50 border-rose-200 text-rose-900';
        feedbackBox.innerHTML = `<strong>Revisa la selección:</strong> Recuerda que nunca se usan químicos ni pinturas fuertes. ${explanation}`;
      }
    }
    feedbackBox.classList.remove('hidden');
  }

  checkOrderMission(ejId, encExp) {
    const s1 = document.getElementById(`sel-${ejId}-p1`).value;
    const s2 = document.getElementById(`sel-${ejId}-p2`).value;
    const s3 = document.getElementById(`sel-${ejId}-p3`).value;
    const s4 = document.getElementById(`sel-${ejId}-p4`).value;
    const feedbackBox = document.getElementById(`feedback-${ejId}`);
    const explanation = decodeURIComponent(encExp);

    if (s1 === '1' && s2 === '2' && s3 === '3' && s4 === '4') {
      if (window.soundMgr) window.soundMgr.playCorrect();
      this.addStars(2);
      if (feedbackBox) {
        feedbackBox.className = 'mt-4 p-4 rounded-xl border text-xs sm:text-sm bg-emerald-50 border-emerald-200 text-emerald-900';
        feedbackBox.innerHTML = `<strong>¡Secuencia cronológica impecable! ⭐</strong> ${explanation}`;
      }
    } else {
      if (window.soundMgr) window.soundMgr.playError();
      if (feedbackBox) {
        feedbackBox.className = 'mt-4 p-4 rounded-xl border text-xs sm:text-sm bg-rose-50 border-rose-200 text-rose-900';
        feedbackBox.innerHTML = `<strong>El orden no es del todo exacto.</strong> Sigue los conectores: 1.º Conseguir y lijar la caja; 2.º Hacer orificio y cuerda; 3.º Rellenar con cañas y piñas; 4.º Colgar en el árbol.`;
      }
    }
    feedbackBox.classList.remove('hidden');
  }

  checkSubStep(id, idx, correctIdx, encExp) {
    const isCorrect = idx === correctIdx;
    const opt = document.getElementById(`opt-${id}-${idx}`);
    if (isCorrect) {
      if (window.soundMgr) window.soundMgr.playCorrect();
      opt.classList.add('correct');
      this.addStars(1);
    } else {
      if (window.soundMgr) window.soundMgr.playError();
      opt.classList.add('incorrect');
    }
  }

  togglePalabraCampo(ejId, idx, pertenece) {
    const pill = document.getElementById(`pcampo-${ejId}-${idx}`);
    const feedback = document.getElementById(`feedback-${ejId}`);
    if (!pill) return;

    if (pertenece) {
      pill.classList.add('correct');
      if (window.soundMgr) window.soundMgr.playCorrect();
      this.addStars(1);
    } else {
      pill.classList.add('incorrect');
      if (window.soundMgr) window.soundMgr.playError();
      if (feedback) {
        feedback.className = 'p-3.5 rounded-xl text-xs font-bold mt-2 bg-rose-50 border border-rose-200 text-rose-900';
        feedback.textContent = 'Esa palabra no pertenece a la cocina o repostería.';
        feedback.classList.remove('hidden');
      }
    }
  }

  checkDiscrim(id, chosen, correct) {
    const isCorrect = chosen === correct;
    const msg = document.getElementById(`msg-${id}`);
    const btnSem = document.getElementById(`btn-${id}-sem`);
    const btnLex = document.getElementById(`btn-${id}-lex`);

    if (isCorrect) {
      if (window.soundMgr) window.soundMgr.playCorrect();
      this.addStars(1);
      if (chosen === 'semantico') btnSem.classList.add('correct');
      if (chosen === 'lexico') btnLex.classList.add('correct');
    } else {
      if (window.soundMgr) window.soundMgr.playError();
      if (chosen === 'semantico') btnSem.classList.add('incorrect');
      if (chosen === 'lexico') btnLex.classList.add('incorrect');
    }
    if (msg) msg.classList.remove('hidden');
  }

  checkIntruso(ejId, palabra, intrusa, encExp) {
    const isCorrect = palabra === intrusa;
    const btn = document.getElementById(`btn-intruso-${ejId}-${palabra}`);
    const feedbackBox = document.getElementById(`feedback-${ejId}`);
    const explanation = decodeURIComponent(encExp);

    if (isCorrect) {
      if (window.soundMgr) window.soundMgr.playCorrect();
      btn.classList.add('correct');
      this.addStars(1);
      if (feedbackBox) {
        feedbackBox.className = 'mt-4 p-4 rounded-xl border text-xs sm:text-sm bg-emerald-50 border-emerald-200 text-emerald-900';
        feedbackBox.innerHTML = `<strong>¡Cazado el intruso! ⭐</strong> ${explanation}`;
      }
    } else {
      if (window.soundMgr) window.soundMgr.playError();
      btn.classList.add('incorrect');
      if (feedbackBox) {
        feedbackBox.className = 'mt-4 p-4 rounded-xl border text-xs sm:text-sm bg-rose-50 border-rose-200 text-rose-900';
        feedbackBox.innerHTML = `«${palabra}» sí pertenece al mundo de la música. ¡Sigue buscando el intruso!`;
      }
    }
    feedbackBox.classList.remove('hidden');
  }

  checkTildeDirect(ejId, pIdx, userChoice, correctChoice, correctaPalabra, terminaEn) {
    const isCorrect = userChoice === correctChoice;
    const group = document.getElementById(`group-tilde-${ejId}-${pIdx}`);
    if (isCorrect) {
      if (window.soundMgr) window.soundMgr.playCorrect();
      this.addStars(1);
      group.innerHTML = `<span class="px-3 py-1 bg-emerald-100 text-emerald-800 font-black rounded-lg text-xs">✅ ${correctaPalabra} (${terminaEn})</span>`;
    } else {
      if (window.soundMgr) window.soundMgr.playError();
      group.innerHTML = `<span class="px-3 py-1 bg-rose-100 text-rose-800 font-black rounded-lg text-xs">❌ Debe ser: ${correctaPalabra} (${terminaEn})</span>`;
    }
  }

  checkPronombreAnalisis(ejId, corrPersona, corrNumero, encExp) {
    const pVal = document.getElementById(`sel-persona-${ejId}`).value;
    const nVal = document.getElementById(`sel-numero-${ejId}`).value;
    const feedbackBox = document.getElementById(`feedback-${ejId}`);
    const explanation = decodeURIComponent(encExp);

    if (pVal === corrPersona && nVal === corrNumero) {
      if (window.soundMgr) window.soundMgr.playCorrect();
      this.addStars(2);
      if (feedbackBox) {
        feedbackBox.className = 'mt-4 p-4 rounded-xl border text-xs sm:text-sm bg-emerald-50 border-emerald-200 text-emerald-900';
        feedbackBox.innerHTML = `<strong>¡Análisis morfológico perfecto! ⭐</strong> ${explanation}`;
      }
    } else {
      if (window.soundMgr) window.soundMgr.playError();
      if (feedbackBox) {
        feedbackBox.className = 'mt-4 p-4 rounded-xl border text-xs sm:text-sm bg-rose-50 border-rose-200 text-rose-900';
        feedbackBox.innerHTML = `<strong>Revisa el análisis:</strong> La respuesta exacta es <strong>${corrPersona} del ${corrNumero}</strong>. ${explanation}`;
      }
    }
    feedbackBox.classList.remove('hidden');
  }

  checkSustitucion(ejId, cIdx, userChoice, correctChoice) {
    const isCorrect = userChoice === correctChoice;
    const group = document.getElementById(`group-sust-${ejId}-${cIdx}`);
    if (isCorrect) {
      if (window.soundMgr) window.soundMgr.playCorrect();
      this.addStars(1);
      group.innerHTML = `<span class="px-3 py-1 bg-emerald-100 text-emerald-800 font-black rounded-lg text-xs">✅ ¡Correcto! Sustituye por «${correctChoice}»</span>`;
    } else {
      if (window.soundMgr) window.soundMgr.playError();
      group.innerHTML = `<span class="px-3 py-1 bg-rose-100 text-rose-800 font-black rounded-lg text-xs">❌ Lo correcto es «${correctChoice}»</span>`;
    }
  }

  checkCloze(ejId, oIdx, correctWord) {
    const input = document.getElementById(`input-cloze-${ejId}-${oIdx}`);
    const val = input.value.trim().toLowerCase();
    const target = correctWord.toLowerCase();

    if (val === target) {
      if (window.soundMgr) window.soundMgr.playCorrect();
      this.addStars(1);
      input.className = 'w-32 p-1.5 rounded-lg border-2 border-emerald-500 bg-emerald-50 text-emerald-900 font-black text-sm text-center';
    } else {
      if (window.soundMgr) window.soundMgr.playError();
      input.className = 'w-32 p-1.5 rounded-lg border-2 border-rose-500 bg-rose-50 text-rose-900 font-black text-sm text-center';
      input.value = correctWord;
    }
  }

  // ---------------------------------------------------------------------------
  // SIMULACRO DE EXAMEN OFICIAL
  // ---------------------------------------------------------------------------
  setExamModel(modelId) {
    this.currentExamModel = modelId;
    const btnB = document.getElementById('btn-model-b');
    const btnA = document.getElementById('btn-model-a');

    if (modelId === 'modelo_b') {
      btnB.className = 'px-3 py-1.5 rounded-lg bg-sky-600 text-white shadow-xs';
      btnA.className = 'px-3 py-1.5 rounded-lg text-slate-600 hover:text-slate-900';
    } else {
      btnA.className = 'px-3 py-1.5 rounded-lg bg-sky-600 text-white shadow-xs';
      btnB.className = 'px-3 py-1.5 rounded-lg text-slate-600 hover:text-slate-900';
    }

    this.renderExam();
  }

  renderExam() {
    const model = TEMA_2_DATA.simulacros.find(m => m.id === this.currentExamModel);
    const container = document.getElementById('exam-container');
    const resultCard = document.getElementById('exam-result-card');
    if (!model || !container) return;

    this.examAnswers = {};
    if (resultCard) resultCard.classList.add('hidden');

    container.innerHTML = model.preguntas.map((p, pIdx) => `
      <div class="card-playful p-5 sm:p-6 bg-white border-slate-200" id="exam-card-${p.id}">
        <div class="flex items-center justify-between gap-3 mb-3">
          <div class="flex items-center gap-2">
            <span class="badge-tag bg-sky-100 text-sky-800">${p.bloque}</span>
            <span class="text-xs font-bold text-slate-400">Pregunta ${pIdx + 1} (${p.puntos} pt)</span>
          </div>
          <button onclick="app.speakText(\`${p.enunciado.replace(/`/g, '')}\`)" class="text-slate-400 hover:text-slate-600">
            🗣️
          </button>
        </div>

        <h4 class="text-base font-bold text-slate-900 mb-3">${p.enunciado}</h4>

        <div class="space-y-2.5">
          ${p.opciones.map((opc, opcIdx) => `
            <div onclick="app.selectExamAnswer('${p.id}', ${opcIdx})" id="exopt-${p.id}-${opcIdx}" class="pill-option text-sm">
              <span class="w-6 h-6 rounded-full bg-slate-100 font-bold text-xs flex items-center justify-center">${String.fromCharCode(65 + opcIdx)}</span>
              <span>${opc}</span>
            </div>
          `).join('')}
        </div>

        <!-- Feedback tras entrega -->
        <div id="exfeedback-${p.id}" class="hidden mt-3 p-3.5 rounded-xl text-xs sm:text-sm font-medium"></div>
      </div>
    `).join('');
  }

  selectExamAnswer(qId, opcIdx) {
    if (window.soundMgr) window.soundMgr.playClick();
    this.examAnswers[qId] = opcIdx;

    const card = document.getElementById(`exam-card-${qId}`);
    card.querySelectorAll('.pill-option').forEach((pill, idx) => {
      pill.classList.remove('selected');
      if (idx === opcIdx) pill.classList.add('selected');
    });
  }

  gradeExam() {
    const model = TEMA_2_DATA.simulacros.find(m => m.id === this.currentExamModel);
    if (!model) return;

    let totalPoints = 0;
    let earnedPoints = 0;

    model.preguntas.forEach(p => {
      totalPoints += p.puntos;
      const userAns = this.examAnswers[p.id];
      const isCorrect = userAns === p.correcta;
      const feedback = document.getElementById(`exfeedback-${p.id}`);
      const card = document.getElementById(`exam-card-${p.id}`);

      card.querySelectorAll('.pill-option').forEach((pill, idx) => {
        pill.classList.remove('selected', 'correct', 'incorrect');
        if (idx === p.correcta) pill.classList.add('correct');
        else if (idx === userAns && !isCorrect) pill.classList.add('incorrect');
      });

      if (isCorrect) {
        earnedPoints += p.puntos;
        if (feedback) {
          feedback.className = 'mt-3 p-3.5 rounded-xl text-xs sm:text-sm bg-emerald-50 text-emerald-900 border border-emerald-200';
          feedback.innerHTML = `<strong>✅ ¡Respuesta Perfecta!</strong> ${p.solucion}`;
        }
      } else {
        if (feedback) {
          feedback.className = 'mt-3 p-3.5 rounded-xl text-xs sm:text-sm bg-rose-50 text-rose-900 border border-rose-200';
          feedback.innerHTML = `<strong>❌ Solución oficial:</strong> ${p.solucion}`;
        }
      }
      if (feedback) feedback.classList.remove('hidden');
    });

    const notaSobre10 = ((earnedPoints / totalPoints) * 10).toFixed(1);
    const resultCard = document.getElementById('exam-result-card');

    if (earnedPoints >= totalPoints * 0.8) {
      if (window.soundMgr) window.soundMgr.playSuccess();
      if (window.confetti) {
        window.confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
      }
      this.addStars(10);
    } else {
      if (window.soundMgr) window.soundMgr.playBadge();
      this.addStars(3);
    }

    if (resultCard) {
      resultCard.classList.remove('hidden');
      resultCard.innerHTML = `
        <div class="text-center max-w-xl mx-auto space-y-4">
          <div class="text-6xl">${earnedPoints >= 8 ? '🎉' : '👏'}</div>
          <span class="inline-block bg-sky-100 text-sky-800 text-xs font-black uppercase px-3 py-1 rounded-full">Resultado del Examen Oficial</span>
          <h3 class="text-3xl font-black text-slate-900">
            ¡Has obtenido un <span class="text-sky-600">${notaSobre10}</span> sobre 10!
          </h3>
          <p class="text-slate-600 text-sm leading-relaxed">
            ${earnedPoints >= 9 
              ? '¡Extraordinario, Olivia! Dominas a la perfección el texto instructivo, el campo léxico, las agudas y los pronombres. ¡Vas preparadísima para sacar matrícula de honor!'
              : '¡Buen trabajo! Revisa las preguntas con el marco rojo para repasar la regla exacta antes del examen.'}
          </p>
          <div class="pt-2 flex justify-center gap-3">
            <button onclick="window.scrollTo({top: 0, behavior: 'smooth'})" class="btn-bouncy px-6 py-2.5 rounded-xl bg-sky-600 text-white font-bold text-xs">
              Revisar Preguntas del Examen
            </button>
            <button onclick="app.navigate('diploma')" class="btn-bouncy px-6 py-2.5 rounded-xl bg-amber-400 text-slate-900 font-black text-xs">
              Ver Mi Diploma de Honor 🎓
            </button>
          </div>
        </div>
      `;
      resultCard.scrollIntoView({ behavior: 'smooth' });
    }
  }

  // ---------------------------------------------------------------------------
  // DESAFÍO EXPRESS (TEST RÁPIDO INFINITO)
  // ---------------------------------------------------------------------------
  startExpressRound() {
    if (window.soundMgr) window.soundMgr.playClick();
    const all = [...TEMA_2_DATA.bancoExpress];
    // Mezclar aleatoriamente
    all.sort(() => 0.5 - Math.random());
    this.expressQuestions = all.slice(0, 10);

    const container = document.getElementById('express-container');
    if (!container) return;

    container.innerHTML = this.expressQuestions.map((q, qIdx) => `
      <div class="card-playful p-5 bg-white border-slate-200" id="expcard-${q.id}">
        <div class="flex items-center justify-between mb-2">
          <span class="badge-tag bg-sky-100 text-sky-800">${q.categoria}</span>
          <span class="text-xs font-bold text-slate-400">Pregunta ${qIdx + 1} de 10</span>
        </div>
        <h4 class="text-base font-bold text-slate-900 mb-3">${q.pregunta}</h4>
        <div class="space-y-2">
          ${q.opciones.map((opc, opcIdx) => `
            <div onclick="app.checkExpressAnswer('${q.id}', ${opcIdx}, ${q.correcta}, '${encodeURIComponent(q.explicacion)}')" id="expopt-${q.id}-${opcIdx}" class="pill-option text-sm">
              <span class="w-6 h-6 rounded-full bg-slate-100 text-slate-700 font-bold text-xs flex items-center justify-center">${String.fromCharCode(65 + opcIdx)}</span>
              <span>${opc}</span>
            </div>
          `).join('')}
        </div>
        <div id="expfeed-${q.id}" class="hidden mt-3 p-3 rounded-xl text-xs font-semibold"></div>
      </div>
    `).join('');
  }

  checkExpressAnswer(qId, selectedIdx, correctIdx, encExp) {
    const isCorrect = selectedIdx === correctIdx;
    const card = document.getElementById(`expcard-${qId}`);
    const feed = document.getElementById(`expfeed-${qId}`);
    const exp = decodeURIComponent(encExp);

    card.querySelectorAll('.pill-option').forEach((pill, idx) => {
      pill.classList.remove('selected', 'correct', 'incorrect');
      if (idx === correctIdx) pill.classList.add('correct');
      else if (idx === selectedIdx && !isCorrect) pill.classList.add('incorrect');
    });

    if (isCorrect) {
      if (window.soundMgr) window.soundMgr.playCorrect();
      this.addStars(1);
      if (feed) {
        feed.className = 'mt-3 p-3 rounded-xl text-xs bg-emerald-50 text-emerald-900 border border-emerald-200';
        feed.innerHTML = `<strong>¡Bien hecho! ⭐</strong> ${exp}`;
      }
    } else {
      if (window.soundMgr) window.soundMgr.playError();
      if (feed) {
        feed.className = 'mt-3 p-3 rounded-xl text-xs bg-rose-50 text-rose-900 border border-rose-200';
        feed.innerHTML = `<strong>Atención:</strong> ${exp}`;
      }
    }
    if (feed) feed.classList.remove('hidden');
  }

  // ---------------------------------------------------------------------------
  // ARCADE MINIJUEGOS
  // ---------------------------------------------------------------------------
  startArcade(gameType) {
    if (window.soundMgr) window.soundMgr.playClick();
    this.arcadeActive = gameType;
    this.arcadeScore = 0;
    this.arcadeIndex = 0;

    const playArea = document.getElementById('arcade-play-area');
    if (!playArea) return;
    playArea.classList.remove('hidden');

    this.renderNextArcadeTurn();
    playArea.scrollIntoView({ behavior: 'smooth' });
  }

  renderNextArcadeTurn() {
    const playArea = document.getElementById('arcade-play-area');
    if (!playArea) return;

    if (this.arcadeActive === 'acentuador') {
      const items = TEMA_2_DATA.arcade.acentuador;
      if (this.arcadeIndex >= items.length) {
        this.finishArcade();
        return;
      }
      const item = items[this.arcadeIndex];

      playArea.innerHTML = `
        <div class="card-playful p-8 bg-gradient-to-br from-amber-50 to-orange-50 border-amber-300 text-center space-y-6">
          <div class="flex justify-between items-center text-xs font-black text-amber-800">
            <span>⚡ AGUDA ALERTA</span>
            <span>Ronda ${this.arcadeIndex + 1} de ${items.length} | Aciertos: ${this.arcadeScore}</span>
          </div>

          <div>
            <p class="text-xs uppercase font-extrabold text-slate-500 mb-2">¿Debe llevar tilde gráfica según la regla V-N-S?</p>
            <div class="text-4xl sm:text-5xl font-black text-slate-900 tracking-wider font-display py-4 bg-white rounded-2xl border-2 border-amber-200 shadow-sm max-w-sm mx-auto">
              ${item.palabra}
            </div>
          </div>

          <div class="flex justify-center gap-4 max-w-sm mx-auto">
            <button onclick="app.answerArcadeAcentuador(true, ${item.tilde}, '${item.correcta}', '${item.termina}')" class="btn-bouncy flex-1 py-4 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-white font-black text-base">
              ¡LLEVA TILDE!
            </button>
            <button onclick="app.answerArcadeAcentuador(false, ${item.tilde}, '${item.correcta}', '${item.termina}')" class="btn-bouncy flex-1 py-4 rounded-2xl bg-rose-500 hover:bg-rose-400 text-white font-black text-base">
              ¡NO LLEVA!
            </button>
          </div>

          <div id="arcade-feedback" class="h-6 text-sm font-bold"></div>
        </div>
      `;
    } else if (this.arcadeActive === 'pronombres') {
      const items = TEMA_2_DATA.arcade.pronombres;
      if (this.arcadeIndex >= items.length) {
        this.finishArcade();
        return;
      }
      const item = items[this.arcadeIndex];

      playArea.innerHTML = `
        <div class="card-playful p-8 bg-gradient-to-br from-purple-50 to-indigo-50 border-purple-300 text-center space-y-6">
          <div class="flex justify-between items-center text-xs font-black text-purple-800">
            <span>🦸‍♀️ RULETA DE PRONOMBRES</span>
            <span>Ronda ${this.arcadeIndex + 1} de ${items.length} | Aciertos: ${this.arcadeScore}</span>
          </div>

          <div>
            <p class="text-xs uppercase font-extrabold text-slate-500 mb-2">Identifica la persona gramatical de este pronombre:</p>
            <div class="text-4xl sm:text-5xl font-black text-purple-900 tracking-wider font-display py-4 bg-white rounded-2xl border-2 border-purple-200 shadow-sm max-w-sm mx-auto">
              ${item.pronombre}
            </div>
          </div>

          <div class="grid grid-cols-3 gap-3 max-w-md mx-auto">
            <button onclick="app.answerArcadePronombre('1.ª persona', '${item.persona}')" class="btn-bouncy py-3 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-black text-sm">
              1.ª Persona
            </button>
            <button onclick="app.answerArcadePronombre('2.ª persona', '${item.persona}')" class="btn-bouncy py-3 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-black text-sm">
              2.ª Persona
            </button>
            <button onclick="app.answerArcadePronombre('3.ª persona', '${item.persona}')" class="btn-bouncy py-3 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-black text-sm">
              3.ª Persona
            </button>
          </div>

          <div id="arcade-feedback" class="h-6 text-sm font-bold"></div>
        </div>
      `;
    } else if (this.arcadeActive === 'campoLexico') {
      const items = TEMA_2_DATA.arcade.campoLexico;
      if (this.arcadeIndex >= items.length) {
        this.finishArcade();
        return;
      }
      const item = items[this.arcadeIndex];

      playArea.innerHTML = `
        <div class="card-playful p-8 bg-gradient-to-br from-emerald-50 to-teal-50 border-emerald-300 text-center space-y-6">
          <div class="flex justify-between items-center text-xs font-black text-emerald-800">
            <span>🌿 CAMPO LÉXICO MATCH (Área: ${item.campo})</span>
            <span>Ronda ${this.arcadeIndex + 1} de ${items.length} | Aciertos: ${this.arcadeScore}</span>
          </div>

          <div>
            <p class="text-xs uppercase font-extrabold text-slate-500 mb-2">¿A qué categoría gramatical pertenece?</p>
            <div class="text-4xl sm:text-5xl font-black text-emerald-900 tracking-wider font-display py-4 bg-white rounded-2xl border-2 border-emerald-200 shadow-sm max-w-sm mx-auto">
              ${item.palabra}
            </div>
          </div>

          <div class="grid grid-cols-3 gap-3 max-w-md mx-auto">
            <button onclick="app.answerArcadeCat('Sustantivo', '${item.categoria}')" class="btn-bouncy py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-black text-sm">
              Sustantivo
            </button>
            <button onclick="app.answerArcadeCat('Verbo', '${item.categoria}')" class="btn-bouncy py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-black text-sm">
              Verbo
            </button>
            <button onclick="app.answerArcadeCat('Adjetivo', '${item.categoria}')" class="btn-bouncy py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-black text-sm">
              Adjetivo
            </button>
          </div>

          <div id="arcade-feedback" class="h-6 text-sm font-bold"></div>
        </div>
      `;
    }
  }

  answerArcadeAcentuador(userTilde, correctTilde, palabra, termina) {
    const isCorrect = userTilde === correctTilde;
    const fb = document.getElementById('arcade-feedback');

    if (isCorrect) {
      if (window.soundMgr) window.soundMgr.playCorrect();
      this.arcadeScore++;
      this.addStars(1);
      fb.className = 'text-emerald-700 font-bold';
      fb.textContent = `¡Correcto! ${palabra} (termina en ${termina}).`;
    } else {
      if (window.soundMgr) window.soundMgr.playError();
      fb.className = 'text-rose-700 font-bold';
      fb.textContent = `¡Fallo! Debe ser ${palabra} (termina en ${termina}).`;
    }

    setTimeout(() => {
      this.arcadeIndex++;
      this.renderNextArcadeTurn();
    }, 900);
  }

  answerArcadePronombre(userP, correctP) {
    const isCorrect = userP === correctP;
    const fb = document.getElementById('arcade-feedback');

    if (isCorrect) {
      if (window.soundMgr) window.soundMgr.playCorrect();
      this.arcadeScore++;
      this.addStars(1);
      fb.className = 'text-purple-700 font-bold';
      fb.textContent = `¡Muy bien! Es ${correctP}.`;
    } else {
      if (window.soundMgr) window.soundMgr.playError();
      fb.className = 'text-rose-700 font-bold';
      fb.textContent = `¡Cuidado! Era ${correctP}.`;
    }

    setTimeout(() => {
      this.arcadeIndex++;
      this.renderNextArcadeTurn();
    }, 900);
  }

  answerArcadeCat(userCat, correctCat) {
    const isCorrect = userCat === correctCat;
    const fb = document.getElementById('arcade-feedback');

    if (isCorrect) {
      if (window.soundMgr) window.soundMgr.playCorrect();
      this.arcadeScore++;
      this.addStars(1);
      fb.className = 'text-emerald-700 font-bold';
      fb.textContent = `¡Genial! Es un ${correctCat}.`;
    } else {
      if (window.soundMgr) window.soundMgr.playError();
      fb.className = 'text-rose-700 font-bold';
      fb.textContent = `¡Ojo! Es un ${correctCat}.`;
    }

    setTimeout(() => {
      this.arcadeIndex++;
      this.renderNextArcadeTurn();
    }, 900);
  }

  finishArcade() {
    const playArea = document.getElementById('arcade-play-area');
    if (!playArea) return;

    if (window.soundMgr) window.soundMgr.playSuccess();
    if (window.confetti) {
      window.confetti({ particleCount: 70, spread: 60 });
    }

    playArea.innerHTML = `
      <div class="card-playful p-8 bg-white text-center space-y-4">
        <div class="text-5xl">🏆</div>
        <h3 class="text-2xl font-black text-slate-900">¡Partida Completada!</h3>
        <p class="text-slate-600 text-sm">Has conseguido <span class="font-black text-sky-600">${this.arcadeScore}</span> aciertos en este minijuego.</p>
        <button onclick="app.startArcade('${this.arcadeActive}')" class="btn-bouncy px-6 py-2.5 rounded-xl bg-sky-600 text-white font-bold text-xs">
          Jugar Otra Partida
        </button>
      </div>
    `;
  }

  // ---------------------------------------------------------------------------
  // TALLER DE NOTAS DE AGRADECIMIENTO
  // ---------------------------------------------------------------------------
  setupTaller() {
    this.loadTallerCase('caso1');
  }

  loadTallerCase(caseId) {
    const sel = document.getElementById('taller-caso-select');
    if (sel) sel.value = caseId;

    const caso = TEMA_2_DATA.misiones.find(m => m.id === 'mision5').casosPractica.find(c => c.id === caseId);

    const elSaludo = document.getElementById('taller-saludo');
    const elMotivo = document.getElementById('taller-motivo');
    const elDespedida = document.getElementById('taller-despedida');
    const elFirma = document.getElementById('taller-firma');

    if (caso) {
      if (elSaludo) elSaludo.value = caso.plantilla.saludo;
      if (elMotivo) elMotivo.value = caso.plantilla.motivo;
      if (elDespedida) elDespedida.value = caso.plantilla.despedida;
      if (elFirma) elFirma.value = caso.plantilla.firma;
    } else {
      if (elSaludo) elSaludo.value = '';
      if (elMotivo) elMotivo.value = '';
      if (elDespedida) elDespedida.value = '';
      if (elFirma) elFirma.value = 'Olivia';
    }

    this.updatePostcard();
  }

  updatePostcard() {
    const saludo = document.getElementById('taller-saludo').value.trim() || '¡Hola!';
    const motivo = document.getElementById('taller-motivo').value.trim() || 'Te escribo para darte las gracias...';
    const despedida = document.getElementById('taller-despedida').value.trim() || 'Un abrazo fuerte,';
    const firma = document.getElementById('taller-firma').value.trim() || 'Olivia';

    const prevSaludo = document.getElementById('preview-saludo');
    const prevMotivo = document.getElementById('preview-motivo');
    const prevDespedida = document.getElementById('preview-despedida');
    const prevFirma = document.getElementById('preview-firma');

    if (prevSaludo) prevSaludo.textContent = saludo;
    if (prevMotivo) prevMotivo.textContent = motivo;
    if (prevDespedida) prevDespedida.textContent = despedida;
    if (prevFirma) prevFirma.textContent = firma;

    // Actualizar checklist
    const hasSaludo = saludo.length > 3;
    const hasMotivo = motivo.length > 10;
    const hasDespedida = despedida.length > 3;
    const hasFirma = firma.length > 2;

    const checkContainer = document.getElementById('taller-checklist');
    if (checkContainer) {
      checkContainer.innerHTML = `
        <div class="flex items-center gap-1.5 ${hasSaludo ? 'text-emerald-700' : 'text-slate-400'}">
          <span>${hasSaludo ? '✅' : '⚪'}</span> <span>1. Saludo</span>
        </div>
        <div class="flex items-center gap-1.5 ${hasMotivo ? 'text-emerald-700' : 'text-slate-400'}">
          <span>${hasMotivo ? '✅' : '⚪'}</span> <span>2. Motivo</span>
        </div>
        <div class="flex items-center gap-1.5 ${hasDespedida ? 'text-emerald-700' : 'text-slate-400'}">
          <span>${hasDespedida ? '✅' : '⚪'}</span> <span>3. Despedida</span>
        </div>
        <div class="flex items-center gap-1.5 ${hasFirma ? 'text-emerald-700' : 'text-slate-400'}">
          <span>${hasFirma ? '✅' : '⚪'}</span> <span>4. Firma</span>
        </div>
      `;
    }
  }

  // ---------------------------------------------------------------------------
  // CHULETA DE ORO IMPRIMIBLE
  // ---------------------------------------------------------------------------
  renderChuleta() {
    const container = document.getElementById('chuleta-container');
    if (!container) return;

    container.innerHTML = TEMA_2_DATA.resumenOro.map(r => `
      <div class="card-playful p-6 bg-white border-slate-200 flex flex-col justify-between">
        <div>
          <div class="flex items-center gap-2 mb-2">
            <span class="text-2xl">${r.icon}</span>
            <h3 class="text-lg font-black text-slate-900">${r.title}</h3>
          </div>
          <p class="text-xs font-bold text-sky-700 mb-3">${r.summary}</p>
          <ul class="text-xs sm:text-sm text-slate-700 space-y-2 leading-relaxed">
            ${r.points.map(pt => `<li class="flex items-start gap-1.5"><span>•</span><span>${pt.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')}</span></li>`).join('')}
          </ul>
        </div>
        <div class="mt-4 pt-3 border-t border-amber-100 bg-amber-50/60 p-2.5 rounded-xl text-[11px] font-bold text-amber-900 flex items-start gap-1.5">
          <span>💡</span> <span>${r.examTip}</span>
        </div>
      </div>
    `).join('');
  }
}

// Instanciar app global
window.app = new App();
