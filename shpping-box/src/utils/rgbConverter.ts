/**
 * Converts hex color to RGB format
 * @param hex - Hex color string (e.g., "#ffffff" or "ffffff")
 * @returns RGB string format (e.g., "255, 255, 255")
 */
export const hexToRgb = (hex: string): string => {
  // Remove # if present
  const cleanHex = hex.replace('#', '');
  
  // Parse hex values
  const r = parseInt(cleanHex.substring(0, 2), 16);
  const g = parseInt(cleanHex.substring(2, 4), 16);
  const b = parseInt(cleanHex.substring(4, 6), 16);
  
  return `${r}, ${g}, ${b}`;
};

/**
 * Converts RGB string to hex format
 * @param rgb - RGB string format (e.g., "255, 255, 255")
 * @returns Hex color string (e.g., "#ffffff")
 */
export const rgbToHex = (rgb: string): string => {
  const [r, g, b] = rgb.split(',').map((val) => parseInt(val.trim(), 10));
  return `#${[r, g, b].map((x) => {
    const hex = x.toString(16);
    return hex.length === 1 ? '0' + hex : hex;
  }).join('')}`;
};

