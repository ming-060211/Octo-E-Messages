import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        primary?: string | undefined;
        secondary?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type ErrorIconProps = typeof __propDef.props;
export type ErrorIconEvents = typeof __propDef.events;
export type ErrorIconSlots = typeof __propDef.slots;
export default class ErrorIcon extends SvelteComponentTyped<ErrorIconProps, ErrorIconEvents, ErrorIconSlots> {
}
export {};
