import React from 'react'

export default function QRViewer() {

    var QRCode = require('qrcode.react');

    return (
        <div>
             <QRCode value="http://facebook.github.io/react/" />
        </div>
    )
}
