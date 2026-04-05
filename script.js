/**
 * プリスキンのパワアド育成ナビ - ロジック
 * 教本プリセット反映機能 追加版
 */

let selectedAbilities = [];
let holdTimer = null;
let holdInterval = null;

const STAT_DEFS = [
    { id: 'hp',      name: '生命力', key: 'hp',      max: 95 },
    { id: 'power',   name: 'パワー', key: 'power',   max: 90 },
    { id: 'magic',   name: '魔力',   key: 'magic',   max: 95 },
    { id: 'dex',     name: '器用さ', key: 'dex',     max: 95 },
    { id: 'defense', name: '耐久力', key: 'defense', max: 70 },
    { id: 'mental',  name: '精神力', key: 'mental',  max: 75 }
];

// 教本データ定義
const PRESET_DATA = {
    "ken_1": { stats: [18, 27, 4, 18, 18, 13], skills: [] },
    "ken_2": { stats: [36, 45, 4, 36, 31, 27], skills: ["物理攻撃○"] },
    "ken_3": { stats: [49, 58, 4, 45, 40, 36], skills: ["怪力"] },
    "yumi_1": { stats: [13, 27, 4, 27, 9, 18], skills: [] },
    "yumi_2": { stats: [27, 45, 4, 49, 13, 27], skills: ["狙い撃ち"] },
    "yumi_3": { stats: [40, 58, 4, 63, 18, 36], skills: ["怪力"] },
    "maho_1": { stats: [13, 4, 27, 27, 9, 18], skills: [] },
    "maho_2": { stats: [27, 4, 49, 45, 13, 27], skills: ["魔法攻撃○"] },
    "maho_3": { stats: [40, 4, 63, 58, 18, 36], skills: ["魔力増強"] },
    "mato_1": { stats: [18, 4, 27, 18, 13, 18], skills: [] },
    "mato_2": { stats: [36, 4, 45, 36, 27, 31], skills: ["魔力制御"] },
    "mato_3": { stats: [49, 4, 54, 49, 36, 40], skills: ["魔力増強"] }
};

const BASIC_COST_TABLE = {
    hp: [{max:9,muscle:5,agile:0,tech:0,intel:1,mental:4},{max:29,muscle:10,agile:0,tech:0,intel:3,mental:9},{max:39,muscle:15,agile:0,tech:0,intel:4,mental:13},{max:49,muscle:20,agile:0,tech:0,intel:6,mental:18},{max:59,muscle:25,agile:0,tech:0,intel:7,mental:23},{max:69,muscle:30,agile:0,tech:0,intel:8,mental:26},{max:79,muscle:34,agile:0,tech:0,intel:10,mental:32},{max:89,muscle:40,agile:0,tech:0,intel:12,mental:36},{max:95,muscle:50,agile:0,tech:0,intel:14,mental:46}],
    power: [{max:9,muscle:6,agile:1,tech:3,intel:0,mental:0},{max:29,muscle:12,agile:2,tech:7,intel:0,mental:0},{max:39,muscle:18,agile:3,tech:10,intel:0,mental:0},{max:49,muscle:24,agile:4,tech:14,intel:0,mental:0},{max:59,muscle:30,agile:5,tech:18,intel:0,mental:0},{max:69,muscle:36,agile:6,tech:20,intel:0,mental:0},{max:79,muscle:42,agile:7,tech:24,intel:0,mental:0},{max:90,muscle:48,agile:8,tech:28,intel:0,mental:0}],
    magic: [{max:9,muscle:0,agile:2,tech:0,intel:6,mental:2},{max:29,muscle:0,agile:5,tech:0,intel:12,mental:4},{max:39,muscle:0,agile:7,tech:0,intel:18,mental:6},{max:49,muscle:0,agile:10,tech:0,intel:24,mental:8},{max:59,muscle:0,agile:13,tech:30,intel:30,mental:10},{max:69,muscle:0,agile:14,tech:36,intel:36,mental:12},{max:79,muscle:0,agile:17,tech:42,intel:42,mental:12},{max:89,muscle:0,agile:20,tech:48,intel:48,mental:16},{max:95,muscle:0,agile:26,tech:60,intel:60,mental:20}],
    dex: [{max:9,muscle:0,agile:3,tech:6,intel:2,mental:0},{max:29,muscle:0,agile:6,tech:12,intel:3,mental:0},{max:39,muscle:0,agile:9,tech:18,intel:4,mental:0},{max:49,muscle:0,agile:12,tech:24,intel:6,mental:0},{max:59,muscle:0,agile:15,tech:30,intel:8,mental:0},{max:69,muscle:0,agile:18,tech:36,intel:8,mental:0},{max:79,muscle:0,agile:21,tech:42,intel:10,mental:0},{max:89,muscle:0,agile:24,tech:48,intel:12,mental:0},{max:95,muscle:0,agile:30,tech:60,intel:16,mental:0}],
    defense: [{max:9,muscle:1,agile:6,tech:3,intel:0,mental:0},{max:29,muscle:2,agile:11,tech:5,intel:0,mental:0},{max:39,muscle:3,agile:16,tech:7,intel:0,mental:0},{max:49,muscle:4,agile:22,tech:10,intel:0,mental:0},{max:59,muscle:5,agile:28,tech:13,intel:0,mental:0},{max:70,muscle:6,agile:33,tech:15,intel:0,mental:0}],
    mental: [{max:9,muscle:0,agile:0,tech:0,intel:3,mental:7},{max:29,muscle:0,agile:0,tech:0,intel:6,mental:12},{max:39,muscle:0,agile:0,tech:0,intel:9,mental:18},{max:49,muscle:0,agile:0,tech:0,intel:12,mental:24},{max:59,muscle:0,agile:0,tech:0,intel:16,mental:30},{max:69,muscle:0,agile:0,tech:0,intel:19,mental:36},{max:75,muscle:0,agile:0,tech:0,intel:22,mental:42}]
};

