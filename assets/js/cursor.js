export function initCursor() {
  const cur  = document.getElementById('cur');
  const curR = document.getElementById('cur-r');
  let mx = 0, my = 0, rx = 0, ry = 0;

  document.addEventListener('mousemove', e => {
    mx = e.clientX;
    my = e.clientY;
    cur.style.left = mx + 'px';
    cur.style.top  = my + 'px';
  });

  (function loop() {
    rx += (mx - rx) * .11;
    ry += (my - ry) * .11;
    curR.style.left = rx + 'px';
    curR.style.top  = ry + 'px';
    requestAnimationFrame(loop);
  })();
}