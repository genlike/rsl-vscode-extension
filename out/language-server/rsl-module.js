"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createRslServices = void 0;
const langium_1 = require("langium");
const module_1 = require("./generated/module");
/**
 * Dependency injection module that overrides Langium default services and contributes the
 * declared custom services. The Langium defaults can be partially specified to override only
 * selected services, while the custom services must be fully specified.
 */
// export const RslModule: Module<RslServices, PartialLangiumServices & RslAddedServices> = {
//     validation: {
//         RslValidator: () => new RslValidator()
//     }
// };
/**
 * Create the full set of services required by Langium.
 *
 * First inject the shared services by merging two modules:
 *  - Langium default shared services
 *  - Services generated by langium-cli
 *
 * Then inject the language-specific services by merging three modules:
 *  - Langium default language-specific services
 *  - Services generated by langium-cli
 *  - Services specified in this file
 *
 * @param context Optional module context with the LSP connection
 * @returns An object wrapping the shared services and the language-specific services
 */
function createRslServices(context) {
    const shared = (0, langium_1.inject)((0, langium_1.createDefaultSharedModule)(context), module_1.RslGeneratedSharedModule);
    const Rsl = (0, langium_1.inject)((0, langium_1.createDefaultModule)({ shared }), module_1.RslGeneratedModule);
    shared.ServiceRegistry.register(Rsl);
    // registerValidationChecks(Rsl);
    return { shared, Rsl };
}
exports.createRslServices = createRslServices;
//# sourceMappingURL=rsl-module.js.map