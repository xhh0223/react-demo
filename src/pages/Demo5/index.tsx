import { Toast, ToastShowProps } from "antd-mobile";
import { ToastHandler } from "antd-mobile/es/components/toast";
import React from "react";

abstract class Layer {
    abstract layer<LastLayerValue, NextLayerValue>(
        handler: (lastLayerValue: LastLayerValue) => NextLayerValue
    ): Layer;
}

class MyLayer extends Layer {
    layer<LastLayerValue, NextLayerValue>(
        handler: (lastLayerValue: LastLayerValue) => NextLayerValue
    ): MyLayer {
        this.#temp.push(handler);
        return this;
    }
    #temp = [] as any[];
    exec() {
        let temp: any;
        this.#temp.forEach((handler) => {
            temp = handler(temp);
        });
    }
}

const v = new MyLayer()
    .layer(() => {
        return Toast.show({
            content: "加载中",
        });
    })
    .layer((lastLayerValue: ToastHandler) => {
        setTimeout(() => {
            lastLayerValue.close();
        }, 2000);
    })
    .layer((v) => {
        console.log(v);
    });

const Demo5 = () => {
    v.exec();
    return <div>组件显示的值</div>;
};

export default Demo5;
