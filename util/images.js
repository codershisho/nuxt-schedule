function toSvg(image) {
  const blob = new Blob([image], { type: 'image/svg+xml' });
  const url = window.URL.createObjectURL(blob);
  return url;
}

export default {
  toSvg
}