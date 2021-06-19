const path = require("path");
const resolve = dir => path.join(__dirname, dir);

module.exports = {
    publicPath: "/",
    runtimeCompiler: true,
    devServer: {
        // open: true,
        // port: 8080,
        // hotOnly: true,
        // proxy: {
        //     target: "",
        //     ws: true,
        //     changOrigin: true,
        //     pathRewrite: {
        //         "^api": ""
        //     }
        // }
    },

    chainWebpack: config => {
        config.resolve.alias
            .set("api", resolve("src/api"))
            .set("css", resolve("src/assets/css"))
            .set("base", resolve("src/components/base"))
            .set("common", resolve("src/components/common"))
    }
}