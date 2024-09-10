module.exports = {
  //!Validate email
  validateEmail: (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  },
  //! validate indian mobile number starting with 6,7,8,9
  validateINMobile: (mobile) => {
    if (/^[6-9]\d{9}$/.test(mobile)) {
      return true;
    }
    return false;
  },
  //!validate indian aadhar number
  validateAadhar: (aadhar) => {
    if (/^[2-9][0-9]{3}[0-9]{4}[0-9]{4}$/.test(aadhar)) {
      return true;
    }
    return false;
  },
  //! validate indian pan number
  validatePan: (pan) => {
    if (/[a-zA-Z]{5}[0-9]{4}[a-zA-Z]{1}/.test(pan)) {
      return true;
    }
    return false;
  },
  //! validate indian voter ID
  validateVoterID: (VoterID) => {
    if (/^[a-zA-Z]{3}[0-9]{7}$/.test(VoterID)) {
      return true;
    }
    return false;
  },
  //! validate indian driving license
  validateDrivingLicense: (DrivingLicense) => {
    if (
      /^(([a-zA-Z]{2}[0-9]{2})( )|([a-zA-Z]{2}-[0-9]{2}))((19|20)[0-9][0-9])[0-9]{7}$/.test(
        DrivingLicense
      )
    ) {
      return true;
    }
    return false;
  },
  //! validate alphabet with space
  validateAlphabetWithSpace: (alpha) => {
    //takes name with space
    if (/^[A-Za-z\s_-]+$/.test(alpha)) {
      return true;
    }
    return false;
  },
  //! validate alphabet only
  validateAlphabetOnly: (alpha) => {
    //takes name without space
    if (/^[1-9][0-9]{5}$/.test(alpha)) {
      return true;
    }
    return false;
  },
  //! validate indian pic code
  validatePinCode: (pin) => {
    if (/^[A-Za-z]+$/.test(pin)) {
      return true;
    }
    return false;
  },
  //! validate indian GST numbers
  validateGST: (gst) => {
    if (
      /[0-9]{2}[A-Za-z]{3}[ABCFGHLJPTF]{1}[A-Za-z]{1}[0-9]{4}[A-Za-z]{1}[1-9A-Za-z]{1}[Zz][0-9A-Za-z]{1}$/.test(
        gst
      )
    ) {
      return true;
    }
    return false;
  },
  //! validate indian CIN numbers
  validateCIN: (cin) => {
    if (
      /^([L|U]{1})([0-9]{5})([A-Za-z]{2})([0-9]{4})([A-Za-z]{3})([0-9]{6})$/.test(
        cin
      )
    ) {
      return true;
    }
    return false;
  },
  //! validate URL
  validateUrl: (url) => {
    if (/^[a-zA-Z0-9/-]+$/.test(url)) {
      return true;
    }
    return false;
  },
  //! validate alphabets having " " - / () 9
  validateNameWithHyphensSlashDotBracketSpaceNumber: (name) => {
    if (/^[a-zA-Z\s\d-/.()]+$/.test(name)) {
      return true;
    }
    return false;
  },
  //! change given string to camel case
  toCamelCase: (str) => {
    const words = str.split(" ");
    return words
      .map((word, index) => {
        if (index === 0) {
          return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        }
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      })
      .join(" ");
  },
  //! validate proper excel file
  validateExcel: (file, callback) => {
    const reader = new FileReader();
    reader.onloadend = function (event) {
      const arr = new Uint8Array(event.target.result).subarray(0, 4);
      let header = "";
      for (let i = 0; i < arr.length; i++) {
        header += arr[i].toString(16).padStart(2, "0");
      }
      header = header.toUpperCase();
      const isXls = header === "D0CF11E0";
      callback(isXls);
    };
    reader.onerror = function () {
      callback(false);
    };
    reader.readAsArrayBuffer(file.slice(0, 4));
  },
  //! validate proper pdf file
  validatePdf: (file, callback) => {
    const reader = new FileReader();
    reader.onloadend = function (event) {
      const arr = new Uint8Array(event.target.result).subarray(0, 4);
      let header = "";
      for (let i = 0; i < arr.length; i++) {
        header += arr[i].toString(16);
      }
      const isPdf = header === "25504446";
      const isValidImage = isPdf;
      callback(isValidImage);
    };
    reader.onerror = function () {
      callback(false);
    };
    reader.readAsArrayBuffer(file.slice(0, 4));
  },
  // !validate proper image
  validateImg: (file, callback) => {
    const reader = new FileReader();
    reader.onloadend = function (event) {
      const arr = new Uint8Array(event.target.result).subarray(0, 4);
      let header = "";
      for (let i = 0; i < arr.length; i++) {
        header += arr[i].toString(16);
      }

      const isPng = header === "89504e47";
      const isJpeg =
        header === "ffd8ffe0" ||
        header === "ffd8ffe1" ||
        header === "ffd8ffe2" ||
        header === "ffd8ffe3" ||
        header === "ffd8ffe8";

      const isValidImage = isPng || isJpeg;
      callback(isValidImage);
    };
    reader.onerror = function () {
      callback(false);
    };
    reader.readAsArrayBuffer(file.slice(0, 4));
  },
  //! validate image and pdf file
  validateImgPdf: (file, callback) => {
    const reader = new FileReader();
    reader.onloadend = function (event) {
      const arr = new Uint8Array(event.target.result).subarray(0, 4);
      let header = "";
      for (let i = 0; i < arr.length; i++) {
        header += arr[i].toString(16);
      }
      const isPng = header === "89504e47";
      const isJpeg =
        header === "ffd8ffe0" ||
        header === "ffd8ffe1" ||
        header === "ffd8ffe2" ||
        header === "ffd8ffe3" ||
        header === "ffd8ffe8";
      const isPdf = header === "25504446";

      const isValidImage = isPng || isJpeg || isPdf;
      callback(isValidImage);
    };
    reader.onerror = function () {
      callback(false);
    };
    reader.readAsArrayBuffer(file.slice(0, 4));
  },
};
