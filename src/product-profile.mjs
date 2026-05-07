export const productProfile = {
  "repository": "learning-material-question-quality-flow",
  "title": "教材取り込み・問題化・品質チェックフロー",
  "domain": "EducationLearning",
  "hostApp": null,
  "rank": 88,
  "tier": "P3",
  "ideaNo": 2,
  "overview": "教材取り込み、タグ検索、問題化、暗記カード生成、テンプレ管理、教材品質チェック、ノードフローを一連化する。",
  "problem": "教材を作る、品質を確認する、復習に回す工程が分かれると継続しづらい。",
  "differentiation": "読む、問題化、品質確認、復習化を小さな再実行可能フローとして保存する。",
  "publish": "GitHub Pages / GitHub Release",
  "surface": "static learning workflow app + CLI validation core",
  "entity": "learning material flow item",
  "requiredFields": [
    "id",
    "title",
    "materialSource",
    "questionType",
    "qualityRule",
    "reviewOwner"
  ],
  "warningField": "answerRationale",
  "qcdsManualTestCap": "S-",
  "qcdsTarget": "A-",
  "benchmarkRepos": [
    "Sunmax0731/listing-delivery-asset-checklist",
    "Sunmax0731/codex-remote-android",
    "Sunmax0731/release-output-check-flow",
    "Sunmax0731/movie-telop-transcriber"
  ]
};
