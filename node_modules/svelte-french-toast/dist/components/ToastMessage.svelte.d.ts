import { SvelteComponentTyped } from "svelte";
import type { Toast } from '../core/types';
declare const __propDef: {
    props: {
        toast: Toast;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type ToastMessageProps = typeof __propDef.props;
export type ToastMessageEvents = typeof __propDef.events;
export type ToastMessageSlots = typeof __propDef.slots;
export default class ToastMessage extends SvelteComponentTyped<ToastMessageProps, ToastMessageEvents, ToastMessageSlots> {
}
export {};
