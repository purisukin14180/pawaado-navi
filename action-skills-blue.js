/**
 * アクションスキル（青のみ）
 * 参照ファイル：特能 (9).xlsx - 青アクション.csv
 */
const ACTION_SKILLS_BLUE = [
  {"name": "火炎斬り", "category": "アクション・青", "costs": {"muscle": 221, "agile": 79, "tech": 125, "intel": 0, "mental": 0}, "effect": "敵前衛1体に威力70の物理ダメージ。初回発動ターン数：3。再発動ターン数：4。", "condition": "剣士／火属性／パワーF20"},
  {"name": "真空斬り", "category": "アクション・青", "costs": {"muscle": 221, "agile": 79, "tech": 125, "intel": 0, "mental": 0}, "effect": "敵前衛1体に威力70の物理ダメージ。初回発動ターン数：3。再発動ターン数：4。", "condition": "剣士／風属性／パワーF20"},
  {"name": "水斬撃", "category": "アクション・青", "costs": {"muscle": 224, "agile": 80, "tech": 126, "intel": 0, "mental": 0}, "effect": "敵前衛1体に威力70の物理ダメージ。初回発動ターン数：3。再発動ターン数：4。", "condition": "剣士／水属性／パワーF25"},
  {"name": "ファイアエイム", "category": "アクション・青", "costs": {"muscle": 125, "agile": 0, "tech": 204, "intel": 192, "mental": 0}, "effect": "敵前衛1体に威力70の物理ダメージ。初回発動ターン数：3。再発動ターン数：4。", "condition": "弓使い／火属性／器用さF20"},
  {"name": "エアショット", "category": "アクション・青", "costs": {"muscle": 125, "agile": 0, "tech": 204, "intel": 96, "mental": 0}, "effect": "敵前衛1体に威力70の物理ダメージ。初回発動ターン数：3。再発動ターン数：4。", "condition": "弓使い／風属性／器用さF20"},
  {"name": "クラッシュアロー", "category": "アクション・青", "costs": {"muscle": 125, "agile": 0, "tech": 204, "intel": 96, "mental": 0}, "effect": "敵前衛1体に威力70の物理ダメージ。初回発動ターン数：3。再発動ターン数：4。", "condition": "弓使い／水属性／器用さF20"},
  {"name": "ファイヤウィンド", "category": "アクション・青", "costs": {"muscle": 0, "agile": 0, "tech": 23, "intel": 193, "mental": 210}, "effect": "敵前衛1体に威力70の魔法ダメージ。初回発動ターン数：3。再発動ターン数：4。", "condition": "魔法使い／火属性／魔力F20"},
  {"name": "ウィンド", "category": "アクション・青", "costs": {"muscle": 0, "agile": 0, "tech": 23, "intel": 193, "mental": 210}, "effect": "敵前衛1体に威力70の魔法ダメージ。初回発動ターン数：3。再発動ターン数：4。", "condition": "魔法使い／風属性／魔力F20"},
  {"name": "マジカルウォーター", "category": "アクション・青", "costs": {"muscle": 0, "agile": 0, "tech": 23, "intel": 193, "mental": 210}, "effect": "敵前衛1体に威力70の魔法ダメージ。初回発動ターン数：3。再発動ターン数：4。", "condition": "魔法使い／水属性／魔力F20"},
  {"name": "燃焼拳", "category": "アクション・青", "costs": {"muscle": 0, "agile": 57, "tech": 147, "intel": 221, "mental": 0}, "effect": "敵前衛1体に威力70の魔法ダメージ。初回発動ターン数：3。再発動ターン数：4。", "condition": "魔闘士／火属性／魔力F20"},
  {"name": "風流拳", "category": "アクション・青", "costs": {"muscle": 0, "agile": 57, "tech": 147, "intel": 221, "mental": 0}, "effect": "敵前衛1体に威力70の魔法ダメージ。初回発動ターン数：3。再発動ターン数：4。", "condition": "魔闘士／風属性／魔力F20"},
  {"name": "水流拳", "category": "アクション・青", "costs": {"muscle": 0, "agile": 47, "tech": 123, "intel": 184, "mental": 0}, "effect": "敵前衛1体に威力70の魔法ダメージ。初回発動ターン数：3。再発動ターン数：4。", "condition": "魔闘士／水属性／魔力F20"},
  {"name": "炎の盾", "category": "アクション・青", "costs": {"muscle": 71, "agile": 184, "tech": 0, "intel": 0, "mental": 170}, "effect": "自身の物理攻撃耐性を4％アップ。さらに魔法攻撃耐性を4％アップ。初回発動ターン数：3。再発動ターン数：4。", "condition": "重戦士／火属性／耐久力F20"},
  {"name": "風の盾", "category": "アクション・青", "costs": {"muscle": 71, "agile": 184, "tech": 0, "intel": 0, "mental": 170}, "effect": "自身の物理攻撃耐性を4％アップ。さらに魔法攻撃耐性を4％アップ。初回発動ターン数：3。再発動ターン数：4。", "condition": "重戦士／風属性／耐久力F20"},
  {"name": "シールドブレード", "category": "アクション・青", "costs": {"muscle": 71, "agile": 184, "tech": 0, "intel": 0, "mental": 170}, "effect": "自身の物理攻撃耐性を3％アップ。さらに魔法攻撃耐性を3％アップ。敵前衛1体に威力25の物理ダメージを2回与える。初回発動ターン数：3。再発動ターン数：4。", "condition": "重戦士／水属性／耐久力F20"},
  {"name": "ファイアヒール", "category": "アクション・青", "costs": {"muscle": 0, "agile": 0, "tech": 23, "intel": 193, "mental": 210}, "effect": "HP割合が最も低い味方1人に威力35のHP回復。初回発動ターン数：3。再発動ターン数：4。", "condition": "僧侶／火属性／魔力F20"},
  {"name": "ウィンドヒール", "category": "アクション・青", "costs": {"muscle": 0, "agile": 0, "tech": 23, "intel": 193, "mental": 210}, "effect": "HP割合が最も低い味方1人に威力35のHP回復。初回発動ターン数：3。再発動ターン数：4。", "condition": "僧侶／風属性／魔力F20"},
  {"name": "アクアヒール", "category": "アクション・青", "costs": {"muscle": 0, "agile": 0, "tech": 23, "intel": 193, "mental": 210}, "effect": "HP割合が最も低い味方1人に威力35のHP回復。初回発動ターン数：3。再発動ターン数：4。", "condition": "僧侶／水属性／魔力F20"}
];