/** プリセット反映 */
function applyPreset(type) {
    const key = document.getElementById('preset-select').value;
    if (!key) { alert("教本を選択してください"); return; }
    const data = PRESET_DATA[key];

    // 能力値の反映
    STAT_DEFS.forEach((s, i) => {
        const inputId = type === 'start' ? `${s.id}-start` : `${s.id}-target-input`;
        const input = document.getElementById(inputId);
        if (input) {
            input.value = data.stats[i];
            if (type === 'target') updateRankDisplay(s.id, data.stats[i]);
        }
    });

    // 目標反映の場合のみ特殊能力も追加
    if (type === 'target') {
        data.skills.forEach(skillName => {
            const skillData = SPECIAL_ABILITIES.find(a => a.name === skillName);
            if (skillData && !selectedAbilities.find(a => a.name === skillName)) {
                // コツLv.1 (kotsu: 1) で追加
                selectedAbilities.push({ ...skillData, kotsu: 1 });
            }
        });
        renderSelected();
    }

    calculateTotal();
}

function updateRankDisplay(id, val) {
    const el = document.getElementById(`${id}-rank-display`);
    if (!el) return;
    let r = 'G';
    if (val >= 90) r = 'S'; else if (val >= 80) r = 'A'; else if (val >= 70) r = 'B';
    else if (val >= 60) r = 'C'; else if (val >= 50) r = 'D'; else if (val >= 40) r = 'E';
    else if (val >= 30) r = 'F'; else r = 'G';
    el.innerText = r; el.className = `rank-box rank-${r}`;
}

function init() {
    const sCon = document.getElementById('start-stats-container');
    const tCon = document.getElementById('target-stats-container');
    STAT_DEFS.forEach(stat => {
        const sDiv = document.createElement('div'); sDiv.className = 'stat-unit';
        sDiv.innerHTML = `<div class="stat-name-label">${stat.name.substring(0,1)}</div><div class="target-ctrl"><button class="btn-step" onmousedown="startHold('${stat.id}', 1, 'start')" ontouchstart="startHold('${stat.id}', 1, 'start')">▲</button><input type="number" class="num-input" id="${stat.id}-start" value="1" oninput="manualInput('${stat.id}', 'start')"><button class="btn-step" onmousedown="startHold('${stat.id}', -1, 'start')" ontouchstart="startHold('${stat.id}', -1, 'start')">▼</button></div>`;
        sCon.appendChild(sDiv);

        const tDiv = document.createElement('div'); tDiv.className = 'stat-unit';
        tDiv.innerHTML = `<div class="stat-name-label">${stat.name.substring(0,1)}<span class="diff-text" id="${stat.id}-diff">+0</span></div><div class="target-ctrl"><button class="btn-step" onmousedown="startHold('${stat.id}', 1, 'target')" ontouchstart="startHold('${stat.id}', 1, 'target')">▲</button><input type="number" class="num-input" id="${stat.id}-target-input" value="1" oninput="manualInput('${stat.id}', 'target')"><button class="btn-step" onmousedown="startHold('${stat.id}', -1, 'target')" ontouchstart="startHold('${stat.id}', -1, 'target')">▼</button></div><div id="${stat.id}-rank-display" class="rank-box rank-G">G</div><label class="kotsu-check"><input type="checkbox" id="${stat.id}-kotsu" onchange="calculateTotal()"><span>コツ</span></label><button class="btn-reset-single" onclick="resetSingleTarget('${stat.id}')">リセット</button>`;
        tCon.appendChild(tDiv);
    });
    window.addEventListener('mouseup', stopHold); window.addEventListener('touchend', stopHold);
    loadData();
}

