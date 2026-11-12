import { r as verifyOptions, s as isESMImportedImage, t as baseService } from "./service_MIrNnTRl.mjs";
// node_modules/astro/dist/assets/services/noop.js
var noopService = {
	...baseService,
	propertiesToHash: ["src"],
	async validateOptions(options) {
		if (isESMImportedImage(options.src) && options.src.format === "svg") options.format = "svg";
		else delete options.format;
		verifyOptions(options);
		return options;
	},
	async transform(inputBuffer, transformOptions) {
		return {
			data: inputBuffer,
			format: transformOptions.format
		};
	}
};
export { noopService as default };
