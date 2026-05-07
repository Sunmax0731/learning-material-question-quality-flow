# 仕様

## プロダクト範囲

- Domain: EducationLearning
- Repository: learning-material-question-quality-flow
- 主な公開先: GitHub Pages / GitHub Release
- Surface: static learning workflow app + CLI validation core

## 入力データ

必須項目:

- `id`
- `title`
- `materialSource`
- `questionType`
- `qualityRule`
- `reviewOwner`

推奨項目:

- `answerRationale`

## 判定

- 必須項目不足は `failed`。
- 推奨項目不足、`waiting`、`blocked`、`riskLevel=high` は `warning`。
- エラーも警告もない場合は `passed`。
