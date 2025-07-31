// Mapeo de colores a HEX
const colorMap = {
  rojo:    '#DC3545',
  azul:    '#007BFF',
  verde:   '#28A745',
  amarillo:'#FFC107',
  naranjo: '#FD7E14',
  morado:  '#6F42C1',
  cafe:    '#6C757D',
  blanco:  '#FFFFFF',
  negro:   '#343A40',
  rosado:  '#E83E8C',
  cyan:    '#17A2B8',
  fucsia:  '#DA1884'
};

const die = document.getElementById('die');
const lbl = document.getElementById('teamLabel');
const btn = document.getElementById('assignBtn');

btn.addEventListener('click', async () => {
  try {
    const res = await fetch('/api/assign');
    if (!res.ok) {
      const err = await res.json();
      return alert(err.error);
    }
    const { color } = await res.json();
    die.style.background = colorMap[color];
    die.style.borderColor = (color === 'azul' ? '#00FFFF' : 'transparent');
    lbl.textContent = `Equipo: ${color}`;
    lbl.style.color = colorMap[color];
  } catch (e) {
    alert('Error de conexión. Intenta de nuevo.');
  }
});
