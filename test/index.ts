import * as signal from '../src';

function ready(fn: Function) {
  if (document.readyState !== 'loading') {
    fn();
  } else if (document.addEventListener) {
    document.addEventListener('DOMContentLoaded', () => {
      fn();
    });
  } else {
    (document as any).attachEvent('onreadystatechange', function() {
      if (document.readyState !== 'loading') fn();
    });
  }
}

async function start() {
  const perlin = new signal.PerlinNoise({
    width: 256,
    height: 256,
    blendPasses: 3,
    octaves: [[16, 64], [128, 16], [128, 128], [256, 256], [512, 512]],
    valueRange: [0, 1],
  });

  await perlin.generate();

  perlin.debug();
}

// Wait for the document to be ready before executing start up logic
ready(start);
