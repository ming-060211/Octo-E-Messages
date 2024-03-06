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
export type CheckmarkIconProps = typeof __propDef.props;
export type CheckmarkIconEvents = typeof __propDef.events;
export type CheckmarkIconSlots = typeof __propDef.slots;
export default class CheckmarkIcon extends SvelteComponentTyped<CheckmarkIconProps, CheckmarkIconEvents, CheckmarkIconSlots> {
}
export {};
