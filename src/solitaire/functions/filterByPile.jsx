export function filterByPile(currentState, pileName){
    return Object.groupBy(currentState, card => card.location.pile === pileName)
}