# Apostrophe 3 demo and test project

## Get started

Install dependencies: `npm install`

## Running the project

Run `npm run dev` to build the Apostrophe UI and start the site up. Remember, this is during alpha development, so we're all in "dev mode." The `dev` script will watch for saves in client-side CSS and Javascript and trigger a build and page refresh if they are detected. It will also restart the app when server-side code is saved.

## что из второй версии уже интегрировано

CLI () https://www.npmjs.com/package/apostrophe-cli
headless https://www.npmjs.com/package/apostrophe-headless

piecesexport/import
https://www.npmjs.com/package/apostrophe-pieces-export
https://www.npmjs.com/package/apostrophe-pieces-import

???super admin https://www.npmjs.com/package/apostrophe-users-superadmin

## что есть в 2 версии, но не факт что совместимо с 3

поддержка мультисайтовости https://www.npmjs.com/package/apostrophe-multisite

ужасный интерфейс, но с зачатками того, что есть в 3

web hooks https://www.npmjs.com/package/apostrophe-external-notifications

набор пермишнов и воркфлоу публикации
https://www.npmjs.com/package/apostrophe-workflow

elasticsearch для поиска
https://www.npmjs.com/package/apostrophe-elasticsearch

tiptap как редактор https://www.npmjs.com/package/apostrophe-tiptap-rich-text-widgets

виджет форм https://www.npmjs.com/package/apostrophe-forms
виджет ссылок https://www.npmjs.com/package/apostrophe-link-widgets
пермассылки на контент в Rich https://www.npmjs.com/package/apostrophe-rich-text-permalinks

структура страницы https://www.npmjs.com/package/apostrophe-area-structure

## Making it your own

This boilerplate is designed so you can install and start running it right away. If you are starting a project that will go into production one day, there are a few things you should be sure to check:

- [ ] **Update the shortname.** The `shortname` option in `app.js` is used for the database name (unless another is given in the `@apostrophecms/db` module). You should change this to an appropriate project name before you start adding any users or content you would like to keep.
- [ ] **Update the Express.js session secret.** The secret is set to `undefined` initially in the `modules/@apostrophecms/express/index.js` file. You should update this to a unique string.
- [ ] **Decide if you want hot reloading on.** This boilerplate uses nodemon to restart the app when files are changed. In `modules/apostrophecms/asset/index.js` there is an option enabled to refresh the browser on restart. If you like this, do nothing. If you don't, remove the option or set it to `false`. The option has no effect when the app is in production.
- [ ] **Update the `className` options in `app.js`.** This option is set for core widget types to provide CSS styling hooks. It is namespaced with `bp-` for "boilerplate." You will likely want to update that to match your general CSS class naming practices.

## You really want the docs

Right now, [all the juicy info is in the A3 docs](https://a3.docs.apostrophecms.org), so head over there and start reading! This boilerplate project is a fun introduction to the UI, but you'll want to know more to really try it out.

