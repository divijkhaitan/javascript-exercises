const palindromes = function (palin) {
    palin=palin.toUpperCase()
    let first=0
    let last= palin.length-1
    let palindrome=false
    let char1=""
    let char2=""
    let char1bool=false
    let char2bool=false
    while(last>first)
    {
        char1=palin.charAt(first)
        char2=palin.charAt(last)
        if(65<=char1.charCodeAt()&&char1.charCodeAt()<=90)
        {
            char1bool=true
        }
        else
        {
            first++
            continue
        }
        if(65<=char2.charCodeAt()&&char2.charCodeAt()<=90)
        {
            char2bool=true
        }
        else
        {
            last--
            continue
        }
        
        if(char1bool&&char2bool)
        {
            if(char1===char2)
            {
                palindrome=true
                first++
                last--
            }
            else
            {
                palindrome=false
                break
            }
        }
    }
    return palindrome
};

// Do not edit below this line
module.exports = palindromes;
