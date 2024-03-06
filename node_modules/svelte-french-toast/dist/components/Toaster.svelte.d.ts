import { SvelteComponentTyped } from "svelte";
import type { ToastOptions, ToastPosition } from '../core/types';
declare const __propDef: {
    props: {
        reverseOrder?: boolean | undefined;
        position?: ToastPosition | undefined;
        toastOptions?: ToastOptions | undefined;
        gutter?: number | undefined;
        containerStyle?: string | undefined;
        containerClassName?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type ToasterProps = typeof __propDef.props;
export type ToasterEvents = typeof __propDef.events;
export type ToasterSlots = typeof __propDef.slots;
export default class Toaster extends SvelteComponentTyped<ToasterProps, ToasterEvents, ToasterSlots> {
}
export {};
