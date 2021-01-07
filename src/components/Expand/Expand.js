import React, { useState } from 'react'

import { 
    header as headerItems, 
    items as bodyItems, 
    footer as footerItems 
} from './_items.js'

import './_expand.sass'
function Expand() {
    const [expand, setExpand] = useState(false)

    const [contextItems, setContextItems] = useState(() => ({
        header: headerItems,
        items: bodyItems,
        footer: footerItems
    }))

    const handleExpand = () => { setExpand(expand => !expand) }
return (
<>
    <div className='btn_cont'>
        <div 
        className='btn_expand'
        onClick={handleExpand}
        ></div>
        {
            expand
            ?
            <ContextMenu contextItems={contextItems} />
            :
            null
        }
    </div>
</>
)
}

export default Expand
