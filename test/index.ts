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

function start() {
  new signal.GaussianBlur({
    kernalSize: 9,
    passes: 2,
  });
}

// Wait for the document to be ready before executing start up logic
ready(start);
