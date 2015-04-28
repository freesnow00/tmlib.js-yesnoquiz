/*
 * constant.js
 */

// 読み込む画像, 音
var ASSETS = {
    // image
    'correct': 'images/correct.png',
    'incorrect': 'images/incorrect.png',
    // se
    'correct_se': 'sounds/correct.mp3',
    'incorrect_se': 'sounds/incorrect.mp3',
    // bgm
    'bgm': 'sounds/bgm.m4a',
};

// 問題のリスト
var QUESTIONS = [
    {
        text: '「ハッカー」とは「不正行為を行う人」\nのことである',
        answer: false,
    },
    {
        text: '1+1*-(1+10)=-10',
        answer: true,
    },
    {
        text: '福井県は中部地方に属する',
        answer: true,
    },
    {
        text: 'マクドナルドのロゴマークは、\nアルファベットの「Ｍ」である。',
        answer: false,
    },
    {
        text: '地上で働いているアリは、\nおばあさんアリである。',
        answer: true,
    },
];

// シート名
var SHEET_NAME = 'yesno_quiz';
