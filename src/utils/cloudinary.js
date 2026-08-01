/**
 * Helper to dynamically inject Cloudinary transformation parameters for auto-format (f_auto),
 * auto-quality (q_auto), and target width (w_<width>).
 * Transforms raw ~3MB images into ultra-compressed ~25KB WebP/AVIF images.
 */
export function getOptimizedCloudinaryUrl(url, width = 800, quality = 'auto') {
  if (!url || typeof url !== 'string') return url;
  if (!url.includes('res.cloudinary.com')) return url;
  
  // Avoid double transformation
  if (url.includes('/f_auto') || url.includes('/q_auto')) return url;

  const transformString = `f_auto,q_${quality},w_${width},c_limit`;
  return url.replace('/upload/', `/upload/${transformString}/`);
}
