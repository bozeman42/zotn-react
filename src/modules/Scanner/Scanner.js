import DedicatedScanner from './ScannerTypes/PhysicalScanner';
import WebcamScanner from './ScannerTypes/WebcamScanner';
import scannerConfig, { DEDICATED_SCANNER, WEBCAM_SCANNER } from './scanner-config';
import EventEmitter from 'events';
class Scanner extends EventEmitter {
  constructor() {
    super();
    this.scanner = null;
  }

  start(callback, element = null) {
    this.emit('scanner-started');
    const vm = this;
    const validatedCallback = vm.validateAndParseJSON(callback);
    if (scannerConfig.type === DEDICATED_SCANNER) {
      this.scanner = new DedicatedScanner(validatedCallback);
    } else if (scannerConfig.type === WEBCAM_SCANNER) {
      this.scanner = new WebcamScanner(validatedCallback, element);
    } else {
      console.error("Unknown scanner type. Please check scanner.config.js");
    }
    this.scanner.start();
  }

  reset(timeout) {
    const vm = this;
    if (vm.scanner) {
      vm.scanner.stop();
      setTimeout(() => {
        vm.scanner.start()
      },500);
    }
  }

  stop() {
    this.emit('scanner-stopped');
    const vm = this;
    if (vm.scanner) {
      return vm.scanner.stop()
        .then(() => {
          vm.scanner = null;
        })
        .catch((error) => {
          alert('Failed to stop', error);
        });
    } else {
      return Promise.resolve(true);
    }
  }

  // accept a callback function and return a function that verifies that the input is JSON
  // and parses it into an object before calling the callback with that data.
  validateAndParseJSON(callback) {
    const vm = this;
    return function (content) {
      if (vm.isJSON(content)) {
        callback(JSON.parse(content));
      }
    }
  }

  isJSON(str) {
    try {
      JSON.parse(str);
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  }
}

export default Scanner;