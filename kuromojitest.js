// @ts-check

const kuromoji = require('kuromoji');

const buildKuromoji =
    /**
     * 
     * @param {string} dicPath 
     * @returns {Promise<kuromoji.Tokenizer<kuromoji.IpadicFeatures>>}
     */
    dicPath =>
        new Promise((resolve, reject) =>
            kuromoji.builder({dicPath}).build((err, tokenizer) => err ? reject(err) : resolve(tokenizer))
        );

async function main() {
    const basic = await buildKuromoji('node_modules/kuromoji/dict')
    const builded = await buildKuromoji('dist');
    console.log("READY");
    process.stdin.on("data", (data) => {
        const str = data.toString("utf8").trimEnd();
        console.log("BASIC  :", basic.tokenize(str).map(token => token.pronunciation));
        console.log("BUILDED:", builded.tokenize(str).map(token => token.pronunciation));
    });
}

main();
