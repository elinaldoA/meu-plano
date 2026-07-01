/* ============================================================
   CONFIG — Supabase
============================================================ */
const SUPABASE_URL      = 'https://btzdetvoneyhzthsmdrp.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_NJWhkVt39gqzkAcmvmhw_g_9coJjxnb';

// supabase-js v2 CDN exposes global `supabase`
const { createClient } = window.supabase;
const db = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

/* ============================================================
   CONSTANTS
============================================================ */
const DAY_NAMES = ['Domingo','Segunda','Terça','Quarta','Quinta','Sexta','Sábado'];
const TODAY_NAME = DAY_NAMES[new Date().getDay()];
const TODAY_DATE = new Date().toISOString().split('T')[0];

/* ============================================================
   DATA — Treino
============================================================ */
const treinoData = [
    { dia:'Segunda', foco:'Peito / Ombro / Tríceps', exercicios:[
        { nome:'Supino Reto com Barra',          series:'4', reps:'8-10',  descanso:'90s', tecnica:'Cadência 2-0-2' },
        { nome:'Supino Inclinado com Halteres',  series:'3', reps:'10-12', descanso:'60s', tecnica:'Alongamento máximo' },
        { nome:'Crucifixo Máquina',              series:'3', reps:'12-15', descanso:'45s', tecnica:'Pico de contração' },
        { nome:'Desenvolvimento com Barra',      series:'4', reps:'8-10',  descanso:'90s', tecnica:'Lombar apoiada' },
        { nome:'Elevação Lateral com Halteres',  series:'4', reps:'12-15', descanso:'45s', tecnica:'Leve inclinação' },
        { nome:'Tríceps Corda na Polia',         series:'3', reps:'12-15', descanso:'45s', tecnica:'Full ROM' },
        { nome:'Tríceps Testa com Barra W',      series:'3', reps:'10-12', descanso:'60s', tecnica:'Cotovelos fixos' },
    ], pos:[
        { nome:'🏃 Cardio — Esteira Inclinada',          detalhe:'20min · 10% inclinação / 5km/h' },
        { nome:'🔷 Abdominal Polia (Corda)',              detalhe:'4×12-15 · Pico de contração' },
        { nome:'🔷 Elevação de Pernas Pendurado',        detalhe:'3× falha (máx 20) · Máximo alongamento' },
        { nome:'🔷 Prancha com Peso',                    detalhe:'3×45s · Isometria com carga' },
    ]},
    { dia:'Terça', foco:'Costas / Bíceps', exercicios:[
        { nome:'Puxada Aberta Frente',           series:'4', reps:'8-10',  descanso:'90s', tecnica:'Tronco inclinado' },
        { nome:'Remada Curvada com Barra',       series:'4', reps:'8-10',  descanso:'90s', tecnica:'Escápula ativa' },
        { nome:'Remada Unilateral com Halter',   series:'3', reps:'10-12', descanso:'60s', tecnica:'Máximo alongamento' },
        { nome:'Pulldown Neutro (Triângulo)',     series:'3', reps:'10-12', descanso:'60s', tecnica:'Cotovelo guiado' },
        { nome:'Face Pull',                      series:'4', reps:'15-20', descanso:'45s', tecnica:'Essencial postura' },
        { nome:'Rosca Direta Barra W',           series:'3', reps:'10-12', descanso:'60s', tecnica:'Sem balanço' },
        { nome:'Rosca Martelo Alternada',        series:'3', reps:'12-15', descanso:'45s', tecnica:'Supinação no pico' },
        { nome:'Rosca Inversa com Barra',        series:'2', reps:'12-15', descanso:'45s', tecnica:'Foco antebraço' },
    ], pos:[
        { nome:'🏃 Cardio — Escada',                     detalhe:'20min · Moderado (130bpm)' },
        { nome:'🔷 Abdominal Supra com Halter',          detalhe:'3×15-20 · Carga moderada' },
        { nome:'🔷 Bicicleta no Solo',                   detalhe:'3×20 cada perna · Movimento alternado' },
        { nome:'🔷 Prancha Lateral com Elevação',        detalhe:'3×30s cada lado · Estabilidade dinâmica' },
    ]},
    { dia:'Quarta', foco:'Pernas / Quadríceps', exercicios:[
        { nome:'Agachamento Livre',              series:'4', reps:'6-8',   descanso:'2min', tecnica:'Profundo (paralelo)' },
        { nome:'Leg Press 45°',                  series:'4', reps:'10-12', descanso:'75s',  tecnica:'Amplitude máxima' },
        { nome:'Cadeira Extensora',              series:'4', reps:'12-15', descanso:'45s',  tecnica:'Pausa 2s no pico' },
        { nome:'Afundo Búlgaro',                 series:'3', reps:'10-12', descanso:'60s',  tecnica:'Pé elevado atrás' },
        { nome:'Agachamento Sumô com Halter',    series:'3', reps:'12-15', descanso:'45s',  tecnica:'Foco adutores' },
        { nome:'Panturrilha em Pé',              series:'4', reps:'12-15', descanso:'45s',  tecnica:'2s de estiramento' },
        { nome:'Panturrilha Sentado',            series:'3', reps:'15-20', descanso:'45s',  tecnica:'Pico de contração' },
    ], pos:[
        { nome:'🏃 Cardio — Caminhada Leve',             detalhe:'10min · Resfriamento' },
        { nome:'🔷 Crunch Invertido (banco)',             detalhe:'4×15 · Levanta quadril' },
        { nome:'🔷 Russian Twist com Halter',            detalhe:'3×20 cada lado · Rotação tronco' },
        { nome:'🔷 Prancha Frontal Estática',            detalhe:'3×60s · Isometria máxima' },
    ]},
    { dia:'Quinta', foco:'Superiores / Força', exercicios:[
        { nome:'Supino Reto com Halteres',       series:'4', reps:'6-8',   descanso:'2min', tecnica:'Carga alta (força)' },
        { nome:'Remada com Barra T',             series:'4', reps:'8-10',  descanso:'90s',  tecnica:'Contração escapular' },
        { nome:'Desenvolvimento Arnold',         series:'3', reps:'8-10',  descanso:'75s',  tecnica:'Rotação completa' },
        { nome:'Crucifixo Invertido',            series:'3', reps:'12-15', descanso:'45s',  tecnica:'Posterior ombro' },
        { nome:'Rosca Scott',                    series:'3', reps:'10-12', descanso:'60s',  tecnica:'Banco ajustado' },
        { nome:'Tríceps Francês com Halter',     series:'3', reps:'10-12', descanso:'60s',  tecnica:'Cotovelo estabilizado' },
        { nome:'Farmer Walk',                    series:'3', reps:'30s',   descanso:'60s',  tecnica:'Grip + Core' },
    ], pos:[
        { nome:'🏃 Cardio — Caminhada (6km/h)',          detalhe:'25min · Moderado' },
        { nome:'🔷 Abdominal na Máquina',                detalhe:'4×12-15 · Carga controlada' },
        { nome:'🔷 Tesoura (Scissor Kicks)',             detalhe:'3×20 cada perna · Alonga ísquios' },
        { nome:'🔷 Prancha com Braços Estendidos',       detalhe:'3×45s · Ativa peitoral e core' },
    ]},
    { dia:'Sexta', foco:'Posterior / Glúteos', exercicios:[
        { nome:'Romeno com Barra',               series:'4', reps:'8-10',  descanso:'90s', tecnica:'Estiramento máximo' },
        { nome:'Stiff com Halteres',             series:'3', reps:'10-12', descanso:'60s', tecnica:'Joelhos levemente flexionados' },
        { nome:'Cadeira Flexora (Deitado)',       series:'4', reps:'12-15', descanso:'45s', tecnica:'Pausa no pico' },
        { nome:'Mesa Flexora (Sentado)',          series:'3', reps:'12-15', descanso:'45s', tecnica:'Negativa lenta' },
        { nome:'Afundo Búlgaro (foco glúteo)',   series:'3', reps:'10-12', descanso:'60s', tecnica:'Tronco inclinado' },
        { nome:'Elevação Pélvica',               series:'3', reps:'15-20', descanso:'45s', tecnica:'Pausa 3s no topo' },
        { nome:'Panturrilha em Pé (carga)',      series:'4', reps:'10-12', descanso:'45s', tecnica:'Ênfase potência' },
    ], pos:[
        { nome:'🏃 Cardio — HIIT Esteira',               detalhe:'15min · 1min corre / 2min caminha' },
        { nome:'🔷 Roda (Ab Wheel)',                     detalhe:'4×10-12 · Extensão total core' },
        { nome:'🔷 Elevação de Pernas Deitado',          detalhe:'3×15-20 · Toque os pés' },
        { nome:'🔷 Prancha Lateral Estática',            detalhe:'3×45s cada lado · Estabilidade unilateral' },
    ]},
    { dia:'Sábado', foco:'Cardio Leve / Recuperação', exercicios:[
        { nome:'Caminhada Rápida ou Bicicleta', series:'-', reps:'30-40min', descanso:'-', tecnica:'5-6km/h ou 130bpm' },
    ], pos:[]},
    { dia:'Domingo', foco:'Descanso Total', exercicios:[
        { nome:'Sem treino', series:'-', reps:'-', descanso:'-', tecnica:'Recuperação ativa' },
    ], pos:[]},
];

