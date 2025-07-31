const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Total de participantes y configuración de colores
const TOTAL_PARTICIPANTS = 500;
const COLORS = [
  'rojo','azul','verde','amarillo','naranjo',
  'morado','cafe','blanco','negro','rosado',
  'cyan','fucsia'
];

// Cálculo de cuotas: 500/12 = 41 base, 8 colores con +1
const base = Math.floor(TOTAL_PARTICIPANTS / COLORS.length);
const remainder = TOTAL_PARTICIPANTS % COLORS.length;
const shuffled = [...COLORS].sort(() => 0.5 - Math.random());
const quotas = {};
COLORS.forEach(c => quotas[c] = base);
for (let i = 0; i < remainder; i++) {
  quotas[shuffled[i]]++;
}

// Contadores en memoria
const counts = {};
COLORS.forEach(c => counts[c] = 0);

// Servir archivos estáticos desde la raíz
app.use(express.static(path.join(__dirname, '/')));

// Endpoint para asignar color
app.get('/api/assign', (req, res) => {
  const available = COLORS.filter(c => counts[c] < quotas[c]);
  if (available.length === 0) {
    return res.status(400).json({ error: 'No quedan cupos disponibles' });
  }
  const color = available[Math.floor(Math.random() * available.length)];
  counts[color]++;
  res.json({ color, counts });
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Tómbola corriendo en http://localhost:${PORT}`);
});
