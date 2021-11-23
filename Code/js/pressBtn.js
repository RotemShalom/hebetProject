var myRoot;


function myExportRoot(root)
{
    myRoot=root;
    for(keyName in myRoot)
    {
        if(myRoot[keyName] instanceof createjs.MovieClip)
        {
            myRoot[keyName].name=keyName;
        }
    }

    for(keyName in myRoot.window40)
    {
        if(myRoot.window40[keyName] instanceof createjs.MovieClip)
        {
            myRoot.window40[keyName].name=keyName;
        }
    }
    addListeners();
}

function addListeners()
{
    for(key in myRoot.window40)
    {
        if(key.substring(0,3)=="btn")
        {
            myRoot.window40[key].addEventListener("click", chosens);
            myRoot.window40[key].mouseEnabled=true;
        }
    }
}

function chosens(e)
{
    for(var i = 1; i <= 4; i++){
        myRoot.window40["harhava"+i].gotoAndStop(0);
    }
    myRoot.window40["harhava"+e.currentTarget.name.charAt(3)].gotoAndStop(1);
}