const macroData = [
    { value:'2600',  label:'Kcal' },
    { value:'200g',  label:'Proteína' },
    { value:'290g',  label:'Carboidrato' },
    { value:'70g',   label:'Gordura' },
    { value:'3.5L',  label:'Água', isWater:true },
];

const dietaData = [
    { horario:'07:30', nome:'☀️ Café da manhã',          descricao:'4 ovos inteiros + 3 claras (mexidos) · 40g aveia · 1 banana · 1 col. mel · Café preto' },
    { horario:'10:30', nome:'🍏 Lanche da manhã',         descricao:'1 scoop Whey (ou 180g iogurte grego) · 1 maçã · 25g amêndoas' },
    { horario:'13:00', nome:'🥗 Almoço',                  descricao:'220g frango grelhado · 250g arroz integral ou batata-doce · 200g brócolis · 1 col. azeite' },
    { horario:'17:30', nome:'⚡ Pré-treino pesado',       descricao:'200g peito de peru/atum · 2 pães integrais · 1 batata-doce média (150g) · 1 banana · 500ml água' },
    { horario:'19:30', nome:'☕ Pré-treino leve',         descricao:'Café preto (sem açúcar) · 1 scoop Whey (opcional)' },
    { horario:'20:00', nome:'🏋️ Treino',                 descricao:'Beba <strong>500ml a 1L</strong> de água durante o treino' },
    { horario:'21:15', nome:'🍽️ Pós-treino / Jantar',    descricao:'200g peixe (salmão/tilápia) ou contra-filé · 250g arroz branco · Salada verde com azeite' },
    { horario:'23:30', nome:'🥛 Ceia (opcional)',         descricao:'Se bater fome: 2 ovos cozidos ou 1 scoop caseína com água' },
    { horario:'💧',    nome:'Hidratação obrigatória',     descricao:'<strong>3,5 a 4 litros</strong> ao longo do dia — peso elevado exige mais hídrico', isWater:true },
];

/* ============================================================
   AVATAR CORPORAL — mapeamento de grupos musculares
============================================================ */
const MUSCLE_MAP = {
    'Peito':        ['chest'],
    'Ombro':        ['shoulders'],
    'Tríceps':      ['triceps'],
    'Costas':       ['back'],
    'Bíceps':       ['biceps'],
    'Pernas':       ['quads', 'calves'],
    'Quadríceps':   ['quads'],
    'Superiores':   ['chest', 'shoulders', 'back', 'biceps', 'triceps'],
    'Força':        [],
    'Posterior':    ['hamstrings', 'back'],
    'Glúteos':      ['glutes'],
    'Cardio Leve':  [],
    'Recuperação':  [],
    'Descanso Total': [],
};

function getMuscleGroupsForDay(day) {
    const groups = new Set();
    day.foco.split('/').map(s => s.trim()).forEach(token => {
        (MUSCLE_MAP[token] || []).forEach(g => groups.add(g));
    });
    if (day.pos.length > 0) groups.add('abs');
    return groups;
}