function startHold(id, d, type) { changeValue(id, d, type); holdTimer = setTimeout(() => { holdInterval = setInterval(() => changeValue(id, d, type), 80); }, 400); }
function stopHold() { clearTimeout(holdTimer); clearInterval(holdInterval); }
function changeValue(id, d, type) {
    const el = document.getElementById(type === 'start' ? `${id}-start` : `${id}-target-input`);
    const sDef = STAT_DEFS.find(s => s.id === id);
    let val = (parseInt(el.value) || 1) + d;
    if (val < 1) val = 1; if (val > sDef.max) val = sDef.max;
    el.value = val;
    if (type === 'target') updateRankDisplay(id, val);
    syncValues(id); calculateTotal();
}
function manualInput(id, type) {
    const el = document.getElementById(type === 'start' ? `${id}-start` : `${id}-target-input`);
    const sDef = STAT_DEFS.find(s => s.id === id);
    if (el.value > sDef.max) el.value = sDef.max;
    if (type === 'target') updateRankDisplay(id, el.value);
    syncValues(id); calculateTotal();
}
function syncValues(id) {
    const s = document.getElementById(`${id}-start`);
    const t = document.getElementById(`${id}-target-input`);
    if (parseInt(t.value) < parseInt(s.value)) { t.value = s.value; updateRankDisplay(id, t.value); }
}

function calculateTotal() {
    let totals = { muscle: 0, agile: 0, tech: 0, intel: 0, mental: 0 };
    const kDisc = [0, 0.5, 0.6, 0.7, 0.8, 0.9];
    selectedAbilities.forEach(a => {
        const r = 1 - kDisc[a.kotsu || 0];
        Object.keys(totals).forEach(k => { if (a.costs[k]) totals[k] += Math.floor(a.costs[k] * r); });
    });
    STAT_DEFS.forEach(stat => {
        const sV = parseInt(document.getElementById(`${stat.id}-start`).value) || 1;
        const tV = parseInt(document.getElementById(`${stat.id}-target-input`).value) || 1;
        const rate = document.getElementById(`${stat.id}-kotsu`).checked ? 0.98 : 1.0;
        document.getElementById(`${stat.id}-diff`).innerText = `+${tV - sV}`;
        const tbl = BASIC_COST_TABLE[stat.key];
        for (let i = sV; i < tV; i++) {
            const set = tbl.find(s => i <= s.max) || tbl[tbl.length - 1];
            Object.keys(totals).forEach(k => { if (set[k]) totals[k] += Math.floor(set[k] * rate); });
        }
    });
    Object.keys(totals).forEach(k => { document.getElementById(`total-${k}`).innerText = totals[k].toLocaleString(); });
    saveData();
}

function getCostTags(costs, rate = 1.0) {
    const items = [{k:'muscle', c:'c-m', l:'筋'}, {k:'agile', c:'c-g', l:'敏'}, {k:'tech', c:'c-t', l:'技'}, {k:'intel', c:'c-i', l:'知'}, {k:'mental', c:'c-me', l:'精'}];
    return items.map(i => {
        const v = Math.floor((costs[i.k] || 0) * rate);
        return v > 0 ? `<span class="cost-tag ${i.c}">${i.l}${v}</span>` : '';
    }).join('');
}

function renderSelected() {
    const area = document.getElementById('selected-list');
    if (selectedAbilities.length === 0) { area.innerHTML = '<p style="text-align:center; font-size:0.75rem;">なし</p>'; return; }
    const kDisc = [0, 0.5, 0.6, 0.7, 0.8, 0.9];
    area.innerHTML = selectedAbilities.map((a, i) => {
        const r = 1 - kDisc[a.kotsu || 0];
        return `<div class="skill-container"><div class="skill-summary" onclick="toggleDetail('sel', ${i})"><div class="summary-top"><div class="skill-name-area"><span class="toggle-icon" id="sel-icon-${i}">▶</span>${a.name}</div><div class="skill-right" onclick="event.stopPropagation()"><select onchange="updateKotsu(${i}, this.value)">${[0,1,2,3,4,5].map(v => `<option value="${v}" ${a.kotsu==v?'selected':''}>L${v||'無'}</option>`).join('')}</select><button onclick="removeAbility('${a.name}')" style="color:#ff6b6b; border:none; background:none; font-size:1.2rem;">×</button></div></div><div class="inline-costs">${getCostTags(a.costs, r)}</div></div><div class="skill-detail" id="sel-detail-${i}" style="display:none;"><p>効果: ${a.effect}</p><p>条件: ${a.condition || 'なし'}</p></div></div>`;
    }).join('');
}

