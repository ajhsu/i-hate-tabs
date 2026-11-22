// Plays each demo video while it is on screen, and gives every animation a pause button.
const reduceMotion = window.matchMedia(
  '(prefers-reduced-motion: reduce)'
).matches;

for (const box of document.querySelectorAll('[data-motion]')) {
  const video = box.querySelector('video');
  const button = box.querySelector('.motion-toggle');
  // With reduced motion, CSS shows the animations as still pictures.
  if (!button || (reduceMotion && !video)) continue;

  let paused = reduceMotion;
  let visible = false;
  const render = () => {
    box.classList.toggle('is-paused', paused);
    button.textContent = paused ? 'Play' : 'Pause';
    button.setAttribute(
      'aria-label',
      paused ? 'Play the animation' : 'Pause the animation'
    );
    if (!video) return;
    if (!paused && visible) {
      video.play().catch(() => undefined);
    } else {
      video.pause();
    }
  };

  button.hidden = false;
  button.addEventListener('click', () => {
    paused = !paused;
    render();
  });
  new IntersectionObserver(
    ([entry]) => {
      visible = entry.isIntersecting;
      render();
    },
    { threshold: 0.25 }
  ).observe(box);
  render();
}
