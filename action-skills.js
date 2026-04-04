/**
 * プリスキンのパワアド育成ナビ - 特殊能力（アクションスキル）
 * 最終更新: 2026/04/04
 */

const ACTION_SKILLS = [
    { 
        name: "クラッシュアロー", 
        category: "アクションスキル・青", 
        costs: { muscle: 125, agile: 0, tech: 204, intel: 96, mental: 0 }, 
        condition: "器用さF20。弓使いかつ水属性。", 
        effect: "敵前衛1体に威力70の物理ダメージ。初回発動ターン数:3。再発動ターン数:4。" 
    },
    { 
        name: "真空斬り", 
        category: "アクションスキル・青", 
        costs: { muscle: 221, agile: 79, tech: 125, intel: 0, mental: 0 }, 
        condition: "調査中", 
        effect: "物理ダメージスキル" 
    },
    { 
        name: "カウンタースタンスLv.2", 
        category: "アクションスキル・青", 
        costs: { muscle: 0, agile: 0, tech: 0, intel: 0, mental: 0 }, 
        condition: "器用さD50.精神力40。弓使いかつ水属性。", 
        effect: "自身に反撃状態を付与する。2ターン継続。反撃発生時に攻撃してきた相手に対して威力38の物理ダメージ。" 
    }
];