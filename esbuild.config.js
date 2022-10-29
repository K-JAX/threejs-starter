#!/usr/bin/env node

import esbuildServe from "esbuild-serve";

esbuildServe(
	{
		logLevel: "info",
		entryPoints: ["src/script.js"],
		bundle: true,
		outfile: "build/script.js",
	},
	{ root: "build" }
);
