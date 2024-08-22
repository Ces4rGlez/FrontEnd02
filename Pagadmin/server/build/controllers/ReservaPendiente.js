const session = require('express-session');
const mysql = require('mysql2');
const path = require('path');

const app = express();
const port = 3000;

// Configurar la sesión
app.use(session({
  secret: 'your_secret_key',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false } // Establecer 'true' si usas HTTPS
}));

// Configurar EJS como motor de plantillas
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Configurar la conexión a la base de datos
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'your_password',
  database: 'your_database'
});

// Conectar a la base de datos
db.connect(err => {
  if (err) throw err;
  console.log('Conectado a la base de datos');
});

// Middleware para servir archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Ruta para el historial de reservas
app.get('/reservas', (req, res) => {
  if (req.session.emailUser && req.session.rol === 1) {
    const query = 'SELECT * FROM reservas WHERE estado = 2';
    db.query(query, (err, results) => {
      if (err) throw err;
      res.render('reservas', {
        reservas: results,
        email: req.session.emailUser
      });
    });
  } else {
    res.redirect('/login');
  }
});

// Ruta para el login (ejemplo simple)
app.get('/login', (req, res) => {
  res.render('login');
});

app.post('/login', (req, res) => {
  // Aquí iría tu lógica de autenticación
  // Por simplicidad, asumimos que el usuario se autentica correctamente
  req.session.emailUser = 'user@example.com';
  req.session.rol = 1;
  res.redirect('/reservas');
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor iniciado en http://localhost:${port}`);
});