const path = require("path");

module.exports = {
  style: {
    postcss: {
      plugins: [require("tailwindcss"), require("autoprefixer")],
    },
  },
  webpack: {
    configure: (webpackConfig) => {
      webpackConfig.module.rules.map((rule) => {
        if (rule.oneOf) {
          rule.oneOf.map((r) => {
            if (
              typeof r.loader === "string" &&
              r.loader.includes("babel-loader") &&
              !r.hasOwnProperty("include")
            ) {
              r.exclude = [
                r.exclude,
                path.dirname(require.resolve("mapbox-gl/package.json")),
              ];
            }

            return r;
          });
        }

        return rule;
      });

      return webpackConfig;
    },
  },
};
