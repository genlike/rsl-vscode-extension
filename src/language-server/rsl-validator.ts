// import { ValidationAcceptor, ValidationChecks } from 'langium';
// import { RslAstType } from './generated/ast';
import type { RslServices } from './rsl-module';

/**
 * Register custom validation checks.
 */
export function registerValidationChecks(services: RslServices) {
    // const registry = services.validation.ValidationRegistry;
    // const validator = services.validation.RslValidator;
    // const checks: ValidationChecks<RslAstType> = {
    //     Person: validator.checkPersonStartsWithCapital
    // };
    // registry.register(checks, validator);
}

/**
 * Implementation of custom validations.
 */
// export class RslValidator {

//     checkPersonStartsWithCapital(person: Person, accept: ValidationAcceptor): void {
//         if (person.name) {
//             const firstChar = person.name.substring(0, 1);
//             if (firstChar.toUpperCase() !== firstChar) {
//                 accept('warning', 'Person name should start with a capital.', { node: person, property: 'name' });
//             }
//         }
//     }
// }
