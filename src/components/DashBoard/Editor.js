import React from 'react'
import { CKEditor } from 'ckeditor4-react';

function Editor() {
    console.log(CKEditor)
    return (
        <>
            <CKEditor
                initData={<p>Hello from CKEditor 4!</p>}
                onInstanceReady={ () => {
                    
                } }
            />

        </>
    )
}

export default Editor
