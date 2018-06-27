console.log("hello world");
if('serviceWorker' in navigator)
{
    navigator.serviceWorker.register('./sw.js').then(function(res){
        console.log("service worker registered ! ");
    }).catch(function(err){
        console.log("Registration failed ! ");
    });
}

