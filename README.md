# Мой сайт

Простой личный сайт на HTML, CSS и JavaScript — учебный проект для практики Git и GitHub.

## Структура

- `index.html` — главная страница (о себе, проекты, контакты)
- `style.css` — стили, со светлой и тёмной темой
- `script.js` — переключатель темы и год в подвале

## Как открыть локально

Просто откройте `index.html` в браузере — сайт не требует сервера или сборки.

## Практика с Git и GitHub

Репозиторий уже инициализирован и содержит первый коммит. Дальше — ваша очередь:

1. Отредактируйте текст в `index.html` (замените «Моё имя», email, добавьте свои проекты).
2. Сохраните изменения коммитом:
   ```
   git add .
   git commit -m "Обновил информацию о себе"
   ```
3. Создайте пустой репозиторий на github.com и подключите его:
   ```
   git remote add origin https://github.com/username/my-site.git
   git branch -M main
   git push -u origin main
   ```
4. Дальше меняйте сайт через ветки:
   ```
   git switch -c feature/projects
   ```
   внесите правки, закоммитьте, `git push -u origin feature/projects`, откройте Pull Request на GitHub и слейте его в `main`.
5. (Опционально) Включите **GitHub Pages** в настройках репозитория (Settings → Pages, ветка `main`, папка `/`) — сайт станет доступен по ссылке вида `https://username.github.io/my-site/`.
# test
