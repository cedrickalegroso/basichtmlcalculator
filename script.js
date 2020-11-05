/*SCRIPT! 

console.log(sum)
    console.log(difference)
    console.log(product)
    console.log(quotient)
*/

function newcalc() {
    location.replace('index.html')
}

function reset() {
    document.getElementById('form').reset()
}


function caculate() {

    let no1 = parseInt(document.getElementById('no1').value)
    let no2 = parseInt(document.getElementById('no2').value)

    /* basic form validation? */
    if (isNaN(no1) || isNaN(no2)) {
        alert('beep beeep no input booop boop?')
    } else {

        document.getElementById('form').style.display = 'none';



        /* sum */
        let sum = no1 + no2
        sum < 10 ? alert('sum is less than 10') : 0 /* do nothing */

        /* difference */
        let difference = no1 - no2
        difference < 10 ? alert('difference is less than 10') : 0 /* do nothing */

        /* product  */
        let product = no1 * no2
        product < 10 ? alert('product is less than 10') : 0 /* do nothing */

        /* quotient */
        let quotient = no1 / no2
        quotient < 10 ? alert('quotient is less than 10') : 0 /* do nothing */


        /* Debugging */
        console.log(sum)
        console.log(difference)
        console.log(product)
        console.log(quotient)


        document.getElementById('answers').style.display = 'block';

        document.getElementById('sum').value = sum

        document.getElementById('difference').value = difference

        document.getElementById('product').value = product

        document.getElementById('quotient').value = quotient
    }


}