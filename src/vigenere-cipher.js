class VigenereCipheringMachine {
    constructor(isDirect = true) {
        this.isDirect = isDirect;
        this.n = 26;
    }

    encrypt(message, key) {
        if(message === undefined || key === undefined) throw new Error();
        
        message = message.toUpperCase();
        key = key.toUpperCase();

        let res = [];
        let index = 0;

        message = message.split('')
        for(let i = 0; i < message.length; i++) {
            let char = message[i];

            if(!char.match(/[A-Z]/)) {
                res.push(char);
                continue;
            }

            let charCode = char.charCodeAt();
            let keyCode = key[index].charCodeAt();

            index = (index + 1) % key.length;

            let charEncrypted = String.fromCharCode((charCode + keyCode) % this.n + 65);
            res.push(charEncrypted);
        }

        if(!this.isDirect) {
            res.reverse();
        }

        return res.join('');
    }

    decrypt(encryptedMessage, key) {
        if(encryptedMessage === undefined || key === undefined) throw new Error();
        
        encryptedMessage = encryptedMessage.toUpperCase();
        key = key.toUpperCase();

        let res = [];
        let index = 0;

        encryptedMessage = encryptedMessage.split('')
        for(let i = 0; i < encryptedMessage.length; i++) {
            let char = encryptedMessage[i];

            if(!char.match(/[A-Z]/)) {
                res.push(char);
                continue;
            }

            let charCode = char.charCodeAt();
            let keyCode = key[index].charCodeAt();

            index = (index + 1) % key.length;

            let charEncrypted = String.fromCharCode((charCode + this.n - keyCode) % this.n + 65);
            res.push(charEncrypted);
        }

        if(!this.isDirect) {
            res.reverse();
        }

        return res.join('');
    }
}

module.exports = VigenereCipheringMachine;
