const path = require('path');
module.exports = {
  entry: path.resolve(__dirname, 'src', 'index.js'),
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  },
    devServer: {
      contentBase: path.resolve(__dirname, 'public'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        }
      }, {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' }, //Importa os arquivos css da pasta src para dentro do index.html
          { loader: 'css-loader' }, // Nessário para os outros imports dentro do css, exemplo: imagens, fonts etc.
        ],
      }, {
        test: /.*\.(gif|png|jpe?g)$/i,
        use: {
          loader: 'file-loader'
        }
      }
    ]
  }
}