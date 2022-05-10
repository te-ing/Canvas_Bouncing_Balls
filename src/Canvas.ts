interface ICanvas {
  $target: Element
}

export default function Canvas({ $target }: ICanvas) {
  const $Canvas = document.createElement("canvas");
  $target.appendChild($Canvas);
  const width = 1000;
  const height = 500;
  $Canvas.style.cssText = `width: ${width}px; height: ${height}px; border: 1px solid black;`; 
  const ctx = $Canvas.getContext("2d");
}