const BODY_AVATAR_SVG = `
<div class="body-avatar__col">
    <svg viewBox="0 0 120 220" class="body-avatar__svg">
        <circle cx="60" cy="18" r="14" class="muscle muscle--fixed"/>
        <rect x="52" y="30" width="16" height="12" class="muscle muscle--fixed"/>
        <ellipse cx="35" cy="47" rx="14" ry="9" class="muscle" data-muscle="shoulders"/>
        <ellipse cx="85" cy="47" rx="14" ry="9" class="muscle" data-muscle="shoulders"/>
        <rect x="38" y="42" width="44" height="32" rx="8" class="muscle" data-muscle="chest"/>
        <rect x="18" y="50" width="14" height="35" rx="6" class="muscle" data-muscle="biceps"/>
        <rect x="88" y="50" width="14" height="35" rx="6" class="muscle" data-muscle="biceps"/>
        <rect x="42" y="76" width="36" height="34" rx="6" class="muscle" data-muscle="abs"/>
        <rect x="34" y="112" width="22" height="55" rx="10" class="muscle" data-muscle="quads"/>
        <rect x="64" y="112" width="22" height="55" rx="10" class="muscle" data-muscle="quads"/>
        <rect x="34" y="170" width="22" height="40" rx="8" class="muscle" data-muscle="calves"/>
        <rect x="64" y="170" width="22" height="40" rx="8" class="muscle" data-muscle="calves"/>
    </svg>
    <span class="body-avatar__label">Frente</span>
</div>
<div class="body-avatar__col">
    <svg viewBox="0 0 120 220" class="body-avatar__svg">
        <circle cx="60" cy="18" r="14" class="muscle muscle--fixed"/>
        <rect x="52" y="30" width="16" height="12" class="muscle muscle--fixed"/>
        <ellipse cx="60" cy="42" rx="30" ry="12" class="muscle" data-muscle="shoulders"/>
        <rect x="38" y="52" width="44" height="40" rx="10" class="muscle" data-muscle="back"/>
        <rect x="18" y="50" width="14" height="35" rx="6" class="muscle" data-muscle="triceps"/>
        <rect x="88" y="50" width="14" height="35" rx="6" class="muscle" data-muscle="triceps"/>
        <rect x="38" y="96" width="44" height="22" rx="10" class="muscle" data-muscle="glutes"/>
        <rect x="34" y="120" width="22" height="45" rx="10" class="muscle" data-muscle="hamstrings"/>
        <rect x="64" y="120" width="22" height="45" rx="10" class="muscle" data-muscle="hamstrings"/>
        <rect x="34" y="168" width="22" height="42" rx="8" class="muscle" data-muscle="calves"/>
        <rect x="64" y="168" width="22" height="42" rx="8" class="muscle" data-muscle="calves"/>
    </svg>
    <span class="body-avatar__label">Costas</span>
</div>
`;

function renderBodyAvatar() {
    const container = document.getElementById('dashBodyAvatar');
    if (!container) return;

    if (!container.dataset.built) {
        container.innerHTML = BODY_AVATAR_SVG;
        container.dataset.built = '1';
    }

    const day = treinoData.find(d => d.dia === TODAY_NAME);
    const activeGroups = day ? getMuscleGroupsForDay(day) : new Set();

    container.querySelectorAll('[data-muscle]').forEach(el => {
        el.classList.toggle('muscle--active', activeGroups.has(el.dataset.muscle));
    });

    const titleEl = document.getElementById('dashBodyAvatarFoco');
    if (titleEl) titleEl.textContent = day ? day.foco : '';
}

/* ============================================================
   STATE
============================================================ */
const state = {
    user:         null,
    workoutId:    null,
    saveTimers:   {},
};

let dashLogs    = [];
let dashLoading = false;

/* ============================================================
   TOAST
============================================================ */
let _toastTimer = null;

function toast(msg, ms = 2600) {
    const el = document.getElementById('toast');
    el.textContent = msg;
    el.classList.add('show');
    clearTimeout(_toastTimer);
    _toastTimer = setTimeout(() => el.classList.remove('show'), ms);
}

/* ============================================================
   AUTH
============================================================ */
async function checkSession() {
    const { data: { session } } = await db.auth.getSession();
    if (session) {
        state.user = session.user;
        onLoggedIn();
    } else {
        showAuthPanel();
    }
}

function showAuthPanel() {
    document.getElementById('authScreen').style.display = 'flex';
    document.getElementById('appScreen').style.display  = 'none';
}

function hideAuthPanel() {
    document.getElementById('authScreen').style.display = 'none';
    document.getElementById('appScreen').style.display  = 'flex';
}

function renderUserChip() {
    document.getElementById('headerAuth').innerHTML = `
        <div class="user-chip">
            <span class="sync-dot sync-dot--ok" id="syncBadge" title="Sincronizado"></span>
            <span class="user-chip__email">${state.user.email}</span>
            <button class="btn btn--ghost btn--sm" id="syncBtn" title="Sincronizar">↻</button>
            <button class="btn btn--ghost btn--sm" id="logoutBtn">Sair</button>
        </div>
    `;
    document.getElementById('syncBtn').addEventListener('click', syncNow);
    document.getElementById('logoutBtn').addEventListener('click', doLogout);
}

function setSyncBadge(status) {
    const el = document.getElementById('syncBadge');
    if (!el) return;
    el.className = `sync-dot sync-dot--${status}`;
    el.title = { ok: 'Sincronizado', loading: 'Sincronizando…', error: 'Erro de sync' }[status] || '';
}

async function onLoggedIn() {
    hideAuthPanel();
    renderUserChip();
    await loadUserData();
    updateWeekProgress();
    loadProfileStats();
}

async function doLogin() {
    const email = document.getElementById('emailInput').value.trim();
    const pwd   = document.getElementById('passwordInput').value;
    if (!email || !pwd) { setAuthMsg('Preencha e-mail e senha.', 'error'); return; }

    const btn = document.getElementById('loginBtn');
    btn.disabled = true;
    btn.textContent = 'Entrando…';

    const { data, error } = await db.auth.signInWithPassword({ email, password: pwd });

    btn.disabled = false;
    btn.textContent = 'Entrar';

    if (error) { setAuthMsg('E-mail ou senha inválidos.', 'error'); return; }

    state.user = data.user;
    setAuthMsg('', '');
    onLoggedIn();
}

async function doSignup() {
    const email = document.getElementById('emailInput').value.trim();
    const pwd   = document.getElementById('passwordInput').value;
    if (!email || !pwd) { setAuthMsg('Preencha e-mail e senha.', 'error'); return; }
    if (pwd.length < 6) { setAuthMsg('Senha: mínimo 6 caracteres.', 'error'); return; }

    const btn = document.getElementById('signupBtn');
    btn.disabled = true;
    btn.textContent = 'Criando…';

    const { data, error } = await db.auth.signUp({ email, password: pwd });

    btn.disabled = false;
    btn.textContent = 'Criar conta';

    if (error) { setAuthMsg(error.message, 'error'); return; }

    if (data.session) {
        state.user = data.user;
        setAuthMsg('', '');
        onLoggedIn();
    } else {
        setAuthMsg('Conta criada! Verifique seu e-mail para ativar.', 'success');
    }
}

