export async function fetchLocaleMessages(locale?:string){
    if(!locale){return {}}
    const res = await fetch(`/locale/${locale}.json`)
    return res.json()

}