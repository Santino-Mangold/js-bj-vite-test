import _ from 'underscore'

/**
 * 
 * @param {Array<String>} tiposDeCarta  Ejemplo ['C','D','H','S']
 * @param {Array<String>} tiposEspeciales Ejemplo ['A','J','Q','K']
 * @returns {Array<String>} un nuevo deck de cartas
 */

export const crearDeck = (tiposDeCarta, tiposEspeciales) => {

    if(!tiposDeCarta) throw new Error('TiposDeCarta Es obligatorio');
    if(tiposDeCarta.Length <= 0 ) throw new Error('TiposDeCarta no debe estar vacio');
    if(!tiposEspeciales) throw new Error('tiposEspeciales Es obligatorio');
    if(tiposEspeciales.length <= 0 ) throw new Error('tiposEspeciales no debe estar vacio');

    let deck = [];

    for (let i = 2; i <= 10; i++) { 
        for (let tipo of tiposDeCarta) {
            deck.push(i + tipo);
        }
    }

    for (let tipo of tiposDeCarta) {   // ← acá antes estaba "tipos"
        for (let esp of tiposEspeciales) {
            deck.push(esp + tipo);
        }
    }

    deck = _.shuffle(deck);

    return deck;
}