async function doLogout() {
    await db.auth.signOut();
    state.user      = null;
    state.workoutId = null;
    document.getElementById('headerAuth').innerHTML = '';
    showAuthPanel();
    toast('Sessão encerrada');
}

function setAuthMsg(text, type) {
    const el = document.getElementById('authMessage');
    el.textContent = text;
    el.className = `auth-form__msg${type ? ' auth-form__msg--' + type : ''}`;
}

/* ============================================================
   SUPABASE — data layer
============================================================ */
async function loadUserData() {
    if (!state.user) return;
    setSyncBadge('loading');

    try {
        const { data: existing, error } = await db
            .from('workouts')
            .select('*')
            .eq('user_id', state.user.id)
            .eq('workout_date', TODAY_DATE)
            .maybeSingle();

        if (error) throw error;

        if (existing) {
            state.workoutId = existing.id;
            const cb = findCheckbox(TODAY_NAME);
            if (cb) {
                cb.checked = existing.completed;
                localStorage.setItem(`treino_${TODAY_NAME}`, existing.completed);
                refreshIndicator(TODAY_NAME);
            }
            await loadExerciseSets(existing.id);
        } else {
            const { data: created, error: err2 } = await db
                .from('workouts')
                .insert({ user_id: state.user.id, workout_date: TODAY_DATE, day_of_week: TODAY_NAME, completed: false })
                .select()
                .single();
            if (err2) throw err2;

            state.workoutId = created.id;
            await createExerciseLogs(created.id, TODAY_NAME);
        }

        setSyncBadge('ok');
    } catch (err) {
        console.error('loadUserData:', err);
        setSyncBadge('error');
        toast('⚠️ Erro ao sincronizar dados');
    }
}

async function createExerciseLogs(workoutId, dayName) {
    const day = treinoData.find(d => d.dia === dayName);
    if (!day) return;

    const rows = [
        ...day.exercicios.map(ex => ({ workout_id: workoutId, exercise_name: ex.nome, series: ex.series, reps: ex.reps, rest_time: ex.descanso, technique: ex.tecnica, is_post_workout: false })),
        ...day.pos.map(p  => ({ workout_id: workoutId, exercise_name: p.nome,  series: '-',        reps: '-',      rest_time: '-',          technique: p.detalhe,  is_post_workout: true  })),
    ];

    const { error } = await db.from('exercise_logs').insert(rows);
    if (error) console.error('createExerciseLogs:', error);
}

async function saveWorkoutStatus(completed) {
    if (!state.user || !state.workoutId) return;
    const { error } = await db.from('workouts').update({ completed }).eq('id', state.workoutId);
    if (error) console.error(error);
}

async function loadExerciseSets(workoutId) {
    const { data: sets, error } = await db
        .from('exercise_sets')
        .select('exercise_name, set_number, carga, completed')
        .eq('workout_id', workoutId);

    if (error) { console.error(error); return; }

    sets.forEach(s => {
        localStorage.setItem(`set_${s.exercise_name}_${s.set_number}_carga`, s.carga ?? '');
        localStorage.setItem(`set_${s.exercise_name}_${s.set_number}_done`, s.completed);

        const row = findSetRow(s.exercise_name, s.set_number);
        if (row) {
            const input = row.querySelector('.set-row__carga');
            const check = row.querySelector('.set-row__check');
            if (input && s.carga != null) input.value = s.carga;
            if (check) setSetRowChecked(check, s.completed);
        }
    });

    const day = treinoData.find(d => d.dia === TODAY_NAME);
    if (day) refreshDayTotal(day);
}

async function saveSetState(exerciseName, setNumber, patch) {
    if (!state.user || !state.workoutId) return;
    const { error } = await db
        .from('exercise_sets')
        .upsert(
            { workout_id: state.workoutId, exercise_name: exerciseName, set_number: setNumber, ...patch },
            { onConflict: 'workout_id,exercise_name,set_number' }
        );
    if (error) console.error(error);
}

async function syncNow() {
    setSyncBadge('loading');
    await loadUserData();
    updateWeekProgress();
    toast('✅ Dados sincronizados');
}

/* ============================================================
   WEEK PROGRESS
============================================================ */
function updateWeekProgress() {
    const workDays = treinoData.filter(d => d.dia !== 'Sábado' && d.dia !== 'Domingo');
    const done  = workDays.filter(d => localStorage.getItem(`treino_${d.dia}`) === 'true').length;
    const total = workDays.length;

    document.getElementById('weekProgressFill').style.width = `${(done / total) * 100}%`;
    document.getElementById('weekProgressLabel').textContent = `${done}/${total} treinos concluídos`;
}

