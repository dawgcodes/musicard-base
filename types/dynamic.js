function dynamic(arg1 = "#0E0E0E", arg2 = 260) {
  let color, radius;

  if (typeof arg1 === 'object') {
    color = arg1.color || "#0E0E0E";
    radius = arg1.radius || 260;
  } else {
    color = arg1;
    radius = arg2;
  }

  const clampedRadius = Math.min(radius, 260);

  return `<svg width="2367" height="520" viewBox="0 0 2367 520" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="2367" height="520" rx="${clampedRadius}" fill="${color}" />
</svg>`;
}

module.exports = dynamic