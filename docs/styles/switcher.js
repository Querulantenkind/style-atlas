function applyStyle(styleName) {
  const link = document.getElementById("theme");
  if (!link) return;
  link.href = "styles/" + styleName + ".css";
}
