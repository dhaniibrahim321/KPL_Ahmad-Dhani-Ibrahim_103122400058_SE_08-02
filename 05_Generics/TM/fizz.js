    /**
    *@param {number} value
    *@returns {string|number}
    */ 
    // Tambah JSDoc di sini
    function zzzzOrNum(value) {
        
        if(typeof value !== 'number'){
            throw new Error("Input harus berupa angka");
        }
        
        let res = "";
        
        if (value % 3 === 0) res += "Fizz";
        if (value % 5 === 0) res += "Buzz";

        return res !== "" ? res : value;

    }
    /** 
     * @param {number[]} sequence 
     * @returns {(string|number)[]}
     */
    // Tambah JSDOC di sini
    function fizzBuzz(sequence) {
        if(!Array.isArray(sequence)) {
            throw new Error("Input harus berupa array");
        }

        const newSequence = sequence.map((e) => zzzzOrNum(e));

        return newSequence;
    }

    module.exports = {
        fizzBuzz: fizzBuzz,
        zzzzOrNum: zzzzOrNum,
    };