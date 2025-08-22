<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Tómbola 1–20</title>
  <style>
    :root { --prim:#0a7cff; --bg:#0f1220; --card:#171a2b; --muted:#8b93a7; }
    * { box-sizing: border-box; }
    body {
      margin: 0; font-family: system-ui, Arial, sans-serif;
      background: radial-gradient(1000px 600px at 50% -200px, #1d2340, #0b0e1a), var(--bg);
      color: #fff; min-height: 100vh; display: grid; place-items: center; padding: 24px;
    }
    .app { width: min(960px, 92vw); }
    .head {
      display: flex; align-items: center; justify-content: space-between; gap: 12px; margin-bottom: 16px;
    }
    h1 { margin: 0; font-size: clamp(20px, 3vw, 28px); font-weight: 700; letter-spacing: .3px; }
    .controls { display: flex; gap: 8px; flex-wrap: wrap; }
    button {
      appearance: none; border: 0; padding: 12px 16px; border-radius: 12px;
      background: var(--prim); color: #fff; font-weight: 700; cursor: pointer;
      transition: transform .05s ease, filter .15s ease; box-shadow: 0 6px 24px rgba(10,124,255,.3);
    }
    button:active { transform: translateY(1px); }
    button.secondary { background: #2a2f49; box-shadow: none; }
    .board {
      background: linear-gradient(180deg, #1a1f37, #15182b); border: 1px solid #262b46;
      border-radius: 16px; padding: 20px; display: grid; gap: 16px;
      grid-template-columns: 1fr 320px;
    }
    @media (max-width: 800px) { .board { grid-template-columns: 1fr; } }
    .bignum {
      display: grid; place-items: center; height: 220px; border-radius: 16px;
      background: radial-gradient(700px 300px at 50% -120px, rgba(10,124,255,.18), transparent),
                  linear-gradient(180deg, #14182a, #101326);
      border: 1px solid #263055; position: relative; overflow: hidden;
    }
    .bignum .value { font-size: clamp(72px, 10vw, 140px); font-weight: 900; line-height: 1; }
    .bignum .tag { position: absolute; top: 10px; left: 12px; font-size: 12px; color: var(--muted); letter-spacing: .12em; text-transform: uppercase; }
    .list {
      background: #101427; border: 1px solid #222849; border-radius: 14px; padding: 14px;
      display: grid; grid-template-columns: repeat(5, 1fr); gap: 10px;
    }
    .chip {
      height: 44px; border-radius: 999px; display: grid; place-items: center; font-weight: 800;
      color: #c6cbe0; background: #1a203a; border: 1px solid #2a325c; transition: .2s ease;
    }
    .chip.marked { color: #fff; background: linear-gradient(180deg, #0a7cff, #0865d0);
      border-color: #2d7fff; box-shadow: 0 8px 24px rgba(10,124,255,.35); transform: translateY(-1px);
    }
    .status { color: var(--muted); font-size: 13px; }
    .side {
      background: #101427; border: 1px solid #222849; border-radius: 14px; padding: 14px; display: grid; gap: 12px;
    }
    .log {
      height: 160px; overflow: auto; padding: 10px; background:#0b0e1d; border:1px solid #1b2141; border-radius:10px; font-family: ui-monospace, SFMono-Regular, Menlo, monospace; font-size: 13px;
    }
    .badge { display:inline-block; padding:4px 8px; border-radius:999px; background:#21274a; color:#b9c0dc; font-size:12px; }
    .footer { margin-top: 12px; display:flex; justify-content: space-between; align-items:center; color:#9aa3bf; font-size:12px; }
    .hidden { display: none !important; }
  </style>
</head>
<body>
  <div class="app">
    <div class="head">
      <h1>🎰 Tómbola 1–20</h1>
      <div class="controls">
        <button id="btnSortear">Sortear número</button>
        <button id="btnReiniciar" class="secondary" title="Borra el historial y re-habilita todos los números">Reiniciar</button>
      </div>
    </div>

    <div class="board">
      <section>
        <div class="bignum">
          <div class="tag">Último número</div>
          <div id="valor" class="value">--</div>
        </div>

        <div style="display:flex; justify-content: space-between; align-items:center; margin-top:12px;">
          <div class="status"><span id="countLeft">20</span> disponibles · <span id="countUsed">0</span> sorteados</div>
          <span id="doneBadge" class="badge hidden">Completado</span>
        </div>

        <div id="lista" class="list" aria-live="polite"></div>
      </section>

      <aside class="side">
        <div>
          <strong>Historial</strong>
          <div id="log" class="log" aria-live="polite"></div>
        </div>
        <div>
          <strong>Opciones</strong>
          <div style="display:flex; gap:8px; align-items:center; margin-top:6px;">
            <label style="display:flex; gap:6px; align-items:center; font-size:14px; color:#c7cbe0;">
              <input type="checkbox" id="repetir" /> Permitir repetir números
            </label>
          </div>
        </div>
      </aside>
    </div>

    <div class="footer">
      <span>No requiere internet. Todo corre en tu navegador.</span>
      <span id="hint" class="hidden">Tip: presiona espacio para sortear.</span>
    </div>
  </div>

  <script>
    // --- Estado
    const rango = 20;
    let disponibles = Array.from({length: rango}, (_,i)=>i+1);
    let usados = [];
    let permitirRepetidos = false;

    // --- UI refs
    const $lista = document.getElementById('lista');
    const $valor = document.getElementById('valor');
    const $btnSortear = document.getElementById('btnSortear');
    const $btnReiniciar = document.getElementById('btnReiniciar');
    const $log = document.getElementById('log');
    const $countLeft = document.getElementById('countLeft');
    const $countUsed = document.getElementById('countUsed');
    const $doneBadge = document.getElementById('doneBadge');
    const $repetir = document.getElementById('repetir');
    const $hint = document.getElementById('hint');

    // Accesibilidad: mostrar hint en desktop
    if (matchMedia('(pointer:fine)').matches) $hint.classList.remove('hidden');

    // --- Render lista
    function renderLista() {
      $lista.innerHTML = '';
      for (let n=1; n<=rango; n++) {
        const div = document.createElement('div');
        div.className = 'chip';
        div.id = 'chip-' + n;
        div.textContent = n;
        if (usados.includes(n)) div.classList.add('marked');
        $lista.appendChild(div);
      }
      actualizarContadores();
    }

    function actualizarContadores() {
      $countLeft.textContent = permitirRepetidos ? rango : (rango - usados.length);
      $countUsed.textContent = usados.length;
      if (!permitirRepetidos && usados.length === rango) $doneBadge.classList.remove('hidden');
      else $doneBadge.classList.add('hidden');
    }

    function rng(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function sortear() {
      if (!permitirRepetidos && usados.length === rango) {
        $valor.textContent = '✓';
        logLine('Todos los números fueron sorteados.');
        actualizarContadores();
        return;
      }
      let n;
      if (permitirRepetidos) {
        n = rng(1, rango);
      } else {
        const i = rng(0, disponibles.length - 1);
        n = disponibles[i];
        disponibles.splice(i, 1);
        usados.push(n);
        document.getElementById('chip-'+n)?.classList.add('marked');
      }
      $valor.textContent = n;
      logLine('Salió: ' + n);
      actualizarContadores();
      flashBig();
    }

    function flashBig() {
      $valor.animate([
        { transform:'scale(1)', filter:'brightness(1)' },
        { transform:'scale(1.16)', filter:'brightness(1.4)' },
        { transform:'scale(1)', filter:'brightness(1)' }
      ], { duration: 300, easing: 'cubic-bezier(.2,.8,.2,1)' });
    }

    function logLine(text) {
      const time = new Date().toLocaleTimeString();
      $log.textContent = `[${time}] ${text}\n` + $log.textContent;
    }

    function reiniciar() {
      disponibles = Array.from({length: rango}, (_,i)=>i+1);
      usados = [];
      $valor.textContent = '--';
      renderLista();
      logLine('Reiniciado.');
    }

    // --- Eventos
    $btnSortear.addEventListener('click', sortear);
    $btnReiniciar.addEventListener('click', reiniciar);
    $repetir.addEventListener('change', (e)=>{
      permitirRepetidos = e.target.checked;
      actualizarContadores();
      logLine('Repetidos: ' + (permitirRepetidos? 'permitidos':'no permitidos'));
    });
    document.addEventListener('keydown', (e)=>{ if (e.code === 'Space') { e.preventDefault(); sortear(); }});

    // Init
    renderLista();
  </script>
</body>
</html>
