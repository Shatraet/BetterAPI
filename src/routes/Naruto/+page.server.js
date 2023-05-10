export async function load({ fetch }) {
    //const category = 'Naruto';
    const url = 'https://animechan.vercel.app/api/random/anime?title=naruto'; 
    const NarutoReq = await fetch(url);
    const NarutoRes = await NarutoReq.json();
    const nFact = NarutoRes;
    return{
        nFact
    }
}