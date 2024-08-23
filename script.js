let input = document.querySelector('input'),
    checkBtn = document.querySelector("checkBtn"),
    addkBtn = document.querySelector("addkBtn"),
    deletekBtn = document.querySelector("deletekBtn"),
    showBtn = document.querySelector("showBtn"),
    results = document.querySelector(".results > span"),
    allBtns = document.querySelectorAll('.buttons button');
window.onload = input.focus()
allBtns.forEach(button => {
    button.addEventListener('click', function () {
        if (button.innerHTML == 'Check Item') {
            if (input.value == '')
                checkInput()
            else {
                if (localStorage.getItem(input.value))
                    results.innerHTML = `the item <span>${input.value}</span> Founded`
                else
                    results.innerHTML = `the item <span>${input.value}</span> Is Not Founded`
            }
        }
        else if (button.innerHTML == 'Add Item') {
            if (input.value == '')
                checkInput()
            else {
                localStorage.setItem(input.value, 'test');
                results.innerHTML = `the item <span>${input.value}</span> Added`
                input.value = '';

            }
        }
        else if (button.innerHTML == 'Delete Item') {
            if (input.value == '')
                checkInput();
            else {
                if (localStorage.getItem(input.value)) {
                    localStorage.removeItem(input.value);
                    results.innerHTML = `the item <span>${input.value}</span> Deleted`
                }
                else
                {
                     results.innerHTML = `No Local Storage Item with the Name <span>${input.value}</span>`
                }

            }
        }
        else {
               if(localStorage.length)
               {
                
                results.innerHTML = `<span>${localStorage.length}</span> Elements Founded <br><br>`
                       for(let [key,value] of Object.entries(localStorage))
                          results.innerHTML+=` <span>${key}</span> <br>`
               }
               else{
                results.innerHTML = `The Local Storge Has No Elements`
               }
        }
        input.value=''
        input.focus()
    })

})


// check if input value is empty
function checkInput() {

    results.innerHTML = 'Empty value is not allowed !'
}

