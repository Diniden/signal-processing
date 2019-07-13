# Signal Processing

This contains interesting signal processing

## Quick start

```
npm run dev
```

Go to localhost: 8080

## Deploying

The dev process also builds the deploy files. The project is already set up to simply commit changes to commit the
library distribution files.

```
npm run dev
```

## The API

### Perlin Noise

```javascript
const perlin = new Perlin({
  // Dimensions of the data array the perlin will be in
  width: 1024,
  height: 1024,
  // How much blurring is done to combine octaves together
  blendPasses: 5,
  // Octaves are expected feature sizes [width, height]. Smaller features create more details in the noise, while
  // octaves closer to the noise data size creates larger features.
  octaves: [[16, 64], [128, 16], [128, 128], [256, 256], [512, 512]],
  // This is the range the value will output as for each perlin data cell
  valueRange: [0, 1]
});

// This causes the perlin noise to populate the data in the perlin noise object. This can be called many times but if
// the data is already generated, will not regenerate again.
perlin.generateOnce();
// This will always cause the perlin noise to generate another randomized data set.
perlin.generate();
// The results of the perlin noise resides here
perlin.data;

// This takes a sample of the perlin noise at a location within the dataset. If the threshold is included, the absolute
// values below the threshold get zero'ed out.
perlin.sample(
  x,
  y,
  width,
  height,
  threshold
);

// Alter the options used when constructing this generator. Run generate() after this to update the data
perlin.update(options);

// Renders a canvas to the document to view the contents of the perlin noise
perlin.debug(threshold);
```

### Gaussian blur

```javascript
// Makes a new gaussian blur object. The kernal determines how far the blur will retrieve a feature to average into
// the current data cell. The number of passes will determine the quality of the blur.
mediumBlur = new GaussianBlur({
  kernalSize: 5,
  passes: 3
});

// Applies the blur to a given numerical dataset (number[][])
mediumBlur.generate(data);
```

### Pascal Triangle

```javascript
// Generates a pascal triangle [[1], [1, 1], [1, 2, 1], ...]
new PascalTriangle(levels);
```
