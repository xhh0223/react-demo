import { Dispatch, SetStateAction, useRef } from "react";

export abstract class Instance<InstanceProps> {
    #instanceProps!: InstanceProps;
    init(instanceProps: InstanceProps) {
        this.#instanceProps = instanceProps;
    }
}

export const useInstance = <InstanceProps>(instance: Instance<InstanceProps>) => {
    const instanceRef = useRef<Instance<InstanceProps>>();
    if (!instanceRef.current) {
        instanceRef.current = instance;
        return instanceRef.current;
    }
    return instanceRef.current;
};
