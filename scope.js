//Global scope (access to defined variables outside of code blocks)
        //*Local scope1 (access to defined variables within this code block, plus global parent)
            //Local scope3 (defined variables in this code block, plus parent scope1 and global ancestor)
        //*Local scope2 (access to defined variables in this block and global parent, but NOT the sibling. These are separated code blocks, different if statements with specific variables in each.)
    //Local scope4 (access only to defined variables in this code block and in global ancestor)

//*These are siblings, on the same level; not parent and child. They don't share variables.



let varOne = "varOne"

if (true) {
    console.log(varOne)
    let varTwo = 'varTwo'
    console.log(varTwo)

    if (true) {
        let varFour = 'varFour'
        console.log(varFour)
    }
}

if (true) {
    let varThree = 'varThree'
    console.log(varThree)
}

