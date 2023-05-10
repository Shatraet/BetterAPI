export async function load({ fetch }) {
    //const category = 'Naruto';
    const url = 'https://animechan.vercel.app/api/random/anime?title=boku no hero academia'; 
    const HeroReq = await fetch(url);
    const HeroRes = await HeroReq.json();
    const hFact = HeroRes;
    return{
        hFact
    }
}