# linter

Step 1 -
git archive --format=tar --remote=git@github.com:fahad-kenko/mylinter.git HEAD | tar xf -

Step 2- Add the devdependencies, commands from the package-sample.json, for example:
npm i -D eslint prettier eslint-plugin-prettier eslint-config-prettier babel-eslint lint-staged husky

Step 3- Run npx mrm lint-staged

Step 4- Run npx install-peerdeps --dev eslint-config-airbnb-base
