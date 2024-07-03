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
};
