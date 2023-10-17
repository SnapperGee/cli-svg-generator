# CLI SVG Generator

Generate an SVG file via an interactive command line interface.

The following properties of the generated SVG can be set via the interactive CLI:

1. 0 to 3 characters that are roughly centered in the generated SVG.
1. The color of the 0 to 3 characters.
1. The shape of the generated SVG.
1. And the fill color of the shape.

An SVG with a resolution of 300px by 200px will be generated and located at the
root of this package named `logo.svg`.

## Installation

```shell
npm i cli-svg-generator
```

## Usage

Running this package's `index.mjs` will initialize the interactive shell to
generate an SVG:

``` shell
node index.mjs
```

This will present the first prompt:

```shell
>>> Text:
```

0 to 3 characters are expected and will be roughly centered with in the SVG.

The second prompt is:

```shell
>>> Text color:
```

A color name or hex value beginning with a leading `'#'` character is expected.
An error message is displayed and the user is reprompted for input if an invalid
text color is inputted.

Next, 3 options are presented for the shape of the generated SVG:

```shell
>>> Shape: (Use arrow keys)
❯ circle
  square
  triangle

```

The up and down arrow and enter keys are used to make a selection.

The following prompt sets the generated SVG shape's fill color:

```shell
>>> Shape color:
```

Identical to the `Text color` prompt, A color name or hex value beginning with a
leading `'#'` character is expected. An error message is displayed and the user
is reprompted for input if an invalid text color is inputted.

The final prompt confirms the properties of the generated SVG:

```shell
textContent: "TRI"
textColor: "white"
shape: "triangle"
shapeColor: "black"

Create SVG with the above properties?: (Y/n)
```

A yes or no (or y or n) affirmative or negative response is expected. If an
affirmative input is given (yes or y or nothing, it defaults to yes), then the
SVG will be generated and located at the root of this package named `logo.svg`.

If a negative input is given (no or n), then the generated SVG properties can
be selected to be edited:

```shell
>>> Choose properties to edit: (Press <space> to select, <a> to toggle all, <i> to invert selection, and <enter> to proceed)
 ◉ textContent: ""
 ◯ textColor: "black"
❯◉ shape: "square"
 ◯ shapeColor: "white"
```

The selected properties will be prompted for again to override the previous
values and then confirmation for the new property values will be prompted again
until confirmation prompt is affirmatively answered.

## Package environment

### Structure

The source code for this package's deployable code and unit tests is located
within the `src/main/ts` and `src/test/ts` directories respectively.

<details>
  <summary>Directory structure tree of package::</summary>

```text
.
├── package.json
├── package-lock.json
├── README.md
├── src
│   ├── main
│   │   └── ts
│   │       ├── index.mts
│   │       └── lib
│   │           ├── prompt
│   │           │   ├── color.mts
│   │           │   ├── question.mts
│   │           │   └── validate-input.mts
│   │           └── shape
│   │               ├── abstract-shape.mts
│   │               ├── circle.mts
│   │               ├── shape-type.mts
│   │               ├── square.mts
│   │               ├── text.mts
│   │               └── triangle.mts
│   └── test
│       └── ts
│           ├── prompt
│           │   ├── color.test.mts
│           │   ├── question.test.mts
│           │   └── validate-input.test.mts
│           └── shape
│               ├── circle.test.mts
│               ├── shape-type.test.mts
│               ├── square.test.mts
│               └── triangle.test.mts
└── tsconfig.json
```

</details>

### Build script

The source code for this package is written in TypeScript and is contained
within the [`./src/main/ts`](./src/main/ts "Package source code") directory.
When it's built, it outputs an `index.mjs` and `lib` directory in the root of
this package. This `index.mjs` is the entry point of this package's script and
the generated `lib` directory contains the components used by this package's
script.

If the build output `index.mjs` and `lib` directories aren't present, they can
be built/generated via:

```bash
npm run build
```

### Tests

This package contains unit tests in the [`./src/test/ts`](./src/test/ts "Unit test source code")
directory. Test results are outputted to `stdout`. The tests can be run via:

```txt
npm test
```

---

### Miscellaneous package info

[![ISC license][ISC license shield]][ISC license clause]
[![GitHub][github shield]][github repo]
[![npm][npm shield]][npm website]
[![Mocha][mocha shield]][mocha website]
[![NodeJS][node shield]][node website]
![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white)

[ISC license shield]: https://img.shields.io/badge/License-ISC-blue.svg "ISC license"
[ISC license clause]: https://opensource.org/licenses/ISC "ISC license"
[github shield]: https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white "github"
[github repo]: https://github.com/SnapperGee/cli-svg-generator "github"
[npm shield]: https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white "npm"
[npm website]: https://www.npmjs.com/ "npm"
[node shield]: https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white "node"
[node website]: https://nodejs.org/en/about "node"
[mocha shield]: https://img.shields.io/badge/-mocha-%238D6748?style=for-the-badge&logo=mocha&logoColor=white "Mocha"
[mocha website]: https://mochajs.org/ "Mocha"
