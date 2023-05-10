export async function load({ fetch }) {
    //const category = 'Naruto';
    const url = 'https://animechan.vercel.app/api/random/anime?title=one piece'; 
    const PieceReq = await fetch(url);
    const PieceRes = await PieceReq.json();
    const pFact = PieceRes;
    return{
        pFact
    }
}