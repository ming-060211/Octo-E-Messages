import { SvelteComponentTyped } from "svelte";
import ToastIcon from './ToastIcon.svelte';
import type { Toast, ToastPosition } from '../core/types';
import type { SvelteComponent } from 'svelte';
import ToastMessage from './ToastMessage.svelte';
declare const __propDef: {
    props: {
        toast: Toast;
        position?: ToastPosition | undefined;
        style?: string | undefined;
        Component?: typeof SvelteComponent<any> | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {
            ToastIcon: typeof ToastIcon;
            ToastMessage: typeof ToastMessage;
            toast: Toast;
        };
    };
};
export type ToastBarProps = typeof __propDef.props;
export type ToastBarEvents = typeof __propDef.events;
export type ToastBarSlots = typeof __propDef.slots;
export default class ToastBar extends SvelteComponentTyped<ToastBarProps, ToastBarEvents, ToastBarSlots> {
}
export {};
