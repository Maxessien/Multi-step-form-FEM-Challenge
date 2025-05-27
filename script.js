const stepsIndicator=document.querySelectorAll('.steps-indicator')
const steps=document.querySelectorAll('.steps-num')
const nextBtns=document.querySelectorAll('.next-btn')
const prevBtns=document.querySelectorAll('.prev-btn')
const form=document.querySelector('.form')
const labelSpan=document.querySelectorAll('.labelspan')
const inputs=document.querySelectorAll('.inputs')
const planInputs=document.querySelectorAll('.plan-inputs')
const planLabels=document.querySelectorAll('.lab')
const planToggle=document.querySelector('.toggle-display')
const planForm=document.querySelector('.billing-form')
const toggler=document.querySelector('.toggle')
const planExtras=document.querySelectorAll('.plan-extra')
const planPrices=document.querySelectorAll('.plan-price')
const addonInputs=document.querySelectorAll('.ols')
const addonLabels=document.querySelectorAll('.addon-labels')
const addonPrices=document.querySelectorAll('.addon-price')
const summaryHead=document.querySelector('.summary-list-itemhead')
const summaryp=document.querySelector('.second-topspan')
const addonLists1=document.querySelectorAll('.mid-span1')
const addonLists2=document.querySelectorAll('.mid-span2')
const totalmess=document.querySelector('.total-span1')
const outerNav=document.querySelector('.outside-nav')
let plPrice
let addprices=[0,0,0]
let total=9
let planId='Arcade'
let planValue
let pageNumber=1
summaryp.textContent='$9/mo'

const debouncedResize=debounce(handleResize, 150)
window.addEventListener('resize', debouncedResize)

nextBtns.forEach(nextBtn=>{
    nextBtn.addEventListener('click', nextPage)
})

prevBtns.forEach(prevBtn=>{
    prevBtn.addEventListener('click', prevPage)
})

inputs.forEach((input, index)=>{
    input.addEventListener('blur', ()=>{
        formValidation(input, index)
    })
})

//Update plan input value when new plans are selected
planInputs.forEach((planInput, index)=>{
    planInput.addEventListener('change', ()=>{
        planLabels.forEach(planLabel=>{
            planLabel.classList.remove('selected-plan')
        })
        if (planInput.checked) {
            //Updates the plan summary price with the selected plan
            summaryp.textContent=planInputs[index].value
        }
        planId=planInput.id
        //Update the plan summary based on the toggle state
        if (toggler.classList.contains('shift-l')) {
            summaryHead.textContent=`${planId}(Monthly)`
        }else if (toggler.classList.contains('shift-r')) {
            summaryHead.textContent=`${planId}(Yearly)`
        }
        let checked=document.querySelector(`label[for=${planInput.id}]`)
        checked.classList.add('selected-plan')
    })
})

addonInputs.forEach((addonInput, index)=>{
    addonInput.addEventListener('change', ()=>{
        let addonChecked=document.querySelector(`label[for=${addonInput.id}]`).parentElement
        if (!addonChecked.parentElement.classList.contains('selected-plan')) {
            addonLists1[index].textContent=addonInput.name
            addonLists2[index].textContent=addonInput.value
        } else if (addonChecked.parentElement.classList.contains('selected-plan')) {
            addonLists1[index].textContent=''
            addonLists2[index].textContent=''
            
        }
        addonChecked.parentElement.classList.toggle('selected-plan')
    })
})

planToggle.addEventListener('click', ()=>{
    if (toggler.classList.contains('shift-l')) {
        toggler.classList.replace('shift-l', 'shift-r')
        summaryHeadUpdate()
        addonPrices.forEach((addonPrice, index)=>{
            let addonpText= addonPrice.textContent.trim().slice(0, 3)
            addonPrice.textContent=`${addonpText}0/yr`
            addonInputs.forEach(()=>{
                addonInputs[index].value=`${addonpText}0/yr`
            })
            if (addonInputs[index].parentElement.parentElement.classList.contains('selected-plan')) {
                addonLists2[index].textContent=addonInputs[index].value
            }
        })
        planExtras.forEach(planExtra=>{
            planExtra.classList.remove('no-display')
        })
        planPrices.forEach((planPrice, index)=>{
            planPrice.textContent=`$${index*30+90}/yr`
            planInputs.forEach((planInput, indexx)=>{
                planInput.value=`$${indexx*30+90}/yr`
                if (planInput.checked) {
                    summaryp.textContent=planInput.value
                }
            })
        })
    } else if (toggler.classList.contains('shift-r')) {
        toggler.classList.replace('shift-r', 'shift-l')
        summaryHeadUpdate()
        addonPrices.forEach((addonPrice, index)=>{
            let addonpText= addonPrice.textContent.trim().slice(0, 3)
            addonPrice.textContent=`${addonpText}/mo`
            addonInputs.forEach(addonInput=>{
                addonInput.value=`${addonpText}/mo`
            })
            if (addonInputs[index].parentElement.parentElement.classList.contains('selected-plan')) {
                addonLists2[index].textContent=addonInputs[index].value
            }
        })
        planExtras.forEach(planExtra=>{
            planExtra.classList.add('no-display')
        })
        planPrices.forEach((planPrice, index)=>{
            planPrice.textContent=`$${index*3+9}/mo`
            planInputs.forEach((planInput, indexx)=>{
                planInput.value=`$${indexx*3+9}/mo`
                if (planInput.checked) {
                    summaryp.textContent=planInput.value
                }
            })
        })
    }
})

