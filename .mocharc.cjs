"use strict";

module.exports = {
    "check-leaks": true,
    "node-option": [
        "loader=ts-node/esm"
    ],
    package: "./package.json",
    recursive: true,
    require: "ts-node/register",
    spec: "./src/test/ts/**/*.test.mts",
    ui: "tdd"
}
