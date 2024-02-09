export async function fetchMainMenuList(menuListUrl?:string){
    if(!menuListUrl){return {}}
    const res = await fetch(menuListUrl)
    return res.json()

}