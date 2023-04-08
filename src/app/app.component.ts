import { Component, OnInit } from '@angular/core';
import { Html5Qrcode, Html5QrcodeScanner } from 'html5-qrcode';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'qrscanner';
  qrText!: string;
  errorMessage: string = '';

  ngOnInit(): void {
    this.initQREasyMode();
    this.initQRProMode();
  }

  initQREasyMode(): void {

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
      { fps: 10, qrbox: { width: 250, height: 250 } },
      /* verbose= */ false);
    html5QrcodeScanner.render(onScanSuccess, onScanFailure);

  }

  initQRProMode(): void {
    // This method will trigger user permissions
    Html5Qrcode.getCameras().then(devices => {
      /**
       * devices would be an array of objects of type:
       * { id: "id", label: "label" }
       */
      if (devices && devices.length) {
        var cameraId = devices[0].id;
        // .. use this to start scanning.
      }
    }).catch(err => {
      // console.log(err);

      this.errorMessage = err;
      // handle err
    });
  }

}
