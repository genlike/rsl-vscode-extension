import {
    createDefaultModule, createDefaultSharedModule, DefaultSharedModuleContext, inject,
    LangiumServices, LangiumSharedServices, 
    // Module, PartialLangiumServices
} from 'langium';
import { RslGeneratedModule, RslGeneratedSharedModule } from './generated/module';
// import { RslValidator, registerValidationChecks } from './rsl-validator';

/**
 * Declaration of custom services - add your own service classes here.
 */
export type RslAddedServices = {
    // validation: {
    //     RslValidator: RslValidator
    // }
}

/**
 * Union of Langium default services and your custom services - use this as constructor parameter
 * of custom service classes.
 */
 export type RslServices = LangiumServices & RslAddedServices

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
export function createRslServices(context: DefaultSharedModuleContext): {
    shared: LangiumSharedServices,
    Rsl: RslServices
} {
    const shared = inject(
        createDefaultSharedModule(context),
        RslGeneratedSharedModule
    );
    const Rsl = inject(
        createDefaultModule({ shared }),
        RslGeneratedModule,
        // RslModule
    );
    shared.ServiceRegistry.register(Rsl);
    // registerValidationChecks(Rsl);
    return { shared, Rsl };
}
