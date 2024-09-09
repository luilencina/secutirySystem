const fs = require('fs');
const alpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ.,;!?'.split('');
const message = readText();

    function readText() {
        try {
            const data = fs.readFileSync('cipher6.txt', 'utf8');
            // Remove caracteres não alfabéticos, coloca em letras maiúsculas e retira os espaços
            return data.toUpperCase().replace(/[^A-Z]/g, '').replace(/\s+/g, ''); 

        } catch (err) {
            console.error('Arquivo não encontrado!');
            return '';
        }
    }


    function calcIndice(read) {

        // Contar a frequência de cada letra
        const frequency = {};
        let cont = 0;

        for (let i = 0; i < read.length; i++) {
            const letter = read[i];
            frequency[letter] = (frequency[letter] || 0) + 1;
            cont++;
        }

        // Calcular o Índice de Coincidência
        let som = 0;
        for (const letter in frequency) {
            const fi = frequency[letter];
            som += fi * (fi - 1);
        }

        const ind = som / (cont * (cont - 1));
        return console.log(ind);
    }

    // Encontra repetições de padrões no read
    // function kasiskiRepeat(tam) {
    //     const repeats = {};    
       
    //     for (let i = 0; i <= message.length - tam; i++) {
    //         const p = message.substring(i, i + tam);
    //         if (repeats[p]) {
    //             repeats[p].push(i);
    //         } else {
    //             repeats[p] = [i];
    //         }
    //     }
    //     return repeats;
    // }

    // function kasiskiDist(repeats){
    //     const dist = [];
    //     for (const ind of Object.entries(repeats)) {
    //         if (ind.length > 1) {
    //             for (let i = 0; i < ind.length; i++) {
    //                 for (let j = i + 1; j < ind.length; j++) {
    //                     const arr = ind[1];
    //                     console.log(arr);
    //                     for (let a = 0; a < arr.length; a++) {
    //                         console.log(arr[a + 1] - arr[0]);
    //                     }
                      
    //                     // console.log('----------------------------------------------------');
    //                     // console.log('JOTA', ind[j]);
    //                     // console.log('----------------------------------------------------');
    //                     // console.log('IIIIIIIII', ind[i]);
    //                     // console.log('----------------------------------------------------');
    //                     // console.log('PROXIMO E PRIMEIRO', ind[j][j], ' ', ind[j][0]);
    //                     // console.log('----------------------------------------------------');
    //                     // console.log('CONTADORES', i, ' ', j);
    //                     // console.log('----------------------------------------------------');
    //                     // if (d > 0) {
    //                     //     dist.push({'sigla': ind[i], 'dist': d});
    //                     // }
    //                 }
    //             }
    //         }
    //     }
    //     return dist;
    // }

    // // Encontrar possíveis comprimentos de key
    // function kasiskiComp(keyMin, keyMax){
    //     const comp = [];

    //     for (let i = keyMin; i <= keyMax; i++) {
    //         const rep = kasiskiRepeat(i);
    //         const dis = kasiskiDist(rep);
    //         if (dis.length > 0) {
    //             comp.push({ i, dis });
    //         }
    //     }
    //     return comp;
    // }

    function findKey(array) {
       
    }

    function desciprit(message, key) {
        const charList = message.split('');
        const charListD = [];
        const stringCaracteres = alpha.join('');

        for (const c of charList) {
            const charM = c.toUpperCase();
            const letterP = stringCaracteres.indexOf(charM);
            const i = (letterP + key) % alpha.length;
            let charD = stringCaracteres[i];

            if (c === '#') {
                charD = ' ';
            }

            charListD.push(charD);
        }

        return charListD.join('');
    }


    // const comp = kasiskiComp(3, 6);
    const find = calcIndice(readText());