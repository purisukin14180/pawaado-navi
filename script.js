/**
 * プリスキンのパワアド育成ナビ - 育成シミュレーター ロジック
 * 最終更新: 2026/04/04
 * アンティーク・ストーリー風UI 完全版
 */

let selectedAbilities = [];

// ステータス定義（各項目のマックス値を反映）
const STAT_DEFS = [
    { id: 'hp',      name: '生命力', key: 'hp',      max: 95 },
    { id: 'power',   name: 'パワー', key: 'power',   max: 90 },
    { id: 'magic',   name: '魔力',   key: 'magic',   max: 95 },
    { id: 'dex',     name: '器用さ', key: 'dex',     max: 95 },
    { id: 'defense', name: '耐久力', key: 'defense', max: 70 },
    { id: 'mental',  name: '精神力', key: 'mental',  max: 75 }
];

// 基礎能力コストテーブル（提供された最新データ）
const BASIC_COST_TABLE = {
    hp: [{max:9,muscle:5,agile:0,tech:0,intel:1,mental:4},{max:29,muscle:10,agile:0,tech:0,intel:3,mental:9},{max:39,muscle:15,agile:0,tech:0,intel:4,mental:13},{max:49,muscle:20,agile:0,tech:0,intel:6,mental:18},{max:59,muscle:25,agile:0,tech:0,intel:7,mental:23},{max:69,muscle:30,agile:0,tech:0,intel:8,mental:26},{max:79,muscle:34,agile:0,tech:0,intel:10,mental:32},{max:89,muscle:40,agile:0,tech:0,intel:12,mental:36},{max:95,muscle:50,agile:0,tech:0,intel:14,mental:46}],
    power: [{max:9,muscle:6,agile:1,tech:3,intel:0,mental:0},{max:29,muscle:12,agile:2,tech:7,intel:0,mental:0},{max:39,muscle:18,agile:3,tech:10,intel:0,mental:0},{max:49,muscle:24,agile:4,tech:14,intel:0,mental:0},{max:59,muscle:30,agile:5,tech:18,intel:0,mental:0},{max:69,muscle:36,agile:6,tech:20,intel:0,mental:0},{max:79,muscle:42,agile:7,tech:24,intel:0,mental:0},{max:90,muscle:48,agile:8,tech:28,intel:0,mental:0}],
    magic: [{max:9,muscle:0,agile:2,tech:0,intel:6,mental:2},{max:29,muscle:0,agile:5,tech:0,intel:12,mental:4},{max:39,muscle:0,agile:7,tech:0,intel:18,mental:6},{max:49,muscle:0,agile:10,tech:0,intel:24,mental:8},{max:59,muscle:0,agile:13,tech:0,intel:30,mental:10},{max:69,muscle:0,agile:14,tech:0,intel:36,mental:12},{max:79,muscle:0,agile:17,tech:0,intel:42,mental:12},{max:89,muscle:0,agile:20,tech:0,intel:48,mental:16},{max:95,muscle:0,agile:26,tech:0,intel:60,mental:20}],
    dex: [{max:9,muscle:0,agile:3,tech:6,intel:2,mental:0},{max:29,muscle:0,agile:6,tech:12,intel:3,mental:0},{max:39,muscle:0,agile:9,tech:18,intel:4,mental:0},{max:49,muscle:0,agile:12,tech:24,intel:6,mental:0},{max:59,muscle:0,agile:15,tech:30,intel:8,mental:0},{max:69,muscle:0,agile:18,tech:36,intel:8,mental:0},{max:79,muscle:0,agile:21,tech:42,intel:10,mental:0},{max:89,muscle:0,agile:24,tech:48,intel:12,mental:0},{max:95,muscle:0,agile:30,tech:60,intel:16,mental:0}],
    defense: [{max:9,muscle:1,agile:6,tech:3,intel:0,mental:0},{max:29,muscle:2,agile:11,tech:5,intel:0,mental:0},{max:39,muscle:3,agile:16,tech:7,intel:0,mental:0},{max:49,muscle:4,agile:22,tech:10,intel:0,mental:0},{max:59,muscle:5,agile:28,tech:13,intel:0,mental:0},{max:70,muscle:6,agile:33,tech:15,intel:0,mental:0}],
    mental: [{max:9,muscle:0,agile:0,tech:0,intel:3,mental:7},{max:29,muscle:0,agile:0,tech:0,intel:6,mental:12},{max:39,muscle:0,agile:0,tech:0,intel:9,mental:18},{max:49,muscle:0,agile:0,tech:0,intel:12,mental:24},{max:59,muscle:0,agile:0,tech:0,intel:16,mental:30},{max:69,muscle:0,agile:0,tech:0,intel:19,mental:36},{max:75,muscle:0,agile:0,tech:0,intel:22,mental:42}]
};

/**
 * ランク文字を取得
 */
