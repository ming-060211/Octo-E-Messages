import { SvelteComponentTyped } from "svelte";
import type { DOMToast } from '../core/types';
declare const __propDef: {
    props: {
        toast: DOMToast;
        setHeight: (height: number) => void;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {
            toast: DOMToast;
        };
    };
};
export type ToastWrapperProps = typeof __propDef.props;
export type ToastWrapperEvents = typeof __propDef.events;
export type ToastWrapperSlots = typeof __propDef.slots;
export default class ToastWrapper extends SvelteComponentTyped<ToastWrapperProps, ToastWrapperEvents, ToastWrapperSlots> {
}
export {};
