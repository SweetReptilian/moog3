export default async function(uri){
    const res = await fetch(uri)
    return await res.json()
}