function getRankLabel(v) {
    if (v >= 90) return 'S';
    if (v >= 80) return 'A';
    if (v >= 70) return 'B';
    if (v >= 60) return 'C';
    if (v >= 50) return 'D';
    if (v >= 40) return 'E';
    if (v >= 30) return 'F';
    if (v >= 10) return 'G';
    return 'G';
}

/**
 * 初期化処理
 */
function init() {
    const startContainer = document.getElementById('start-stats-container');
    const targetContainer = document.getElementById('target-stats-container');
    if (!startContainer || !targetContainer) return;

    startContainer.innerHTML = ''; 
    targetContainer.innerHTML = '';

    STAT_DEFS.forEach(stat => {
        // 現在値ユニット
        const startDiv = document.createElement('div');
        startDiv.className = 'stat-unit';
        startDiv.innerHTML = `
            <div class="stat-name-label">${stat.name.substring(0,1)}</div>
            <input type="number" class="num-input" id="${stat.id}-start" value="1" min="1" max="${stat.max}" onchange="syncAndCalc('${stat.id}')">
        `;
        startContainer.appendChild(startDiv);

        // 目標値ユニット
        const targetDiv = document.createElement('div');
        targetDiv.className = 'stat-unit';
        targetDiv.innerHTML = `
            <div class="stat-name-label">${stat.name.substring(0,1)}<span class="diff-text" id="${stat.id}-diff">+0</span></div>
            <div class="target-ctrl">
                <button class="btn-step" onclick="changeTarget('${stat.id}', 1)">▲</button>
                <input type="number" class="num-input" id="${stat.id}-target-input" value="1" min="1" max="${stat.max}" oninput="manualInputTarget('${stat.id}')">
                <button class="btn-step" onclick="changeTarget('${stat.id}', -1)">▼</button>
            </div>
            <div id="${stat.id}-rank-display" class="rank-box">G</div>
            <label class="kotsu-check">
                <input type="checkbox" id="${stat.id}-kotsu" onchange="calculateTotal()">
                <span>コツ</span>
            </label>
            <button class="btn-reset-single" onclick="resetSingleTarget('${stat.id}')">リセット</button>
        `;
        targetContainer.appendChild(targetDiv);
    });
}

/**
 * 目標値の直接入力処理
 */
function manualInputTarget(id) {
    const statDef = STAT_DEFS.find(s => s.id === id);
    const inputEl = document.getElementById(`${id}-target-input`);
    let val = parseInt(inputEl.value) || 0;
    
    if (val > statDef.max) val = statDef.max;
    
    document.getElementById(`${id}-rank-display`).innerText = getRankLabel(val);
    calculateTotal();
}

/**
 * ＋ーボタンでの変更処理
 */
function changeTarget(id, diff) {
    const statDef = STAT_DEFS.find(s => s.id === id);
    const inputEl = document.getElementById(`${id}-target-input`);
    const startVal = parseInt(document.getElementById(`${id}-start`).value) || 1;
    
    let newVal = (parseInt(inputEl.value) || 1) + diff;
    if (newVal < startVal) newVal = startVal;
    if (newVal > statDef.max) newVal = statDef.max;
    
    inputEl.value = newVal;
    document.getElementById(`${id}-rank-display`).innerText = getRankLabel(newVal);
    calculateTotal();
}

/**
 * 計算メインロジック
 */
function calculateTotal() {
    let totals = { muscle: 0, agile: 0, tech: 0, intel: 0, mental: 0 };
    const kotsuDiscount = [0, 0.5, 0.6, 0.7, 0.8, 0.9]; // 特能コツ割引率

    // 特殊能力の計算
    selectedAbilities.forEach(a => {
        const rate = 1 - kotsuDiscount[a.kotsu];
        Object.keys(totals).forEach(key => {
            if (a.costs[key]) totals[key] += Math.floor(a.costs[key] * rate);
        });
    });

    // 基礎ステータスの計算
    STAT_DEFS.forEach(stat => {
        const startVal = parseInt(document.getElementById(`${stat.id}-start`).value) || 1;
        const targetVal = parseInt(document.getElementById(`${stat.id}-target-input`).value) || 1;
        const hasKotsu = document.getElementById(`${stat.id}-kotsu`).checked;
        const rate = hasKotsu ? 0.98 : 1.0;

        // 差分表示の更新
        document.getElementById(`${stat.id}-diff`).innerText = `+${targetVal - startVal}`;
        
        const table = BASIC_COST_TABLE[stat.key];
        for (let i = startVal; i < targetVal; i++) {
            // 現在の数値に対応するコスト設定を検索
            const setting = table.find(s => i <= s.max) || table[table.length - 1];
            Object.keys(totals).forEach(key => {
                if (setting[key]) totals[key] += Math.floor(setting[key] * rate);
            });
        }
    });

    // 経験点バナーの数値を更新
    Object.keys(totals).forEach(key => {
        const el = document.getElementById(`total-${key}`);
        if (el) el.innerText = totals[key].toLocaleString();
    });
}

/**
 * 現在値変更時のバリデーション
 */
