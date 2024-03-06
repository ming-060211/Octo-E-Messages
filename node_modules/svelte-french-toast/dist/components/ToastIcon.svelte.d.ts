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
export type ToastIconProps = typeof __propDef.props;
export type ToastIconEvents = typeof __propDef.events;
export type ToastIconSlots = typeof __propDef.slots;
export default class ToastIcon extends SvelteComponentTyped<ToastIconProps, ToastIconEvents, ToastIconSlots> {
}
export {};
