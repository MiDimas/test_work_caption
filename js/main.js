import {MultiFormatReader, BarcodeFormat} from "@zxing/library"
fieldForQR = document.getElementById('qr__field')


fieldForQR.addEventListener('change', openQRCamera)