function searchInSim() {
    const q = document.getElementById('search-input').value.toLowerCase();
    const area = document.getElementById('search-results');
    area.innerHTML = '';
    SPECIAL_ABILITIES.filter(a => !q || a.name.toLowerCase().includes(q)).forEach((a, i) => {
        const div = document.createElement('div'); div.className = 'skill-container';
        div.innerHTML = `<div class="skill-summary" onclick="toggleDetail('search', ${i})"><div class="summary-top"><div class="skill-name-area"><span class="toggle-icon" id="search-icon-${i}">▶</span>${a.name}</div><button style="background:var(--story-accent); color:#fff; border:none; padding:4px 10px; border-radius:4px; font-weight:bold; font-size:0.75rem;" onclick="event.stopPropagation(); addAbility('${a.name}')">追加</button></div><div class="inline-costs">${getCostTags(a.costs)}</div></div><div class="skill-detail" id="search-detail-${i}" style="display:none;"><p>効果: ${a.effect}</p><p>条件: ${a.condition || 'なし'}</p></div>`;
        area.appendChild(div);
    });
}

function toggleDetail(p, i) {
    const d = document.getElementById(`${p}-detail-${i}`);
    const ic = document.getElementById(`${p}-icon-${i}`);
    const isH = d.style.display === 'none';
    d.style.display = isH ? 'block' : 'none';
    ic.style.transform = isH ? 'rotate(90deg)' : 'rotate(0deg)';
}

function addAbility(n) { const d = SPECIAL_ABILITIES.find(a => a.name === n); if (!d || selectedAbilities.find(a => a.name === n)) return; selectedAbilities.push({ ...d, kotsu: 0 }); renderSelected(); calculateTotal(); }
function updateKotsu(i, v) { selectedAbilities[i].kotsu = parseInt(v); calculateTotal(); renderSelected(); }
function removeAbility(n) { selectedAbilities = selectedAbilities.filter(a => a.name !== n); renderSelected(); calculateTotal(); }
function resetSingleTarget(id) { const sVal = document.getElementById(`${id}-start`).value; const tInput = document.getElementById(`${id}-target-input`); tInput.value = sVal; updateRankDisplay(id, sVal); document.getElementById(`${id}-kotsu`).checked = false; calculateTotal(); }
function resetAllStarts() { STAT_DEFS.forEach(s => document.getElementById(`${s.id}-start`).value = 1); calculateTotal(); }
function resetAllTargets() { STAT_DEFS.forEach(s => resetSingleTarget(s.id)); }
function resetAbilities() { selectedAbilities = []; renderSelected(); calculateTotal(); }

function copyShareURL() {
    const p = new URLSearchParams();
    STAT_DEFS.forEach(s => p.set(s.id === 'hp' ? 'hp' : s.id.substring(0, 1), document.getElementById(`${s.id}-target-input`).value));
    if (selectedAbilities.length > 0) p.set('s', selectedAbilities.map(a => encodeURIComponent(a.name)).join(','));
    const url = `${window.location.origin}${window.location.pathname}?${p.toString()}`;
    navigator.clipboard.writeText(url).then(() => alert("URLをコピーしました！"));
}

function saveData() {
    const data = { starts: STAT_DEFS.reduce((a, s) => ({...a, [s.id]: document.getElementById(`${s.id}-start`).value}), {}), targets: STAT_DEFS.reduce((a, s) => ({...a, [s.id]: document.getElementById(`${s.id}-target-input`).value}), {}), kotsu: STAT_DEFS.reduce((a, s) => ({...a, [s.id]: document.getElementById(`${s.id}-kotsu`).checked}), {}) };
    localStorage.setItem('pawaNaviData', JSON.stringify(data));
}

function loadData() {
    const params = new URLSearchParams(window.location.search);
    if (params.has('hp') || params.has('p') || params.has('s')) {
        STAT_DEFS.forEach(s => { const v = params.get(s.id === 'hp' ? 'hp' : s.id.substring(0, 1)); if (v) { document.getElementById(`${s.id}-target-input`).value = v; updateRankDisplay(s.id, v); } });
        const s = params.get('s'); if (s) { selectedAbilities = []; s.split(',').forEach(n => { const d = SPECIAL_ABILITIES.find(a => a.name === decodeURIComponent(n)); if (d) selectedAbilities.push({ ...d, kotsu: 0 }); }); renderSelected(); }
    } else {
        const saved = JSON.parse(localStorage.getItem('pawaNaviData'));
        if (saved) STAT_DEFS.forEach(s => { document.getElementById(`${s.id}-start`).value = saved.starts[s.id] || 1; document.getElementById(`${s.id}-target-input`).value = saved.targets[s.id] || 1; document.getElementById(`${s.id}-kotsu`).checked = saved.kotsu[s.id] || false; updateRankDisplay(s.id, saved.targets[s.id] || 1); });
    }
    calculateTotal();
}

window.onload = () => { init(); searchInSim(); };