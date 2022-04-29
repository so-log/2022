export const init = (callback:()=>void): void=> {
    console.log('default initializtion finished.')
    callback()
    console.log('all initialization finished.')
}