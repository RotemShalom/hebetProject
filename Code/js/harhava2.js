var myRoot;
var num;

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
    addListener();
}

function addListener()
{
    for(key in myRoot["window"+num])
    {
        if(key.substring(0,3)=="btn")
        {
            myRoot["window"+num][key].addEventListener("click", chosen);
            myRoot["window"+num][key].mouseEnabled=true;
        }
    }
}

function chosen(e)
{
    myRoot["window"+num]["harhava"+e.currentTarget.name.charAt(3)].gotoAndPlay(1);
    removeListener();
    myRoot["window"+num]["harhava"+e.currentTarget.name.charAt(3)]["exit"+e.currentTarget.name.charAt(3)].addEventListener("click", close);
    
    if(e.currentTarget.name != "btn3")
    {
         myRoot["window"+num]["harhava"+e.currentTarget.name.charAt(3)].inside.next.addEventListener("click", next);
        myRoot["window"+num]["harhava"+e.currentTarget.name.charAt(3)].inside.back.addEventListener("click", back);
    }
   
}

function removeListener()
{
    for(key in myRoot["window"+num])
    {
        if(key.substring(0,3)=="btn")
        {
            myRoot["window"+num][key].removeEventListener("click", chosen);
            myRoot["window"+num][key].mouseEnabled=false;
        }
    }
}

function close(e)
{
    e.currentTarget.parent.gotoAndPlay(e.currentTarget.parent.currentFrame+1);
    addListener();
}

function next(e)
{
    e.currentTarget.parent.gotoAndStop(e.currentTarget.parent.currentFrame+1);
}

function back(e)
{
    e.currentTarget.parent.gotoAndStop(e.currentTarget.parent.currentFrame-1);
}