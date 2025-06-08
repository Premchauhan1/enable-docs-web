module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      // Ignore source-map-loader warnings
      webpackConfig.ignoreWarnings = [
        function ignoreSourcemapsloaderWarnings(warning) {
          return (
            warning.module &&
            warning.module.resource &&
            (
              warning.module.resource.includes('node_modules/lucide-react') ||
              warning.message.includes('source-map-loader')
            )
          )
        }
      ];
      
      return webpackConfig;
    }
  }
};