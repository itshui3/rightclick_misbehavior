import React from 'react'

function ContextMenu({ contextItems }) {
    const { headerItems, bodyItems, footerItems } = contextItems

return (
<>

<div className='context_cont'>
    <div className='context_header'>
        <h1>{headerItems.name}</h1>
        <h2>{headerItems.handle}</h2>
    </div>

    <div className='context_body'>
    {
    bodyItems.map(item => <h3 className='context_item'>{item.name}</h3>)
    }
    </div>

    <div className='context_footer'>
        <h3 className='context_item'>{footerItems.name}</h3>
    </div>
</div>

</>
)
}

export default ContextMenu