/* ============================================================
   RENDER — Treino
============================================================ */
function renderTreino() {
    const container = document.getElementById('treinoContainer');
    container.innerHTML = '';
    const accordion = document.createElement('div');
    accordion.className = 'accordion';

    treinoData.forEach(day => {
        const isToday   = day.dia === TODAY_NAME;
        const isChecked = localStorage.getItem(`treino_${day.dia}`) === 'true';

        const card = document.createElement('div');
        card.className = `day-card${isToday ? ' day-card--today' : ''}`;

        /* — Header — */
        const header = document.createElement('div');
        header.className = 'day-card__header';
        if (isToday) header.classList.add('open');

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.className = 'day-card__check';
        checkbox.dataset.day = day.dia;
        checkbox.checked = isChecked;
        checkbox.addEventListener('change', async (e) => {
            e.stopPropagation();
            const checked = e.target.checked;
            localStorage.setItem(`treino_${day.dia}`, checked);
            refreshIndicator(day.dia);
            updateWeekProgress();
            toast(checked ? '✅ Treino marcado!' : 'Treino desmarcado');
            if (state.user && isToday) await saveWorkoutStatus(checked);
        });

        const indicator = document.createElement('span');
        indicator.className = 'day-card__indicator';
        indicator.dataset.indicator = day.dia;
        indicator.textContent = isChecked ? '✅' : '⬜';

        const info = document.createElement('div');
        info.className = 'day-card__info';
        info.innerHTML = `<div class="day-card__name">${day.dia}</div><div class="day-card__focus">${day.foco}</div>`;

        const left = document.createElement('div');
        left.className = 'day-card__left';
        left.append(checkbox, indicator, info);

        const right = document.createElement('div');
        right.className = 'day-card__right';
        if (isToday) right.insertAdjacentHTML('beforeend', '<span class="today-badge">Hoje</span>');
        right.insertAdjacentHTML('beforeend', `<span class="day-card__count">${day.exercicios.length} exerc.</span>`);
        right.insertAdjacentHTML('beforeend', '<span class="chevron">▼</span>');

        header.append(left, right);

        /* — Body — */
        const body = document.createElement('div');
        body.className = `day-card__body${isToday ? ' open' : ''}`;

        // Carga total do dia
        body.insertAdjacentHTML('beforeend', `<div class="day-card__total" data-total="${day.dia}">Carga total do treino: ${calcDayTotalCarga(day).toLocaleString('pt-BR')} kg</div>`);

        // Exercícios
        day.exercicios.forEach(ex => {
            const setCount = parseInt(ex.series, 10);

            const block = document.createElement('div');
            block.className = 'ex-block';

            if (!setCount) {
                block.innerHTML = `
                    <div class="ex-block__header">
                        <span class="ex-name">${ex.nome}</span>
                        <span class="ex-block__meta">${ex.reps}</span>
                    </div>
                `;
                body.appendChild(block);
                return;
            }

            block.innerHTML = `
                <div class="ex-block__header">
                    <span class="ex-name">${ex.nome}</span>
                    <span class="ex-block__meta">${ex.reps} reps · desc. ${ex.descanso}</span>
                </div>
                <div class="ex-block__sets"></div>
            `;

            const setsWrap = block.querySelector('.ex-block__sets');
            for (let n = 1; n <= setCount; n++) {
                const savedCarga = localStorage.getItem(`set_${ex.nome}_${n}_carga`) || '';
                const savedDone  = localStorage.getItem(`set_${ex.nome}_${n}_done`) === 'true';

                const row = document.createElement('div');
                row.className = 'set-row';
                row.dataset.exname = ex.nome;
                row.dataset.set = n;
                row.innerHTML = `
                    <span class="set-row__label">Série ${n}</span>
                    <input class="set-row__carga" type="text" inputmode="decimal" placeholder="kg"
                           value="${escapeAttr(savedCarga)}" autocomplete="off">
                    <button type="button" class="set-row__check${savedDone ? ' set-row__check--done' : ''}"
                            aria-pressed="${savedDone}">✓</button>
                `;

                const input = row.querySelector('.set-row__carga');
                const check = row.querySelector('.set-row__check');
                const saveKey = `${ex.nome}_${n}`;

                input.addEventListener('input', (e) => {
                    const val = e.target.value;
                    localStorage.setItem(`set_${ex.nome}_${n}_carga`, val);
                    refreshDayTotal(day);
                    clearTimeout(state.saveTimers[saveKey]);
                    state.saveTimers[saveKey] = setTimeout(async () => {
                        if (state.user) {
                            await saveSetState(ex.nome, n, { carga: val === '' ? null : parseFloat(val) });
                            input.classList.add('saved');
                            setTimeout(() => input.classList.remove('saved'), 1200);
                        }
                    }, 800);
                });

                check.addEventListener('click', async () => {
                    const done = !check.classList.contains('set-row__check--done');
                    setSetRowChecked(check, done);
                    localStorage.setItem(`set_${ex.nome}_${n}_done`, done);
                    refreshDayTotal(day);
                    if (state.user) await saveSetState(ex.nome, n, { completed: done });
                });

                setsWrap.appendChild(row);
            }

            body.appendChild(block);
        });

        // Post-workout
        if (day.pos.length > 0) {
            const post = document.createElement('div');
            post.className = 'post-section';
            post.innerHTML = '<div class="post-title">🏁 Pós-treino — Cardio + Abdômen</div>';
            day.pos.forEach(p => {
                post.insertAdjacentHTML('beforeend', `
                    <div class="post-row">
                        <div class="post-row__name">${p.nome}</div>
                        <div class="post-row__detail">${p.detalhe}</div>
                    </div>
                `);
            });
            body.appendChild(post);
        }

        // Toggle accordion
        header.addEventListener('click', (e) => {
            if (e.target.type === 'checkbox') return;
            const open = body.classList.toggle('open');
            header.classList.toggle('open', open);
        });

        card.append(header, body);
        accordion.appendChild(card);
    });

    container.appendChild(accordion);
}

/* ============================================================
   RENDER — Dieta
============================================================ */
function renderMacros() {
    const grid = document.getElementById('macrosGrid');
    macroData.forEach(m => {
        grid.insertAdjacentHTML('beforeend', `
            <div class="macro-card">
                <span class="macro-card__value${m.isWater ? ' macro-card__value--water' : ''}">${m.value}</span>
                <span class="macro-card__label">${m.label}</span>
            </div>
        `);
    });
}

function renderDieta() {
    const list = document.getElementById('dietaContainer');
    dietaData.forEach(meal => {
        const card = document.createElement('div');
        card.className = `meal-card${meal.isWater ? ' meal-card--water' : ''}`;
        card.innerHTML = `
            <div class="meal-card__time">${meal.horario}</div>
            <div class="meal-card__body">
                <div class="meal-card__name">${meal.nome}</div>
                <div class="meal-card__desc">${meal.descricao}</div>
            </div>
        `;
        list.appendChild(card);
    });
}

/* ============================================================
   NAVEGAÇÃO INFERIOR
============================================================ */
function initTabs() {
    const items = document.querySelectorAll('.nav-item');
    const pages = {
        treino: document.getElementById('page-treino'),
        dieta:  document.getElementById('page-dieta'),
        dash:   document.getElementById('page-dash'),
        perfil: document.getElementById('page-perfil'),
    };

    items.forEach(item => {
        item.addEventListener('click', () => {
            items.forEach(i => i.classList.remove('active'));
            item.classList.add('active');
            const target = item.dataset.page;
            Object.entries(pages).forEach(([key, page]) => {
                page.classList.toggle('active', key === target);
            });
            if (target === 'perfil' && state.user) loadProfileStats();
            if (target === 'dash'   && state.user) loadDashboard();
        });
    });
}

