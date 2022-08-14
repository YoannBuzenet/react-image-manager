- Add css file import for crop lib in \_app.tsx

- Add css file for file input file

- Add css for pagination (import "../module/style/pagination.css";)

- Ajouter document pour react-jss (https://github.com/vercel/next.js/blob/deprecated-main/examples/with-react-jss/pages/_document.js)
- npm i babel-plugin-styled-components
- npm i axios
- npm install react-paginate
- npm i uuid
- npm i --save-dev @types/uuid

todo gallery

- composant card "image"

todo
découpler le code pour que ça matche avec sharp (mettre des conditions par exemple, et indiquer dans le readme pourquoi on a mis ça)
documenter la max width de l'image et comment modifier ça, coté sharp y compris
ajouter callback de failure on upload size too small OU afficher l'erreur dans le pop up

TO do plus tard

- On peut zoom et rotate l'image
- On peut upload des compo custom dans l'image uploader avec leurs propres règles pour isDisabled

Définir les props obligatoires du module
si module upload activé, alors urlUpload obligatoire
