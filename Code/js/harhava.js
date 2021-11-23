var myRoot;
function getTheRoot(root)
{
    myRoot=root;
    for(keyName in myRoot)
    {
        if(myRoot[keyName] instanceof createjs.MovieClip)
        {
            myRoot[keyName].name=keyName;
        }
    }
    
    for(keyName in myRoot.window)
    {
        if(myRoot.window[keyName] instanceof createjs.MovieClip)
        {
            myRoot.window[keyName].name=keyName;
        }
    }
    console.log(myRoot);
    addListener();
    
}

function addListener()
{
    for(key in myRoot.window)
    {
        if(key.substring(0,3)=="btn")
        {
            myRoot.window[key].addEventListener("click", chosen);
            myRoot.window[key].mouseEnabled=true;
        }
    }
}

function removeListener()
{
    for(key in myRoot.window)
    {
        if(key.substring(0,3)=="btn")
        {
            myRoot.window[key].removeEventListener("click", chosen);
            myRoot.window[key].mouseEnabled=false;
        }
    }
}


function chosen(e)
{
    myRoot.window["harhava"+e.currentTarget.name.charAt(3)].gotoAndPlay(1);
    removeListener();
    myRoot.window["harhava"+e.currentTarget.name.charAt(3)]["exit"+e.currentTarget.name.charAt(3)].addEventListener("click", close);
}

function close(e)
{
    addListener();
    e.currentTarget.parent.gotoAndPlay(e.currentTarget.parent.currentFrame+1);
}