import React from "react";
import { Upload, Select, UploadFile } from "antd";
type Props = {};

const Demo2 = (props: Props) => {
    return (
        <div>
            <Upload />
            {/* showSearch对多选不生效 */}
            {/* mode为tag时按回车会把输入项填入*/}
            <Select
                style={{ width: '100%' }}
                mode='tags'
                labelInValue
                // showSearch={true}
                onSearch={(...v)=>{console.log(v)}}
                onSelect={(...v)=>{console.log(v)}}
                loading
                allowClear
                onChange={(...a)=>{console.log(a,"change")}}
                // filterOption={(...args) =>
                //   {
                //     console.log(args,"filter")
                //     return true
                //   }
                // }
                options={[
                    { label: "1", value: "1" },
                    { label: "2", value:"2" },
                    { label: "3", value:"3" },
                ]}
            />
        </div>
    );
};

export default Demo2;