/* ============================================================
   PROFILE & STATS
============================================================ */
async function loadProfileStats() {
    if (!state.user) return;

    const email = state.user.email || '';
    const since = new Date(state.user.created_at);

    document.getElementById('profileAvatar').textContent = email[0]?.toUpperCase() || '?';
    document.getElementById('profileEmail').textContent  = email;
    document.getElementById('profileSince').textContent  =
        'Membro desde ' + since.toLocaleDateString('pt-BR', { month: 'long', year: 'numeric' });

    // Prefer Supabase user_metadata (cross-device), fallback to localStorage
    const md     = state.user.user_metadata || {};
    const peso   = md.peso   || localStorage.getItem('profile_peso')   || '';
    const altura = md.altura || localStorage.getItem('profile_altura') || '';
    const meta   = md.meta   || localStorage.getItem('profile_meta')   || 'massa';

    document.getElementById('profilePeso').value   = peso;
    document.getElementById('profileAltura').value = altura;
    document.getElementById('profileMeta').value   = meta;
    updateImc(parseFloat(peso), parseFloat(altura));

    try {
        const { data: workouts, error } = await db
            .from('workouts')
            .select('workout_date')
            .eq('user_id', state.user.id)
            .eq('completed', true)
            .order('workout_date', { ascending: false });

        if (error) throw error;

        const total  = workouts.length;
        const wStart = getWeekStart();
        const week   = workouts.filter(w => w.workout_date >= wStart).length;
        const streak = calcStreak(workouts.map(w => w.workout_date));

        document.getElementById('statTotalVal').textContent  = total;
        document.getElementById('statWeekVal').textContent   = `${week}/5`;
        document.getElementById('statStreakVal').textContent = streak > 0 ? `${streak}d` : '0d';
    } catch (err) {
        console.error('loadProfileStats:', err);
    }
}

function getWeekStart() {
    const now  = new Date();
    const day  = now.getDay();
    const diff = now.getDate() - day + (day === 0 ? -6 : 1);
    return new Date(now.getFullYear(), now.getMonth(), diff).toISOString().split('T')[0];
}

function calcStreak(dates) {
    if (!dates.length) return 0;
    const unique = [...new Set(dates)].sort().reverse();
    let streak = 0;
    let prev   = new Date(TODAY_DATE);
    for (const d of unique) {
        const curr = new Date(d);
        const diff = Math.round((prev - curr) / 86400000);
        if (diff <= 1) { streak++; prev = curr; }
        else break;
    }
    return streak;
}

function updateImc(peso, altura) {
    const card = document.getElementById('imcCard');
    if (!peso || !altura || peso < 30 || altura < 100) { card.style.display = 'none'; return; }
    const imc = peso / ((altura / 100) ** 2);
    const cls =
        imc < 18.5 ? 'Abaixo do peso' :
        imc < 25   ? 'Peso normal'     :
        imc < 30   ? 'Sobrepeso'       :
        imc < 35   ? 'Obesidade grau I': 'Obesidade grau II+';
    document.getElementById('imcValue').textContent = imc.toFixed(1);
    document.getElementById('imcClass').textContent = cls;
    card.style.display = 'flex';
}

function initProfile() {
    document.getElementById('saveProfileBtn').addEventListener('click', async () => {
        const peso   = document.getElementById('profilePeso').value;
        const altura = document.getElementById('profileAltura').value;
        const meta   = document.getElementById('profileMeta').value;

        // Salva localmente para leitura instantânea offline
        localStorage.setItem('profile_peso',   peso);
        localStorage.setItem('profile_altura', altura);
        localStorage.setItem('profile_meta',   meta);
        updateImc(parseFloat(peso), parseFloat(altura));

        // Persiste nos metadados do usuário no Supabase (sincroniza entre dispositivos)
        if (state.user) {
            const { data, error } = await db.auth.updateUser({ data: { peso, altura, meta } });
            if (!error && data?.user) state.user = data.user;
        }

        toast('Perfil salvo!');
    });
    document.getElementById('logoutBtnPerfil').addEventListener('click', doLogout);
}

/* ============================================================
   RESET
============================================================ */
function initResetBtn() {
    document.getElementById('resetTreinos').addEventListener('click', () => {
        if (!confirm('Limpar todos os checks e cargas salvas?')) return;
        Object.keys(localStorage).forEach(k => {
            if (k.startsWith('treino_') || k.startsWith('carga_') || k.startsWith('set_')) localStorage.removeItem(k);
        });
        renderTreino();
        updateWeekProgress();
        if (state.user) loadUserData();
        toast('Dados limpos');
    });
}

/* ============================================================
   AUTH EVENTS
============================================================ */
function initAuthEvents() {
    document.getElementById('loginBtn').addEventListener('click', doLogin);
    document.getElementById('signupBtn').addEventListener('click', doSignup);
    const onEnter = e => { if (e.key === 'Enter') doLogin(); };
    document.getElementById('emailInput').addEventListener('keydown', onEnter);
    document.getElementById('passwordInput').addEventListener('keydown', onEnter);
}

/* ============================================================
   HELPERS
============================================================ */
function findCheckbox(dayName) {
    return document.querySelector(`.day-card__check[data-day="${dayName}"]`);
}

function findSetRow(exName, setNumber) {
    return document.querySelector(`.set-row[data-exname="${cssEscape(exName)}"][data-set="${setNumber}"]`);
}

