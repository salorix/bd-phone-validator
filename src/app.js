
const validate = phoneNumber => {
    const reg = /^(\+880|880|0)1(1|[3-9])[0-9]{8}$/;
    return reg.test(phoneNumber);
}

module.exports = {
    validate
}