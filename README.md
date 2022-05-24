# jungle-language
function jungleLanguge(str){
    var letter1 = [/'a', 'b', 'c', 'd', 'e', 'f', 'g','h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't','u', 'v', 'w','x','y','z'/i]
    var letter2 = [/'1', 'ba', 'ca', 'da', '2', 'fa', 'ga', 'ha', '3', 'ja', 'la', 'ma', 'na','4', 'pa', 'qa', 'ra', 'sa', 'ta', '5', 'va', 'wa', 'xa','ya','za'/]
    var result= []
    for (let i = 0; i<str.length; i++){
        for(let j= 0; j<letter1.length; j++){
            if(str[i] === letter1[j]){
                result.push(letter2[j])
            }
        }
    }
    return result.join('')
}
jungleLanguge('victor')
console.log(jungleLanguge)
