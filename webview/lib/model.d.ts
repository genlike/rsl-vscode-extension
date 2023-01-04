/********************************************************************************
 * Copyright (c) 2020 TypeFox and others.
 *
 * This program and the accompanying materials are made available under the
 * terms of the Eclipse Public License v. 2.0 which is available at
 * http://www.eclipse.org/legal/epl-2.0.
 *
 * This Source Code may also be made available under the following Secondary
 * Licenses when the conditions for such availability set forth in the Eclipse
 * Public License v. 2.0 are satisfied: GNU General Public License, version 2
 * with the GNU Classpath Exception which is available at
 * https://www.gnu.org/software/classpath/license.html.
 *
 * SPDX-License-Identifier: EPL-2.0 OR GPL-2.0 WITH Classpath-exception-2.0
 ********************************************************************************/
import { Action, CreatingOnDrag, RectangularNode, RectangularPort, SChildElement, SGraphFactory, SModelElementSchema, SParentElement, SRoutableElement } from 'sprotty';
export declare class StatesModelFactory extends SGraphFactory {
    protected initializeChild(child: SChildElement, schema: SModelElementSchema, parent?: SParentElement): SChildElement;
}
export declare class StatesNode extends RectangularNode {
    canConnect(routable: SRoutableElement, role: string): boolean;
}
export declare class CreateTransitionPort extends RectangularPort implements CreatingOnDrag {
    createAction(id: string): Action;
}
//# sourceMappingURL=model.d.ts.map