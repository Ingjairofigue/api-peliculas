const app = require('./src/app');
const { syncDatabase } = require('./src/models');

const PORT = process.env.PORT || 3000;

syncDatabase().then(() => {
    app.listen(PORT, () => {
        console.log(` Servidor corriendo en http://localhost:${PORT}`);
    });
});