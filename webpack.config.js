module.exports = {
    entry: "./src/echo.ts",
    output: {
        filename: "dist/echo.js",
        library: "Echo",
        libraryTarget: "commonjs2"
    },
    resolve: {
        // Add '.ts' and '.tsx' as a resolvable extension.
        extensions: [".ts", ".tsx", ".js"]
    },
    module: {
        loaders: [
            // all files with a '.ts' or '.tsx' extension will be handled by 'ts-loader'
            { test: /\.tsx?$/, loader: "babel-loader!ts-loader" }
        ]
    }
}
