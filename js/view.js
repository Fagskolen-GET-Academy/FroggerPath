function updateView() {
  const boardEl = document.getElementById("board");
  boardEl.style.gridTemplateColumns = `repeat(${colCount}, 40px)`;

  boardEl.innerHTML = map
    .map((cellValue, index) => {
      const cls = getCellClass(cellValue);
      const isFrog = index === frogIndex;
      const isPath = showPath && path.includes(index);
      return `
          <div class="cell ${cls} ${isFrog ? "frog" : ""} ${isPath ? "pathHint" : ""}">
            ${getCellIcon(cellValue, isFrog)}
          </div>
        `;
    })
    .join("");

  document.getElementById("meta").innerHTML = `
        <div><b>Frog index:</b> <code>${frogIndex}</code></div>
        <div><b>Path step:</b> <code>${pathStep}</code> / <code>${Math.max(0, path.length - 1)}</code></div>
        <div><b>Path length:</b> <code>${path.length}</code></div>
      `;
}

function getCellClass(v) {
  if (v === 1) return "water";
  if (v === 2) return "rock";
  if (v === 3) return "goal";
  return "safe";
}

function getCellIcon(v, isFrog) {
  if (isFrog) return "🐸";
  if (v === 1) return "🌊";
  if (v === 2) return "🪨";
  if (v === 3) return "🏁";
  return "";
}
