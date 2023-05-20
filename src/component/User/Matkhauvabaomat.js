
import { Button, Space } from 'antd';
import Modelmk from '../Model/Modelmk';
import { useState } from 'react';

const Matkhauvabaomat = () => {

    const [show, setshow] = useState(false)
    return (
        <>
            <Space wrap>
                <Button onClick={() => setshow(true)} type="primary">Primary Button</Button>
            </Space>


            <Modelmk show={show} setShow={setshow} />
        </>
    )
}
export default Matkhauvabaomat