function syncAndCalc(id) {
    const statDef = STAT_DEFS.find(s => s.id === id);
    let startVal = parseInt(document.getElementById(`${id}-start`).value) || 1;
    
    if (startVal > statDef.max) {
        startVal = statDef.max;
        document.getElementById(`${id}-start`).value = startVal;
    }

    const targetInput = document.getElementById(`${id}-target-input`);
    if (parseInt(targetInput.value) < startVal) {
        targetInput.value = startVal;
        document.getElementById(`${id}-rank-display`).innerText = getRankLabel(startVal);
    }
    calculateTotal();
}

/**
 * 個別リセット
 */
function resetSingleTarget(id) {
    const start = document.getElementById(`${id}-start`).value;
    const target = document.getElementById(`${id}-target-input`);
    target.value = start;
    document.getElementById(`${id}-rank-display`).innerText = getRankLabel(start);
    document.getElementById(`${id}-kotsu`).checked = false;
    calculateTotal();
}

/**
 * 全リセット・一括操作
 */
function resetAllStarts() { STAT_DEFS.forEach(s => { document.getElementById(`${s.id}-start`).value = 1; }); calculateTotal(); }
function resetAllTargets() { STAT_DEFS.forEach(s => resetSingleTarget(s.id)); }
function resetAbilities() { selectedAbilities = []; renderSelected(); calculateTotal(); }

/**
 * 特殊能力検索ロジック
 */
function searchInSim() {
    const query = document.getElementById('search-input').value.trim().toLowerCase();
    const resultsArea = document.getElementById('search-results');
    const fCat = document.getElementById('fCat').value;
    const fAttr = document.getElementById('fAttr').value;
    const fJob = document.getElementById('fJob').value;

    resultsArea.innerHTML = '';
    
    const filtered = SPECIAL_ABILITIES.filter(a => {
        const targetText = `${a.name} ${a.effect} ${a.condition}`.toLowerCase();
        return (!query || targetText.includes(query)) &&
               (!fCat || a.category === fCat) &&
               (!fAttr || (a.condition && a.condition.includes(fAttr))) &&
               (!fJob || (a.condition && a.condition.includes(fJob)));
    });

    // アンティーク調UIに合わせてADDボタンの色などを調整
    filtered.forEach(a => {
        const div = document.createElement('div');
        div.style = "display:flex; justify-content:space-between; align-items:center; padding:8px; border-bottom:1px solid #9e7a5c; font-size:0.75rem; color:#f4ece0;";
        div.innerHTML = `
            <span>${a.name}</span>
            <button onclick="addAbility('${a.name}')" style="background:#d35400; border:none; border-radius:2px; padding:3px 8px; font-weight:bold; cursor:pointer; color:#fff; font-size:0.65rem; box-shadow: 1px 1px 0 rgba(0,0,0,0.3);">追加</button>
        `;
        resultsArea.appendChild(div);
    });
}

function addAbility(name) {
    const data = SPECIAL_ABILITIES.find(a => a.name === name);
    if (!data || selectedAbilities.find(a => a.name === name)) return;
    selectedAbilities.push({ ...data, kotsu: 0 });
    renderSelected();
    calculateTotal();
}

function renderSelected() {
    const area = document.getElementById('selected-list');
    area.innerHTML = selectedAbilities.length === 0 ? '<p style="text-align:center; color:#c9ad88; font-size:0.7rem; padding:10px;">修得予定の能力はありません</p>' : '';
    
    // 選択済み特能の色味をアンティークUIに調整
    selectedAbilities.forEach((a, i) => {
        const div = document.createElement('div');
        div.className = 'selected-item';
        div.style = "display:flex; justify-content:space-between; align-items:center; color:#f4ece0; font-size:0.75rem;";
        div.innerHTML = `
            <strong>${a.name}</strong>
            <div style="display:flex; gap:6px; align-items:center;">
                <select onchange="updateKotsu(${i}, this.value)" style="font-size:0.65rem; background:#604028; color:#f4ece0; border:1px solid #9e7a5c; border-radius: 2px;">
                    <option value="0">コツ無</option>
                    <option value="1">Lv1</option>
                    <option value="2">Lv2</option>
                    <option value="3">Lv3</option>
                    <option value="4">Lv4</option>
                    <option value="5">Lv5</option>
                </select>
                <button onclick="removeAbility('${a.name}')" style="color:#ff6b6b; border:none; background:none; font-weight:bold; cursor:pointer; font-size: 1rem;">×</button>
            </div>
        `;
        area.appendChild(div);
    });
}

function updateKotsu(i, v) { 
    selectedAbilities[i].kotsu = parseInt(v); 
    calculateTotal(); 
}

function removeAbility(n) { 
    selectedAbilities = selectedAbilities.filter(a => a.name !== n); 
    renderSelected(); 
    calculateTotal(); 
}

// ページ読み込み完了時に初期化
window.onload = () => { 
    init(); 
    calculateTotal(); 
    searchInSim(); 
};