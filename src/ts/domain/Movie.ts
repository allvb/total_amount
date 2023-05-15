import Buyable from './Buyable';

export default class Movie implements Buyable {
    constructor(
        readonly id: number,
        readonly name: string,
        readonly year: number,
        readonly country: string,
        readonly duration: number,
        readonly price: number,
        readonly genre?: string,
        readonly slogan?: string,
    ) { }
}