/**
 * プリスキンのパワアド育成ナビ - 特殊能力（必殺技）
 * 最終更新: 2026/04/04
 */

const HISSATSU_SKILLS = [
    { 
        name: "夢幻の水矢Lv.1", 
        category: "必殺技・虹", 
        costs: { muscle: 0, agile: 0, tech: 0, intel: 0, mental: 0 }, 
        condition: "器用さE40。弓使いかつ水属性。", 
        effect: "敵後衛全体に威力43の物理ダメージ。さらに睡眠状態を付与する。1ターン継続。" 
    },
    { 
        name: "夢幻の水矢Lv.2", 
        category: "必殺技・虹", 
        costs: { muscle: 0, agile: 0, tech: 0, intel: 0, mental: 0 }, 
        condition: "器用さC60。弓使いかつ水属性。", 
        effect: "敵後衛全体に威力63の物理ダメージ。さらに睡眠状態を付与する。1ターン継続。" 
    }
];