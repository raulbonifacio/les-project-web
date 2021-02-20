module.exports = {
	entry: ["./src/assets/js/app.js", "./src/assets/sass/app.scss", "./src/assets/images/favicon.ico"],
	output: {
		filename: "main.js",
		path: __dirname + "/src/public/assets",
		publicPath: __dirname + "/src/public/assets",
	},
	module: {
		rules: [
			{
				test: /\.s[ac]ss$/i,
				use: ["style-loader", "css-loader", "sass-loader"],
			},
			{
				test: /\.(png|jp?g|svg|)$/,
				use: [
					{
						loader: "file-loader",
						options: { outputPath: "images", publicPath: "/assets/images" },
					},
				],
			},
			{
				test: /favicon\.*/,
				use: "file-loader?name=[name].[ext]",
			},
			{
				test: /\.(eot|woff|woff2|ttf)$/,
				use: [
					{
						loader: "file-loader",
						options: { outputPath: "fonts", publicPath: "/assets/fonts" },
					},
				],
			},
		],
	},
};
