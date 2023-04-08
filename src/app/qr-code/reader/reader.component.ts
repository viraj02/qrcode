import { Component, OnInit } from '@angular/core';
import { Html5Qrcode, Html5QrcodeScanner } from 'html5-qrcode';
import { Html5QrcodeError } from 'html5-qrcode/esm/core';

@Component({
  selector: 'app-qr-reader',
  templateUrl: './reader.component.html',
  styleUrls: ['./reader.component.scss']
})
export class ReaderComponent implements OnInit {

  qrText!: string;
  errorMessage!: Html5QrcodeError;


  ngOnInit(): void {
    this.renderHTMLReader();
    setTimeout(() => {
      this.getCameraPermission();
    }, 2000);
  }

  renderHTMLReader(): void {

    const onScanSuccess = (decodedText: any, decodedResult: any) => {
      // handle the scanned code as you like, for example:
      console.log(`Code matched = ${decodedText}`, decodedResult);
      this.qrText = decodedResult.result.text;
    }

    const onScanFailure = (error: any) => {
      // handle scan failure, usually better to ignore and keep scanning.
      // for example:
      // console.warn(`Code scan error = ${error}`);
      this.errorMessage = error;
    }

    let html5QrcodeScanner = new Html5QrcodeScanner(
      "reader",
      { fps: 10, qrbox: { width: 250, height: 250 }, showTorchButtonIfSupported: true },
      /* verbose= */ false);
    html5QrcodeScanner.render(onScanSuccess, onScanFailure);

  }

  getCameraPermission(): void {
    // This method will trigger user permissions
    Html5Qrcode.getCameras().then(devices => {
      /**
       * devices would be an array of objects of type:
       * { id: "id", label: "label" }
       */
      if (devices && devices.length) {
        var cameraId = devices[0].id;
        console.log(cameraId);
        // .. use this to start scanning.
      }
    }).catch(err => {
      console.log(err);

      // this.errorMessage = err;
      // handle err
    });
  }

}