function handleResize(){
    if (window.innerWidth<768) {
        outerNav.classList.remove('no-display')
        console.log(outerNav.classList)
        stepsIndicator.forEach(element=>{
            element.classList.add('no-display')
        })
        planLabels.forEach((planInput, index)=>{
            if (index<2) {
                planInput.classList.add('mb')
            }
        })
    }else if (window.innerWidth>768) {
        outerNav.classList.add('no-display')
        stepsIndicator.forEach(element=>{
            element.classList.remove('no-display')
        })
        planLabels.forEach((planInput, index)=>{
            if (index<2) {
                planInput.classList.remove('mb')
            }
        })
    }
}

function debounce(func, delay) {
  let timeoutId;

  return function(...args) {
    const context = this; // save outer `this`

    clearTimeout(timeoutId);
    timeoutId = setTimeout(function() {
      func.apply(context, args); // use saved `context`
    }, delay);
  };
}

function formValidation(input, index){
        if (input.value==='') {
            labelSpan[index].textContent='This field is required'
            input.classList.add('invalid')
            input.setAttribute("aria-invalid", "true")
        }else if (!input.checkValidity()) {
            labelSpan[index].textContent='Invalid Input'
            input.classList.add('invalid')
            input.setAttribute("aria-invalid", "true")
        }else{
            labelSpan[index].textContent=''
            input.classList.remove('invalid')
            input.removeAttribute("aria-invalid")
        }
}

function switchSteps(currstep){
    document.querySelectorAll('.content').forEach(element=>{
        element.classList.add('no-display')
    })
    document.querySelector(currstep).classList.remove('no-display')
}

function summaryHeadUpdate(){
    if (toggler.classList.contains('shift-r')) {
        summaryHead.textContent=`${planId}(Yearly)`
        document.querySelector('.total-span2').textContent=`$${total}/yr`
        totalmess.textContent='Total(per year)'
    }else if (toggler.classList.contains('shift-l')) {
        document.querySelector('.total-span2').textContent=`$${total}/mo`
        totalmess.textContent='Total(per month)'
        summaryHead.textContent=`${planId}(Monthly)`
    }
}

function calculateTotal(){
    plPrice=0
    addprices=[0,0,0]
    total=0
    planInputs.forEach((planInput, index)=>{
        let checked=document.querySelector(`label[for=${planInput.id}]`)
        if (checked.classList.contains('selected-plan')) {
            plPrice=planInputs[index].value
        }
        if (addonInputs[index].parentElement.parentElement.classList.contains('selected-plan')) {
            addprices[index]=addonInputs[index].value
        }else if (!addonInputs[index].parentElement.parentElement.classList.contains('selected-plan')){
            addprices[index]=0
        }
    })
    let trimmed=addprices.map(element=>{
        let str=element.toString()
        return str.replace(/[$\/]|mo|yr/g,"")
    })
    let pltrimmed=plPrice.replace(/[$\/]|mo|yr/g,"")
    let totalAddon=trimmed.reduce((acc,curr)=>{
        return Number(acc)+Number(curr)
    })
    total=Number(pltrimmed)+Number(totalAddon)
     
}

function activeStep(pageNumber){
    steps.forEach((step)=>{
        step.classList.remove('active')
        steps[pageNumber-1].classList.add('active')
    })
}

function nextPage() {
    if (pageNumber<5 && form.checkValidity()) {
            pageNumber++
            switchSteps(`.step${pageNumber}`)
    }
    if (pageNumber===4) {
        document.querySelector('.out').textContent='Confirm'
        calculateTotal()
        summaryHeadUpdate()
    }
    if (pageNumber===5) {
        outerNav.style.display='none'
    }
    if (!form.checkValidity()) {
        inputs.forEach((input, index)=>{
            formValidation(input, index)
        })
    }
    activeStep(pageNumber)
}

function prevPage() {
    if (pageNumber>1) {
        pageNumber--
        switchSteps(`.step${pageNumber}`)  
    }
    activeStep(pageNumber)
    if (pageNumber<4) {
        document.querySelector('.out').textContent='Next Step'
    }
}

function switchToStep2(){
    pageNumber=2
    switchSteps(`.step${pageNumber}`)
    activeStep(pageNumber)
}


handleResize()
summaryHeadUpdate()