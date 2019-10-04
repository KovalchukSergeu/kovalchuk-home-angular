import { fromEvent } from 'rxjs';
import { map, tap, switchMap, takeUntil } from 'rxjs/operators';

const canvas$ = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const mouseDown$ = fromEvent(canvas$, 'mousedown');
const mouseUp$ = fromEvent(canvas$, 'mouseup');
const mouseMove$ = fromEvent(canvas$, 'mousemove');

mouseDown$.pipe(
  tap((event) => {
    ctx.strokeStyle = 'green';
    ctx.lineWidth = 7;
    ctx.beginPath();
    ctx.moveTo(event.offsetX, event.offsetY);
  }),
  switchMap(
    (event) => mouseMove$.pipe(
      map(event => {
          return {x: event.offsetX, y: event.offsetY}
      }
  ),
  takeUntil(mouseUp$))
  )
).subscribe(
  (pos) => {
    console.log('pos', pos);
    ctx.lineTo(pos.x, pos.y);
    ctx.stroke();
  }
)

const clear$ = fromEvent(document.getElementById('clear'), 'click')

clear$.subscribe(() => {
  const canvas = document.querySelector('canvas')
  canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height)
})