function cssEscape(str) {
    return String(str).replace(/["\\]/g, '\\$&');
}

function setSetRowChecked(checkBtn, checked) {
    checkBtn.classList.toggle('set-row__check--done', checked);
    checkBtn.setAttribute('aria-pressed', String(checked));
}

function calcDayTotalCarga(day) {
    let total = 0;
    day.exercicios.forEach(ex => {
        const count = parseInt(ex.series, 10);
        if (!count) return;
        for (let n = 1; n <= count; n++) {
            const done  = localStorage.getItem(`set_${ex.nome}_${n}_done`) === 'true';
            const carga = parseFloat(localStorage.getItem(`set_${ex.nome}_${n}_carga`));
            if (done && !isNaN(carga)) total += carga;
        }
    });
    return total;
}

function refreshDayTotal(day) {
    const el = document.querySelector(`[data-total="${day.dia}"]`);
    if (!el) return;
    const total = calcDayTotalCarga(day);
    el.textContent = `Carga total do treino: ${total.toLocaleString('pt-BR')} kg`;
}

function refreshIndicator(dia) {
    const el = document.querySelector(`[data-indicator="${dia}"]`);
    if (el) el.textContent = localStorage.getItem(`treino_${dia}`) === 'true' ? '✅' : '⬜';
}

function escapeAttr(str) {
    return String(str).replace(/"/g, '&quot;');
}

/* ============================================================
   DASHBOARD — Evolução
============================================================ */
async function loadDashboard() {
    renderBodyAvatar();

    if (!state.user || dashLoading) return;
    dashLoading = true;

    try {
        const since = new Date();
        since.setDate(since.getDate() - 59);
        const sinceStr = since.toISOString().split('T')[0];

        const { data: workouts, error: wErr } = await db
            .from('workouts')
            .select('id, workout_date, completed')
            .eq('user_id', state.user.id)
            .gte('workout_date', sinceStr)
            .order('workout_date', { ascending: true });

        if (wErr) throw wErr;

        renderHeatmap(workouts || []);
        renderWeeklyBars(workouts || []);

        const ids = (workouts || []).map(w => w.id);
        if (ids.length > 0) {
            const { data: sets, error: sErr } = await db
                .from('exercise_sets')
                .select('exercise_name, carga, workout_id')
                .in('workout_id', ids)
                .eq('completed', true)
                .not('carga', 'is', null);
            if (sErr) throw sErr;

            const dateMap = Object.fromEntries((workouts || []).map(w => [w.id, w.workout_date]));
            dashLogs = (sets || []).map(s => ({ ...s, workout_date: dateMap[s.workout_id] }));
        } else {
            dashLogs = [];
        }

        renderPRs(dashLogs);
        populateExerciseSelect(dashLogs);
        renderVolumeChart(dashLogs);

    } catch (err) {
        console.error('loadDashboard:', err);
        toast('⚠️ Erro ao carregar evolução');
    } finally {
        dashLoading = false;
    }
}

function renderHeatmap(workouts) {
    const container = document.getElementById('dashHeatmap');
    if (!container) return;

    const dateMap = {};
    workouts.forEach(w => { dateMap[w.workout_date] = w.completed ? 'done' : 'miss'; });

    const today   = new Date(TODAY_DATE);
    const todayDow = today.getDay();
    const currentMonday = new Date(today);
    currentMonday.setDate(today.getDate() - (todayDow === 0 ? 6 : todayDow - 1));

    const startMonday = new Date(currentMonday);
    startMonday.setDate(currentMonday.getDate() - 28);

    container.innerHTML = '';
    for (let i = 0; i < 35; i++) {
        const d = new Date(startMonday);
        d.setDate(startMonday.getDate() + i);
        const dateStr = d.toISOString().split('T')[0];
        const isFuture  = d > today;
        const isWeekend = d.getDay() === 0 || d.getDay() === 6;

        let cls = 'none';
        if (isFuture)                    cls = 'future';
        else if (dateMap[dateStr] === 'done') cls = 'done';
        else if (dateMap[dateStr] === 'miss') cls = 'miss';
        else if (isWeekend)              cls = 'rest';

        const cell = document.createElement('div');
        cell.className = `heatmap-cell heatmap-cell--${cls}`;
        cell.title = dateStr;
        container.appendChild(cell);
    }
}

function renderWeeklyBars(workouts) {
    const container = document.getElementById('dashBarChart');
    if (!container) return;

    const today    = new Date(TODAY_DATE);
    const todayDow = today.getDay();
    const currentMonday = new Date(today);
    currentMonday.setDate(today.getDate() - (todayDow === 0 ? 6 : todayDow - 1));

    const buckets = [];
    for (let w = 7; w >= 0; w--) {
        const mon = new Date(currentMonday);
        mon.setDate(currentMonday.getDate() - w * 7);
        const sun = new Date(mon);
        sun.setDate(mon.getDate() + 6);
        const mStr = mon.toISOString().split('T')[0];
        const sStr = sun.toISOString().split('T')[0];
        const label = w === 0 ? 'Esta' : w === 1 ? 'Ant.' :
            `${String(mon.getDate()).padStart(2,'0')}/${String(mon.getMonth()+1).padStart(2,'0')}`;
        buckets.push({ mStr, sStr, label, done: 0 });
    }

    workouts.filter(w => w.completed).forEach(w => {
        const b = buckets.find(b => w.workout_date >= b.mStr && w.workout_date <= b.sStr);
        if (b) b.done++;
    });

    container.innerHTML = buckets.map(({ label, done }) => `
        <div class="bar-col">
            <div class="bar-col__wrap">
                <div class="bar-col__fill" style="height:${Math.round((done/5)*100)}%"></div>
            </div>
            <span class="bar-col__val">${done}</span>
            <span class="bar-col__label">${label}</span>
        </div>
    `).join('');
}

function renderPRs(logs) {
    const container = document.getElementById('dashPRList');
    if (!container) return;

    if (!logs.length) {
        container.innerHTML = '<p class="dash-empty">Nenhuma carga registrada ainda. Registre cargas na aba Treino.</p>';
        return;
    }

    const prMap = {};
    logs.forEach(log => {
        const val = parseFloat(log.carga);
        if (isNaN(val)) return;
        if (!prMap[log.exercise_name] || val > prMap[log.exercise_name].val) {
            prMap[log.exercise_name] = { val, date: log.workout_date };
        }
    });

    const sorted = Object.entries(prMap)
        .sort((a, b) => b[1].val - a[1].val)
        .slice(0, 12);

    if (!sorted.length) {
        container.innerHTML = '<p class="dash-empty">Nenhuma carga numérica registrada ainda.</p>';
        return;
    }

    container.innerHTML = sorted.map(([name, { val, date }]) => `
        <div class="pr-row">
            <div class="pr-row__name">${name}</div>
            <div class="pr-row__right">
                <span class="pr-row__val">${val}kg</span>
                <span class="pr-row__date">${fmtDate(date)}</span>
            </div>
        </div>
    `).join('');
}

function populateExerciseSelect(logs) {
    const select = document.getElementById('dashExerciseSelect');
    if (!select) return;

    const exercises = [...new Set(logs.filter(l => !isNaN(parseFloat(l.carga))).map(l => l.exercise_name))].sort();
    const prev = select.value;

    select.innerHTML = '<option value="">Selecione um exercício</option>' +
        exercises.map(n => `<option value="${escapeAttr(n)}"${n === prev ? ' selected' : ''}>${n}</option>`).join('');

    if (prev && exercises.includes(prev)) renderLoadChart(prev, logs);

    select.onchange = () => {
        const ex = select.value;
        if (ex) renderLoadChart(ex, dashLogs);
        else clearLoadChart();
    };
}

function renderLoadChart(exerciseName, logs) {
    const pts = logs
        .filter(l => l.exercise_name === exerciseName && !isNaN(parseFloat(l.carga)))
        .sort((a, b) => a.workout_date.localeCompare(b.workout_date))
        .map(l => ({ value: parseFloat(l.carga), label: fmtDate(l.workout_date) }));

    drawLineChart('dashLineChart', 'dashLineEmpty', pts, {
        singleMsg: v => `1 registro: ${v}kg — treine mais vezes para ver a evolução`,
        emptyMsg: 'Nenhum registro para este exercício',
        valueSuffix: 'kg',
    });
}

function clearLoadChart() {
    drawLineChart('dashLineChart', 'dashLineEmpty', [], {
        emptyMsg: 'Selecione um exercício com carga registrada',
    });
}

function renderVolumeChart(logs) {
    const totals = {};
    logs.forEach(l => {
        const val = parseFloat(l.carga);
        if (isNaN(val)) return;
        totals[l.workout_date] = (totals[l.workout_date] || 0) + val;
    });

    const pts = Object.keys(totals).sort()
        .map(date => ({ value: totals[date], label: fmtDate(date) }));

    drawLineChart('dashVolumeChart', 'dashVolumeEmpty', pts, {
        singleMsg: v => `1 treino registrado: ${v}kg — treine mais vezes para ver a evolução`,
        emptyMsg: 'Nenhum volume registrado ainda. Marque séries como concluídas na aba Treino.',
        valueSuffix: 'kg',
    });
}

function drawLineChart(svgId, emptyId, pts, opts = {}) {
    const svg   = document.getElementById(svgId);
    const empty = document.getElementById(emptyId);
    if (!svg) return;

    if (pts.length < 2) {
        svg.innerHTML = '';
        if (empty) {
            empty.style.display = 'block';
            empty.textContent = pts.length === 1 && opts.singleMsg
                ? opts.singleMsg(pts[0].value)
                : (opts.emptyMsg || 'Nenhum registro disponível');
        }
        return;
    }

    if (empty) empty.style.display = 'none';

    const W = 300, H = 120, pX = 12, pY = 18, pB = 22;
    const cW = W - pX * 2, cH = H - pY - pB;
    const values = pts.map(p => p.value);
    const labels = pts.map(p => p.label);
    const minV = Math.min(...values), maxV = Math.max(...values);
    const rangeV = maxV - minV || 1;

    const toXY = (i) => ({
        x: pX + (i / (values.length - 1)) * cW,
        y: pY + cH - ((values[i] - minV) / rangeV) * cH,
    });

    const points = values.map((_, i) => { const p = toXY(i); return `${p.x},${p.y}`; });

    const areaPoints = [
        `${pX},${pY + cH}`,
        ...points,
        `${pX + cW},${pY + cH}`,
    ];

    const circles = values.map((_, i) => {
        const { x, y } = toXY(i);
        return `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="3.5" fill="var(--primary)" stroke="var(--bg)" stroke-width="1.5"/>`;
    }).join('');

    const maxI = values.indexOf(maxV);
    const { x: mX, y: mY } = toXY(maxI);
    const suffix = opts.valueSuffix || '';

    const edgeLabels = [0, values.length - 1].map(i => {
        const { x } = toXY(i);
        const anchor = i === 0 ? 'start' : 'end';
        return `<text x="${x.toFixed(1)}" y="${H - 4}" text-anchor="${anchor}" font-size="8.5" fill="var(--text-dim)">${labels[i]}</text>`;
    }).join('');

    svg.innerHTML = `
        <defs>
            <linearGradient id="ag-${svgId}" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stop-color="var(--primary)" stop-opacity="0.3"/>
                <stop offset="100%" stop-color="var(--primary)" stop-opacity="0.01"/>
            </linearGradient>
        </defs>
        <polygon points="${areaPoints.join(' ')}" fill="url(#ag-${svgId})"/>
        <polyline points="${points.join(' ')}" fill="none" stroke="var(--primary)" stroke-width="2.2"
                  stroke-linejoin="round" stroke-linecap="round"/>
        ${circles}
        ${edgeLabels}
        <text x="${mX.toFixed(1)}" y="${(mY - 8).toFixed(1)}" text-anchor="middle"
              font-size="9.5" font-weight="bold" fill="var(--primary)">${maxV}${suffix}</text>
    `;
}

function fmtDate(dateStr) {
    const d = new Date(dateStr + 'T12:00:00');
    return d.toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit' });
}

/* ============================================================
   SERVICE WORKER
============================================================ */
function registerSW() {
    if (!('serviceWorker' in navigator)) return;

    navigator.serviceWorker.register('sw-novo.js').then(reg => {
        reg.addEventListener('updatefound', () => {
            const newSW = reg.installing;
            newSW.addEventListener('statechange', () => {
                if (newSW.state === 'installed' && navigator.serviceWorker.controller) {
                    showUpdateBanner(newSW);
                }
            });
        });
    }).catch(err => console.warn('SW não registrado:', err));

    // Recarrega automaticamente quando o novo SW assume o controle
    let refreshing = false;
    navigator.serviceWorker.addEventListener('controllerchange', () => {
        if (!refreshing) { refreshing = true; location.reload(); }
    });
}

function showUpdateBanner(newSW) {
    const banner = document.createElement('div');
    banner.className = 'update-banner';
    banner.innerHTML =
        '<span>Nova versão disponível</span>' +
        '<button class="btn btn--primary btn--sm" id="updateBtn">Atualizar</button>';
    document.body.appendChild(banner);
    document.getElementById('updateBtn').addEventListener('click', () => {
        newSW.postMessage({ type: 'SKIP_WAITING' });
    });
}

/* ============================================================
   THEME
============================================================ */
const MOON_SVG = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
</svg>`;

const SUN_SVG = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="12" cy="12" r="5"/>
  <line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/>
  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
  <line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/>
  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
</svg>`;

function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    const icon = document.getElementById('themeIcon');
    if (icon) icon.outerHTML = (theme === 'light' ? MOON_SVG : SUN_SVG).replace('<svg', '<svg id="themeIcon"');
}

function initTheme() {
    const saved = localStorage.getItem('theme') ||
        (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');
    applyTheme(saved);
    document.getElementById('themeToggle').addEventListener('click', () => {
        const next = document.documentElement.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
        localStorage.setItem('theme', next);
        applyTheme(next);
    });
}

/* ============================================================
   INIT
============================================================ */
function init() {
    renderTreino();
    renderMacros();
    renderDieta();
    initTabs();
    initResetBtn();
    initAuthEvents();
    initProfile();
    initTheme();
    updateWeekProgress();
    checkSession();
    registerSW();
}

init();
